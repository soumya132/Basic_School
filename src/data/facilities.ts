/**
 * FACILITIES — EXAMPLE LIST ONLY.
 * These are common facilities found in Indian schools, shown as a
 * preview of the page layout. Each item must be CONFIRMED by the school
 * before being presented as a real facility. Items marked
 * `confirmed: false` display an "example — to be confirmed" note.
 */

export type Facility = {
  id: string;
  name: string;
  description: string;
  icon:
    | 'classroom'
    | 'book'
    | 'flask'
    | 'trophy'
    | 'droplet'
    | 'shield'
    | 'bus'
    | 'computer'
    | 'tree'
    | 'music';
  confirmed: false;
};

export const facilities: Facility[] = [
  {
    id: 'f-classrooms',
    name: 'Classrooms',
    description:
      'Bright, ventilated classrooms are the heart of any school. Confirm the actual classroom count, seating arrangement and amenities with the school office.',
    icon: 'classroom',
    confirmed: false,
  },
  {
    id: 'f-library',
    name: 'Library & Reading Room',
    description:
      'A library with age-appropriate books, story collections and a quiet reading corner supports daily reading habits.',
    icon: 'book',
    confirmed: false,
  },
  {
    id: 'f-lab',
    name: 'Science Laboratory',
    description:
      'A basic science laboratory or activity corner allows older learners to observe, experiment and learn by doing.',
    icon: 'flask',
    confirmed: false,
  },
  {
    id: 'f-computer',
    name: 'Computer / Digital Learning',
    description:
      'A computer room or digital-learning corner introduces children to basic ICT skills in a supervised setting.',
    icon: 'computer',
    confirmed: false,
  },
  {
    id: 'f-playground',
    name: 'Playground & Sports Area',
    description:
      'An open playground for games, races and physical education is essential for healthy growing children.',
    icon: 'trophy',
    confirmed: false,
  },
  {
    id: 'f-water',
    name: 'Drinking Water',
    description:
      'Safe drinking water provision — including purification arrangements — is a priority for every campus.',
    icon: 'droplet',
    confirmed: false,
  },
  {
    id: 'f-sanitation',
    name: 'Sanitation & Cleanliness',
    description:
      'Clean, separate sanitation facilities for children and regular campus hygiene maintenance.',
    icon: 'shield',
    confirmed: false,
  },
  {
    id: 'f-tree',
    name: 'Green Campus & Activity Spaces',
    description:
      'Trees, plants and shaded areas give children space for outdoor learning and play.',
    icon: 'tree',
    confirmed: false,
  },
  {
    id: 'f-music',
    name: 'Activity & Culture Room',
    description:
      'A multi-purpose room for music, art, dance and indoor activities during busy or rainy days.',
    icon: 'music',
    confirmed: false,
  },
  {
    id: 'f-transport',
    name: 'Transport Facility',
    description:
      'If the school operates buses or vans, route details and safety norms can be listed here once confirmed.',
    icon: 'bus',
    confirmed: false,
  },
];
