'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ChevronDown, ArrowDownRight, Globe, Sparkles } from 'lucide-react';
import Container from '@/components/shared/Container';
import Section from '@/components/shared/Section';
import { personalInfo } from '@/lib/data';

export default function Hero() {
  const handleScrollToProjects = () => {
    const el = document.getElementById('featured-projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Section id="hero" className="min-h-screen flex flex-col justify-center pt-32 pb-16 bg-[#090909] relative overflow-hidden border-b border-white/5">
      {/* Editorial Decorative Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] z-0 pointer-events-none" />

      {/* Premium Static Ambient Lights */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent/5 rounded-full blur-[160px] pointer-events-none z-0" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#89AACC]/5 rounded-full blur-[160px] pointer-events-none z-0" />

      {/* Decorative vertical badges */}
      <div className="absolute left-6 sm:left-10 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-16 z-0 opacity-15 select-none pointer-events-none">
        <span className="vertical-text uppercase tracking-[0.8em] text-[10px] font-mono font-bold text-[#F5F5F5]">
          KAZI SHARIFUL ISLAM
        </span>
        <span className="vertical-text uppercase tracking-[0.8em] text-[10px] font-mono font-bold text-accent">
          FULL STACK ARCHITECT
        </span>
      </div>

      <Container className="relative z-10 flex flex-col justify-between items-center text-center min-h-[75vh] w-full">
        {/* Status indicator tag */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 flex items-center gap-2.5 bg-white/3 border border-white/5 px-4.5 py-1.5 rounded-full"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-[10px] font-mono font-bold uppercase tracking-[0.15em] text-[#8D8D8D]">
            Available for Select Engagements
          </span>
        </motion.div>

        {/* Huge Bubbly Retro Heading */}
        <div className="max-w-5xl select-none mt-4">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[44px] sm:text-[76px] md:text-[96px] leading-[1.02] font-normal tracking-tight font-shrikhand text-[#E4D5F6] text-center filter drop-shadow-[0_8px_24px_rgba(228,213,246,0.08)]"
          >
            Crafting Digital <br className="hidden sm:block" />
            Experiences <br className="hidden sm:block" />
            <span className="text-white hover:text-accent transition-colors duration-500">That Matters</span>
          </motion.h1>
        </div>

        {/* Editorial Info Matrix (Asymmetrical 2-Column Specs Layout) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 max-w-4xl w-full text-left mt-16 pt-10 border-t border-white/5"
        >
          {/* Column A: Purpose & Biography */}
          <div className="md:col-span-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3.5">
                <Globe className="w-4 h-4 text-accent" />
                <span className="font-mono text-[10px] font-bold text-accent uppercase tracking-[0.2em]">
                  Mission & Focus
                </span>
              </div>
              <p className="text-muted-text text-[13px] sm:text-sm leading-relaxed font-sans font-normal">
                I engineer highly interactive, ultra-performant full stack web products with absolute system-level discipline. Leveraging a modern typescript-centric stack, I help product teams ship pristine interfaces backed by robust micro-architectures.
              </p>
            </div>
            
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="text-[10px] font-mono font-bold bg-white/3 border border-white/5 px-3 py-1 rounded-full text-[#8D8D8D]">
                Based: Dhaka, BD
              </span>
              <span className="text-[10px] font-mono font-bold bg-white/3 border border-white/5 px-3 py-1 rounded-full text-accent">
                Shopify Expert
              </span>
            </div>
          </div>

          {/* Column B: Systems Specifications */}
          <div className="md:col-span-6 flex flex-col gap-4">
            <div className="flex items-center gap-2 mb-1.5">
              <Sparkles className="w-4 h-4 text-[#89AACC]" />
              <span className="font-mono text-[10px] font-bold text-[#89AACC] uppercase tracking-[0.2em]">
                System Architecture
              </span>
            </div>

            <div className="space-y-3 font-mono text-[11px] font-bold">
              <div className="flex items-center justify-between py-1.5 border-b border-white/3">
                <span className="text-muted-text">01 / FRONTENDS</span>
                <span className="text-primary-text">Next.js, React Native, Tailwind</span>
              </div>
              <div className="flex items-center justify-between py-1.5 border-b border-white/3">
                <span className="text-muted-text">02 / BACKENDS</span>
                <span className="text-primary-text">Node.js, NestJS, Python FastAPI</span>
              </div>
              <div className="flex items-center justify-between py-1.5 border-b border-white/3">
                <span className="text-muted-text">03 / PERSISTENCE</span>
                <span className="text-primary-text">PostgreSQL, Prisma ORM, Redis</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Scroll discovery link */}
        <div className="mt-16 w-full flex justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
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
