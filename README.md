# Daybreak

Public website for **Daybreak**, a guild in *Foundation: Galactic Frontier*.
Static site built with [Eleventy](https://www.11ty.dev/), styled per the
Daybreak brand kit, deployed to GitHub Pages via GitHub Actions.

Live sections: recruitment landing page, member roster, and a news feed —
all driven by data/content files so they can be updated without touching
layout code.

## Local development

Requires Node.js 18+.

```sh
npm install
npm run serve     # http://localhost:8080, live-reloads on save
npm run build      # outputs static site to _site/
```

## Editing content

### Roster

Edit `src/_data/roster.json`. Each member is:

```json
{ "name": "Aster Kade", "rank": "Founder", "tier": 6, "specialization": "Fleet Command" }
```

- `tier` is 0 (Recruit) through 6 (Founder) and controls how ornamented the
  member's rank badge is — higher tiers get more rings/spokes, matching the
  brand kit's rank insignia system. Tier order: Recruit (0) → Citizen (1) →
  Pioneer (2) → Commander (3) → Fleet Marshal (4) → High Council (5) →
  Founder (6).
- `specialization` is optional — leave it `""` to omit the line on the card.

The roster currently contains **placeholder members** — replace them with
the real list before launch, and remove the placeholder notice at the top
of `src/roster.njk` once real data is in.

### News

Add a new Markdown file to `src/news/posts/`, e.g. `fleet-week-recap.md`:

```md
---
layout: layouts/post.njk
title: Fleet Week Recap
date: 2026-08-15
permalink: "/news/{{ page.fileSlug }}/"
excerpt: "Short one-line summary shown in the news list."
---
Your announcement content goes here, in normal Markdown.
```

Posts sort newest-first automatically by `date`. No layout changes needed.
The seeded `welcome-to-daybreak.md` post is a placeholder — replace or
delete it once real announcements start.

### Site-wide settings

`src/_data/site.js` holds the title, tagline, Discord invite link, and nav
items used across every page.

## Visual system

Colors, type, and motifs (sunburst dividers, ring rank badges, the emblem)
live in `src/css/style.css` and `src/_11ty/motifs.js`, generated from the
Daybreak brand kit style guide. The emblem/dividers/badges are procedurally
generated inline SVG (no image assets to keep in sync) — see
`src/_11ty/motifs.js` if the brand kit's real logo files become available
and should replace the generated emblem.

## Deployment

`.github/workflows/deploy.yml` builds the site with Eleventy and deploys it
to GitHub Pages on every push to `main`, using GitHub's native Pages Actions
deploy (`actions/upload-pages-artifact` + `actions/deploy-pages`) — no
`gh-pages` branch or `/docs` folder to keep in sync.

**One-time setup required in the repo settings:** go to
**Settings → Pages** and set **Source** to **GitHub Actions**. After that,
every push to `main` deploys automatically.

The build sets `ELEVENTY_PATH_PREFIX` to the repository name so links work
correctly at `https://<owner>.github.io/<repo>/`. If this project ever
moves to a custom domain or an org root page (`<owner>.github.io`), drop
the `ELEVENTY_PATH_PREFIX` env line from the workflow (or set it to `/`).
