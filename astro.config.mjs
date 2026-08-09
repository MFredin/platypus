import { defineConfig } from 'astro/config';

export default defineConfig({
  site: process.env.SITE_URL || 'https://daybreak-guild.github.io',
  base: process.env.BASE_PATH || '/',
  site: process.env.SITE_URL ?? 'https://daybreak-guild.github.io',
  base: process.env.BASE_PATH ?? '/',
  trailingSlash: 'always',
});
