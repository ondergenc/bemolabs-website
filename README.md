# bemolabs-website

The source for [bemolabs.com](https://bemolabs.com) — Bemo Labs' public site.

Static HTML + CSS, a tiny vanilla-JS language toggle, no build step. Hosted on GitHub Pages, custom domain.

## Structure

```
.
├── index.html              # Landing — studio intro + app cards
├── apps/
│   └── sudokupeak/
│       ├── index.html      # Product page
│       ├── privacy.html    # Privacy policy (EN + TR)
│       ├── support.html    # Support (EN + TR)
│       └── assets/         # App icon
├── assets/
│   ├── brand/              # Bemo Labs brand kit (subset of the master export)
│   ├── css/styles.css
│   └── js/lang.js          # EN ↔ TR toggle, localStorage-backed
├── CNAME                   # bemolabs.com
└── _config.yml             # GitHub Pages / Jekyll config
```

## Localization

Every page ships EN and TR copy side by side in the HTML. The language toggle (top right) flips `<html lang>` and CSS rules in `styles.css` show / hide the relevant `[data-lang="..."]` blocks. The choice is stored in `localStorage` under `bemolabs.lang` and respected on subsequent visits. URL query `?lang=tr` overrides — handy for direct links from emails / AdMob consent forms.

## Adding a new app

1. Create `apps/<slug>/index.html`, `privacy.html`, `support.html` (copy Sudoku Peak's as a template).
2. Drop the app icon under `apps/<slug>/assets/icon-512.png`.
3. Add an `.app-card` to `index.html` pointing at `/apps/<slug>/`.

## Deploy

Pushes to `main` are deployed automatically by GitHub Pages. Custom domain is set in repo Settings → Pages.

## Brand

Source assets live in `assets/brand/`. The full kit is documented at `/Users/ondergenc/Documents/Bemo/BemoLabs Assets/README.md` (Ink #0A0A0B / Paper #FAFAF7 / Accent #3D7BFF, Inter Tight + JetBrains Mono).
