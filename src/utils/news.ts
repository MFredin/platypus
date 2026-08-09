import { getCollection } from 'astro:content';
import { sitePath } from './paths';

export function formatNewsDate(date: Date) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  }).format(date);
}

export async function getNewsCards() {
  const entries = await getCollection('news');
  return entries
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
    .map((entry) => ({
      category: entry.data.category,
      date: formatNewsDate(entry.data.date),
      title: entry.data.title,
      copy: entry.data.summary,
      featured: entry.data.featured,
      href: sitePath(`news/${entry.id}`),
    }));
}
