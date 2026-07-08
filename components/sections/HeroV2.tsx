'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronDown, ArrowRight, Globe, Sparkles, Terminal, Cpu, Database, Code2, Folder, FileJson, Layers } from 'lucide-react';
import Container from '@/components/shared/Container';
import Section from '@/components/shared/Section';
import { personalInfo } from '@/lib/data';

interface ConsoleTab {
  id: string;
  name: string;
  icon: React.ReactNode;
  content: string;
}

export default function HeroV2() {
  const [activeTab, setActiveTab] = useState<string>('profile');

  const handleScrollToProjects = () => {
    const el = document.getElementById('featured-projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const consoleTabs: ConsoleTab[] = [
    {
      id: 'profile',
      name: 'profile.json',
      icon: <FileJson className="w-3.5 h-3.5 text-accent" />,
      content: `{
  "developer": {
    "name": "Kazi Shariful Islam",
    "role": "Full Stack Engineer",
    "location": "Dhaka, Bangladesh",
    "experience": "3+ Years Professional",
    "shopify_partner": true,
    "specialty": [
      "Next.js Architectures",
      "Robust REST & GraphQL APIs",
      "Scalable DB Design"
    ]
  }
}`
    },
    {
      id: 'stack',
      name: 'stack.ts',
      icon: <Code2 className="w-3.5 h-3.5 text-blue-400" />,
      content: `// Core Engineering Frameworks
export const TECH_STACK = {
  frontend: {
    framework: "Next.js 15 (App Router)",
    styling: "Tailwind CSS v4",
    animation: "Motion (Framer)"
  },
  backend: {
    runtime: "Node.js",
    frameworks: ["NestJS", "FastAPI"],
    database: ["PostgreSQL", "Redis"]
  },
  orm: "Prisma / Drizzle"
};`
    },
    {
      id: 'accomplishments',
      name: 'milestones.log',
      icon: <Terminal className="w-3.5 h-3.5 text-emerald-400" />,
      content: `[INFO] Initializing system capabilities...
[OK] Solo-built & shipped premium Shopify bundle app to Shopify App Store.
[OK] Integrated custom Shopify Functions using Node.js.
[OK] Reduced redundant API roundtrips by 40% with NestJS & TanStack Query.
[OK] Integrated Firebase Cloud Messaging for instant notifications.
[STATUS] Active & accepting select full-stack engagements.`
    }
  ];

  // Container animation variants for staggering children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <Section id="hero" className="min-h-screen flex flex-col justify-center pt-32 pb-20 bg-[#060606] relative overflow-hidden border-b border-white/5">
      {/* Dynamic Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_80%,transparent_100%)] z-0 pointer-events-none" />

      {/* Decorative ambient blurred lights */}
      <div className="absolute top-1/4 left-1/4 w-[35rem] h-[35rem] bg-accent/5 rounded-full blur-[150px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-[25rem] h-[25rem] bg-indigo-500/5 rounded-full blur-[130px] pointer-events-none z-0" />

      {/* Vertical status lines - left and right margins */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-12 z-0 opacity-10 select-none pointer-events-none">
        <span className="vertical-text uppercase tracking-[0.6em] text-[9px] font-mono font-extrabold text-white">
          KAZI SHARIFUL ISLAM
        </span>
        <div className="h-24 w-[1px] bg-white/20" />
        <span className="vertical-text uppercase tracking-[0.6em] text-[9px] font-mono font-extrabold text-accent">
          PORTFOLIO 2026
        </span>
      </div>

      <Container className="relative z-10 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
        >
          {/* LEFT COLUMN: Clean, High-Contrast Typography & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status indicator pill with developer name */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-2.5 bg-white/3 border border-white/5 px-4.5 py-2 rounded-full mb-8 shadow-sm backdrop-blur-sm hover:border-white/10 transition-colors"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              <span className="text-[10px] font-mono font-bold uppercase tracking-[0.18em] text-[#A0A0A0]">
                {personalInfo.name} — FULL STACK DEVELOPER
              </span>
            </motion.div>

            {/* Premium, Asymmetric Header Layout */}
            <div className="overflow-hidden mb-6">
              <motion.h1
                variants={itemVariants}
                className="text-4xl sm:text-5xl md:text-6xl font-display font-medium leading-[1.08] tracking-tight text-white"
              >
                Engineering Scalable Systems With <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-[#A9C7E6] to-[#CBDDF0] font-serif italic font-normal tracking-wide pr-2">
                  Uncompromising
                </span> 
                Craft
              </motion.h1>
            </div>

            {/* Short biography */}
            <motion.p
              variants={itemVariants}
              className="text-muted-text text-sm sm:text-base leading-relaxed max-w-xl mb-10 font-sans font-normal"
            >
              {personalInfo.summary}
            </motion.p>

            {/* Quick specifications line */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-3 gap-6 border-y border-white/5 py-5 w-full max-w-lg mb-10"
            >
              <div>
                <p className="font-mono text-[9px] uppercase tracking-wider text-muted-text mb-1">Role</p>
                <p className="text-xs sm:text-sm font-bold text-white">Full Stack</p>
              </div>
              <div>
                <p className="font-mono text-[9px] uppercase tracking-wider text-muted-text mb-1">Focus</p>
                <p className="text-xs sm:text-sm font-bold text-white">Shopify & Next.js</p>
              </div>
              <div>
                <p className="font-mono text-[9px] uppercase tracking-wider text-muted-text mb-1">Experience</p>
                <p className="text-xs sm:text-sm font-bold text-white">3+ Years</p>
              </div>
            </motion.div>

            {/* Interactive Call to Actions */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 items-center"
            >
              <button
                onClick={handleScrollToProjects}
                className="px-6 py-3.5 bg-accent text-primary-bg rounded-xl font-mono text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-lg shadow-accent/10 hover:shadow-accent/20 hover:bg-accent/90 flex items-center gap-2 group cursor-pointer"
              >
                <span>Explore Works</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href="#contact"
                className="px-6 py-3.5 bg-white/3 border border-white/5 hover:border-white/10 text-white rounded-xl font-mono text-xs font-bold uppercase tracking-wider transition-all duration-300 backdrop-blur-sm flex items-center gap-2"
              >
                <span>Get in Touch</span>
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              </a>
            </motion.div>

          </div>

          {/* RIGHT COLUMN: The High-Fidelity Interactive Terminal/Workbench */}
          <div className="lg:col-span-5 relative w-full">
            <motion.div
              variants={itemVariants}
              className="relative w-full bg-[#0D0D0D] border border-white/10 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-sm"
            >
              {/* Custom Mac-style Terminal Header with Tabs */}
              <div className="bg-[#121212] border-b border-white/5 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                  <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
                </div>
                
                {/* Simulated host title */}
                <div className="text-[10px] font-mono text-muted-text font-bold">
                  kazi@workspace:~
                </div>

                <div className="w-12" /> {/* alignment balancer */}
              </div>

              {/* Console Tabs */}
              <div className="flex bg-[#121212] border-b border-white/5 overflow-x-auto select-none">
                {consoleTabs.map((tab) => {
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`px-4.5 py-2.5 font-mono text-[11px] font-bold border-r border-white/5 flex items-center gap-2 transition-all cursor-pointer ${
                        isActive 
                          ? 'bg-[#0D0D0D] text-white border-t-2 border-t-accent' 
                          : 'text-muted-text bg-[#121212]/50 hover:bg-[#121212]/80 hover:text-white/80'
                      }`}
                    >
                      {tab.icon}
                      <span>{tab.name}</span>
                    </button>
                  );
                })}
              </div>

              {/* Terminal Code Canvas */}
              <div className="p-5 font-mono text-xs text-[#89AACC] leading-relaxed overflow-x-auto h-[260px] md:h-[280px] bg-black/40 text-left relative">
                {/* Static line numbers */}
                <div className="absolute left-3.5 top-5 select-none text-right pr-3.5 border-r border-white/5 text-white/10 text-[10px] font-bold flex flex-col gap-[3.5px] w-6">
                  {Array.from({ length: 15 }).map((_, i) => (
                    <span key={i}>{i + 1}</span>
                  ))}
                </div>

                <pre className="pl-8 whitespace-pre font-medium text-white/90 selection:bg-accent/30 selection:text-white">
                  <code>
                    {consoleTabs.find((t) => t.id === activeTab)?.content}
                  </code>
                </pre>
              </div>

              {/* Interactive Status Footer */}
              <div className="bg-[#121212] px-4.5 py-2.5 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-muted-text">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-bold">STATUS: STABLE</span>
                </div>
                <div className="flex items-center gap-4">
                  <span>UTF-8</span>
                  <span className="text-accent font-bold uppercase">{activeTab}</span>
                </div>
              </div>
            </motion.div>

            {/* Secondary Visual Decoration floating behind container */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-dashed border-white/10 rounded-full z-[-1] hidden sm:block animate-spin-slow" />
          </div>

        </motion.div>

        {/* Scroll discovery */}
        <div className="mt-20 w-full flex justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            onClick={handleScrollToProjects}
            className="flex flex-col items-center gap-2 cursor-pointer group select-none"
          >
            <div className="w-10 h-10 border border-white/5 rounded-full flex items-center justify-center group-hover:border-accent/30 group-hover:bg-white/3 transition-all">
              <ChevronDown className="w-4 h-4 text-muted-text group-hover:text-accent group-hover:translate-y-0.5 transition-all" />
            </div>
            <span className="text-[9px] uppercase tracking-[0.25em] text-muted-text font-mono font-bold opacity-60 group-hover:opacity-100 transition-opacity">
              Scroll to explore
            </span>
          </motion.div>
        </div>

      </Container>
    </Section>
  );
}
