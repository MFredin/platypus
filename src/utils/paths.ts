const base = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Prefix an internal route with Astro's configured GitHub Pages base path. */
export function sitePath(path = '/') {
  if (path.startsWith('#')) return path;
  const normalized = path === '/' ? '' : `/${path.replace(/^\/+|\/+$/g, '')}`;
  return `${base}${normalized}/`;
}
