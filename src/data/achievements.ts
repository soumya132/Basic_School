/**
 * ACHIEVEMENTS — LAYOUT PREVIEW WITH DEMO ENTRIES.
 * Awards and results below are illustrative demo data, not real claims.
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
    title: '[Demo: Inter-school quiz participation]',
    description:
      'Demo entry — a team took part in an illustrative inter-school quiz. Replace with a verified achievement.',
    year: '[Demo: 2025]',
    isPlaceholder: true,
  },
  {
    id: 'a-2',
    category: 'Academic',
    title: '[Demo: Reading challenge completion]',
    description:
      'Demo entry — learners completed a classroom reading challenge. Replace with a verified programme and result.',
    year: '[Demo: 2025]',
    isPlaceholder: true,
  },
  {
    id: 'a-3',
    category: 'Sports',
    title: '[Demo: District sports meet participation]',
    description:
      'Demo entry — students participated in an illustrative district-level sports meet. Add the real event details later.',
    year: '[Demo: 2024]',
    isPlaceholder: true,
  },
  {
    id: 'a-4',
    category: 'Sports',
    title: '[Demo: Annual sports day team event]',
    description:
      'Demo entry — a relay team was recognised at a school sports day. Replace with a confirmed result.',
    year: '[Demo: 2024]',
    isPlaceholder: true,
  },
  {
    id: 'a-5',
    category: 'Cultural',
    title: '[Demo: Cultural programme appreciation]',
    description:
      'Demo entry — a group performance received appreciation at an illustrative cultural event.',
    year: '[Demo: 2025]',
    isPlaceholder: true,
  },
  {
    id: 'a-6',
    category: 'Community',
    title: '[Demo: Plantation drive]',
    description:
      'Demo entry — students and teachers took part in an illustrative tree-planting activity.',
    year: '[Demo: 2025]',
    isPlaceholder: true,
  },
];
