'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Terminal, Cpu, Database, Layout, ShieldCheck, HelpCircle } from 'lucide-react';
import Container from '@/components/shared/Container';
import Section from '@/components/shared/Section';

interface TechnologyNode {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'tooling';
  type: 'core' | 'data' | 'learning';
  experience: string;
  x: number; // percentage from left (0-100)
  y: number; // percentage from top (0-100)
  size: number; // multiplier for size
  color: string; // Tailwind color string for hover glows
  description: string;
  icon: React.ReactNode;
}

export default function TechStackV2() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'frontend' | 'backend' | 'database' | 'tooling'>('all');
  const [hoveredNode, setHoveredNode] = useState<TechnologyNode | null>(null);

  // High fidelity technical constellation mapping based on user's reference mockup
  const technologies: TechnologyNode[] = [
    {
      name: 'React',
      category: 'frontend',
      type: 'core',
      experience: '6 yrs exp',
      x: 50,
      y: 50,
      size: 1.4,
      color: 'rgba(78, 196, 191, 0.4)',
      description: 'Architecting dynamic, responsive UI architectures using declarative component trees, customized hydration strategies, and advanced hook lifecycles.',
      icon: <Layout className="w-5 h-5" />,
    },
    {
      name: 'TypeScript',
      category: 'frontend',
      type: 'core',
      experience: '5 yrs exp',
      x: 32,
      y: 35,
      size: 1.2,
      color: 'rgba(78, 133, 191, 0.4)',
      description: 'Enforcing robust, compile-time strict type safety across full-stack applications. Authoring highly reusable generic interfaces and automated mapping utilities.',
      icon: <ShieldCheck className="w-4 h-4" />,
    },
    {
      name: 'Node.js',
      category: 'backend',
      type: 'core',
      experience: '5 yrs exp',
      x: 68,
      y: 35,
      size: 1.2,
      color: 'rgba(78, 196, 191, 0.4)',
      description: 'Designing highly concurrent runtime environments, implementing custom event loops, cluster load management, and memory-safe stream pipelines.',
      icon: <Cpu className="w-4 h-4" />,
    },
    {
      name: 'Next.js',
      category: 'frontend',
      type: 'core',
      experience: '4 yrs exp',
      x: 18,
      y: 42,
      size: 1.0,
      color: 'rgba(255, 255, 255, 0.2)',
      description: 'Optimizing application performance via Server Components, Incremental Static Regeneration (ISR), static bails, and edge route execution.',
      icon: <Terminal className="w-4 h-4" />,
    },
    {
      name: 'PostgreSQL',
      category: 'database',
      type: 'data',
      experience: '4 yrs exp',
      x: 24,
      y: 60,
      size: 1.15,
      color: 'rgba(16, 185, 129, 0.4)',
      description: 'Authoring highly optimized schema layouts, custom relational index architectures, nested queries, and handling concurrent transaction locking models.',
      icon: <Database className="w-4 h-4" />,
    },
    {
      name: 'NestJS',
      category: 'backend',
      type: 'core',
      experience: '4 yrs exp',
      x: 82,
      y: 44,
      size: 1.1,
      color: 'rgba(78, 133, 191, 0.4)',
      description: 'Architecting scalable, modular backend services with declarative dependency injection, strict interceptors, custom filters, and robust domain separation.',
      icon: <Cpu className="w-4 h-4" />,
    },
    {
      name: 'GraphQL',
      category: 'tooling',
      type: 'core',
      experience: '3 yrs exp',
      x: 50,
      y: 76,
      size: 0.95,
      color: 'rgba(139, 92, 246, 0.4)',
      description: 'Designing unified gateway graphs with granular query execution paths, batching resolvers via DataLoader, and custom storefront queries.',
      icon: <Terminal className="w-4 h-4" />,
    },
    {
      name: 'MongoDB',
      category: 'database',
      type: 'data',
      experience: '3 yrs exp',
      x: 34,
      y: 72,
      size: 0.95,
      color: 'rgba(16, 185, 129, 0.4)',
      description: 'Modeling high-throughput non-relational document trees with nested collections, writing aggregation pipes, and tuning cluster sharding strategies.',
      icon: <Database className="w-4 h-4" />,
    },
    {
      name: 'Prisma',
      category: 'database',
      type: 'data',
      experience: '3 yrs exp',
      x: 74,
      y: 58,
      size: 0.9,
      color: 'rgba(16, 185, 129, 0.4)',
      description: 'Writing robust schema declarations, auto-generating relational types, migrating database structures safely, and profiling query response times.',
      icon: <Database className="w-4 h-4" />,
    },
    {
      name: 'Shopify',
      category: 'tooling',
      type: 'learning',
      experience: '2 yrs exp',
      x: 64,
      y: 74,
      size: 0.95,
      color: 'rgba(16, 185, 129, 0.4)',
      description: 'Solo-architecting customized embedded Shopify apps, writing cart-transform Shopify Functions in Rust/JS, and optimizing Checkout UI extensions.',
      icon: <Sparkles className="w-4 h-4" />,
    },
    {
      name: 'React Native',
      category: 'frontend',
      type: 'core',
      experience: '3 yrs exp',
      x: 13,
      y: 66,
      size: 0.9,
      color: 'rgba(78, 133, 191, 0.4)',
      description: 'Building cross-platform mobile frameworks with native bridges, performance-tuned lists, fast layouts, and localized local cache layers.',
      icon: <Layout className="w-4 h-4" />,
    },
    {
      name: 'FastAPI',
      category: 'backend',
      type: 'learning',
      experience: '2 yrs exp',
      x: 86,
      y: 68,
      size: 0.85,
      color: 'rgba(234, 179, 8, 0.4)',
      description: 'Implementing lightweight Python microservices, leveraging asynchronous execution loops, automated Pydantic schema validation, and fast routing.',
      icon: <Cpu className="w-4 h-4" />,
    }
  ];

  const filteredTechnologies = technologies.filter(
    (tech) => activeFilter === 'all' || tech.category === activeFilter
  );

  return (
    <Section id="tech-stack-v2" className="bg-[#090909] border-b border-white/5 relative py-20 overflow-hidden">
      {/* Space Constellation Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,0.5),rgba(9,9,9,1))] z-0" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none z-0" />

      {/* Nebula Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#4E85BF]/5 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#10B981]/5 rounded-full blur-[120px] pointer-events-none z-0" />

      <Container className="relative z-10">
        
        {/* Header Block with Sparkle Badge */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 max-w-6xl mx-auto mb-16">
          <div className="space-y-3 text-left">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#10B981] rounded-full" />
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#89AACC] font-bold">
                SKILLS
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-display tracking-tight text-[#F5F5F5]">
              Toolkit & Ecosystem
            </h2>
            <p className="text-sm font-sans text-muted-text max-w-xl">
              Hover over each node to explore my interactive technical constellation.
            </p>
          </div>

          {/* Sparkle Badge at Top Right */}
          <div className="flex items-center gap-2.5 px-4 py-2 bg-white/3 border border-white/5 rounded-full self-start md:self-auto shadow-xl">
            <Sparkles className="w-4 h-4 text-accent animate-pulse" />
            <span className="font-mono text-xs font-bold text-[#F5F5F5]">
              12 technologies mapped
            </span>
          </div>
        </div>

        {/* Constellation Canvas Board */}
        <div className="relative w-full min-h-[560px] md:min-h-[640px] bg-black/20 border border-white/5 rounded-[40px] p-6 backdrop-blur-sm overflow-hidden flex flex-col justify-between">
          
          {/* Subtle connecting mesh lines using SVG */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-25 z-0" xmlns="http://www.w3.org/2000/svg">
            {/* Center Node (React) connected to others */}
            {filteredTechnologies.map((tech, idx) => {
              if (tech.name === 'React') return null;
              return (
                <motion.line
                  key={`line-${idx}`}
                  x1={`${50}%`}
                  y1={`${50}%`}
                  x2={`${tech.x}%`}
                  y2={`${tech.y}%`}
                  stroke="rgba(137, 170, 204, 0.4)"
                  strokeWidth="1"
                  strokeDasharray="4 6"
                  initial={{ strokeDashoffset: 0 }}
                  animate={{ strokeDashoffset: -20 }}
                  transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
                />
              );
            })}
            
            {/* Some manual connections for extra constellation vibe */}
            <line x1="32%" y1="35%" x2="18%" y2="42%" stroke="rgba(137, 170, 204, 0.3)" strokeWidth="1" />
            <line x1="68%" y1="35%" x2="82%" y2="44%" stroke="rgba(137, 170, 204, 0.3)" strokeWidth="1" />
            <line x1="32%" y1="35%" x2="24%" y2="60%" stroke="rgba(137, 170, 204, 0.3)" strokeWidth="1" />
            <line x1="68%" y1="35%" x2="74%" y2="58%" stroke="rgba(137, 170, 204, 0.3)" strokeWidth="1" />
            <line x1="24%" y1="60%" x2="34%" y2="72%" stroke="rgba(137, 170, 204, 0.3)" strokeWidth="1" />
            <line x1="74%" y1="58%" x2="64%" y2="74%" stroke="rgba(137, 170, 204, 0.3)" strokeWidth="1" />
          </svg>

          {/* Floating constellation nodes */}
          <div className="absolute inset-0 z-10">
            {filteredTechnologies.map((tech) => {
              const isHovered = hoveredNode?.name === tech.name;
              const isFilteredOut = activeFilter !== 'all' && tech.category !== activeFilter;

              // Position offsets based on sizing
              const nodeSize = 74 * tech.size;

              return (
                <motion.div
                  key={tech.name}
                  style={{
                    left: `${tech.x}%`,
                    top: `${tech.y}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                  className="absolute cursor-pointer select-none"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: isFilteredOut ? 0.25 : 1,
                    scale: isFilteredOut ? 0.9 : 1,
                    y: [0, Math.sin(tech.x + tech.y) * 6, 0],
                  }}
                  transition={{
                    opacity: { duration: 0.3 },
                    scale: { duration: 0.3 },
                    y: {
                      repeat: Infinity,
                      duration: 4 + (tech.x % 3),
                      ease: 'easeInOut',
                    }
                  }}
                  onMouseEnter={() => setHoveredNode(tech)}
                  onMouseLeave={() => setHoveredNode(null)}
                >
                  {/* Glowing backing ring on hover */}
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        layoutId="glow-ring"
                        className="absolute inset-0 rounded-full pointer-events-none filter blur-[15px]"
                        style={{
                          background: tech.color,
                          scale: 1.4,
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.8 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      />
                    )}
                  </AnimatePresence>

                  {/* Primary Node Sphere */}
                  <div
                    style={{
                      width: `${nodeSize}px`,
                      height: `${nodeSize}px`,
                    }}
                    className={`rounded-full border transition-all duration-300 flex flex-col items-center justify-center text-center ${
                      isHovered
                        ? 'border-accent bg-[#151515] scale-105 shadow-2xl shadow-accent/10'
                        : tech.type === 'core'
                        ? 'border-[#4E85BF]/25 bg-black/40 hover:border-[#4E85BF]'
                        : tech.type === 'data'
                        ? 'border-[#10B981]/25 bg-black/40 hover:border-[#10B981]'
                        : 'border-yellow-500/25 bg-black/40 hover:border-yellow-500'
                    }`}
                  >
                    {/* Tiny Icon */}
                    <div className={`transition-transform duration-300 ${isHovered ? 'scale-110 text-accent' : 'text-muted-text/70'}`}>
                      {tech.icon}
                    </div>

                    {/* Node Text Name */}
                    <span className="font-sans font-bold text-[11px] text-[#F5F5F5] mt-1 tracking-tight">
                      {tech.name}
                    </span>

                    {/* Experience Subtext */}
                    {tech.size >= 1.0 && (
                      <span className="font-mono text-[8px] text-muted-text mt-0.5 uppercase tracking-wider font-bold">
                        {tech.experience.split(' ')[0]} yrs
                      </span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Absolute High-Fidelity Hover Popup Detail Card (Floating dynamic positioning) */}
          <div className="absolute right-6 top-6 z-30 pointer-events-none w-80 max-w-full">
            <AnimatePresence>
              {hoveredNode && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                  className="bg-[#121212]/95 border border-white/10 rounded-2xl p-5 shadow-2xl backdrop-blur-md pointer-events-auto"
                >
                  {/* Category-themed layout matching reference mockup */}
                  <div className="flex items-start gap-4">
                    <div className={`p-2.5 rounded-xl border flex items-center justify-center shrink-0 ${
                      hoveredNode.type === 'core'
                        ? 'bg-[#4E85BF]/10 border-[#4E85BF]/25 text-[#4E85BF]'
                        : hoveredNode.type === 'data'
                        ? 'bg-[#10B981]/10 border-[#10B981]/25 text-[#10B981]'
                        : 'bg-yellow-500/10 border-yellow-500/25 text-yellow-500'
                    }`}>
                      {hoveredNode.icon}
                    </div>
                    <div>
                      <h4 className="font-sans font-bold text-base text-[#F5F5F5]">
                        {hoveredNode.name}
                      </h4>
                      <p className="font-mono text-[10px] text-muted-text uppercase font-semibold mt-0.5 tracking-wider">
                        {hoveredNode.experience}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-muted-text mt-3.5 leading-relaxed font-sans border-t border-white/5 pt-3.5">
                    {hoveredNode.description}
                  </p>

                  <div className="flex items-center gap-2 mt-4 text-[9px] font-mono text-muted-text bg-white/3 py-1.5 px-3 rounded-lg border border-white/5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
                    <span>Domain: <strong className="text-[#F5F5F5] uppercase">{hoveredNode.category}</strong></span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="h-20" /> {/* Spacer for nodes */}

          {/* Bottom Controls row: Filter Pills on left, Legend Dots on right */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-white/5 relative z-20">
            {/* Filter bar */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-[10px] uppercase text-muted-text/80 tracking-widest font-bold mr-2">
                FILTER:
              </span>
              {(['all', 'frontend', 'backend', 'database', 'tooling'] as const).map((cat) => {
                const isSelected = activeFilter === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveFilter(cat)}
                    className={`px-4 py-2 rounded-xl text-[10px] font-mono font-bold uppercase tracking-wider transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#162a45]/60 text-accent border border-accent/35 shadow-lg'
                        : 'bg-white/3 border border-white/3 text-muted-text hover:text-[#F5F5F5] hover:bg-white/5'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Legend Indicators */}
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#4E85BF]" />
                <span className="font-sans text-[11px] text-muted-text font-medium">Core</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                <span className="font-sans text-[11px] text-muted-text font-medium">Data</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-yellow-500" />
                <span className="font-sans text-[11px] text-muted-text font-medium">Learning</span>
              </div>
            </div>

          </div>

        </div>

      </Container>
    </Section>
  );
}
