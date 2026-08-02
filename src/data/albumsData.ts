export interface AlbumPhoto {
  id: string;
  url: string;
  caption: string;
}

export interface EventAlbum {
  id: string;
  eventName: string;
  date: string;
  location: string;
  category: string;
  coverImage: string;
  photoCount: number;
  description: string;
  photos: AlbumPhoto[];
}

export const EVENT_ALBUMS: EventAlbum[] = [
  {
    id: 'album-summit-2025',
    eventName: 'National Media & AI Summit 2025',
    date: 'September 18, 2025',
    location: 'Islamabad Convention Center',
    category: 'Annual Plenary',
    coverImage:
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1400&q=80',
    photoCount: 6,
    description:
      'Delegates, keynotes, and backstage moments from Pakistan’s flagship media & AI gathering.',
    photos: [
      {
        id: 's1',
        url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80',
        caption: 'Opening plenary',
      },
      {
        id: 's2',
        url: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=80',
        caption: 'Keynote address',
      },
      {
        id: 's3',
        url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
        caption: 'Panel discussion',
      },
      {
        id: 's4',
        url: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&w=1200&q=80',
        caption: 'Audience & delegates',
      },
      {
        id: 's5',
        url: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200&q=80',
        caption: 'Networking lounge',
      },
      {
        id: 's6',
        url: 'https://images.unsplash.com/photo-1559223607-a43c990c692c?auto=format&fit=crop&w=1200&q=80',
        caption: 'Closing ceremony',
      },
    ],
  },
  {
    id: 'album-broadcast-2025',
    eventName: 'AI Broadcast & Neural Dubbing Conclave',
    date: 'November 04, 2025',
    location: 'Pearl-Continental Lahore',
    category: 'Broadcast Tech',
    coverImage:
      'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1400&q=80',
    photoCount: 5,
    description: 'Live demos, engineer meetups, and the neural dubbing showcase floor.',
    photos: [
      {
        id: 'b1',
        url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
        caption: 'Main stage',
      },
      {
        id: 'b2',
        url: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80',
        caption: 'Workshop floor',
      },
      {
        id: 'b3',
        url: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=1200&q=80',
        caption: 'Tech demo',
      },
      {
        id: 'b4',
        url: 'https://images.unsplash.com/photo-1560439513-74b037a25d84?auto=format&fit=crop&w=1200&q=80',
        caption: 'Speaker green room',
      },
      {
        id: 'b5',
        url: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80',
        caption: 'Evening reception',
      },
    ],
  },
  {
    id: 'album-awards-2025',
    eventName: 'Creator & Royalty Excellence Awards',
    date: 'December 12, 2025',
    location: 'Mohatta Palace Gardens, Karachi',
    category: 'Gala & Awards',
    coverImage:
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1400&q=80',
    photoCount: 5,
    description: 'Red carpet, trophy moments, and the night’s standing ovations.',
    photos: [
      {
        id: 'a1',
        url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80',
        caption: 'Gala hall',
      },
      {
        id: 'a2',
        url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80',
        caption: 'Awards presentation',
      },
      {
        id: 'a3',
        url: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=80',
        caption: 'Winner celebration',
      },
      {
        id: 'a4',
        url: 'https://images.unsplash.com/photo-1519677100203-a0e668c92439?auto=format&fit=crop&w=1200&q=80',
        caption: 'Guest arrivals',
      },
      {
        id: 'a5',
        url: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1200&q=80',
        caption: 'Evening performance',
      },
    ],
  },
  {
    id: 'album-fintech-2026',
    eventName: 'FinTech & Sovereign Identity Symposium',
    date: 'February 15, 2026',
    location: 'Marriott Executive Enclave, Karachi',
    category: 'FinTech Summit',
    coverImage:
      'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=1400&q=80',
    photoCount: 4,
    description: 'Policy roundtables and creator monetization labs across two days.',
    photos: [
      {
        id: 'f1',
        url: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=1200&q=80',
        caption: 'Symposium hall',
      },
      {
        id: 'f2',
        url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
        caption: 'Breakout session',
      },
      {
        id: 'f3',
        url: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80',
        caption: 'Founder circle',
      },
      {
        id: 'f4',
        url: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=1200&q=80',
        caption: 'Closing remarks',
      },
    ],
  },
  {
    id: 'album-youth-2026',
    eventName: 'Youth Media Fellowship Assembly',
    date: 'April 20, 2026',
    location: 'National Library Auditorium, Islamabad',
    category: 'Youth Assembly',
    coverImage:
      'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1400&q=80',
    photoCount: 5,
    description: 'Fellows, mentors, and the cohort that walked out with a plan.',
    photos: [
      {
        id: 'y1',
        url: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=80',
        caption: 'Fellowship assembly',
      },
      {
        id: 'y2',
        url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
        caption: 'Mentor circle',
      },
      {
        id: 'y3',
        url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
        caption: 'Team workshops',
      },
      {
        id: 'y4',
        url: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=1200&q=80',
        caption: 'Pitch day',
      },
      {
        id: 'y5',
        url: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80',
        caption: 'Cohort portrait',
      },
    ],
  },
];

export const FUNDING_INITIATIVES = [
  {
    id: 'init-mentorship',
    title: 'Youth Mentorship Scholarships',
    goal: 'PKR 25L',
    raisedLabel: '62% funded',
    progress: 62,
    blurb:
      'Fully fund seats for creators who cannot otherwise join the 2026 mentorship cohort.',
  },
  {
    id: 'init-summit',
    title: 'National Summit Access Fund',
    goal: 'PKR 40L',
    raisedLabel: '41% funded',
    progress: 41,
    blurb:
      'Sponsor delegate passes, travel stipends, and live broadcast reach for underserved cities.',
  },
  {
    id: 'init-studio',
    title: 'Community Studio Labs',
    goal: 'PKR 60L',
    raisedLabel: '28% funded',
    progress: 28,
    blurb:
      'Build shared production spaces where mentees can shoot, edit, and launch work.',
  },
];

export const FUNDING_TIERS = [
  { id: 'seed', label: 'Seed Patron', amount: 'PKR 25,000', perks: 'Name on initiative page · quarterly update' },
  { id: 'stage', label: 'Stage Patron', amount: 'PKR 100,000', perks: 'Event mention · mentee letter · report' },
  { id: 'legacy', label: 'Legacy Patron', amount: 'PKR 500,000+', perks: 'Named scholarship · summit lounge access' },
];
