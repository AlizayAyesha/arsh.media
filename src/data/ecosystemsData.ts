export interface MetricItem {
  label: string;
  value: string;
  change: string;
  isPositive: boolean;
}

export interface EcosystemPlatform {
  id: string;
  number: string;
  name: string;
  tagline: string;
  category: 'AI & ML' | 'Media & Broadcast' | 'Enterprise Hub' | 'Mobile & Apps' | 'Creator & FinTech';
  description: string;
  longDescription: string;
  iconName: string;
  accentColor: string;
  badge: string;
  metrics: MetricItem[];
  technologies: string[];
  keyFeatures: {
    title: string;
    desc: string;
  }[];
  architectureLayer: 'Edge & Inference Layer' | 'Core Orchestration' | 'Distribution & CDN' | 'User Experience & Client';
  liveDemoType: 'ai-studio' | 'analytics-pulse' | 'mobile-superapp' | 'enterprise-hub' | 'neural-edge' | 'broadcast-cdn' | 'creator-foundry' | 'fintech-gate';
  regionalNodes: string[];
}

export const ARSH_ECOSYSTEMS: EcosystemPlatform[] = [
  {
    id: 'enterprise-hub',
    number: '01',
    name: 'Arsh Central Enterprise Hub',
    tagline: 'Unified Command & Multi-Tenant Orchestration',
    category: 'Enterprise Hub',
    description: 'The central nervous system of Arsh Media, managing cross-platform telemetry, user authorization, and real-time media workflow orchestration across 8 integrated ecosystems.',
    longDescription: 'Arsh Central Enterprise Hub delivers a unified control plane for media conglomerates, broadcasters, and AI product teams. Engineered with zero-latency event buses and automated microservice routing.',
    iconName: 'LayoutGrid',
    accentColor: 'from-emerald-500 to-teal-400',
    badge: 'Core Command',
    metrics: [
      { label: 'Active Micro-Services', value: '142', change: '+12% MoM', isPositive: true },
      { label: 'Event Routing Latency', value: '18ms', change: '-4ms opt', isPositive: true },
      { label: 'System Uptime', value: '99.994%', change: 'SLA Tier 1', isPositive: true },
    ],
    technologies: ['Next.js 15', 'FastAPI', 'Redis Cluster', 'Kafka', 'PostgreSQL', 'Docker'],
    keyFeatures: [
      { title: 'Unified Identity & RBAC', desc: 'Centralized OAuth2 / OpenID Connect with multi-region tenant isolation.' },
      { title: 'Real-Time Telemetry Bus', desc: 'Live WebSocket monitoring across Karachi, Lahore, Islamabad, and cloud nodes.' },
      { title: 'Automated Failover', desc: 'Self-healing service routing with automatic failover in < 250ms.' }
    ],
    architectureLayer: 'Core Orchestration',
    liveDemoType: 'enterprise-hub',
    regionalNodes: ['Karachi Core-1', 'Lahore Edge', 'Islamabad HQ', 'Dubai ME-West']
  },
  {
    id: 'ai-studio',
    number: '02',
    name: 'Arsh AI Media & VFX Studio',
    tagline: 'Generative AI Broadcasting & Neural Rendering',
    category: 'AI & ML',
    description: 'Next-generation AI media production suite featuring automated broadcast graphics, neural video synthesis, real-time Urdu/English dubbing, and VFX enhancements.',
    longDescription: 'Powered by Gemini models and bespoke neural rendering pipelines, Arsh AI Media Studio automates up to 80% of repetitive broadcast editing tasks while delivering broadcast-grade 4K output.',
    iconName: 'Sparkles',
    accentColor: 'from-emerald-400 to-green-500',
    badge: 'AI Flagship',
    metrics: [
      { label: 'Render Speedup', value: '6.4x', change: 'vs standard GPU', isPositive: true },
      { label: 'Urdu Neural Dubbing', value: '99.1%', change: 'Acoustic accuracy', isPositive: true },
      { label: 'Daily GenAI Output', value: '1,450+ hrs', change: '+38% growth', isPositive: true },
    ],
    technologies: ['Gemini 1.5 Pro', 'PyTorch', 'ONNX Runtime', 'WebGPU', 'FFmpeg AI', 'Tailwind CSS'],
    keyFeatures: [
      { title: 'Neural Urdu & Regional Dubbing', desc: 'Zero-shot voice cloning with authentic Pakistani regional dialect preservation.' },
      { title: 'Real-Time Broadcast Tickers', desc: 'AI-generated breaking news overlays with automated sentiment and fact verification.' },
      { title: '4K Upscaling & De-Noising', desc: 'Frame-by-frame temporal super-resolution for archival Pakistani television footage.' }
    ],
    architectureLayer: 'Edge & Inference Layer',
    liveDemoType: 'ai-studio',
    regionalNodes: ['Islamabad AI Lab', 'Karachi GPU Cluster', 'Singapore CDN']
  },
  {
    id: 'mobile-superapp',
    number: '03',
    name: 'Arsh Mobile SuperApp Engine',
    tagline: 'Cross-Platform Native Experience & Mini-Apps',
    category: 'Mobile & Apps',
    description: 'A modular mobile application architecture enabling instant mini-app deployment, offline-first media synchronization, and 120fps fluid gestures.',
    longDescription: 'Arsh Mobile SuperApp Engine empowers consumers and creators with a single super-app shell that dynamically loads content, live streams, interactive voting, and local commerce.',
    iconName: 'Smartphone',
    accentColor: 'from-teal-400 to-emerald-500',
    badge: 'Mobile Core',
    metrics: [
      { label: 'Active Mobile Users', value: '4.8M', change: '+24% YoY', isPositive: true },
      { label: 'Cold Start Speed', value: '410ms', change: 'Optimized bundle', isPositive: true },
      { label: 'Crash-Free Sessions', value: '99.88%', change: 'iOS & Android', isPositive: true },
    ],
    technologies: ['React Native', 'Flutter Core', 'SQLite Offline', 'WebRTC Mobile', 'Tailwind UI', 'Expo'],
    keyFeatures: [
      { title: 'Instant Mini-App Sandboxing', desc: 'Deploy new media widgets and interactive polls without App Store review cycles.' },
      { title: 'Offline-First Media Buffer', desc: 'Smart predictive caching for seamless playback across variable Pakistani mobile networks.' },
      { title: 'Haptic UI Feedback', desc: 'Custom micro-animations and cyber-lux tactile feedback across all touch gestures.' }
    ],
    architectureLayer: 'User Experience & Client',
    liveDemoType: 'mobile-superapp',
    regionalNodes: ['Karachi Mobile Edge', 'Lahore App-CDN', 'Faisalabad Relay']
  },
  {
    id: 'analytics-pulse',
    number: '04',
    name: 'Arsh Pulse Analytics Suite',
    tagline: 'Predictive Virality Modeling & Audience Intelligence',
    category: 'AI & ML',
    description: 'Real-time audience analytics platform with sub-second engagement heatmaps, demographic clustering, and AI-driven predictive virality scoring.',
    longDescription: 'Pulse processes over 18,000 media events per second across streaming apps and social platforms, giving Arsh Media producers real-time visibility into audience attention spans.',
    iconName: 'Activity',
    accentColor: 'from-green-400 to-emerald-600',
    badge: 'Real-Time Data',
    metrics: [
      { label: 'Events / Second', value: '18.4K', change: 'Sub-second sync', isPositive: true },
      { label: 'Virality Prediction', value: '91.4%', change: 'ML Confidence', isPositive: true },
      { label: 'Data Retention', value: '365 Days', change: 'Hot & Cold Tier', isPositive: true },
    ],
    technologies: ['ClickHouse', 'Apache Flink', 'Next.js Dashboard', 'D3 / Recharts', 'Python ML', 'GraphQL'],
    keyFeatures: [
      { title: 'Real-Time Engagement Heatmaps', desc: 'Second-by-second drop-off analysis across live broadcast and video-on-demand.' },
      { title: 'Predictive Trend Radar', desc: 'Detect emerging viral topics in Pakistani and international media 4 hours before peak.' },
      { title: 'Sponsor Value Attribution', desc: 'Automated ROI tracking for brand integrations and live on-screen placements.' }
    ],
    architectureLayer: 'Core Orchestration',
    liveDemoType: 'analytics-pulse',
    regionalNodes: ['Karachi BigData-1', 'Lahore Analytics Cluster', 'Dubai Backup']
  },
  {
    id: 'neural-edge',
    number: '05',
    name: 'Arsh Neural Edge & On-Device ML',
    tagline: 'Zero-Latency Local Speech & Vision AI',
    category: 'AI & ML',
    description: 'Ultra-lightweight edge ML models running directly on consumer smartphones and field broadcast cameras for zero-latency transcription and scene recognition.',
    longDescription: 'By shifting inference to the edge, Arsh Neural Edge reduces server bandwidth costs by 65% while providing instant Urdu/English speech-to-text even without an internet connection.',
    iconName: 'Cpu',
    accentColor: 'from-emerald-300 to-teal-500',
    badge: 'Edge AI',
    metrics: [
      { label: 'Model Footprint', value: '14.8MB', change: '4-bit quant', isPositive: true },
      { label: 'On-Device Latency', value: '24ms', change: 'NPU Accelerated', isPositive: true },
      { label: 'Offline Accuracy', value: '96.2%', change: 'Urdu & English', isPositive: true },
    ],
    technologies: ['TensorFlow Lite', 'CoreML', 'NNAPI', 'WebAssembly', 'C++ Edge Core', 'Rust'],
    keyFeatures: [
      { title: 'Offline Speech Transcription', desc: 'Real-time subtitling for field reporters and citizen journalists in remote regions.' },
      { title: 'Smart Scene Tagging', desc: 'Automated metadata generation for instant media indexing and search.' },
      { title: 'Privacy-First Architecture', desc: 'Raw audio and camera feeds never leave the user device unless explicitly shared.' }
    ],
    architectureLayer: 'Edge & Inference Layer',
    liveDemoType: 'neural-edge',
    regionalNodes: ['Distributed On-Device NPU', 'Karachi Edge Gateway', 'Lahore AI Gateway']
  },
  {
    id: 'broadcast-cdn',
    number: '06',
    name: 'Arsh Cloud Broadcast Network',
    tagline: '24/7 Automated CDN Streaming & Ad Insertion',
    category: 'Media & Broadcast',
    description: 'High-throughput content delivery network optimized for Pakistani fiber & 4G/5G infrastructure, featuring dynamic server-side ad insertion and WebRTC low latency.',
    longDescription: 'Delivering buffer-free streaming to millions of concurrent viewers during major national events, cricket leagues, and prime-time news broadcasts.',
    iconName: 'Radio',
    accentColor: 'from-teal-500 to-emerald-400',
    badge: 'Live Broadcast',
    metrics: [
      { label: 'Peak Concurrent Streamers', value: '2.1M', change: 'Zero drop rate', isPositive: true },
      { label: 'Glass-to-Glass Latency', value: '1.2s', change: 'WebRTC Ultra-Low', isPositive: true },
      { label: 'CDN Edge Nodes', value: '48+', change: 'Pakistan + GCC', isPositive: true },
    ],
    technologies: ['SRT / HLS / WebRTC', 'Nginx RTMPS', 'AWS CloudFront + Local ISP Peers', 'Go Microservices', 'Kubernetes'],
    keyFeatures: [
      { title: 'Server-Side Dynamic Ad Insertion', desc: 'Targeted programmatic ads stitched directly into video streams without buffering.' },
      { title: 'Adaptive Bitrate Optimization', desc: 'Custom codecs designed for stable streaming across 3G, 4G, and fiber connections.' },
      { title: 'Automated Clipping & Highlight Reels', desc: 'AI automatically clips key broadcast moments and publishes to social media within 15 seconds.' }
    ],
    architectureLayer: 'Distribution & CDN',
    liveDemoType: 'broadcast-cdn',
    regionalNodes: ['Karachi IXP', 'Lahore Core CDN', 'Islamabad IXP', 'Multan Edge', 'Peshawar Node']
  },
  {
    id: 'creator-foundry',
    number: '07',
    name: 'Arsh Creator & Talent Foundry',
    tagline: 'Creator Monetization & Automated Rights Management',
    category: 'Creator & FinTech',
    description: 'Empowering Pakistan’s premier digital creators with automated royalty splits, cross-platform publishing, rights protection, and direct brand sponsorship matching.',
    longDescription: 'The Creator Foundry bridges the gap between creative talent and commercial revenue, managing digital rights across YouTube, TikTok, Facebook, and Arsh Apps seamlessly.',
    iconName: 'Users',
    accentColor: 'from-emerald-400 to-amber-400',
    badge: 'Creator Economy',
    metrics: [
      { label: 'Onboarded Creators', value: '3,800+', change: 'Verified talent', isPositive: true },
      { label: 'Monthly Payouts Distributed', value: '380M+ PKR', change: '+31% YoY', isPositive: true },
      { label: 'Copyright Protection Rate', value: '99.9%', change: 'Automated DMCA/ID', isPositive: true },
    ],
    technologies: ['Node.js', 'PostgreSQL', 'YouTube ContentID API', 'Stripe & IBAN Payouts', 'React Admin'],
    keyFeatures: [
      { title: 'Automated Royalty Split Engine', desc: 'Instant revenue distribution between directors, talent, writers, and production houses.' },
      { title: 'AI Sponsorship Matchmaker', desc: 'Connects Pakistani brands with creators based on verified demographic fit and sentiment.' },
      { title: 'Cross-Platform Syndication', desc: 'One-click publishing to 10+ social platforms with automatic aspect ratio formatting.' }
    ],
    architectureLayer: 'User Experience & Client',
    liveDemoType: 'creator-foundry',
    regionalNodes: ['Lahore Creator Studio', 'Karachi Talent Hub', 'Islamabad Media Lab']
  },
  {
    id: 'fintech-gate',
    number: '08',
    name: 'Arsh Secure Identity & FinTech Gate',
    tagline: 'Enterprise SSO & Regional Payment Infrastructure',
    category: 'Creator & FinTech',
    description: 'Unified identity verification, biometric authentication, and local Pakistani payment gateway integration (Raast, JazzCash, EasyPaisa, Bank IBAN) for seamless transactions.',
    longDescription: 'Providing frictionless 1-click checkout for premium media subscriptions, pay-per-view events, and creator tips with enterprise-grade cryptographic security.',
    iconName: 'ShieldCheck',
    accentColor: 'from-amber-400 to-emerald-500',
    badge: 'Security & Pay',
    metrics: [
      { label: 'Payment Success Rate', value: '98.7%', change: 'Raast / Cards / Wallets', isPositive: true },
      { label: 'Auth verification time', value: '< 180ms', change: 'Biometric SSO', isPositive: true },
      { label: 'Fraud Prevention Rate', value: '99.98%', change: 'AI Risk Engine', isPositive: true },
    ],
    technologies: ['OAuth2 / OIDC', 'Raast API', 'JazzCash / EasyPaisa SDK', 'Zero-Trust JWT', 'Hardware Security Modules'],
    keyFeatures: [
      { title: 'Raast & Mobile Wallet Deep Integration', desc: 'Instant settlement across all major Pakistani banking and mobile money platforms.' },
      { title: 'Biometric & Passkey SSO', desc: 'Passwordless login across the entire 8-ecosystem suite with military-grade encryption.' },
      { title: 'AI Fraud Shield', desc: 'Real-time anomaly detection preventing subscription abuse and unauthorized micro-transactions.' }
    ],
    architectureLayer: 'Core Orchestration',
    liveDemoType: 'fintech-gate',
    regionalNodes: ['Karachi Secure Enclave', 'Islamabad Financial Relay', 'Dubai FinTech Node']
  }
];

export const SYSTEM_ARCHITECTURE_LAYERS = [
  {
    name: 'User Experience & Client',
    description: 'React, Next.js, Flutter & React Native interfaces serving 14M+ active viewers & creators.',
    color: 'border-emerald-500/50 bg-emerald-950/20 text-emerald-300',
    ecosystems: ['Arsh Mobile SuperApp Engine', 'Arsh Creator & Talent Foundry']
  },
  {
    name: 'Core Orchestration & Security',
    description: 'FastAPI / Node.js event buses, Identity SSO, FinTech gateway & Pulse real-time analytics.',
    color: 'border-teal-500/50 bg-teal-950/20 text-teal-300',
    ecosystems: ['Arsh Central Enterprise Hub', 'Arsh Pulse Analytics Suite', 'Arsh Secure Identity & FinTech Gate']
  },
  {
    name: 'Edge & AI Inference Layer',
    description: 'On-device ML, Gemini 1.5 Pro rendering pipelines, and low-latency Urdu neural dubbing.',
    color: 'border-green-500/50 bg-green-950/20 text-green-300',
    ecosystems: ['Arsh AI Media & VFX Studio', 'Arsh Neural Edge & On-Device ML']
  },
  {
    name: 'Distribution & CDN',
    description: '48+ Pakistan & GCC edge servers, WebRTC ultra-low latency, and dynamic ad stitching.',
    color: 'border-amber-500/40 bg-amber-950/20 text-amber-300',
    ecosystems: ['Arsh Cloud Broadcast Network']
  }
];

export const REGIONAL_NODES_DATA = [
  { city: 'Karachi HQ & Core-1', type: 'Primary Data Center & AI Cluster', status: 'ONLINE', latency: '6ms', load: '64%' },
  { city: 'Lahore Media Node', type: 'Creator Hub & App CDN', status: 'ONLINE', latency: '11ms', load: '58%' },
  { city: 'Islamabad AI Lab', type: 'Neural R&D & Govt Relay', status: 'ONLINE', latency: '14ms', load: '42%' },
  { city: 'Faisalabad Edge', type: 'Regional ISP Streaming Peer', status: 'ONLINE', latency: '18ms', load: '38%' },
  { city: 'Dubai GCC-West', type: 'Global Backup & FinTech Node', status: 'ONLINE', latency: '28ms', load: '51%' },
  { city: 'Singapore Edge', type: 'Asia-Pacific CDN Gateway', status: 'ONLINE', latency: '44ms', load: '49%' },
];

export interface ArchitectureLayerDetail {
  id: string;
  number: string;
  title: string;
  badge: string;
  description: string;
  modules: string[];
  techList: string[];
}

export const ARCHITECTURE_LAYERS: ArchitectureLayerDetail[] = [
  {
    id: 'layer-4',
    number: '04',
    title: 'User Experience & Sovereign Client Layer',
    badge: 'UX & Multi-Device',
    description: 'Delivering ultra-responsive web, mobile, and smart-TV experiences to over 14 million citizens, delegates, and journalists across Pakistan and the GCC.',
    modules: [
      'Arsh SuperApp Flutter & React Native Client',
      'Urdu & English Bi-directional Dynamic RTL Renderer',
      'Adaptive Bitrate Player with Live Keynote Dubbing',
      'Offline-First Delegate Pass & RSVP Wallet'
    ],
    techList: ['React 19', 'Next.js', 'Flutter', 'Tailwind CSS', 'WebRTC', 'HLS.js']
  },
  {
    id: 'layer-3',
    number: '03',
    title: 'Core Orchestration, Security & FinTech Gate',
    badge: 'API & Identity',
    description: 'The real-time telemetry, identity federation, and transaction clearinghouse that coordinates all 8 Arsh Media ecosystems.',
    modules: [
      'Enterprise SSO & PKI Digital Badge Issuer',
      'Raast & 1-Link Banking Settlement Bridge',
      'Zero-Latency Microservice Event Router',
      'Real-time PEMRA Broadcast Regulatory Auditing'
    ],
    techList: ['Node.js', 'PostgreSQL', 'Redis Cluster', 'OAuth2/OIDC', 'Raast API', 'Kafka']
  },
  {
    id: 'layer-2',
    number: '02',
    title: 'Edge AI Inference & Neural Studio Layer',
    badge: 'Sovereign AI',
    description: 'On-device and sovereign data-center AI pipelines providing instant news categorization, automated Urdu dubbing, and keynote sentiment analytics.',
    modules: [
      'Gemini 1.5 Pro & On-Prem Neural Inference Cluster',
      'Real-Time Urdu-to-English Keynote Translation Engine',
      'Automated Video Segmentation & Highlights Extractor',
      'Deepfake & Media Authenticity Verification Seal'
    ],
    techList: ['Google GenAI SDK', 'PyTorch', 'TensorRT', 'FFmpeg Neural Pipeline', 'CUDA']
  },
  {
    id: 'layer-1',
    number: '01',
    title: 'Distributed CDN & Pakistani Bare-Metal Edge',
    badge: 'Bare-Metal Infra',
    description: 'Sovereign physical infrastructure spanning Islamabad, Lahore, Karachi, Faisalabad, and Dubai for zero-buffer streaming and data residency.',
    modules: [
      '48+ Pakistan-Wide Low-Latency CDN Peering Points',
      'Anycast DNS & Sovereign DDoS Shield',
      'Direct PTCL / Nayatel / Jazz Optical Peering',
      'Hardware Security Module (HSM) Vaults'
    ],
    techList: ['Nginx Edge', 'BGP Anycast', '100GbE Fiber Ring', 'Kubernetes Bare-Metal', 'Ceph Storage']
  }
];

export interface RegionalNodeDetail {
  id: string;
  city: string;
  type: string;
  capacity: string;
  latency: string;
  role: string;
}

export const REGIONAL_NODES: RegionalNodeDetail[] = [
  {
    id: 'node-khi',
    city: 'Karachi HQ & Core-1',
    type: 'PRIMARY DATA CENTER',
    capacity: '120 Gbps / 400 Nodes',
    latency: '4ms local / 11ms inter-city',
    role: 'Central Broadcast Hub & FinTech Clearing Enclave'
  },
  {
    id: 'node-lhr',
    city: 'Lahore Creator & Studio Node',
    type: 'CDN & STUDIO HUB',
    capacity: '80 Gbps / 240 Nodes',
    latency: '6ms local / 14ms inter-city',
    role: 'AI Media Studio Rendering & Punjab Content Distribution'
  },
  {
    id: 'node-isb',
    city: 'Islamabad Federal AI Relay',
    type: 'SOVEREIGN R&D CLUSTER',
    capacity: '60 Gbps / 180 Nodes',
    latency: '5ms local / 15ms inter-city',
    role: 'Ministerial Protocol, Summit Broadcast & Security Relay'
  },
  {
    id: 'node-dxb',
    city: 'Dubai GCC-West Relay',
    type: 'INTERNATIONAL PEER',
    capacity: '100 Gbps / 120 Nodes',
    latency: '24ms from Karachi',
    role: 'GCC Delegation Bridge & Overseas Pakistani Broadcast Hub'
  }
];

export interface TechStackCategory {
  id: string;
  name: string;
  items: {
    name: string;
    tier: string;
    purpose: string;
  }[];
}

export const TECH_STACK_CATEGORIES: TechStackCategory[] = [
  {
    id: 'AI_STUDIO',
    name: 'Sovereign AI & Neural Broadcast',
    items: [
      { name: 'Google Gemini 1.5 Pro', tier: 'LLM CORE', purpose: 'Multimodal news synthesis, Urdu summarization, and speaker sentiment analytics.' },
      { name: 'Arsh Neural Dubber', tier: 'SPEECH AI', purpose: 'Real-time Urdu/English keynote audio translation and voice cloning.' },
      { name: 'FFmpeg Vision Pipeline', tier: 'MEDIA AI', purpose: 'Automated highlights extraction and broadcast quality enhancement.' }
    ]
  },
  {
    id: 'CLOUD_INFRA',
    name: 'Distributed Cloud & Pakistani Bare-Metal',
    items: [
      { name: 'Kubernetes Bare-Metal', tier: 'ORCHESTRATION', purpose: 'Containerized deployment across Karachi, Lahore, and Islamabad data centers.' },
      { name: 'PostgreSQL & Citus Ring', tier: 'DATABASE', purpose: 'High-concurrency civic registry and summit RSVP ticket database.' },
      { name: 'Redis Edge Cache', tier: 'IN-MEMORY', purpose: 'Sub-millisecond session tokens and live summit delegate rosters.' }
    ]
  },
  {
    id: 'SECURITY_PAY',
    name: 'Zero-Trust Identity & FinTech Gateway',
    items: [
      { name: 'Raast & 1-Link SDK', tier: 'BANKING', purpose: 'Direct Pakistani inter-bank settlement and QR-based instant payments.' },
      { name: 'Zero-Trust OAuth2 PKI', tier: 'IDENTITY', purpose: 'Cryptographic delegate badge verification and ministerial SSO.' },
      { name: 'Hardware Security Modules', tier: 'CRYPTO', purpose: 'Sovereign private key storage for PEMRA and regulatory audit trails.' }
    ]
  }
];
