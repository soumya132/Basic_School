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
 *  Nothing here has been invented — if a fact is unknown it is
 *  either a bracketed placeholder or documented as sample copy.
 * ============================================================
 */

export const school = {
  /** Official school name — edit here to update sitewide. */
  name: 'Saraswati Sisu Vidya Mandir',
  tagline: 'Nurturing young minds with care, values and knowledge',

  /**
   * VERIFIED FACTS go below (currently none supplied).
   * Everything marked PLACEHOLDER must be confirmed by the school.
   */
  address: {
    line1: '[Add school address line 1]',
    line2: '[Add school address line 2 — locality]',
    city: '[Add city]',
    state: '[Add state]',
    pincode: '[Add PIN code]',
    /** Set to true once a real Google Maps embed URL is added below. */
    mapAvailable: false,
    mapEmbedUrl: '',
  },

  phone: '[Add school telephone number]',
  alternatePhone: '[Add alternate phone, if any]',
  email: '[Add school email address]',
  officeHours: '[Add office hours, e.g. Monday–Saturday, 8:00 AM – 2:00 PM]',
  officeDays: '[Add working days]',

  /** PLACEHOLDER — do not publish until verified. */
  establishedYear: '[Add year of establishment]',
  /** PLACEHOLDER — never claim a board affiliation without proof. */
  affiliation: '[Add board affiliation once officially confirmed]',
  registrationNumber: '[Add registration / recognition number once verified]',
  principalName: "[Add principal's name]",
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
