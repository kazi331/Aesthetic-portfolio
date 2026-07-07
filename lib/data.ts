import { Project, Stat, Service, SkillCategory, Testimonial, BlogPost, OpenSourceRepo, WorkExperience, Education, Reference, PersonalInfo } from '@/types/portfolio';

export const personalInfo: PersonalInfo = {
  name: 'Kazi Shariful Islam',
  title: 'Full Stack Developer',
  location: 'Mirpur, Dhaka, Bangladesh',
  email: 'kazisharif.dev@gmail.com',
  phone: '+8801612-178331',
  github: 'https://github.com/kazi331',
  linkedin: 'https://linkedin.com/in/kazi331',
  website: 'https://kazisharif.dev',
  summary: 'Full Stack Developer with 3+ years of experience building scalable web applications across the stack — from React/Next.js frontends to Node.js and NestJS backends with PostgreSQL and Prisma ORM. Solo-architected and shipped a production Shopify app to the Shopify App Store. Comfortable across REST/GraphQL APIs, relational database design, and modern state management, with growing hands-on experience in Python and FastAPI.'
};

export const stats: Stat[] = [
  { id: 'exp', value: '03+', label: 'Years Experience' },
  { id: 'projects', value: '12+', label: 'Projects Completed' },
  { id: 'perf', value: '+60%', label: 'Performance Gain' },
  { id: 'roundtrips', value: '-40%', label: 'API Roundtrips' },
];

export const projects: Project[] = [
  {
    title: 'Mixory Bundles — Shopify App',
    slug: 'mixory-bundles',
    description: 'Solo-built revenue-driving product bundle app for Shopify merchants, spanning database design to storefront UI. Features full-stack architecture with PostgreSQL, Prisma, Node.js backend logic, and dynamic storefront elements.',
    featured: true,
    tags: ['Node.js', 'Prisma', 'PostgreSQL', 'Shopify Functions', 'React'],
    githubUrl: 'https://github.com/kazi331',
    liveUrl: 'https://mixory-bundles.com',
    category: 'Shopify Ecosystem',
    impact: 'Built custom Shopify Functions in Node.js supporting dynamic pricing rules and discount cart transforms.',
  },
  {
    title: 'EdTech Learning Platform',
    slug: 'edtech-platform',
    description: 'A comprehensive academic portal featuring robust course search/filters, enrollment systems, progress trackers, real-time instructor chat, and a custom administrative management console.',
    featured: true,
    tags: ['Next.js 14', 'Redux', 'TanStack Query', 'NestJS', 'Tailwind CSS'],
    githubUrl: 'https://github.com/kazi331',
    liveUrl: 'https://tutorsplan.com',
    category: 'Full Stack Web',
    impact: 'Implemented global caching using TanStack Query and Redux, eliminating over 40% of redundant API round-trips.',
  },
  {
    title: 'Maison: The Property App',
    slug: 'maison-property',
    description: 'An immersive and interactive mobile application for real estate listing, document upload, security authentication, and automated notification alerts.',
    featured: true,
    tags: ['React Native', 'Redux', 'Firebase', 'REST API', 'FCM'],
    githubUrl: 'https://github.com/kazi331',
    liveUrl: 'https://play.google.com',
    category: 'Mobile Applications',
    impact: 'Integrated Firebase Cloud Messaging (FCM) to deliver instant, real-time secure notification flows.',
  }
];

export const skillCategories: SkillCategory[] = [
  {
    category: 'Languages',
    skills: [
      { name: 'JavaScript (ES6+)', level: 95 },
      { name: 'TypeScript', level: 92 },
      { name: 'Python', level: 80 },
      { name: 'HTML5 & CSS3', level: 95 },
      { name: 'SQL (PostgreSQL)', level: 90 },
    ],
  },
  {
    category: 'Frontend & State',
    skills: [
      { name: 'React / Next.js', level: 94 },
      { name: 'React Native', level: 86 },
      { name: 'Redux & Toolkit', level: 90 },
      { name: 'TanStack Query', level: 92 },
      { name: 'Zustand & Context API', level: 88 },
      { name: 'Tailwind CSS', level: 95 },
    ],
  },
  {
    category: 'Backend & Databases',
    skills: [
      { name: 'Node.js / Express', level: 93 },
      { name: 'NestJS', level: 88 },
      { name: 'FastAPI (Python)', level: 82 },
      { name: 'Prisma ORM', level: 91 },
      { name: 'PostgreSQL & MongoDB', level: 89 },
      { name: 'GraphQL / REST APIs', level: 90 },
    ],
  },
  {
    category: 'Tools & Ecosystem',
    skills: [
      { name: 'Git & GitHub Actions', level: 90 },
      { name: 'Shopify Functions', level: 85 },
      { name: 'Firebase', level: 88 },
      { name: 'Vercel Deployment', level: 92 },
      { name: 'SEO & Performance', level: 90 },
      { name: 'Agile / Scrum / Jira', level: 88 },
    ],
  },
];

export const services: Service[] = [
  {
    id: 'fullstack-dev',
    title: 'Full Stack Development',
    description: 'Engineering highly fluid React and Next.js interfaces backed by enterprise-grade Node.js and NestJS microservices. Adhering to strict type safety and architectural design patterns.',
    iconName: 'Layout',
    capabilities: [
      'Next.js 14/15 App Router Layouts',
      'NestJS Clean Backend Services',
      'Prisma ORM with PostgreSQL',
      'State Optimization (Redux/TanStack)',
    ],
  },
  {
    id: 'shopify-apps',
    title: 'Shopify App Engineering',
    description: 'Solo architecting and deploying robust custom integrations and apps to the Shopify App Store. Authoring fast Shopify Functions for dynamic discount mappings.',
    iconName: 'Cpu',
    capabilities: [
      'Shopify App Store Setup',
      'Custom Shopify Functions (Node)',
      'GraphQL Storefront API Integrations',
      'Prisma Configurable Bundles',
    ],
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Jerome Stephan',
    role: 'Founder',
    company: 'Approveage Inc.',
    content: 'Kazi is a phenomenal frontend and full stack engineer. He established real-time websocket flows between client and admin panels using Socket.IO and FCM. He improved data caching using TanStack Query, boosting our response rates by 30%.',
    avatarUrl: 'https://picsum.photos/seed/jerome/200/200',
  },
  {
    id: '2',
    name: 'Rahiyan Safin',
    role: 'Senior Software Engineer',
    company: 'Techjays',
    content: 'I worked closely with Kazi as a collaborator and technical reference. His ability to solo-build production applications like the Mixory Bundles app, while mastering complex cart-transform Shopify Functions, makes him an invaluable asset.',
    avatarUrl: 'https://picsum.photos/seed/rahiyan/200/200',
  }
];

export const blogPosts: BlogPost[] = [
  {
    title: 'Boosting React Response Speeds by 30% with TanStack Query',
    slug: 'boosting-react-tanstack-query',
    description: 'A deep architectural dive on setting up robust stale times, garbage collection, and localized key mutations to eliminate duplicate server load.',
    date: 'March 2024',
    readTime: '6 min read',
  },
  {
    title: 'How We Scaled Shopify Apps Using Custom Shopify Functions',
    slug: 'scaling-shopify-functions',
    description: 'An engineering review on writing low-latency discount and cart-transform logics in Node.js running directly on Shopify Edge servers.',
    date: 'January 2024',
    readTime: '10 min read',
  }
];

export const openSourceProjects: OpenSourceRepo[] = [
  {
    name: 'nest-prisma-boilerplate',
    description: 'A production-ready NestJS starter template complete with Prisma ORM, PostgreSQL schema setup, robust JWT authentication, and automated linter configurations.',
    stars: 124,
    forks: 18,
    language: 'TypeScript',
    url: 'https://github.com/kazi331',
  },
  {
    name: 'shopify-cart-transform-helper',
    description: 'A lightweight Node.js helper utility to easily format and validate input/output payloads for Shopify Cart Transform Functions.',
    stars: 62,
    forks: 7,
    language: 'TypeScript',
    url: 'https://github.com/kazi331',
  },
  {
    name: 'tanstack-cache-profiler',
    description: 'A minimal Chrome extension and React provider to profile, inspect, and benchmark cache hits and query key cycles of TanStack Query.',
    stars: 94,
    forks: 12,
    language: 'TypeScript',
    url: 'https://github.com/kazi331',
  }
];

export const workExperiences: WorkExperience[] = [
  {
    role: 'Software Engineer',
    company: 'Devsnest OPC',
    location: 'Dhaka, Bangladesh',
    period: 'Oct 2025 – Present',
    highlights: [
      'Solo-designed and built the Mixory Bundles Shopify app end to end — full-stack architecture spanning a PostgreSQL database with Prisma ORM, Node.js backend logic, and a React-based storefront UI — now live on the Shopify App Store.',
      'Implemented Shopify Functions (discount and cart transform logic) in Node.js to support dynamic pricing and merchant-configured bundle rules.',
      'Designed the database schema and API layer to support scalable, merchant-configurable bundle workflows.',
      'Built responsive storefront UI components for bundle selection and purchase flows, reducing cart friction and improving checkout conversion.',
      'Collaborated with product and backend teams to translate business requirements into technical architecture.'
    ],
    url: 'https://github.com/kazi331'
  },
  {
    role: 'Full Stack Developer (Frontend Lead)',
    company: 'Tutorsplan Corp',
    location: 'Dhaka, Bangladesh',
    period: 'Sept 2024 – July 2025',
    highlights: [
      'Built and maintained a tutor/student portal using Next.js on the frontend and NestJS on the backend, contributing to both layers as needed.',
      'Implemented Prisma ORM with PostgreSQL for the platform\'s dashboard and backend data layer, collaborating closely with the backend engineer on schema design.',
      'Led the frontend team — distributed tasks, mentored junior developers, and ensured on-time sprint delivery.',
      'Implemented Redux as global state management and cache, reducing API round-trips by 40%.',
      'Owned sprint planning and code quality reviews across the frontend team.'
    ],
    url: 'https://tutorsplan.com'
  },
  {
    role: 'React/Next.js Developer',
    company: 'Dhali Overseas Limited',
    location: 'Dhaka, Bangladesh',
    period: 'Apr 2024 – Aug 2024',
    highlights: [
      'Migrated three projects from Webflow to React/Next.js and redesigned flight/hotel booking sites and B2B/B2C sales portals, increasing performance by 60%.',
      'Improved data fetching and caching using TanStack Query, reducing page load time by 30%.'
    ]
  },
  {
    role: 'Frontend Engineer',
    company: 'Approveage Inc',
    location: 'Toronto, Canada (Remote)',
    period: 'Mar 2023 – Mar 2024',
    highlights: [
      'Established real-time data flow between client and admin panels using Socket.IO, and integrated Firebase Cloud Messaging for real-time notifications.',
      'Improved data fetching and caching with TanStack Query, boosting response speed by 30%.'
    ]
  }
];

export const educations: Education[] = [
  {
    institution: 'Govt. Safar Ali College',
    degree: 'B.A. English Language and Literature',
    period: 'Graduated 2023'
  },
  {
    institution: 'Mosharrof Hossain Khan Chowdhury University College',
    degree: 'Higher Secondary Certificate, Science',
    period: 'Completed 2017'
  }
];

export const references: Reference[] = [
  {
    name: 'Rahiyan Safin',
    role: 'Senior Software Engineer',
    company: 'Techjays',
    email: 'rahiyansafin@gmail.com'
  },
  {
    name: 'Jerome Stephan',
    role: 'Founder',
    company: 'Approveage Inc.',
    email: 'jerome.ramsay@gmail.com'
  }
];
