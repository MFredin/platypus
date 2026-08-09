export interface NewsItem {
  category: string;
  date: string;
  title: string;
  copy: string;
  featured?: boolean;
}

export const newsItems: NewsItem[] = [
  {
    featured: true,
    category: 'Announcement',
    date: 'Aug 09, 2026',
    title: 'A new dawn begins',
    copy: 'The Daybreak network is online. Discover the vision behind our guild and the future we intend to build together.',
  },
  {
    category: 'Recruitment',
    date: 'Aug 07, 2026',
    title: 'Pioneers wanted',
    copy: 'Our signal is open to thoughtful, active players ready to make their mark on the frontier.',
  },
  {
    category: 'Field report',
    date: 'Aug 02, 2026',
    title: 'Preparing for launch',
    copy: 'Command shares our first priorities: a capable fleet, a strong economy, and a culture worth protecting.',
  },
];
