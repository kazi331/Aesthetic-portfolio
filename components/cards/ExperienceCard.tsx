'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Award, Briefcase } from 'lucide-react';
import { Experience } from '@/types/portfolio';

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

export default function ExperienceCard({ experience, index }: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="p-6 md:p-8 rounded-2xl bg-surface border border-white/5 relative overflow-hidden group hover:border-accent/20 transition-all duration-300"
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-accent/2 rounded-full blur-2xl pointer-events-none group-hover:bg-accent/5 transition-all duration-500" />
      
      {/* Header Info */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-background border border-white/5 flex items-center justify-center font-serif text-lg font-bold text-accent">
            {experience.logoPlaceholder || "XP"}
          </div>
          <div>
            <h3 className="text-xl font-medium text-primary-text group-hover:text-accent transition-colors duration-300">
              {experience.role}
            </h3>
            <p className="text-xs text-muted-text flex items-center gap-1.5 mt-0.5">
              <Briefcase className="w-3.5 h-3.5 text-accent-secondary/60" />
              {experience.company}
            </p>
          </div>
        </div>
        
        <span className="inline-flex items-center gap-1.5 text-xs text-accent-secondary font-mono bg-white/5 px-3 py-1 rounded-full w-fit">
          <Calendar className="w-3.5 h-3.5" />
          {experience.duration}
        </span>
      </div>

      <p className="text-muted-text text-sm leading-relaxed mb-6">
        {experience.description}
      </p>

      {/* Bullet Items */}
      {experience.responsibilities && experience.responsibilities.length > 0 && (
        <div className="mb-6">
          <h4 className="text-xs uppercase tracking-widest text-primary-text/80 font-semibold mb-3">
            Core Responsibilities
          </h4>
          <ul className="space-y-2">
            {experience.responsibilities.map((resp, i) => (
              <li key={i} className="text-muted-text text-xs flex items-start gap-2.5 leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-accent/40 mt-1.5 flex-shrink-0" />
                {resp}
              </li>
            ))}
          </ul>
        </div>
      )}

      {experience.achievements && experience.achievements.length > 0 && (
        <div className="mb-6">
          <h4 className="text-xs uppercase tracking-widest text-accent/80 font-semibold mb-3 flex items-center gap-1.5">
            <Award className="w-4 h-4 text-accent" />
            Key Accomplishments
          </h4>
          <ul className="space-y-2">
            {experience.achievements.map((ach, i) => (
              <li key={i} className="text-primary-text/90 text-xs flex items-start gap-2.5 leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                {ach}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Tech badges */}
      <div className="pt-4 border-t border-white/5">
        <div className="flex flex-wrap gap-1.5">
          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className="text-[10px] font-mono text-muted-text bg-background border border-white/5 px-2.5 py-0.5 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
