/**
 * CLASSES & LEARNING — configurable sample structure.
 * Class names, age ranges and focus areas are illustrative examples of
 * how an Indian primary school may organise classes. Confirm the actual
 * class structure (Nursery, LKG, UKG, Class I–V etc.) with the school.
 */

export type ClassLevel = {
  id: string;
  name: string;
  ageRange: string;
  focus: string;
  highlights: string[];
  isSample: true;
};

export const classLevels: ClassLevel[] = [
  {
    id: 'pre-primary',
    name: 'Pre-Primary (example: Nursery, LKG, UKG)',
    ageRange: 'Approx. 3–6 years',
    focus: 'Play-based learning, language readiness, motor skills and social habits.',
    highlights: [
      'Story time, rhymes and picture reading',
      'Colouring, clay and simple craft',
      'Number readiness through games',
      'Routine, hygiene and good manners',
    ],
    isSample: true,
  },
  {
    id: 'class-1-2',
    name: 'Classes 1–2 (example grouping)',
    ageRange: 'Approx. 6–8 years',
    focus: 'Building strong foundations in reading, writing, numbers and curiosity about the world.',
    highlights: [
      'Reading aloud and guided writing',
      'Basic arithmetic with hands-on material',
      'EVS — understanding family, plants, water and animals',
      'Music, art and physical activity',
    ],
    isSample: true,
  },
  {
    id: 'class-3-5',
    name: 'Classes 3–5 (example grouping)',
    ageRange: 'Approx. 8–11 years',
    focus: 'Deeper practice in languages, mathematics, environmental studies and creative expression.',
    highlights: [
      'Comprehension, grammar and creative writing',
      'Problem solving in mathematics',
      'Project work and simple science exploration',
      'Team games, clubs and stage activities',
    ],
    isSample: true,
  },
  {
    id: 'class-6-and-above',
    name: 'Middle grades (if applicable)',
    ageRange: 'Approx. 11 years and above',
    focus: '[Confirm whether the school offers middle-school classes and update this section accordingly.]',
    highlights: [
      'Subject-wise timetable approach — replace with the school’s actual timetable practice',
      'Laboratory and library-based learning',
      'Life-skills and value-education sessions',
      'Guidance for study habits and exam preparation',
    ],
    isSample: true,
  },
];
