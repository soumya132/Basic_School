/**
 * SAMPLE NOTICES — illustrative content only.
 * These are NOT real school notices. Replace with verified notices
 * published by the school office before going live.
 */

export type Notice = {
  id: string;
  title: string;
  date: string; // ISO date
  category: 'Academic' | 'Holiday' | 'Event' | 'General' | 'Examination';
  summary: string;
  isSample: true;
};

export const notices: Notice[] = [
  {
    id: 'notice-sample-1',
    title: 'Sample Notice: School reopens after term break',
    date: '2026-04-01',
    category: 'Academic',
    summary:
      'Illustrative notice — classes are shown to resume after the term break. Replace with the date confirmed by the school office.',
    isSample: true,
  },
  {
    id: 'notice-sample-2',
    title: 'Sample Notice: Parent–teacher meeting',
    date: '2026-03-20',
    category: 'General',
    summary:
      'Illustrative notice — an example of how parent–teacher meeting announcements will appear on this page.',
    isSample: true,
  },
  {
    id: 'notice-sample-3',
    title: 'Sample Notice: Annual examination schedule',
    date: '2026-03-05',
    category: 'Examination',
    summary:
      'Illustrative notice — examination date sheets will be published here once confirmed by the school.',
    isSample: true,
  },
  {
    id: 'notice-sample-4',
    title: 'Sample Notice: Celebration of a national festival',
    date: '2026-02-14',
    category: 'Event',
    summary:
      'Illustrative notice — examples of cultural and national celebration announcements.',
    isSample: true,
  },
  {
    id: 'notice-sample-5',
    title: 'Sample Notice: School holiday list',
    date: '2026-01-10',
    category: 'Holiday',
    summary:
      'Illustrative notice — the verified holiday calendar will be uploaded here for parents.',
    isSample: true,
  },
  {
    id: 'notice-sample-6',
    title: 'Sample Notice: Library book return week',
    date: '2025-12-18',
    category: 'General',
    summary:
      'Illustrative notice — an example of circulars related to school library activities.',
    isSample: true,
  },
];

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}
