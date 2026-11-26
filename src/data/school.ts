/**
 * ============================================================
 *  CENTRAL SCHOOL CONFIGURATION
 * ============================================================
 *  Every editable / unverified school detail lives in this file.
 *
 *  PLACEHOLDERS: Values wrapped in [square brackets] are NOT
 *  real school facts. They must be replaced with verified
 *  information before the website goes live.
 *
 *  Unverified values are demo data in [square brackets] and must
 *  be replaced with real facts before publishing.
 * ============================================================
 */

export const school = {
  /** Official school name — edit here to update sitewide. */
  name: 'Saraswati Sisu Vidya Mandir',
  tagline: 'Nurturing young minds with care, values and knowledge',

  /**
   * VERIFIED FACTS go below (city and state supplied).
   * Everything marked PLACEHOLDER must be confirmed by the school.
   */
  address: {
    line1: '[Demo: 123 School Road]',
    line2: '[Demo: Patia locality]',
    city: 'Bhubaneswar',
    state: 'Odisha',
    pincode: '[Demo: 751024]',
    /** Set to true once a real Google Maps embed URL is added below. */
    mapAvailable: false,
    mapEmbedUrl: '',
  },

  phone: '[Demo: 0000000000]',
  alternatePhone: '[Demo: 0000000001]',
  email: '[Demo: demo.school@example.com]',
  officeHours: '[Demo: 8:00 AM – 2:00 PM]',
  officeDays: '[Demo: Monday–Saturday]',

  /** DEMO DATA — replace with verified facts before publishing. */
  establishedYear: '[Demo: 2005]',
  /** DEMO DATA — never claim a board affiliation without proof. */
  affiliation: '[Demo: CBSE — confirm with the school]',
  registrationNumber: '[Demo: REG-000000]',
  principalName: '[Demo: Principal Name]',
  principalTitle: 'Principal',

  /** Optional social links — leave empty strings to hide the icon. */
  social: {
    facebook: '',
    youtube: '',
    instagram: '',
  },
} as const;

/** Navigation structure shared by header + footer. */
export const navGroups = [
  { label: 'Home', href: '/index.html' },
  {
    label: 'About',
    href: '/about.html',
    children: [
      { label: 'About Us', href: '/about.html' },
      { label: "Principal's Message", href: '/principal-message.html' },
      { label: 'Vision & Mission', href: '/vision-mission.html' },
      { label: 'School Information', href: '/school-information.html' },
    ],
  },
  {
    label: 'Academics',
    href: '/academics.html',
    children: [
      { label: 'Academics', href: '/academics.html' },
      { label: 'Classes & Learning', href: '/classes.html' },
      { label: 'Facilities', href: '/facilities.html' },
      { label: 'Sports & Activities', href: '/sports-activities.html' },
    ],
  },
  {
    label: 'Campus Life',
    href: '/faculty.html',
    children: [
      { label: 'Faculty & Staff', href: '/faculty.html' },
      { label: 'School Gallery', href: '/gallery.html' },
      { label: 'Events & Celebrations', href: '/events.html' },
      { label: 'Achievements', href: '/achievements.html' },
    ],
  },
  { label: 'Notices', href: '/notices.html' },
  { label: 'Contact', href: '/contact.html' },
] as const;

export type NavItem = {
  label: string;
  href: string;
  children?: readonly { label: string; href: string }[];
};
