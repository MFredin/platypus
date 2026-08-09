import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const DEFAULT_SITE = 'https://mfredin.github.io/platypus';
const DEFAULT_BASE = '/platypus';

// Using defineConfig's function form (({ command }) => ({...})) leaves
// Astro.site undefined during `astro dev`, breaking BaseLayout's canonical
// URL — so detect the command from argv instead and keep a plain object.
const isDevCommand = process.argv.includes('dev');

export default defineConfig({
  site: process.env.SITE_URL || DEFAULT_SITE,
  // `dev` stays at the domain root so `localhost:4321/` works without the
  // production subpath; `build`/`preview` must share the same base since
  // preview serves the already-built output, whose asset paths have it baked in.
  base: isDevCommand ? '/' : process.env.BASE_PATH || DEFAULT_BASE,
  trailingSlash: 'always',
  integrations: [sitemap()],
});
