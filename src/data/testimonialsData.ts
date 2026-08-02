export type TestimonialKind = 'video' | 'review';

export interface VideoTestimonial {
  id: string;
  kind: 'video';
  name: string;
  role: string;
  city: string;
  quote: string;
  /** YouTube video ID — replace with real mentee/event videos */
  youtubeId: string;
  thumbnailUrl: string;
  outcome: string;
}

export interface WrittenReview {
  id: string;
  kind: 'review';
  name: string;
  role: string;
  city: string;
  quote: string;
  rating: 5 | 4;
  eventOrProgram: string;
}

export const VIDEO_TESTIMONIALS: VideoTestimonial[] = [
  {
    id: 'v1',
    kind: 'video',
    name: 'Hammad Ali',
    role: 'Creator & Founder, Reach Studio',
    city: 'Lahore',
    quote:
      'Arsh didn’t just teach me content — he rebuilt how I think about audiences, stages, and ownership.',
    // Paste real YouTube ID here, e.g. "abc123XYZ_-"
    youtubeId: '',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=80',
    outcome: 'Scaled to 1.2M followers in 14 months',
  },
  {
    id: 'v2',
    kind: 'video',
    name: 'Sara Khan',
    role: 'Event Producer',
    city: 'Islamabad',
    quote:
      'Working under Arsh on a national summit taught me more than years of freelance producing.',
    youtubeId: '',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80',
    outcome: 'Now leads corporate & civic events across PK',
  },
  {
    id: 'v3',
    kind: 'video',
    name: 'Bilal Ahmed',
    role: 'Youth Mentor & Speaker',
    city: 'Karachi',
    quote:
      'His mentorship turned my stage fear into a career speaking to thousands.',
    youtubeId: '',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
    outcome: 'Booked 40+ keynotes after fellowship',
  },
];

export const WRITTEN_REVIEWS: WrittenReview[] = [
  {
    id: 'r1',
    kind: 'review',
    name: 'Ayesha Rehman',
    role: 'Media Entrepreneur',
    city: 'Dubai',
    quote:
      'Arsh has a rare gift: he sees potential before you do, then holds you accountable until it becomes reality. The mentorship cohort changed my trajectory.',
    rating: 5,
    eventOrProgram: 'Youth Mentorship Program 2025',
  },
  {
    id: 'r2',
    kind: 'review',
    name: 'Omar Sheikh',
    role: 'Brand Partnerships Lead',
    city: 'Karachi',
    quote:
      'Every Arsh event feels intentional — from the guest experience to the broadcast. Brands trust him because audiences do.',
    rating: 5,
    eventOrProgram: 'Creator & Royalty Awards Gala',
  },
  {
    id: 'r3',
    kind: 'review',
    name: 'Fatima Noor',
    role: 'Journalism Student',
    city: 'Lahore',
    quote:
      'I walked in unsure of my voice. I left with a clear path, real tools, and a mentor who still checks in months later.',
    rating: 5,
    eventOrProgram: 'Media Fellowship Assembly',
  },
  {
    id: 'r4',
    kind: 'review',
    name: 'Danish Malik',
    role: 'Startup Founder',
    city: 'Islamabad',
    quote:
      'Arsh connects rooms that usually never meet — creators, policymakers, and capital. That network alone is worth years of cold outreach.',
    rating: 5,
    eventOrProgram: 'National Media & AI Summit',
  },
];
