'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, Cpu } from 'lucide-react';
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

  return (
    <Section id="tech-stack" className="bg-[#090909]">
      <Container>
        <SectionHeading
          title="Interactive Tech Stack"
          subtitle="System Tools"
          description="A complete directory of languages, frameworks, databases, and operational suites that I use on a regular basis."
        />

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 max-w-4xl mx-auto">
          {skillCategories.map((cat) => {
            const isSelected = activeCategory === cat.category;
            return (
              <button
                key={cat.category}
                onClick={() => setActiveCategory(cat.category)}
                className={`px-4 sm:px-5 py-2.5 rounded-full text-xs font-mono font-medium transition-all duration-300 relative cursor-pointer ${
                  isSelected
                    ? 'text-[#F5F5F5] bg-[#4E85BF]/15 border border-[#4E85BF]/25 shadow-md shadow-[#4E85BF]/5'
                    : 'text-[#8D8D8D] bg-white/5 border border-white/5 hover:text-[#F5F5F5] hover:bg-white/10'
                }`}
              >
                {cat.category}
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="contents"
            >
              {selectedCategoryData?.skills.map((skill, index) => (
                <div
                  key={skill.name}
                  onClick={() => setSelectedSkill(skill)}
                  className="cursor-pointer"
                >
                  <SkillCard skill={skill} index={index} />
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
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
                      'Strict lint and type verification rules',
                      'Full responsive adaptive testing',
                      'Comprehensive telemetry tracing logs',
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
