# Michelle Zhu — Personal Website

A personal website. Static HTML with a shared stylesheet and a little vanilla JavaScript — no framework, no build step. Just open `index.html`.

## Structure

Three pages that share one stylesheet and one script:

- `index.html` — About (hero + narrative)
- `experience.html` — Experience
- `work.html` — Work with me (includes contact form)
- `styles.css` — all styling, shared by every page
- `main.js` — mobile nav toggle + contact form handling, shared by every page
- Fonts: [Fraunces](https://fonts.google.com/specimen/Fraunces) (display) and [Archivo](https://fonts.google.com/specimen/Archivo) (body), loaded from Google Fonts

## Editing

Open any `.html` file in an editor. To preview, double-click it to open in a browser.
Site-wide look-and-feel lives in `styles.css`; the top navigation is repeated in each
page's `<header>`, so a nav change means editing all three files.

## Contact form

The contact form posts to [Formspree](https://formspree.io). Replace `FORMSPREE_ENDPOINT`
in `index.html` with your real endpoint (looks like `https://formspree.io/f/abcdwxyz`).

## Deployment

Published with [GitHub Pages](https://pages.github.com/) from this repository.
