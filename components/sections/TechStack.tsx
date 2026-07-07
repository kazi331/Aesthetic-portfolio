'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, Cpu, ChevronRight } from 'lucide-react';
import { skillCategories } from '@/lib/data';
import { Skill } from '@/types/portfolio';
import Container from '@/components/shared/Container';
import Section from '@/components/shared/Section';
import SectionHeading from '@/components/shared/SectionHeading';
import SkillCard from '@/components/cards/SkillCard';
import Modal from '@/components/shared/Modal';

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].category);
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

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

  return (
    <Section id="tech-stack" className="bg-[#090909] border-b border-white/5">
      <Container>
        <SectionHeading
          title="Interactive Tech Stack"
          subtitle="System Tools"
          description="A complete directory of languages, frameworks, databases, and operational suites that I use on a regular basis."
        />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mt-10 max-w-6xl mx-auto">
          {/* Left Column: Vertical Tabs */}
          <div className="md:col-span-4 flex flex-col gap-3">
            <div className="flex items-center gap-2 mb-2 px-2">
              <span className="w-1.5 h-1.5 bg-accent rounded-full" />
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
          <div className="md:col-span-8 min-h-[320px]">
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
