/**
 * FACULTY PROFILES — PLACEHOLDER RECORDS ONLY.
 * These are editable sample entries so the layout can be previewed.
 * Real staff names, photos and qualifications must be added by the
 * school before publication. Do NOT present these as real people.
 */

export type FacultyMember = {
  id: string;
  name: string;
  role: string;
  subject: string;
  qualification: string;
  bio: string;
  isPlaceholder: true;
};

export const facultyMembers: FacultyMember[] = [
  {
    id: 'f-1',
    name: "[Add teacher's name]",
    role: 'Primary Class Teacher',
    subject: 'All subjects (primary classes)',
    qualification: '[Add qualification]',
    bio: 'Placeholder profile — replace with a short, verified introduction written by the school.',
    isPlaceholder: true,
  },
  {
    id: 'f-2',
    name: "[Add teacher's name]",
    role: 'Primary Class Teacher',
    subject: 'All subjects (primary classes)',
    qualification: '[Add qualification]',
    bio: 'Placeholder profile — replace with a short, verified introduction written by the school.',
    isPlaceholder: true,
  },
  {
    id: 'f-3',
    name: "[Add teacher's name]",
    role: 'Language Teacher',
    subject: '[Add subject, e.g. Hindi / English / regional language]',
    qualification: '[Add qualification]',
    bio: 'Placeholder profile — replace with a short, verified introduction written by the school.',
    isPlaceholder: true,
  },
  {
    id: 'f-4',
    name: "[Add teacher's name]",
    role: 'Mathematics Teacher',
    subject: 'Mathematics',
    qualification: '[Add qualification]',
    bio: 'Placeholder profile — replace with a short, verified introduction written by the school.',
    isPlaceholder: true,
  },
  {
    id: 'f-5',
    name: "[Add teacher's name]",
    role: 'Science Teacher',
    subject: 'Science / Environmental Studies',
    qualification: '[Add qualification]',
    bio: 'Placeholder profile — replace with a short, verified introduction written by the school.',
    isPlaceholder: true,
  },
  {
    id: 'f-6',
    name: "[Add staff member's name]",
    role: 'Physical Education Instructor',
    subject: 'Sports & physical education',
    qualification: '[Add qualification]',
    bio: 'Placeholder profile — replace with a short, verified introduction written by the school.',
    isPlaceholder: true,
  },
  {
    id: 'f-7',
    name: "[Add staff member's name]",
    role: 'Librarian',
    subject: 'Library & reading programme',
    qualification: '[Add qualification]',
    bio: 'Placeholder profile — replace with a short, verified introduction written by the school.',
    isPlaceholder: true,
  },
  {
    id: 'f-8',
    name: "[Add staff member's name]",
    role: 'Office Administrator',
    subject: 'School office',
    qualification: '[Add qualification]',
    bio: 'Placeholder profile — replace with a short, verified introduction written by the school.',
    isPlaceholder: true,
  },
];

export const supportRoles = [
  {
    role: 'Administrative Office',
    description:
      'The school office handles enquiries, records and day-to-day coordination with parents.',
  },
  {
    role: 'Support & Care Staff',
    description:
      'Housekeeping, security and support staff help keep the campus clean, safe and welcoming every day.',
  },
  {
    role: 'Transport Team',
    description:
      'If school transport is available, trained drivers and attendants assist children boarding and alighting. [Confirm transport facility with the school office]',
  },
];
