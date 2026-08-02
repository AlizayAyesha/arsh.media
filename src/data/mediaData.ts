export type MediaKind = 'vlog' | 'podcast' | 'speech';

export interface MediaItem {
  id: string;
  kind: MediaKind;
  title: string;
  description: string;
  /** YouTube video ID — paste real IDs when ready */
  youtubeId: string;
  thumbnailUrl: string;
  publishedAt: string;
  duration: string;
  venueOrShow: string;
}

export const MEDIA_ITEMS: MediaItem[] = [
  {
    id: 'v1',
    kind: 'vlog',
    title: 'Behind the National Summit — 48 hours that built a room',
    description: 'Backstage, rehearsals, and the quiet moments before 1,200 delegates walked in.',
    youtubeId: '',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80',
    publishedAt: 'March 2026',
    duration: '18:42',
    venueOrShow: 'Arsh Vlogs',
  },
  {
    id: 'v2',
    kind: 'vlog',
    title: 'A day with fellows — how mentorship actually looks',
    description: 'From morning circle to pitch night: documenting the cohort that refuses to stay small.',
    youtubeId: '',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
    publishedAt: 'February 2026',
    duration: '14:05',
    venueOrShow: 'Arsh Vlogs',
  },
  {
    id: 'v3',
    kind: 'vlog',
    title: 'Karachi gala night — creators, trophies, and afterglow',
    description: 'Vlog coverage of the Creator & Royalty Excellence Awards.',
    youtubeId: '',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80',
    publishedAt: 'December 2025',
    duration: '22:11',
    venueOrShow: 'Arsh Vlogs',
  },
  {
    id: 'p1',
    kind: 'podcast',
    title: 'Building rooms that change careers',
    description: 'Long-form conversation on stages, audience trust, and youth mentorship at scale.',
    youtubeId: '',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1478737270239-2f02bb3ffe1d?auto=format&fit=crop&w=1200&q=80',
    publishedAt: 'March 2026',
    duration: '54:20',
    venueOrShow: 'The Operator Podcast',
  },
  {
    id: 'p2',
    kind: 'podcast',
    title: 'Media, AI, and the next Pakistani stage',
    description: 'On broadcast infrastructure, creator economies, and why presence still wins.',
    youtubeId: '',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1200&q=80',
    publishedAt: 'January 2026',
    duration: '41:08',
    venueOrShow: 'South Asia Signal',
  },
  {
    id: 'p3',
    kind: 'podcast',
    title: 'From first event to national summits',
    description: 'Origin story, failures that taught craft, and the discipline of hosting well.',
    youtubeId: '',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1516280440614-6697288d5d38?auto=format&fit=crop&w=1200&q=80',
    publishedAt: 'November 2025',
    duration: '62:45',
    venueOrShow: 'Founders After Hours',
  },
  {
    id: 's1',
    kind: 'speech',
    title: 'Keynote — The stage is a responsibility',
    description: 'Opening address at the National Media & AI Summit 2025.',
    youtubeId: '',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=80',
    publishedAt: 'September 2025',
    duration: '28:33',
    venueOrShow: 'Islamabad Convention Centre',
  },
  {
    id: 's2',
    kind: 'speech',
    title: 'University address — Own your audience',
    description: 'Talk delivered to media and business students on craft, courage, and consistency.',
    youtubeId: '',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80',
    publishedAt: 'October 2025',
    duration: '35:10',
    venueOrShow: 'National University Guest Lecture',
  },
  {
    id: 's3',
    kind: 'speech',
    title: 'Closing remarks — Leave the room better',
    description: 'Fellowship assembly farewell on mentorship as a public practice.',
    youtubeId: '',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=1200&q=80',
    publishedAt: 'April 2026',
    duration: '16:48',
    venueOrShow: 'Youth Media Fellowship',
  },
];

export const BOOKING_TYPES = [
  { id: 'podcast', label: 'Podcast guest' },
  { id: 'keynote', label: 'Keynote / university talk' },
  { id: 'panel', label: 'Panel / fireside' },
  { id: 'channel', label: 'YouTube / channel collab' },
] as const;
