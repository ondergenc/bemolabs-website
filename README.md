# bemolabs-website

The source for [bemolabs.com](https://bemolabs.com) — Bemo Labs' public site.

Static HTML + CSS, a tiny vanilla-JS language toggle, no build step. Hosted on GitHub Pages, custom domain.

## Structure

```
.
├── index.html              # Landing — studio intro + app cards
├── apps/
│   ├── sudokupeak/         # Product page, privacy, support (EN + TR) + assets
│   ├── focusintime/        # Product page, privacy, support (EN + TR) + assets
│   └── mellowblocks/       # Landing page, privacy, support (EN + TR) + assets
├── assets/
│   ├── brand/              # Bemo Labs brand kit (subset of the master export)
│   ├── css/styles.css
│   └── js/
│       ├── lang.js         # EN ↔ TR toggle, localStorage-backed
│       └── analytics.js    # GA4 bootstrap (IP-anonymized)
├── app-ads.txt             # AdMob publisher authorization
├── Brewfile                # Dev tooling (brew bundle)
├── CNAME                   # bemolabs.com
└── _config.yml             # GitHub Pages / Jekyll config
```

## Localization

Every page ships EN and TR copy side by side in the HTML. The language toggle (top right) flips `<html lang>` and CSS rules in `styles.css` show / hide the relevant `[data-lang="..."]` blocks. The choice is stored in `localStorage` under `bemolabs.lang` and respected on subsequent visits. URL query `?lang=tr` overrides — handy for direct links from emails / AdMob consent forms.

## Adding a new app

1. Create `apps/<slug>/index.html`, `privacy.html`, `support.html` (copy Sudoku Peak's as a template).
2. Drop the app icon under `apps/<slug>/assets/icon-512.png`.
3. Add an `.app-card` to `index.html` pointing at `/apps/<slug>/`.

## Development setup

The site has **no build step and no runtime dependencies** — it's plain HTML/CSS/JS. The tooling below is only for developing and shipping it the way this repo does.

On a fresh macOS machine:

```sh
# 1. Xcode Command Line Tools (gives you git)
xcode-select --install

# 2. Homebrew — https://brew.sh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# 3. Clone, then install the dev tools
git clone https://github.com/ondergenc/bemolabs-website.git
cd bemolabs-website
brew bundle            # reads ./Brewfile: gh, python, ffmpeg, qrencode

# 4. Authenticate the GitHub CLI (for the PR flow)
gh auth login
```

Tools and why they're here (see [`Brewfile`](Brewfile)):

| Tool       | Source            | Used for                                                        |
|------------|-------------------|-----------------------------------------------------------------|
| `git`      | Xcode CLT         | version control                                                 |
| `gh`       | Homebrew          | opening/merging PRs for the `feat → qa → main` flow             |
| `python3`  | Homebrew          | local preview server                                            |
| `ffmpeg`   | Homebrew          | extracting a poster frame from a trailer for video thumbnails   |
| `qrencode` | Homebrew          | generating App Store QR codes                                   |
| `sips`     | built into macOS  | downscaling / cropping screenshots and OG images (no install)   |

### Local preview

```sh
python3 -m http.server 8765
# then open http://127.0.0.1:8765/
```

## Deploy

Pushes to `main` are deployed automatically by GitHub Pages. Custom domain is set in repo Settings → Pages.

### Branching

Work flows `feat/* → qa → main`: branch a `feat/*` off `qa`, open a PR into `qa` (squash merge), then a PR from `qa` into `main` (merge). `main` is live; never push to it directly.

## Brand

Source assets live in `assets/brand/`. The full kit is documented at `/Users/ondergenc/Documents/Bemo/BemoLabs Assets/README.md` (Ink #0A0A0B / Paper #FAFAF7 / Accent #3D7BFF, Inter Tight + JetBrains Mono).
