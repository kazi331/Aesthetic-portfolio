'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Briefcase, GraduationCap, MapPin, ExternalLink, Mail, ArrowRight, CheckCircle2 } from 'lucide-react';
import { workExperiences, educations, references, personalInfo } from '@/lib/data';
import Container from '@/components/shared/Container';
import Section from '@/components/shared/Section';
import SectionHeading from '@/components/shared/SectionHeading';

export default function Experience() {
  const [activeExpIndex, setActiveExpIndex] = useState<number>(0);

  return (
    <Section id="experience" className="bg-[#121212]/10 border-b border-white/5 overflow-hidden">
      <Container>
        <SectionHeading
          title="Engineering Journey"
          subtitle="Career & Academics"
          description="Over 3 years of hands-on experience designing robust database schemas, leading frontend teams, and solo-architecting Shopify integrations."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mt-8">
          {/* Left Column: Interactive Experience Timeline (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center gap-2.5 mb-2">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <h3 className="font-mono text-xs uppercase tracking-widest text-[#F5F5F5] font-bold">
                Professional Work Experience
              </h3>
            </div>

            {/* Tabs for experience selector */}
            <div className="flex overflow-x-auto pb-3 gap-2 scrollbar-none border-b border-white/5">
              {workExperiences.map((exp, idx) => (
                <button
                  key={exp.company}
                  onClick={() => setActiveExpIndex(idx)}
                  className={`px-4 py-2.5 rounded-2xl text-xs font-mono font-semibold uppercase tracking-wider whitespace-nowrap transition-all ${
                    activeExpIndex === idx
                      ? 'bg-accent/15 border border-accent/35 text-accent shadow-lg shadow-accent/5'
                      : 'bg-white/5 border border-white/5 text-muted-text hover:bg-white/10 hover:text-primary-text'
                  }`}
                >
                  {exp.company}
                </button>
              ))}
            </div>

            {/* Dynamic Content Display with AnimatePresence */}
            <div className="relative min-h-[380px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeExpIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-[#121212]/40 border border-white/5 rounded-[32px] p-6 sm:p-8 relative overflow-hidden"
                >
                  {/* Subtle background light glow */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/5 pb-5">
                    <div>
                      <h4 className="text-2xl font-bold font-display text-primary-text">
                        {workExperiences[activeExpIndex].role}
                      </h4>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 mt-2 text-xs font-mono text-muted-text">
                        <span className="text-[#89AACC] font-semibold flex items-center gap-1">
                          {workExperiences[activeExpIndex].company}
                          {workExperiences[activeExpIndex].url && (
                            <a
                              href={workExperiences[activeExpIndex].url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex text-accent hover:text-accent-secondary"
                            >
                              <ExternalLink className="w-3.5 h-3.5 inline" />
                            </a>
                          )}
                        </span>
                        <span className="opacity-40">•</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {workExperiences[activeExpIndex].location}
                        </span>
                      </div>
                    </div>

                    <div className="bg-white/5 border border-white/5 px-4 py-2 rounded-2xl self-start sm:self-center text-xs font-mono font-bold text-accent tracking-wider uppercase">
                      {workExperiences[activeExpIndex].period}
                    </div>
                  </div>

                  {/* Bullet Highlights */}
                  <div className="mt-6 space-y-4">
                    {workExperiences[activeExpIndex].highlights.map((highlight, hIdx) => (
                      <motion.div
                        key={hIdx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: hIdx * 0.08, duration: 0.4 }}
                        className="flex items-start gap-3 text-sm text-muted-text leading-relaxed"
                      >
                        <CheckCircle2 className="w-4 h-4 text-accent/70 mt-1 shrink-0" />
                        <span>{highlight}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right Column: Education, Languages & References (4 cols) */}
          <div className="lg:col-span-4 space-y-8">
            {/* Education Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-2.5 mb-2">
                <GraduationCap className="w-4 h-4 text-[#89AACC]" />
                <h3 className="font-mono text-xs uppercase tracking-widest text-[#F5F5F5] font-bold">
                  Education
                </h3>
              </div>

              <div className="space-y-4">
                {educations.map((edu, idx) => (
                  <motion.div
                    key={edu.degree}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="p-5 bg-[#121212]/30 border border-white/5 rounded-2xl relative overflow-hidden group hover:border-accent/15 transition-all"
                  >
                    <span className="text-[10px] font-mono text-accent uppercase tracking-widest font-bold">
                      {edu.period}
                    </span>
                    <h4 className="text-base font-bold font-display text-primary-text mt-1.5">
                      {edu.degree}
                    </h4>
                    <p className="text-xs text-muted-text font-sans mt-1">
                      {edu.institution}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Languages Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-2.5 mb-2">
                <span className="w-2 h-2 bg-accent rounded-full" />
                <h3 className="font-mono text-xs uppercase tracking-widest text-[#F5F5F5] font-bold">
                  Languages Spoken
                </h3>
              </div>

              <div className="flex flex-wrap gap-2.5">
                <span className="px-4 py-2 bg-white/5 border border-white/5 rounded-2xl text-xs font-mono font-medium text-primary-text flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#89AACC] rounded-full" />
                  Bengali <span className="opacity-40">(Native)</span>
                </span>
                <span className="px-4 py-2 bg-white/5 border border-white/5 rounded-2xl text-xs font-mono font-medium text-primary-text flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                  English <span className="opacity-40">(Fluent)</span>
                </span>
              </div>
            </div>

            {/* References Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-2.5 mb-2">
                <Mail className="w-4 h-4 text-accent" />
                <h3 className="font-mono text-xs uppercase tracking-widest text-[#F5F5F5] font-bold">
                  Professional References
                </h3>
              </div>

              <div className="space-y-3">
                {references.map((ref, idx) => (
                  <motion.div
                    key={ref.name}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="p-4 bg-white/5 border border-white/5 rounded-2xl"
                  >
                    <h4 className="text-sm font-bold font-display text-primary-text">
                      {ref.name}
                    </h4>
                    <p className="text-xs text-muted-text font-sans mt-0.5">
                      {ref.role} — <span className="text-accent-secondary font-semibold">{ref.company}</span>
                    </p>
                    <a
                      href={`mailto:${ref.email}`}
                      className="mt-2 inline-flex items-center gap-1.5 text-[10px] font-mono text-accent hover:text-accent-secondary transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      {ref.email}
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
