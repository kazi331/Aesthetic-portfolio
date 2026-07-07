import { Project, Stat, Service, SkillCategory, Testimonial, BlogPost, OpenSourceRepo } from '@/types/portfolio';

export const stats: Stat[] = [
  { id: 'exp', value: '08+', label: 'Years Experience' },
  { id: 'projects', value: '142', label: 'Projects Completed' },
  { id: 'stars', value: '2.1k', label: 'GitHub Stars' },
  { id: 'uptime', value: '99.9%', label: 'Production Uptime' },
];

export const projects: Project[] = [
  {
    title: 'Vanguard Trading Engine',
    slug: 'vanguard-trading-engine',
    description: 'A ultra-low latency order matching engine designed to process over 100k requests per second with microsecond execution guarantees.',
    featured: true,
    tags: ['Next.js', 'Rust', 'WebSockets', 'gRPC'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://github.com',
    category: 'Backend Infrastructure',
    impact: 'Reduced matching latency from 15ms to 840 microseconds.',
  },
  {
    title: 'Aether Distributed Cache',
    slug: 'aether-cache-node',
    description: 'A distributed memory storage key-value node featuring consistent hashing rings, active log-structured storage, and custom cluster election mechanics.',
    featured: true,
    tags: ['Go', 'Redis', 'Docker', 'Raft'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://github.com',
    category: 'System Engineering',
    impact: 'Boosted global content delivery speed by 210%.',
  },
  {
    title: 'Helios Metrics Panel',
    slug: 'helios-metrics-panel',
    description: 'A beautiful system-level telemetry board showcasing real-time CPU, RAM, and disk utilization through customized D3 coordinate mappings.',
    featured: true,
    tags: ['Next.js', 'D3.js', 'TypeScript', 'Tailwind'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://github.com',
    category: 'Frontend Engineering',
    impact: 'Eliminated external profiling dependency overhead.',
  },
  {
    title: 'Solana Smart Liquidity Router',
    slug: 'solana-liquidity-router',
    description: 'A highly modular routing algorithm analyzing split swaps across multiple Decentralized Exchanges to provide optimal execution pricing.',
    featured: true,
    tags: ['Rust', 'Solana SDK', 'React', 'Tailwind'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://github.com',
    category: 'Web3 & Finance',
    impact: 'Optimized capital efficiency swaps by 4.2%.',
  }
];

export const skillCategories: SkillCategory[] = [
  {
    category: 'Languages',
    skills: [
      { name: 'TypeScript', level: 98 },
      { name: 'Go (Golang)', level: 92 },
      { name: 'Rust', level: 86 },
      { name: 'Python', level: 88 },
      { name: 'SQL (PostgreSQL)', level: 94 },
    ],
  },
  {
    category: 'Frameworks & Frontend',
    skills: [
      { name: 'React', level: 96 },
      { name: 'Next.js', level: 95 },
      { name: 'Tailwind CSS', level: 98 },
      { name: 'D3.js', level: 84 },
      { name: 'Node.js', level: 92 },
    ],
  },
  {
    category: 'Infrastructure & DBs',
    skills: [
      { name: 'Docker & K8s', level: 88 },
      { name: 'PostgreSQL', level: 94 },
      { name: 'Redis Cache', level: 92 },
      { name: 'Google Cloud (GCP)', level: 85 },
      { name: 'Nginx & Proxying', level: 90 },
    ],
  },
];

export const services: Service[] = [
  {
    id: 'design-eng',
    title: 'Advanced Design Engineering',
    description: 'Forming gorgeous user experiences coupled with rigorous type verification. Merging layout grid dynamics with interactive vector rendering.',
    iconName: 'Layout',
    capabilities: [
      'Tailwind CSS Fluid Layout Layouts',
      'Complex D3.js Graphic Visualization',
      'Smooth Frame Animation Transitions',
      'Accessible, Inter-compatible Styling',
    ],
  },
  {
    id: 'dist-sys',
    title: 'Distributed Systems Architecture',
    description: 'Tuning cloud database storage execution nodes, setting up fast distributed cache meshes, and writing robust concurrent servers.',
    iconName: 'Cpu',
    capabilities: [
      'Rust Matching Engines & Microservices',
      'Go Concurrent Data Aggregators',
      'Fast Redis Cluster Integration',
      'Reliable WebSocket Pipeline Broadcasts',
    ],
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    role: 'VP of Product',
    company: 'Vanguard Trading',
    content: 'Alex transformed our trading app from a slow, flickering dashboard into a blazing fast, pixel-perfect powerhouse. His grasp of backend matching engine latency and layout mechanics is unparalleled.',
    avatarUrl: 'https://picsum.photos/seed/sarah/200/200',
  },
  {
    id: '2',
    name: 'David Chen',
    role: 'Principal Architect',
    company: 'Aether Network',
    content: 'The architectural design Alex delivered for our consistent hashing cache layer solved a 3-month performance bottleneck within three weeks. A truly exceptional full stack engineer.',
    avatarUrl: 'https://picsum.photos/seed/david/200/200',
  }
];

export const blogPosts: BlogPost[] = [
  {
    title: 'Optimizing React 19 for Low Latency Telemetry Displays',
    slug: 'optimizing-react-19-telemetry',
    description: 'An in-depth study on avoiding re-render cascades when streaming massive system resource statistics over WebSockets.',
    date: 'March 2024',
    readTime: '6 min read',
  },
  {
    title: 'A Post-Mortem on Distributed Hashing Ring Cache Failures',
    slug: 'distributed-hashing-ring-failures',
    description: 'A clean operational review of split-brain state scenarios in custom Raft consensus layers under heavy packet drop rates.',
    date: 'January 2024',
    readTime: '12 min read',
  }
];

export const openSourceProjects: OpenSourceRepo[] = [
  {
    name: 'ts-matching-engine',
    description: 'A clean, memory-efficient order matching utility library written in TypeScript with zero third-party requirements.',
    stars: 342,
    forks: 48,
    language: 'TypeScript',
    url: 'https://github.com',
  },
  {
    name: 'raft-go-lite',
    description: 'A compact and lightweight Raft-consensus framework written in Go, focusing on educational clarity and minimal operational code.',
    stars: 890,
    forks: 112,
    language: 'Go',
    url: 'https://github.com',
  },
  {
    name: 'tailwind-grid-editorial',
    description: 'A clean system plugin that extends Tailwind CSS to generate high-polish Swiss typography layouts and grid-ratios.',
    stars: 87,
    forks: 9,
    language: 'TypeScript',
    url: 'https://github.com',
  }
];
