import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const DEFAULT_SITE = 'https://mfredin.github.io/platypus';
const DEFAULT_BASE = '/platypus';

export default defineConfig({
  site: process.env.SITE_URL || DEFAULT_SITE,
  base: process.env.BASE_PATH || DEFAULT_BASE,
  trailingSlash: 'always',
  integrations: [sitemap()],
});
