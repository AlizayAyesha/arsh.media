export interface Partner {
  id: string;
  name: string;
  /** Path under /public — replace with official brand logos anytime */
  logo: string;
}

export const PARTNERS: Partner[] = [
  { id: 'pemra', name: 'PEMRA Partners', logo: '/partners/pemra.svg' },
  { id: 'nyc', name: 'National Youth Council', logo: '/partners/nyc.svg' },
  { id: 'icc', name: 'Islamabad Convention Centre', logo: '/partners/icc.svg' },
  { id: 'pearl', name: 'Pearl Continental', logo: '/partners/pearl.svg' },
  { id: 'marriott', name: 'Marriott Executive', logo: '/partners/marriott.svg' },
  { id: 'gcc', name: 'GCC Media Forum', logo: '/partners/gcc.svg' },
  { id: 'cea', name: 'Creator Economy Alliance', logo: '/partners/cea.svg' },
  { id: 'pts', name: 'Pakistan Tech Summit', logo: '/partners/pts.svg' },
];

/** @deprecated use PARTNERS */
export const PARTNER_NAMES = PARTNERS.map((p) => p.name);
