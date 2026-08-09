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
The site is published at `https://mfredin.github.io/platypus`. The production
URL and `/platypus` base path are passed directly to `astro build` by the npm
build script. There is deliberately no `astro.config.mjs`: removing the config
file eliminates the configuration-validation path that repeatedly rejected the
`site` value in CI, while the explicit CLI arguments preserve the Pages URL and
subpath.

The repository includes a dependency lockfile so `setup-node` can safely enable
its npm cache. The workflow is named **Deploy Daybreak (Node 24)** in the Actions
tab. If a run still reports `actions/setup-node@v4` or Node 22, it is a rerun of
an older commit: start a new run from the current `main` branch rather than using
**Re-run jobs**, because GitHub reruns use the workflow stored in the original
commit.
