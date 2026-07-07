'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import Container from '@/components/shared/Container';
import Section from '@/components/shared/Section';
import { personalInfo } from '@/lib/data';

const snippetSkills = [
  {
    name: 'React',
    code: 'const App = () => {}',
    dots: ['#4EC4BF', '#7054E6', '#8F3DB8', '#42B883'],
  },
  {
    name: 'Next.js',
    code: 'export default function Page() { return <main /> }',
    dots: ['#ffffff', '#888888', '#444444', '#111111'],
  },
  {
    name: 'Node.js',
    code: "app.listen(3000, () => console.log('Live'));",
    dots: ['#81C784', '#66BB6A', '#4CAF50', '#388E3C'],
  },
  {
    name: 'TypeScript',
    code: 'interface User { id: string; role: Role; }',
    dots: ['#3178C6', '#2F74C0', '#1F5E9B', '#4EA2FF'],
  },
  {
    name: 'PostgreSQL',
    code: 'SELECT * FROM users WHERE active = true;',
    dots: ['#336791', '#2F5D85', '#1D3B55', '#4D82B8'],
  },
  {
    name: 'Python',
    code: 'def handle_event(event): return {"status": "ok"}',
    dots: ['#306998', '#FFD43B', '#4B8BBE', '#FFE873'],
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % snippetSkills.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  const handleScrollToProjects = () => {
    const el = document.getElementById('featured-projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentSkill = snippetSkills[index];

  return (
    <Section id="hero" className="min-h-screen flex items-center justify-center pt-32 pb-12 bg-[#090909] relative overflow-hidden border-b border-white/5">
      {/* Premium Ambient Lights */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#4E85BF]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#89AACC]/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Decorative vertical badges */}
      <div className="absolute left-6 sm:left-10 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-center gap-16 z-0 opacity-15 select-none pointer-events-none">
        <span className="vertical-text uppercase tracking-[0.8em] text-[10px] font-mono font-bold text-[#F5F5F5]">
          KAZI SHARIFUL ISLAM
        </span>
        <span className="vertical-text uppercase tracking-[0.8em] text-[10px] font-mono font-bold text-accent">
          FULL STACK DEVELOPER
        </span>
      </div>

      <Container className="relative z-10 flex flex-col justify-between items-center text-center min-h-[75vh]">
        {/* Name Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-muted-text bg-white/3 border border-white/5 px-4.5 py-1.5 rounded-full">
            Kazi Shariful Islam — Portfolio
          </span>
        </motion.div>

        {/* Centered Code Block Arena */}
        <div className="flex flex-col items-center justify-center max-w-2xl w-full mb-12">
          {/* Outer Capsule / Pill Badge */}
          <div className="h-12 flex items-center mb-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSkill.name}
                initial={{ opacity: 0, scale: 0.95, y: 5 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -5 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className="flex items-center gap-3 bg-[#111111]/90 border border-white/5 shadow-md px-5 py-2 rounded-full font-mono text-xs text-primary-text"
              >
                <div className="flex gap-1.5">
                  {currentSkill.dots.map((color, i) => (
                    <span
                      key={i}
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
                <span className="text-[#8D8D8D]">|</span>
                <span className="font-semibold tracking-wider">{currentSkill.name}</span>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Interactive Code Container */}
          <div className="w-full max-w-xl bg-[#111111]/40 border border-white/5 rounded-2xl p-6 sm:p-8 min-h-[96px] flex items-center justify-center shadow-2xl relative overflow-hidden">
            {/* Soft inner glow */}
            <div className="absolute inset-0 bg-radial from-accent/5 via-transparent to-transparent opacity-40 pointer-events-none" />
            
            <AnimatePresence mode="wait">
              <motion.pre
                key={currentSkill.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="font-mono text-sm sm:text-base text-accent/90 text-center select-all cursor-pointer leading-relaxed tracking-tight"
              >
                <code>{currentSkill.code}</code>
              </motion.pre>
            </AnimatePresence>
          </div>
        </div>

        {/* Huge Bubbly Retro Heading */}
        <div className="max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-[42px] sm:text-[72px] md:text-[88px] leading-[1.05] font-normal tracking-tight font-shrikhand text-[#E4D5F6] text-center filter drop-shadow-[0_4px_12px_rgba(228,213,246,0.06)]"
          >
            Crafting Digital <br className="hidden sm:block" />
            Experiences <br className="hidden sm:block" />
            <span className="text-white">That Matters</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 max-w-xl mx-auto text-[#8D8D8D] leading-relaxed text-sm sm:text-base font-sans"
          >
            {personalInfo.summary}
          </motion.p>
        </div>

        {/* Scroll discovery link */}
        <div className="mt-14 w-full flex justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            onClick={handleScrollToProjects}
            className="flex flex-col items-center gap-2 cursor-pointer group select-none"
          >
            <div className="w-10 h-10 border border-white/5 rounded-full flex items-center justify-center group-hover:border-accent/30 group-hover:bg-white/3 transition-all">
              <ChevronDown className="w-4 h-4 text-muted-text group-hover:text-accent group-hover:translate-y-0.5 transition-all" />
            </div>
            <span className="text-[9px] uppercase tracking-[0.25em] text-muted-text font-mono font-bold opacity-60 group-hover:opacity-100 transition-opacity">
              Scroll down
            </span>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
