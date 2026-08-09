import { defineConfig } from 'astro/config';

const [repositoryOwner = 'daybreak-guild', repositoryName = ''] =
  (process.env.GITHUB_REPOSITORY || '').split('/');

const defaultSite = `https://${repositoryOwner}.github.io`;
const isUserSite = repositoryName.toLowerCase() === `${repositoryOwner}.github.io`.toLowerCase();
const defaultBase = repositoryName && !isUserSite ? `/${repositoryName}` : '/';

function validSite(value) {
  if (!value?.trim()) return defaultSite;

  try {
    const url = new URL(value.trim());
    return ['http:', 'https:'].includes(url.protocol) ? url.origin : defaultSite;
  } catch {
    console.warn(`[config] Ignoring invalid SITE_URL value: ${value}`);
    return defaultSite;
  }
}

function validBase(value) {
  const base = value?.trim() || defaultBase;
  if (base === '/') return base;
  return `/${base.replace(/^\/+|\/+$/g, '')}`;
}

export default defineConfig({
  site: validSite(process.env.SITE_URL),
  base: validBase(process.env.BASE_PATH),
  trailingSlash: 'always',
});
