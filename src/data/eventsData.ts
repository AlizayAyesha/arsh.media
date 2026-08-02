export interface SpeakerOrGuest {
  id: string;
  name: string;
  role: string;
  organization: string;
  titleBadge: 'Chief Guest of Honor' | 'Keynote Speaker' | 'Panelist' | 'Moderator' | 'Ministerial Guest';
  imageUrl: string;
  bio: string;
  topic?: string;
  linkedin?: string;
}

export interface UpcomingEvent {
  id: string;
  title: string;
  subtitle: string;
  category: 'Annual Summit' | 'AI & Broadcast Conclave' | 'Creator & Royalty Awards' | 'FinTech & Security Symposium';
  date: string;
  time: string;
  location: string;
  venue: string;
  city: 'Karachi' | 'Lahore' | 'Islamabad' | 'Dubai';
  badge: string;
  coverImage: string;
  description: string;
  highlights: string[];
  totalSeats: number;
  seatsRemaining: number;
  guestsAndSpeakers: SpeakerOrGuest[];
}

export const UPCOMING_EVENTS: UpcomingEvent[] = [
  {
    id: 'arsh-summit-2026',
    title: 'Arsh National Media & AI Summit 2026',
    subtitle: 'Shaping Pakistan & GCC Digital Broadcasting Infrastructure',
    category: 'Annual Summit',
    date: 'September 18, 2026',
    time: '10:00 AM - 06:00 PM PKT',
    location: 'Jinnah Convention Centre, Islamabad',
    venue: 'Main Plenary Auditorium & VIP Executive Lounge',
    city: 'Islamabad',
    badge: 'FLAGSHIP SUMMIT',
    coverImage: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1600&q=80',
    description: 'The annual gathering of Pakistan and GCC media directors, broadcast engineers, policy makers, and AI pioneers. Featuring the official unveiling of Arsh Media’s 8-Ecosystem interconnect and zero-latency Urdu neural dubbing.',
    highlights: [
      'Ministerial Keynote on Pakistan Digital Broadcasting Policy',
      'Live Demo: Zero-Latency Urdu & Arabic Neural AI Dubbing',
      'Signing Ceremony: 10 Gbps Fiber CDN Interconnect across 48+ Nodes',
      'Executive Gala Luncheon & Networking'
    ],
    totalSeats: 1200,
    seatsRemaining: 184,
    guestsAndSpeakers: [
      {
        id: 'g1',
        name: 'H.E. Senator Dr. Taimur Shahzain',
        role: 'Federal Minister of IT & Telecom',
        organization: 'Government of Pakistan',
        titleBadge: 'Chief Guest of Honor',
        imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80',
        bio: 'Leading National Digital Sovereignty and high-capacity fiber expansion across Pakistan and GCC trade corridors.',
        topic: 'Inaugural Address: Digital Pakistan & Autonomous Media Infrastructure'
      },
      {
        id: 'g2',
        name: 'Arshman Ali Khan',
        role: 'Founder & Chairman',
        organization: 'Arsh Media Conglomerate',
        titleBadge: 'Keynote Speaker',
        imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80',
        bio: 'Visionary architect of the Arsh Media 8-Ecosystem platform, pioneering AI media automation and regional creator monetization.',
        topic: 'Architecting the Next Decade of Broadcast & On-Device ML'
      },
      {
        id: 'g3',
        name: 'Dr. Ayesha Qureshi',
        role: 'Chief AI Scientist',
        organization: 'Arsh Neural AI Labs Islamabad',
        titleBadge: 'Keynote Speaker',
        imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80',
        bio: 'Former senior research scientist in generative speech synthesis, leading Urdu Nastaliq acoustics and neural translation models.',
        topic: 'Zero-Shot Voice Cloning & Regional Pakistani Dialect Preservation'
      },
      {
        id: 'g4',
        name: 'Sultan Al-Maktoum Al-Suwaidi',
        role: 'Managing Director, GCC Media Investments',
        organization: 'Dubai Future Foundation',
        titleBadge: 'Ministerial Guest',
        imageUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=500&q=80',
        bio: 'Overseeing cross-border media technology investments between UAE, Saudi Arabia, and Pakistani tech hubs.',
        topic: 'GCC - Pakistan Media Interconnect & Content Exchange'
      }
    ]
  },
  {
    id: 'ai-dubbing-conclave',
    title: 'Arsh AI Broadcast & Neural Dubbing Conclave',
    subtitle: 'Real-Time Multi-Language Translation for Pakistani TV & VOD',
    category: 'AI & Broadcast Conclave',
    date: 'October 04, 2026',
    time: '02:00 PM - 08:30 PM PKT',
    location: 'Pearl-Continental Grand Ballroom, Lahore',
    venue: 'Executive Plenary & Media Broadcast Lab',
    city: 'Lahore',
    badge: 'AI & BROADCAST',
    coverImage: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1600&q=80',
    description: 'An exclusive technical symposium for television network heads, directors, and AI researchers. Witness live demonstrations of Arsh AI Media Studio translating live sports and news feeds into Urdu, Sindhi, Pashto, and Arabic within 18 milliseconds.',
    highlights: [
      'Live Sports Commentary Translation Showcase',
      'Panel: Preserving Regional Nastaliq Aesthetics in AI Subtitles',
      'On-Device Edge ML: Running Speech AI on Consumer Smartphones',
      'VIP Speaker Meet & Greet Dinner'
    ],
    totalSeats: 450,
    seatsRemaining: 62,
    guestsAndSpeakers: [
      {
        id: 'g5',
        name: 'Tariq Mehmood Nizami',
        role: 'Director General of Broadcasting',
        organization: 'Pakistan National Television (PTV)',
        titleBadge: 'Chief Guest of Honor',
        imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=500&q=80',
        bio: '40-year broadcast veteran driving the digital transformation of Pakistan’s national media archives and live feeds.',
        topic: 'The Future of Public Broadcasting in an AI-Driven Era'
      },
      {
        id: 'g6',
        name: 'Farah Zulkifl',
        role: 'VP of Platform Architecture',
        organization: 'Arsh Media Central Hub',
        titleBadge: 'Keynote Speaker',
        imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=500&q=80',
        bio: 'Architect of the 142-pod microservice infrastructure handling 18,000+ telemetry events per second across Pakistan & GCC.',
        topic: 'Engineering Sub-40ms Live Video Ad Insertion & Caching'
      },
      {
        id: 'g7',
        name: 'Hamza Shahzad',
        role: 'Lead Embedded AI Engineer',
        organization: 'Arsh Neural Edge',
        titleBadge: 'Panelist',
        imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80',
        bio: 'Specialist in 4-bit model quantization for consumer ARM smartphones and field broadcast cameras.',
        topic: 'Offline AI Transcription for Remote Pakistani News Teams'
      }
    ]
  },
  {
    id: 'creator-royalty-gala',
    title: 'Arsh National Creator & Royalty Excellence Awards',
    subtitle: 'Honoring Top 100 Pakistani Digital Creators & Production Houses',
    category: 'Creator & Royalty Awards',
    date: 'November 12, 2026',
    time: '06:00 PM - 11:00 PM PKT',
    location: 'Mohatta Palace Gardens, Karachi',
    venue: 'Royal Amphitheater & VIP Banquet Hall',
    city: 'Karachi',
    badge: 'ROYAL GALA & AWARDS',
    coverImage: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1600&q=80',
    description: 'A distinguished black-tie gala celebrating Pakistan’s most impactful digital creators, directors, and production houses. Highlighting over 380 Million PKR in automated Raast royalty distributions via Arsh Creator Foundry.',
    highlights: [
      'Award Presentation: Digital Director & Creator of the Year',
      'Live Musical Performance with AI Stage Visuals',
      'Keynote: Transparent Royalty Splits & Copyright ID via Arsh Engine',
      'VIP Red Carpet & Press Interviews'
    ],
    totalSeats: 800,
    seatsRemaining: 95,
    guestsAndSpeakers: [
      {
        id: 'g8',
        name: 'Syed Zulfiqar Bukhari',
        role: 'Executive Director of Arts & Heritage',
        organization: 'National Arts Endowment',
        titleBadge: 'Chief Guest of Honor',
        imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500&q=80',
        bio: 'Patron of Pakistani cultural arts, cinema restoration, and international media diplomacy.',
        topic: 'Empowering Pakistan’s Creative Economy on the World Stage'
      },
      {
        id: 'g9',
        name: 'Mahnoor Kazmi',
        role: 'Head of Creator Foundry',
        organization: 'Arsh Creator & Talent Suite',
        titleBadge: 'Keynote Speaker',
        imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80',
        bio: 'Managed the onboarding of 3,800+ verified Pakistani talent teams and instant Raast bank settlements.',
        topic: 'Automated 3-Way Royalty Splits for Directors, Talent & Houses'
      },
      {
        id: 'g10',
        name: 'Ali Raza Chughtai',
        role: 'Senior Executive Producer',
        organization: 'Chughtai Film Studio Karachi',
        titleBadge: 'Panelist',
        imageUrl: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=500&q=80',
        bio: 'Producer of 14 acclaimed Pakistani drama serials and digital feature documentaries.',
        topic: 'Why Production Houses Rely on Arsh Copyright Protection'
      }
    ]
  },
  {
    id: 'fintech-security-symposium',
    title: 'Arsh FinTech, Raast & Zero-Trust Security Symposium',
    subtitle: 'High-Throughput Digital Payments for Subscription & Media',
    category: 'FinTech & Security Symposium',
    date: 'December 05, 2026',
    time: '09:30 AM - 04:00 PM PKT',
    location: 'Marriott Executive Hall, Karachi',
    venue: 'Financial Technology Enclave & Secure Pods',
    city: 'Karachi',
    badge: 'FINTECH & SECURITY',
    coverImage: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=1600&q=80',
    description: 'An executive round-table examining instant State Bank Raast API integration, biometric passkey authentication, and cryptographic zero-trust architectures for media micro-transactions across Pakistan and GCC.',
    highlights: [
      'Keynote: State Bank Raast API v2 for Instant Creator Tips',
      'Technical Workshop: Biometric Passkey SSO across 8 Ecosystems',
      'Panel: AI Risk Detection & Fraud Prevention in Media Subscriptions',
      'Networking with Bank & Fintech Directors'
    ],
    totalSeats: 300,
    seatsRemaining: 41,
    guestsAndSpeakers: [
      {
        id: 'g11',
        name: 'Dr. Jameel Ahmed Siddiqui',
        role: 'Executive Director of Digital Banking',
        organization: 'State Banking Authority Pakistan',
        titleBadge: 'Chief Guest of Honor',
        imageUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=500&q=80',
        bio: 'Leading the national rollout of Raast instant payments and open banking APIs for enterprise conglomerates.',
        topic: 'The Strategic Roadmap of National Instant Payments'
      },
      {
        id: 'g12',
        name: 'Saad Al-Maktoum',
        role: 'Chief Security Officer',
        organization: 'Arsh Secure Identity & FinTech Gate',
        titleBadge: 'Keynote Speaker',
        imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80',
        bio: 'Expert in FIPS 140-3 hardware security modules and zero-trust identity architectures.',
        topic: 'Frictionless 1-Click Pay & Biometric Passkey SSO'
      }
    ]
  }
];
