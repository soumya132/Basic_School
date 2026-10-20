/**
 * ACHIEVEMENTS — LAYOUT PREVIEW WITH PLACEHOLDERS.
 * No awards, ranks, medals or examination results have been invented.
 * Add only verified achievements supplied by the school.
 */

export type Achievement = {
  id: string;
  category: 'Academic' | 'Sports' | 'Cultural' | 'Community';
  title: string;
  description: string;
  year: string;
  isPlaceholder: true;
};

export const achievementCategories: Array<Achievement['category']> = [
  'Academic',
  'Sports',
  'Cultural',
  'Community',
];

export const achievements: Achievement[] = [
  {
    id: 'a-1',
    category: 'Academic',
    title: '[Add verified academic achievement]',
    description:
      'Placeholder entry — for example: a learner or team recognised in a verified inter-school or board-level activity. Add only after confirmation.',
    year: '[Add year]',
    isPlaceholder: true,
  },
  {
    id: 'a-2',
    category: 'Academic',
    title: '[Add verified academic achievement]',
    description:
      'Placeholder entry — describe the achievement, the participants and the organising body accurately.',
    year: '[Add year]',
    isPlaceholder: true,
  },
  {
    id: 'a-3',
    category: 'Sports',
    title: '[Add verified sports achievement]',
    description:
      'Placeholder entry — for example: participation or placement in a verified district, state or school-level sports meet.',
    year: '[Add year]',
    isPlaceholder: true,
  },
  {
    id: 'a-4',
    category: 'Sports',
    title: '[Add verified sports achievement]',
    description:
      'Placeholder entry — replace with a confirmed result and the name of the competition.',
    year: '[Add year]',
    isPlaceholder: true,
  },
  {
    id: 'a-5',
    category: 'Cultural',
    title: '[Add verified cultural achievement]',
    description:
      'Placeholder entry — for example: recognition in a verified art, music, dance or declamation event.',
    year: '[Add year]',
    isPlaceholder: true,
  },
  {
    id: 'a-6',
    category: 'Community',
    title: '[Add verified community initiative]',
    description:
      'Placeholder entry — for example: a cleanliness drive, plantation drive or community programme led by the school.',
    year: '[Add year]',
    isPlaceholder: true,
  },
];
