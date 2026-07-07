'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import Container from '@/components/shared/Container';
import Section from '@/components/shared/Section';

export default function Hero() {
  const handleScrollToProjects = () => {
    const el = document.getElementById('featured-projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Section id="hero" className="min-h-screen flex items-center justify-center pt-28 pb-12 bg-[#090909] relative overflow-hidden border-b border-white/5">
      {/* Editorial Floating Accent Lights */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#4E85BF] rounded-full blur-[160px] opacity-10 pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#89AACC] rounded-full blur-[160px] opacity-10 pointer-events-none" />

      {/* Vertical Decorative Ribbon */}
      <div className="absolute right-6 sm:right-10 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-center gap-16 z-0 opacity-15 select-none pointer-events-none">
        <span className="vertical-text uppercase tracking-[0.8em] text-[10px] font-mono font-bold text-[#F5F5F5]">
          PORTFOLIO MMXXVI
        </span>
        <span className="vertical-text uppercase tracking-[0.8em] text-[10px] font-mono font-bold text-[#4E85BF]">
          SYSTEM_ONLINE
        </span>
      </div>

      <Container className="relative z-10 flex flex-col justify-between min-h-[70vh]">
        <div className="pt-8 max-w-4xl">
          {/* Subtitle tag with lines */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="text-[#4E85BF] font-mono text-xs tracking-widest uppercase font-semibold">
              [ SENIOR FULL STACK ENGINEER ]
            </span>
            <div className="h-[1px] w-24 bg-white/20" />
          </motion.div>

          {/* Large Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[64px] sm:text-[96px] md:text-[112px] leading-[0.85] font-bold tracking-tighter text-[#F5F5F5]"
          >
            ALEX <br />
            <span className="font-serif italic font-light text-[#89AACC]">
              Rivera
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 max-w-xl text-[#8D8D8D] leading-relaxed text-base sm:text-lg font-sans"
          >
            Crafting pixel-perfect digital experiences with high-performance architectures. Specialized in Next.js, Go, Rust, and low-latency systems.
          </motion.p>
        </div>

        {/* Scroll hint & Socials Footer row */}
        <div className="mt-16 sm:mt-24 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">
          {/* Scroll arrow hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            onClick={handleScrollToProjects}
            className="flex items-center gap-3.5 cursor-pointer group select-none"
          >
            <div className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center group-hover:border-accent/40 group-hover:bg-white/5 transition-all">
              <ChevronDown className="w-5 h-5 text-muted-text group-hover:text-accent group-hover:translate-y-0.5 transition-all" />
            </div>
            <span className="text-[10px] uppercase tracking-widest text-muted-text font-mono font-semibold opacity-60 group-hover:opacity-100 transition-opacity">
              Scroll to discover
            </span>
          </motion.div>

          {/* External Social links in monospace */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex gap-8 text-[11px] font-mono font-semibold tracking-widest uppercase text-muted-text"
          >
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors duration-300"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors duration-300"
            >
              Github
            </a>
            <a
              href="https://dribbble.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors duration-300"
            >
              Dribbble
            </a>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
