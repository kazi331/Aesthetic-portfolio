'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { Skill } from '@/types/portfolio';

interface SkillCardProps {
  skill: Skill;
  index: number;
}

export default function SkillCard({ skill, index }: SkillCardProps) {
  return (
    <motion.div
      id={`skill-card-${index}`}
      whileHover={{ y: -4, borderColor: 'rgba(78, 133, 191, 0.3)' }}
      className="p-5 rounded-2xl bg-[#121212] border border-white/5 flex flex-col justify-between transition-all duration-300 group shadow-md"
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <h4 className="text-sm font-semibold text-primary-text group-hover:text-accent transition-colors font-sans">
            {skill.name}
          </h4>
          <span className="text-[10px] font-mono text-muted-text mt-1 block">
            Competency: {skill.level}%
          </span>
        </div>
        <span className="p-1.5 rounded-lg bg-white/3 border border-white/5 text-muted-text group-hover:text-accent group-hover:translate-x-0.5 transition-all">
          <ChevronRight className="w-3.5 h-3.5" />
        </span>
      </div>

      {/* Visual meter bar */}
      <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: index * 0.05, ease: 'easeOut' }}
          className="h-full bg-[#4E85BF]"
        />
      </div>
    </motion.div>
  );
}
