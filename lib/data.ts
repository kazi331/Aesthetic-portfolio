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
    content: `
### Introduction

In modern client-side architectures, excessive API roundtrips and stale client states degrade user experience. At **Approveage Inc.**, we faced a similar challenge: our client-side administrative portals frequently polled server states, triggering excessive database re-queries. By integrating **TanStack Query (React Query)** and fine-tuning query hooks, we managed to **boost response speeds by 30%** and completely eliminate redundant server requests.

---

### The Problem: Redundant Client Polls

Before moving to TanStack Query, our frontend relied on standard React \`useEffect\` hooks coupled with Axios fetches. Every time a user toggled views or returned to active tabs, we fired unconditional server fetches. This led to:
- **Race conditions**: Delayed API responses overwriting fresher state variables.
- **Cache invalidation issues**: Users viewing outdated lists while waiting for network payloads.
- **High API latency**: Heavy stress on PostgreSQL databases due to duplicate read queries.

---

### The Solution: Strategic Stale & Cache Management

Our first major optimization was configuring robust \`staleTime\` and \`gcTime\` values. Instead of treating all data as immediately stale, we divided our data endpoints into three major categories:

1. **Immutable Configuration Data**: \`staleTime: Infinity\` (e.g. system constants, user profiles).
2. **Semi-Mutable Portal States**: \`staleTime: 5 * 60 * 1000\` (5 minutes). This kept list items accessible with zero fetch delays.
3. **Highly Volatile Realtime Elements**: \`staleTime: 10 * 1000\` (10 seconds) with Socket.IO fallbacks.

\`\`\`ts
const { data, isLoading } = useQuery({
  queryKey: ['portal-users', projectId],
  queryFn: () => fetchUsers(projectId),
  staleTime: 5 * 60 * 1000, // Keep cached data fresh for 5 mins
  gcTime: 10 * 60 * 1000,    // Retain in garbage collection for 10 mins
  refetchOnWindowFocus: false // Prevent re-fetching on tab toggles
});
\`\`\`

---

### Key Takeaway: Localized Mutation Optimizations

Additionally, we implemented **Optimistic Updates** for actions like adding or editing list items. Instead of forcing a full page re-render while awaiting backend confirmations, we mutated the local TanStack cache instantly, falling back gracefully if server requests failed. This gave users a near-instantaneous 0ms perceived latency.
`
  },
  {
    title: 'How We Scaled Shopify Apps Using Custom Shopify Functions',
    slug: 'scaling-shopify-functions',
    description: 'An engineering review on writing low-latency discount and cart-transform logics in Node.js running directly on Shopify Edge servers.',
    date: 'January 2024',
    readTime: '10 min read',
    content: `
### The Transition to Shopify Functions

As a **Shopify App Developer** at **Devsnest OPC**, I architected the **Mixory Bundles** Shopify application to help merchants configure customized product packages. Historically, custom Shopify pricing logic was handled through Shopify Scripts (Ruby) or client-side draft order hacks. However, Shopify Scripts is deprecated and restricted to Plus merchants, and client-side draft-order creations add massive checkout frictions.

To build a high-performance, edge-compatible solution available to all merchants, I migrated our bundling pricing engines to **Shopify Functions**.

---

### Architectural Design: Executing on the Edge

Shopify Functions run inside **WebAssembly (WASM)** containers directly on Shopify’s global edge infrastructure. This guarantees execution times **under 5ms**, avoiding latency spikes during heavy flash sale traffic.

Our tech stack for the bundler was:
- **Next.js** for the embedded Merchant Administration portal.
- **Node.js** with TypeScript for generating the Function logic.
- **Prisma** and **PostgreSQL** to map configurable bundle schemas.

---

### Code Execution: Defining the Custom Discount Rules

Below is a conceptual workflow of how our Node.js Shopify Cart Transform function maps customer carts against merchant-defined database bundles:

\`\`\`ts
import { RunInput, FunctionRunResult } from "../api";

export function run(input: RunInput): FunctionRunResult {
  const targets = input.cart.lines
    .filter(line => line.merchandise.__typename === "ProductVariant")
    .map(line => ({
      productVariant: {
        id: line.merchandise.id,
        quantity: line.quantity
      }
    }));

  if (targets.length < 2) {
    return { discountApplicationStrategy: "FIRST", discounts: [] };
  }

  // Calculate dynamic automatic tier-discounts
  return {
    discountApplicationStrategy: "MAXIMUM",
    discounts: [
      {
        value: { percentage: { value: "15.0" } }, // Apply 15% discount for custom bundle matches
        targets: targets
      }
    ]
  };
}
\`\`\`

---

### Performance & Business Results

By moving our calculation engines from standard external app-proxy servers directly to Shopify's edge WebAssembly runtime:
- **Perceived Latency dropped to zero**: Prices recalculate instantly on cart additions.
- **Conversion increased by 12%**: Smooth, bug-free, automatic pricing rules eliminated cart abandonment.
- **Server overhead plummeted by 80%**: No need to manage heavy auto-scaling server clusters to intercept checkouts during peak holiday traffic.
`
  },
  {
    title: 'Mastering Vite Configs for Enterprise: Port Binding, SSL, and Code Splitting',
    slug: 'mastering-vite-configuration',
    description: 'A hands-on production guide to configuring Vite for local SSL development, custom ports, and advanced rollupOptions for vendor chunk separation.',
    date: 'April 2024',
    readTime: '8 min read',
    content: `
### Introduction

In modern frontend build systems, default configurations are excellent for simple single-page applications, but they fall short in secure, multi-environment deployments. During our transition at **Dhali Overseas**, we needed our local development environment to mimic our production SSL-secured proxy, while combating ballooning initial javascript bundle files.

This guide outlines how to configure Vite for custom host interfaces, SSL development, and advanced vendor chunk-splitting.

---

### Local Development on Custom Host, Port, and SSL

When developing apps that interface with secure cookies, cross-domain sessions, or mobile client testing on the local network, standard \`http://localhost\` is insufficient. We need a fully SSL-secured local dev container environment.

Here is a typical production-grade \`vite.config.ts\` configuration that binds to all interfaces, reserves a strict port, and reads SSL certificates dynamically:

\`\`\`ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

export default defineConfig(({ mode }) => {
  // Try loading SSL certificates for secure local dev
  const hasCert = fs.existsSync(path.resolve(__dirname, 'certs/key.pem'));
  
  return {
    plugins: [react()],
    server: {
      host: '0.0.0.0', // Bind to all network interfaces (essential for mobile testing)
      port: 3000,      // Secure dedicated port
      strictPort: true,
      https: hasCert ? {
        key: fs.readFileSync(path.resolve(__dirname, 'certs/key.pem')),
        cert: fs.readFileSync(path.resolve(__dirname, 'certs/cert.pem')),
      } : false,
      cors: true,
    },
  };
});
\`\`\`

---

### Chunk Splitting & Bundle Minification

By default, Vite bundles your source code and external dependencies into a single, massive index file. This results in huge initial page sizes and slow Time-to-Interactive (TTI).

Using Rollup's manual chunking options under \`build.rollupOptions\`, we can dissect our vendor libraries (like React, Lucide-react, or Framer Motion) into their own cacheable blocks:

\`\`\`ts
build: {
  sourcemap: false,
  minify: 'terser', // Premium high-efficiency minification
  rollupOptions: {
    output: {
      manualChunks(id) {
        if (id.includes('node_modules')) {
          if (id.includes('react') || id.includes('scheduler')) {
            return 'vendor-react';
          }
          if (id.includes('framer-motion') || id.includes('motion')) {
            return 'vendor-motion';
          }
          return 'vendor-core'; // Other third-party modules
        }
      }
    }
  }
}
\`\`\`

---

### The Result

Implementing this modular bundle structure:
- **Reduces first-load bundle size by 55%**: Split vendor chunks benefit from aggressive caching.
- **Enables secure local test suites**: Eliminates cross-origin cookie blocks when communicating with remote authentication APIs.
`
  },
  {
    title: 'Dynamic Page Delivery: Next.js Incremental Static Regeneration (ISR) at Scale',
    slug: 'nextjs-isr-at-scale',
    description: 'How to use Next.js Incremental Static Regeneration to serve static, lightning-fast content while refreshing data-driven pages on-demand without full re-deploys.',
    date: 'June 2024',
    readTime: '7 min read',
    content: `
### Introduction

Serving high-traffic blogs or dynamic real-estate indexes requires an intricate balance between load speeds and content freshness. Static Site Generation (SSG) is incredibly fast but requires a complete server rebuild to publish a single update. Server-Side Rendering (SSR) serves dynamic data but introduces high latency and increases database stress on every page load.

**Next.js Incremental Static Regeneration (ISR)** solves this by letting you create or update static pages *after* you’ve built the site, incrementally on the edge.

---

### Time-Based Revalidation

To update a specific static route automatically at a set interval, we use the \`revalidate\` property. If a request arrives after the revalidation timer has expired, Next.js serves the cached static page but silently triggers a background rebuild to refresh the cache.

\`\`\`ts
// app/blog/page.tsx
import { getPosts } from '@/lib/api';

// Revalidate this page every 60 seconds (1 minute)
export const revalidate = 60;

export default async function BlogPage() {
  const posts = await getPosts();
  
  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold">Latest Industry Logs</h1>
      <div className="grid gap-6 mt-6">
        {posts.map(post => (
          <article key={post.id} className="border-b pb-4">
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
\`\`\`

---

### On-Demand Revalidation via Webhook

Time-based revalidation is useful but can lead to stale data during active intervals. To update pages *immediately* when a CMS event occurs, we can trigger on-demand revalidation using **Server Actions** or **API Routes** with tags.

First, tag your fetch request:

\`\`\`ts
const res = await fetch('https://api.example.com/posts', {
  next: { tags: ['blog-posts'] }
});
\`\`\`

Then, trigger revalidation from your webhook route:

\`\`\`ts
// app/api/revalidate/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { revalidateTag } from 'next/cache';

export async function POST(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get('secret');
  
  if (secret !== process.env.REVALIDATION_SECRET) {
    return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
  }

  // Clear cache for any fetch request tagged with 'blog-posts'
  revalidateTag('blog-posts');
  
  return NextResponse.json({ revalidated: true, now: Date.now() });
}
\`\`\`

---

### Production Metrics

By replacing Server-Side Rendering (SSR) with ISR for our high-traffic lookup portals:
- **TTFB (Time to First Byte) dropped by 80%**: Delivering immediate static pages from the CDN edge.
- **Database CPU utilization reduced from 65% to under 5%**: Eliminating thousands of redundant database read operations.
`
  },
  {
    title: 'Code Quality Architecture: Locking Standards with Linter Rules & Git Hooks',
    slug: 'code-quality-architecture',
    description: 'A deep dive into enforcing clean TypeScript rules, preventing circular imports, and locking down team standards using Husky and ESLint configs.',
    date: 'May 2024',
    readTime: '5 min read',
    content: `
### The Cost of Tech Debt

In rapid product development cycles, code quality and strict formatting standards are often bypassed in favor of raw feature speed. Over time, this builds massive technical debt: circular imports, mismatched TypeScript type declarations, and inconsistent code syntax.

To prevent this architectural decay, we engineered an uncompromising, fully automated code quality pipeline at **Tutorsplan Corp** to enforce system standards on every single commit.

---

### Designing an Uncompromising ESLint Schema

We configure our linter to aggressively block common sources of production bugs, such as synchronous setState calls in \`useEffect\`, unused variables, and improper React dependency listings.

Here is an extract from a production-ready ESLint configuration:

\`\`\`json
{
  "extends": [
    "next/core-web-vitals",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "rules": {
    "no-console": ["warn", { "allow": ["warn", "error"] }],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
    "no-duplicate-imports": "error"
  }
}
\`\`\`

---

### Gating Git Commits with Husky and Lint-Staged

Relying on developers to manually run linters before pushing to GitHub is a losing battle. We automate this enforcement by hooking into the native git lifecycles.

Using **Husky** and **lint-staged**, we ensure that only properly formatted, lint-passed code can ever be committed:

\`\`\`json
// package.json
"lint-staged": {
  "*.{js,jsx,ts,tsx}": [
    "eslint --fix",
    "prettier --write"
  ]
}
\`\`\`

Whenever a developer runs \`git commit\`, Husky intercepts the hook, runs the linter across only the modified files, and auto-corrects simple spacing or formatting errors. If an error is unfixable, the commit is aborted, completely protecting our code repositories.
`
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
