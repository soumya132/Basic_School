/**
 * FACULTY PROFILES — DEMO RECORDS ONLY.
 * These are editable demo entries so the layout can be previewed.
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
    name: '[Demo: Riya Sharma]',
    role: 'Primary Class Teacher',
    subject: 'All subjects (primary classes)',
    qualification: '[Demo: B.Ed., M.A. English]',
    bio: 'Demo profile — a patient primary teacher who enjoys story time and activity-based learning.',
    isPlaceholder: true,
  },
  {
    id: 'f-2',
    name: '[Demo: Ananya Mohanty]',
    role: 'Primary Class Teacher',
    subject: 'All subjects (primary classes)',
    qualification: '[Demo: B.Ed., B.A.]',
    bio: 'Demo profile — focuses on strong reading, writing and number habits in the early years.',
    isPlaceholder: true,
  },
  {
    id: 'f-3',
    name: '[Demo: Sneha Patnaik]',
    role: 'Language Teacher',
    subject: '[Demo: Hindi / English]',
    qualification: '[Demo: M.A. Hindi, B.Ed.]',
    bio: 'Demo profile — helps children build vocabulary through songs, stories and conversation.',
    isPlaceholder: true,
  },
  {
    id: 'f-4',
    name: '[Demo: Rajesh Kumar]',
    role: 'Mathematics Teacher',
    subject: 'Mathematics',
    qualification: '[Demo: M.Sc. Mathematics, B.Ed.]',
    bio: 'Demo profile — uses games and hands-on material to make numbers less intimidating.',
    isPlaceholder: true,
  },
  {
    id: 'f-5',
    name: '[Demo: Priya Nayak]',
    role: 'Science Teacher',
    subject: 'Science / Environmental Studies',
    qualification: '[Demo: M.Sc. Botany, B.Ed.]',
    bio: 'Demo profile — encourages observation, questions and simple experiments in class.',
    isPlaceholder: true,
  },
  {
    id: 'f-6',
    name: '[Demo: Arjun Behera]',
    role: 'Physical Education Instructor',
    subject: 'Sports & physical education',
    qualification: '[Demo: B.P.Ed.]',
    bio: 'Demo profile — organises safe games, warm-ups and team activities for all ages.',
    isPlaceholder: true,
  },
  {
    id: 'f-7',
    name: '[Demo: Meera Das]',
    role: 'Librarian',
    subject: 'Library & reading programme',
    qualification: '[Demo: B.Lib.Sc.]',
    bio: 'Demo profile — keeps the reading corner lively with picture books and story sessions.',
    isPlaceholder: true,
  },
  {
    id: 'f-8',
    name: '[Demo: Sunil Rout]',
    role: 'Office Administrator',
    subject: 'School office',
    qualification: '[Demo: B.Com.]',
    bio: 'Demo profile — handles records, enquiries and everyday coordination with families.',
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
      'If school transport is available, trained drivers and attendants assist children boarding and alighting. [Demo: transport available — confirm with the school office]',
  },
];
