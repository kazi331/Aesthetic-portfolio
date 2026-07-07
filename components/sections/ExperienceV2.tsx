'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Briefcase, ChevronRight, Navigation, Sparkles, Check } from 'lucide-react';
import Container from '@/components/shared/Container';
import Section from '@/components/shared/Section';

interface JourneyStep {
  company: string;
  role: string;
  period: string;
  duration: string;
  location: string;
  highlights: string[];
  x: number; // percentage coordinate for path
  y: number; // percentage coordinate for path
  yearLabel: string;
  color: string; // glowing node color
}

export default function ExperienceV2() {
  const [activeStep, setActiveStep] = useState<number>(3); // Default to current/latest step

  // High fidelity career steps matching Kazi's actual portfolio data from data.ts
  const journeySteps: JourneyStep[] = [
    {
      company: 'Approveage Inc',
      role: 'Frontend Engineer',
      period: 'Mar 2023 – Mar 2024',
      duration: '1 yr',
      location: 'Toronto, Canada (Remote)',
      highlights: [
        'Established real-time data flow between client and admin panels using Socket.IO.',
        'Integrated Firebase Cloud Messaging to dispatch system push notifications.'
      ],
      x: 15,
      y: 75,
      yearLabel: '2023',
      color: '#4E85BF',
    },
    {
      company: 'Dhali Overseas',
      role: 'React/Next.js Developer',
      period: 'Apr 2024 – Aug 2024',
      duration: '5 mos',
      location: 'Dhaka, Bangladesh',
      highlights: [
        'Migrated three massive projects from Webflow to highly optimized React/Next.js routes.',
        'Implemented TanStack Query, cutting page load latencies by 30%.'
      ],
      x: 40,
      y: 55,
      yearLabel: '2024',
      color: '#4E85BF',
    },
    {
      company: 'Tutorsplan Corp',
      role: 'Full Stack Developer (Frontend Lead)',
      period: 'Sept 2024 – July 2025',
      duration: '1 yr',
      location: 'Dhaka, Bangladesh',
      highlights: [
        'Built full tutor/student portal with Next.js/NestJS, using Prisma ORM with PostgreSQL.',
        'Led and mentored frontend team, reviewing code quality and directing sprints.'
      ],
      x: 65,
      y: 35,
      yearLabel: '2025',
      color: '#10B981',
    },
    {
      company: 'Devsnest OPC',
      role: 'Software Engineer',
      period: 'Oct 2025 – Present',
      duration: 'Now',
      location: 'Dhaka, Bangladesh',
      highlights: [
        'Solo-built Mixory Bundles Shopify app end to end, currently live on the Shopify App Store.',
        'Authored performance-tuned Shopify discount Functions in Node.js and Rust.'
      ],
      x: 88,
      y: 18,
      yearLabel: 'Now',
      color: '#10B981',
    }
  ];

  // Map progress bar percentage based on active waypoint
  const progressPercent = Math.round(((activeStep + 1) / journeySteps.length) * 100);

  return (
    <Section id="experience-v2" className="bg-[#090909] border-b border-white/5 relative py-20 overflow-hidden">
      {/* Decorative timeline coordinates background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_40%,rgba(16,185,129,0.02),transparent)] pointer-events-none" />

      <Container>
        
        {/* Header Block matching mockup layout */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 max-w-6xl mx-auto mb-16">
          <div className="space-y-3 text-left">
            <div className="flex items-center gap-2">
              <span className="w-6 h-[2px] bg-[#10B981]" />
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#10B981] font-bold">
                THE ASCENT
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-display tracking-tight text-[#F5F5F5]">
              Experience Journey
            </h2>
            <p className="text-sm font-sans text-muted-text max-w-2xl leading-relaxed">
              A climb through roles — each waypoint a step toward greater ownership, leadership, and shipping production software end-to-end.
            </p>
          </div>

          {/* Connected timeline milestones list */}
          <div className="flex items-center gap-4 bg-white/3 border border-white/5 px-5 py-2.5 rounded-2xl font-mono text-xs font-bold text-muted-text">
            {journeySteps.map((step, idx) => (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`transition-colors hover:text-primary-text ${activeStep === idx ? 'text-[#10B981]' : 'text-muted-text/60'}`}
              >
                {step.yearLabel}
              </button>
            ))}
          </div>
        </div>

        {/* Roadmap Connected Grid Container */}
        <div className="relative w-full min-h-[580px] bg-black/30 border border-white/5 rounded-[40px] p-6 md:p-10 overflow-hidden flex flex-col justify-between">
          
          {/* Animated SVG Path connecting the coordinates */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="pathGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#4E85BF" stopOpacity="0.4" />
                <stop offset="50%" stopColor="#89AACC" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#10B981" stopOpacity="0.4" />
              </linearGradient>
              <linearGradient id="activeGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#4E85BF" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#10B981" stopOpacity="0.95" />
              </linearGradient>
            </defs>

            {/* Static background road map path line */}
            <path
              d="M 15 75 Q 30 65 40 55 T 65 35 T 88 18"
              pathLength="100"
              fill="none"
              stroke="url(#pathGradient)"
              strokeWidth="4"
              strokeLinecap="round"
              className="hidden md:block"
            />

            {/* Glowing tracer active line based on current step */}
            <motion.path
              d="M 15 75 Q 30 65 40 55 T 65 35 T 88 18"
              pathLength="100"
              fill="none"
              stroke="url(#activeGradient)"
              strokeWidth="4"
              strokeLinecap="round"
              className="hidden md:block"
              initial={{ strokeDasharray: '0 100' }}
              animate={{
                strokeDasharray: `${(activeStep / (journeySteps.length - 1)) * 100} 100`
              }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
            />
          </svg>

          {/* Interactive Waypoints and floating Cards */}
          <div className="relative w-full h-full min-h-[460px] z-10 grid grid-cols-1 md:grid-cols-4 gap-6">
            {journeySteps.map((step, idx) => {
              const isActive = activeStep === idx;
              const isPast = idx < activeStep;

              return (
                <div key={idx} className="relative flex flex-col justify-between h-full group">
                  
                  {/* Glowing Waypoint Node Coordinate Indicator */}
                  <div
                    onClick={() => setActiveStep(idx)}
                    className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 hidden md:flex items-center justify-center cursor-pointer select-none"
                    style={{
                      left: `${step.x}%`,
                      top: `${step.y}%`,
                    }}
                  >
                    {/* Ring glow */}
                    <div
                      style={{ borderColor: step.color }}
                      className={`absolute w-12 h-12 rounded-full border-2 transition-all duration-500 scale-75 ${
                        isActive ? 'scale-125 opacity-100 animate-pulse' : 'opacity-0 group-hover:opacity-40 group-hover:scale-100'
                      }`}
                    />

                    {/* Core node dot */}
                    <div
                      style={{ backgroundColor: step.color }}
                      className={`w-6 h-6 rounded-full border-4 border-[#090909] shadow-lg shadow-black transition-all duration-300 ${
                        isActive ? 'scale-125' : 'scale-90 group-hover:scale-110'
                      }`}
                    />
                  </div>

                  {/* Waypoint details Card Block */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: isActive ? 1.02 : 0.96,
                    }}
                    transition={{ duration: 0.4 }}
                    onClick={() => setActiveStep(idx)}
                    className={`p-5 rounded-3xl border transition-all duration-300 text-left relative cursor-pointer flex flex-col justify-between h-full min-h-[220px] ${
                      isActive
                        ? 'bg-[#121212]/95 border-white/10 shadow-2xl shadow-black/80'
                        : 'bg-black/30 border-white/3 hover:border-white/10 opacity-70 hover:opacity-90'
                    }`}
                  >
                    <div>
                      {/* Meta information tags */}
                      <div className="flex items-center justify-between gap-2 border-b border-white/5 pb-3">
                        <span className="font-mono text-[10px] text-accent font-bold uppercase tracking-wider">
                          {step.company}
                        </span>
                        <span className="font-mono text-[9px] bg-white/5 border border-white/5 px-2.5 py-1 rounded-full text-muted-text font-bold">
                          {step.duration}
                        </span>
                      </div>

                      {/* Role & Location */}
                      <h4 className="font-sans font-bold text-base text-[#F5F5F5] mt-3 tracking-tight">
                        {step.role}
                      </h4>
                      
                      <div className="flex items-center gap-1.5 mt-1.5 font-mono text-[9px] text-muted-text">
                        <MapPin className="w-3 h-3 text-[#89AACC]/60" />
                        <span>{step.location}</span>
                      </div>

                      {/* Highlights */}
                      <div className="mt-4 space-y-2">
                        {step.highlights.map((highlight, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-2 text-[11px] text-muted-text leading-relaxed">
                            <span className="mt-1 w-1.5 h-1.5 shrink-0 rounded-full bg-[#10B981]/50" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Timeline period badge */}
                    <div className="border-t border-white/5 pt-3.5 mt-4 flex items-center justify-between">
                      <span className="font-mono text-[9px] text-muted-text/80 font-semibold uppercase">
                        {step.period}
                      </span>
                      {isActive && (
                        <div className="w-4 h-4 rounded-full bg-[#10B981]/15 border border-[#10B981]/30 flex items-center justify-center">
                          <Check className="w-2.5 h-2.5 text-[#10B981]" />
                        </div>
                      )}
                    </div>
                  </motion.div>

                </div>
              );
            })}
          </div>

          {/* Bottom Journey Navigation Bar matching mockup */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-white/5 mt-10 relative z-20 font-mono text-xs">
            <div className="flex items-center gap-2.5 text-muted-text">
              <Navigation className="w-4 h-4 text-accent rotate-45 animate-bounce" />
              <span>Click waypoints or years above to trace the career progression</span>
            </div>

            {/* Ascent status indicator bar */}
            <div className="flex items-center gap-4 w-full sm:w-64">
              <div className="h-1.5 bg-white/5 rounded-full flex-1 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#4E85BF] to-[#10B981]"
                  initial={{ width: '0%' }}
                  animate={{ width: `${progressPercent}%` }}
                  transition={{ duration: 0.6 }}
                />
              </div>
              <span className="font-bold text-[#F5F5F5] min-w-[32px] text-right">
                {progressPercent}%
              </span>
            </div>
          </div>

        </div>

      </Container>
    </Section>
  );
}
