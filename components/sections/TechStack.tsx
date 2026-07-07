'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, Cpu, ChevronRight, Terminal, Sparkles, Github, GitCommit, GitBranch } from 'lucide-react';
import { skillCategories } from '@/lib/data';
import { Skill } from '@/types/portfolio';
import Container from '@/components/shared/Container';
import Section from '@/components/shared/Section';
import SectionHeading from '@/components/shared/SectionHeading';
import SkillCard from '@/components/cards/SkillCard';
import Modal from '@/components/shared/Modal';

const snippetSkills = [
  {
    name: 'React',
    code: 'const App = () => {\n  return <Dashboard />;\n};',
    dots: ['#4EC4BF', '#7054E6', '#8F3DB8', '#42B883'],
  },
  {
    name: 'Next.js',
    code: 'export default function Page() {\n  return <main className="flex" />\n}',
    dots: ['#ffffff', '#888888', '#444444', '#111111'],
  },
  {
    name: 'Node.js',
    code: "app.listen(3000, () => {\n  console.log('Live on port 3000');\n});",
    dots: ['#81C784', '#66BB6A', '#4CAF50', '#388E3C'],
  },
  {
    name: 'TypeScript',
    code: 'interface User {\n  id: string;\n  role: "admin" | "user";\n}',
    dots: ['#3178C6', '#2F74C0', '#1F5E9B', '#4EA2FF'],
  },
  {
    name: 'PostgreSQL',
    code: 'SELECT * FROM users\nWHERE active = true\nORDER BY created_at DESC;',
    dots: ['#336791', '#2F5D85', '#1D3B55', '#4D82B8'],
  },
  {
    name: 'Python',
    code: 'def handle_event(event):\n    return {"status": "success"}',
    dots: ['#306998', '#FFD43B', '#4B8BBE', '#FFE873'],
  },
];

// High-Fidelity Contribution Dots matching the user's mockup image
const contributionLevels = [
  'bg-emerald-500', // high
  'bg-emerald-600', // mid-high
  'bg-emerald-400', // high-variant
  'bg-emerald-900/40', // low
  'bg-emerald-500', // high
  'bg-emerald-600', // mid-high
  'bg-emerald-400', // high-variant
];

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].category);
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [snippetIndex, setSnippetIndex] = useState(0);

  // Interval timer for the animated code block snippet
  useEffect(() => {
    const timer = setInterval(() => {
      setSnippetIndex((prev) => (prev + 1) % snippetSkills.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const selectedCategoryData = skillCategories.find((cat) => cat.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const currentSnippet = snippetSkills[snippetIndex];

  return (
    <Section id="tech-stack" className="bg-[#090909] border-b border-white/5 relative overflow-hidden">
      {/* Decorative vector background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] z-0 pointer-events-none" />

      <Container className="relative z-10">
        <SectionHeading
          title="Interactive Tech Stack"
          subtitle="System Tools"
          description="A complete directory of languages, frameworks, databases, and operational suites that I use on a regular basis."
        />

        {/* Categories & Skills main directory layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mt-12 max-w-6xl mx-auto">
          {/* Left Column: Vertical Tabs */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <div className="flex items-center gap-2 mb-2 px-2">
              <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
              <span className="font-mono text-xs text-muted-text uppercase tracking-widest font-bold">
                Categories
              </span>
            </div>
            
            {skillCategories.map((cat) => {
              const isSelected = activeCategory === cat.category;
              return (
                <button
                  key={cat.category}
                  onClick={() => setActiveCategory(cat.category)}
                  className={`group relative flex items-center justify-between px-5 py-4 rounded-2xl text-xs font-mono font-bold uppercase tracking-wider text-left transition-all cursor-pointer ${
                    isSelected
                      ? 'text-[#F5F5F5] bg-accent/15 border border-accent/25 shadow-lg shadow-accent/5'
                      : 'text-muted-text bg-white/3 border border-white/3 hover:text-primary-text hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`w-1 h-1 rounded-full transition-all duration-300 ${isSelected ? 'bg-accent scale-150' : 'bg-transparent'}`} />
                    <span>{cat.category}</span>
                  </div>
                  
                  <ChevronRight 
                    className={`w-4 h-4 transition-all duration-300 ${
                      isSelected 
                        ? 'text-accent translate-x-0' 
                        : 'text-muted-text/30 group-hover:text-muted-text/70 -translate-x-1 group-hover:translate-x-0'
                    }`}
                  />
                  
                  {/* Vertical left accent bar */}
                  {isSelected && (
                    <motion.div 
                      layoutId="verticalTabActive" 
                      className="absolute left-0 top-3 bottom-3 w-1 bg-accent rounded-r-md"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Column: Skills Grid with staggered animation */}
          <div className="md:col-span-9 min-h-[300px]">
            <div className="flex items-center gap-2 mb-4 px-2">
              <span className="w-1.5 h-1.5 bg-[#89AACC] rounded-full" />
              <span className="font-mono text-xs text-[#89AACC] uppercase tracking-widest font-bold">
                Core Competencies — {activeCategory}
              </span>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
              >
                {selectedCategoryData?.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    onClick={() => setSelectedSkill(skill)}
                    className="cursor-pointer"
                  >
                    <SkillCard skill={skill} index={index} />
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Separator to introduce the Sandbox & Git Bento block */}
        <div className="max-w-6xl mx-auto my-12 border-t border-white/5" />

        {/* Bento Grid Footer: Sandbox Terminal & GitHub Activity Stats side-by-side */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-6xl mx-auto">
          
          {/* Card 1: Live Coding Sandbox Terminal Widget (lg:col-span-7) */}
          <div className="lg:col-span-7 border border-white/5 rounded-2xl bg-[#111111]/40 p-6 shadow-2xl relative overflow-hidden flex flex-col justify-between gap-4">
            <div className="flex items-center justify-between border-b border-white/5 pb-3">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-accent" />
                <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#F5F5F5] font-bold">
                  Sandbox compiler
                </span>
              </div>
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSnippet.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.25 }}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/3 border border-white/5 text-[9px] font-mono text-[#89AACC] font-bold"
                >
                  {currentSnippet.name}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Cycling animated code display */}
            <div className="min-h-[120px] flex items-center justify-start font-mono text-xs text-accent bg-[#0b0b0b]/60 border border-white/3 rounded-xl p-5 relative">
              <AnimatePresence mode="wait">
                <motion.pre
                  key={currentSnippet.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                  className="w-full text-left leading-relaxed text-[#4EC4BF] overflow-x-auto whitespace-pre font-mono"
                >
                  <code>{currentSnippet.code}</code>
                </motion.pre>
              </AnimatePresence>
            </div>

            <div className="flex justify-between items-center text-[10px] font-mono text-muted-text mt-1">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Interactive shell active
              </span>
              <span>Re-evaluating in 3.5s</span>
            </div>
          </div>

          {/* Card 2: High-Fidelity GitHub Live Activity Stats Widget (lg:col-span-5) */}
          <div className="lg:col-span-5 border border-white/5 rounded-2xl bg-[#111111]/40 p-6 shadow-2xl relative overflow-hidden flex flex-col justify-between gap-4">
            
            {/* Header block matching user's image mockup */}
            <div className="flex items-center justify-between border-b border-white/5 pb-3">
              <div className="flex items-center gap-2">
                <Github className="w-4 h-4 text-[#F5F5F5]" />
                <span className="font-sans font-bold text-sm text-[#F5F5F5]">
                  GitHub Activity
                </span>
              </div>
              
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                <span className="text-[#10B981] font-mono text-[10px] uppercase font-bold tracking-wider">
                  Active
                </span>
              </div>
            </div>

            {/* Simulated Contribution Squares Row */}
            <div className="flex flex-col gap-2.5">
              <div className="flex items-center justify-between">
                {contributionLevels.map((bgClass, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: idx * 0.05, duration: 0.4 }}
                    className={`w-6 h-6 rounded-md ${bgClass} shadow-md shadow-emerald-500/5 hover:scale-110 hover:shadow-emerald-500/25 transition-all duration-300 cursor-pointer`}
                  />
                ))}
              </div>

              {/* Legend scale row */}
              <div className="flex justify-between items-center text-[9px] font-mono text-muted-text px-0.5">
                <span>Less</span>
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-sm bg-white/5" />
                  <span className="w-1.5 h-1.5 rounded-sm bg-emerald-950" />
                  <span className="w-1.5 h-1.5 rounded-sm bg-emerald-800" />
                  <span className="w-1.5 h-1.5 rounded-sm bg-emerald-600" />
                  <span className="w-1.5 h-1.5 rounded-sm bg-emerald-400" />
                </div>
                <span>More</span>
              </div>
            </div>

            {/* Streak & Core Stat Metrics (3 Columns Box Layout) */}
            <div className="grid grid-cols-3 gap-2.5">
              {/* Stat 1: Total */}
              <div className="bg-[#161616]/60 border border-white/3 rounded-xl p-3 text-center flex flex-col justify-center items-center">
                <span className="font-sans font-bold text-xl sm:text-2xl tracking-tight text-[#F5F5F5]">
                  1247
                </span>
                <span className="font-mono text-[9px] text-muted-text uppercase font-bold mt-1 tracking-widest">
                  Total
                </span>
              </div>

              {/* Stat 2: Current Streak */}
              <div className="bg-[#161616]/60 border border-white/3 rounded-xl p-3 text-center flex flex-col justify-center items-center">
                <span className="font-sans font-bold text-xl sm:text-2xl tracking-tight text-[#10B981]">
                  23
                </span>
                <span className="font-mono text-[9px] text-muted-text uppercase font-bold mt-1 tracking-widest">
                  Current
                </span>
              </div>

              {/* Stat 3: Longest Streak */}
              <div className="bg-[#161616]/60 border border-white/3 rounded-xl p-3 text-center flex flex-col justify-center items-center">
                <span className="font-sans font-bold text-xl sm:text-2xl tracking-tight text-accent">
                  67
                </span>
                <span className="font-mono text-[9px] text-muted-text uppercase font-bold mt-1 tracking-widest">
                  Longest
                </span>
              </div>
            </div>

            {/* Metadata Footer elements */}
            <div className="border-t border-white/5 pt-3.5 space-y-1.5 font-mono text-[10px] text-muted-text">
              <div className="flex items-center gap-2">
                <GitCommit className="w-3.5 h-3.5 text-accent/60" />
                <span>Last commit: <strong className="text-[#F5F5F5]">2 hours ago</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <GitBranch className="w-3.5 h-3.5 text-[#89AACC]/60" />
                <span>Working on: <strong className="text-[#F5F5F5]">portfolio-v2</strong></span>
              </div>
            </div>

          </div>

        </div>

        {/* Dynamic Skill Details Modal */}
        <Modal
          isOpen={!!selectedSkill}
          onClose={() => setSelectedSkill(null)}
          title={selectedSkill ? `${selectedSkill.name} Competency` : undefined}
        >
          {selectedSkill && (
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-4 bg-[#090909] border border-white/5 p-4 rounded-2xl">
                <div className="p-3 bg-[#4E85BF]/10 border border-[#4E85BF]/20 rounded-xl text-[#4E85BF]">
                  <Cpu className="w-6 h-6 animate-pulse" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#F5F5F5] font-sans">
                    {selectedSkill.name}
                  </h4>
                  <p className="text-xs font-mono text-[#89AACC] mt-0.5">
                    Level of Mastery: {selectedSkill.level}%
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h5 className="text-xs uppercase tracking-widest text-[#F5F5F5] font-semibold">
                  Competency Summary
                </h5>
                <p className="text-[#8D8D8D] text-sm leading-relaxed">
                  I have spent extensive hours refining and shipping production setups built using{' '}
                  <span className="text-[#F5F5F5] font-medium">{selectedSkill.name}</span>. This
                  includes optimizing runtime assets, designing micro-architectures, writing deep unit
                  specifications, and tuning memory-management layers.
                </p>

                <div className="pt-2">
                  <h5 className="text-xs uppercase tracking-widest text-[#F5F5F5] font-semibold mb-3">
                    Shipment Capabilities
                  </h5>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {[
                      'Optimized build compilation times',
                      'Strict linter rule enforcement',
                      'Comprehensive telemetry tracing logs',
                      'Full responsive adaptive testing',
                    ].map((item, idx) => (
                      <li key={idx} className="text-xs text-[#8D8D8D] flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#4E85BF] flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </Modal>
      </Container>
    </Section>
  );
}
