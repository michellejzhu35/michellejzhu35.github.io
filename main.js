// Mobile nav toggle
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.getElementById('nav-links');
  if (!toggle || !links) return;

  toggle.addEventListener('click', function () {
    var open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  // Close menu after tapping a link (mobile)
  links.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
})();

// Contact form — AJAX submit to Formspree so the visitor stays on the page.
// Only runs on the page that actually has the form.
(function () {
  var form = document.getElementById('contact-form');
  var status = document.getElementById('form-status');
  if (!form || !status) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Guard: remind to swap the placeholder endpoint before going live
    if (form.action.indexOf('FORMSPREE_ENDPOINT') !== -1) {
      status.className = 'form-status error';
      status.textContent = 'Form not connected yet — add your Formspree endpoint.';
      return;
    }

    var data = new FormData(form);
    status.className = 'form-status';
    status.textContent = 'Sending…';

    fetch(form.action, {
      method: 'POST',
      body: data,
      headers: { 'Accept': 'application/json' }
    }).then(function (response) {
      if (response.ok) {
        form.reset();
        status.textContent = 'Thank you — your message is on its way.';
      } else {
        response.json().then(function (d) {
          var msg = (d && d.errors) ? d.errors.map(function (x) { return x.message; }).join(', ') : 'Something went wrong.';
          status.className = 'form-status error';
          status.textContent = msg;
        }).catch(function () {
          status.className = 'form-status error';
          status.textContent = 'Something went wrong. Please try LinkedIn instead.';
        });
      }
    }).catch(function () {
      status.className = 'form-status error';
      status.textContent = 'Network error. Please try LinkedIn instead.';
    });
  });
})();
