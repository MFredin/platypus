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
On GitHub Actions, Astro derives the Pages origin and repository subpath from
`GITHUB_REPOSITORY`. For a custom domain, configure `SITE_URL` as a complete URL
including `https://`; `BASE_PATH` remains optional. Invalid or blank values fall
back to the automatically derived GitHub Pages settings instead of failing the
build.

The repository includes a dependency lockfile so `setup-node` can safely enable
its npm cache. The workflow is named **Deploy Daybreak (Node 24)** in the Actions
tab. If a run still reports `actions/setup-node@v4` or Node 22, it is a rerun of
an older commit: start a new run from the current `main` branch rather than using
**Re-run jobs**, because GitHub reruns use the workflow stored in the original
commit.
