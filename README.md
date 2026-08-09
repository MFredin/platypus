# Daybreak

The official website for the Daybreak guild in *Foundation: Galactic Frontier*.

## Local development

```bash
npm install
npm run dev
```

The site is built with Astro and TypeScript. Production output is fully static and
can be hosted on GitHub Pages.

## Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run check` | Validate Astro and TypeScript |
| `npm run build` | Validate and create the production site in `dist/` |
| `npm run preview` | Preview a completed production build |

## GitHub Pages

The deployment workflow runs automatically after a push to `main` or `work`.
Configure the optional repository variables `SITE_URL` and `BASE_PATH` when the
site is hosted below a repository subpath.

The workflow deliberately uses `npm install` without the `setup-node` dependency
cache because the project does not yet have a committed lockfile. Once a
`package-lock.json` is generated and committed, the workflow can switch to
`npm ci` and re-enable `cache: npm` for reproducible, cached installs.
