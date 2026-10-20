/**
 * SAMPLE EVENTS — illustrative content only.
 * These describe the kinds of events a school may hold; they are
 * NOT confirmed calendar entries for this school.
 */

export type SchoolEvent = {
  id: string;
  title: string;
  date: string; // ISO date
  category: 'Cultural' | 'Academic' | 'Sports' | 'Community' | 'Seasonal';
  description: string;
  location: string;
  isSample: true;
};

export const events: SchoolEvent[] = [
  {
    id: 'event-sample-1',
    title: 'Sample Event: Annual Day Celebration',
    date: '2026-01-25',
    category: 'Cultural',
    description:
      'Illustrative event — schools typically organise an annual day with stage performances, prize distribution and cultural programmes by students.',
    location: '[Add school auditorium / venue]',
    isSample: true,
  },
  {
    id: 'event-sample-2',
    title: 'Sample Event: Sports Day',
    date: '2026-02-08',
    category: 'Sports',
    description:
      'Illustrative event — a sports day with races, team games and March-past is a common school tradition shown here as an example.',
    location: '[Add playground / ground]',
    isSample: true,
  },
  {
    id: 'event-sample-3',
    title: 'Sample Event: Science Exhibition',
    date: '2026-03-12',
    category: 'Academic',
    description:
      'Illustrative event — a science exhibition where learners display working models and simple experiments for parents and visitors.',
    location: '[Add venue]',
    isSample: true,
  },
  {
    id: 'event-sample-4',
    title: 'Sample Event: Independence Day Assembly',
    date: '2026-08-15',
    category: 'Community',
    description:
      'Illustrative event — schools across India celebrate national days with flag hoisting, songs and short cultural programmes.',
    location: '[Add school assembly ground]',
    isSample: true,
  },
  {
    id: 'event-sample-5',
    title: 'Sample Event: Diwali & Autumn Festival Week',
    date: '2026-10-10',
    category: 'Seasonal',
    description:
      'Illustrative event — a week of cultural activities celebrating the autumn festive season with art, music and shared meals.',
    location: '[Add school campus]',
    isSample: true,
  },
  {
    id: 'event-sample-6',
    title: 'Sample Event: Parents & Teachers Meet',
    date: '2026-04-18',
    category: 'Community',
    description:
      'Illustrative event — a scheduled meeting for parents to discuss their child’s progress with class teachers.',
    location: '[Add classrooms / meeting hall]',
    isSample: true,
  },
];
