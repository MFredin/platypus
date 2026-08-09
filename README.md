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
The site is published at `https://mfredin.github.io/platypus`, with `/platypus`
configured as Astro's base path. Astro's optional `site` setting is deliberately
omitted because the project does not currently use an integration that requires
an absolute canonical origin. This also removes the URL validation path that can
otherwise reject stale or malformed CI configuration.

The repository includes a dependency lockfile so `setup-node` can safely enable
its npm cache. The workflow is named **Deploy Daybreak (Node 24)** in the Actions
tab. If a run still reports `actions/setup-node@v4` or Node 22, it is a rerun of
an older commit: start a new run from the current `main` branch rather than using
**Re-run jobs**, because GitHub reruns use the workflow stored in the original
commit.
