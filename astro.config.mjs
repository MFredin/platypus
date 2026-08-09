import { defineConfig } from 'astro/config';

export default defineConfig({
  // `site` is intentionally omitted. It is optional unless an integration
  // needs an absolute canonical origin, and omitting it prevents CI or a stale
  // repository variable from ever reaching Astro's URL validator.
  base: '/platypus',
  trailingSlash: 'always',
});
