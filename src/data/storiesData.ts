export interface StarStory {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  body: string[];
  starName: string;
  starRole: string;
  city: string;
  outcome: string;
  coverImage: string;
  publishedAt: string;
  readMinutes: number;
  tags: string[];
}

export const STAR_STORIES: StarStory[] = [
  {
    id: 'story-1',
    slug: 'hammad-ali-from-bedroom-creator-to-national-stage',
    title: 'From bedroom creator to national stage',
    excerpt:
      'Hammad walked into mentorship with raw talent and no map. Fourteen months later, he held a room of twelve hundred.',
    body: [
      'When Hammad first sat across from Arsh, he had a phone, a stubborn dream, and an audience that barely filled a classroom. What he lacked was a stage strategy — how to turn attention into authority.',
      'Through the fellowship, he rebuilt his content system, learned to produce live rooms, and rehearsed keynotes until the nerves became fuel. The breakthrough wasn’t a viral clip. It was the first time a brand asked him to open a summit.',
      'Today Hammad leads Reach Studio, commands over a million followers, and returns as a mentor for the next cohort — proof that the sky was never the limit; it was the assignment.',
    ],
    starName: 'Hammad Ali',
    starRole: 'Creator & Founder, Reach Studio',
    city: 'Lahore',
    outcome: '1.2M followers · national keynotes',
    coverImage:
      'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1400&q=80',
    publishedAt: 'March 12, 2026',
    readMinutes: 4,
    tags: ['Creator', 'Stage', 'Fellowship'],
  },
  {
    id: 'story-2',
    slug: 'sara-khan-the-producer-who-built-the-room',
    title: 'The producer who built the room',
    excerpt:
      'Sara stopped freelancing chaos and started designing experiences that dignitaries still talk about.',
    body: [
      'Sara knew how to hustle a show. What she wanted was craft — the kind of producing that makes a summit feel inevitable, not improvised.',
      'Under Arsh’s guidance she ran logistics for a national conclave: guest flow, broadcast cues, and the quiet moments that make hosts look effortless. She learned that great events are empathy with a timeline.',
      'She now leads corporate and civic productions across Pakistan, hiring the same young crew she once stood among.',
    ],
    starName: 'Sara Khan',
    starRole: 'Event Producer',
    city: 'Islamabad',
    outcome: 'Leads national & corporate productions',
    coverImage:
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1400&q=80',
    publishedAt: 'February 28, 2026',
    readMinutes: 3,
    tags: ['Events', 'Production'],
  },
  {
    id: 'story-3',
    slug: 'bilal-ahmed-stage-fear-to-forty-keynotes',
    title: 'Stage fear to forty keynotes',
    excerpt:
      'Bilal’s voice shook on day one. By year two, organizers were booking him before the flyer went out.',
    body: [
      'Fear isn’t the enemy of a speaker — unprepared silence is. Bilal arrived convinced he wasn’t “a stage person.” Arsh treated that like a craft problem, not a personality flaw.',
      'Reps, feedback, and real rooms. First a fellowship pitch, then a panel, then a solo keynote that earned a standing pause — the quiet kind that means the room heard him.',
      'Forty-plus booked keynotes later, Bilal mentors speakers who think they’re “not ready.” He tells them what Arsh told him: readiness is built in public.',
    ],
    starName: 'Bilal Ahmed',
    starRole: 'Youth Mentor & Speaker',
    city: 'Karachi',
    outcome: '40+ keynotes booked',
    coverImage:
      'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1400&q=80',
    publishedAt: 'January 18, 2026',
    readMinutes: 5,
    tags: ['Speaking', 'Mentorship'],
  },
  {
    id: 'story-4',
    slug: 'ayesha-rehman-building-across-borders',
    title: 'Building a media house across borders',
    excerpt:
      'Ayesha left the cohort with more than a plan — she left with a network that opened Dubai and Karachi at once.',
    body: [
      'Ambition without rooms is just a mood board. Ayesha had the vision for a cross-border media studio; she needed introductions that weren’t cold LinkedIn asks.',
      'The mentorship put her in rooms with operators, not spectators. She refined her pitch, shipped a pilot series, and closed her first GCC partnership before the year turned.',
      'Her studio now runs dual-city productions — and she writes back whenever a new fellow asks if the leap is worth it.',
    ],
    starName: 'Ayesha Rehman',
    starRole: 'Media Entrepreneur',
    city: 'Dubai',
    outcome: 'Cross-border studio launched',
    coverImage:
      'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1400&q=80',
    publishedAt: 'December 9, 2025',
    readMinutes: 4,
    tags: ['Entrepreneurship', 'GCC'],
  },
];
