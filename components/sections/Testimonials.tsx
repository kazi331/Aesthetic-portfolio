'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '@/lib/data';
import Container from '@/components/shared/Container';
import Section from '@/components/shared/Section';
import SectionHeading from '@/components/shared/SectionHeading';

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const current = testimonials[index];

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  if (testimonials.length === 0) return null;

  return (
    <Section id="testimonials" className="bg-[#121212]/10">
      <Container>
        <SectionHeading
          title="Industry Endorsements"
          subtitle="Collaborator Reviews"
          description="Read what product leaders and engineering managers have to say about working together on complex distributed platforms."
        />

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="bg-[#121212] border border-white/5 rounded-3xl p-8 md:p-12 relative flex flex-col md:flex-row items-center gap-8 shadow-xl"
            >
              {/* Quote bubble absolute accent */}
              <Quote className="absolute top-6 right-8 w-12 h-12 text-[#4E85BF]/5 pointer-events-none" />

              {/* Avatar and Info */}
              <div className="flex flex-col items-center text-center flex-shrink-0 md:w-44">
                <div className="relative w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-[#4E85BF]/20">
                  <Image
                    src={current.avatarUrl}
                    alt={current.name}
                    fill
                    sizes="80px"
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h4 className="text-sm font-semibold text-[#F5F5F5]">{current.name}</h4>
                <p className="text-[10px] uppercase font-mono text-[#8D8D8D] mt-0.5 tracking-wider font-semibold">
                  {current.role}
                </p>
                <span className="text-[10px] font-mono text-[#4E85BF] mt-1 block">
                  {current.company}
                </span>
              </div>

              {/* Content body */}
              <div className="flex-grow flex flex-col justify-center">
                <p className="text-[#8D8D8D] text-sm md:text-base leading-relaxed italic">
                  &ldquo;{current.content}&rdquo;
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          {testimonials.length > 1 && (
            <div className="flex items-center justify-end gap-3.5 mt-6">
              <button
                onClick={handlePrev}
                className="p-2.5 rounded-full border border-white/5 bg-[#121212] text-[#8D8D8D] hover:text-[#4E85BF] hover:border-[#4E85BF]/40 transition-all duration-300 cursor-pointer"
                aria-label="Previous quote"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="p-2.5 rounded-full border border-white/5 bg-[#121212] text-[#8D8D8D] hover:text-[#4E85BF] hover:border-[#4E85BF]/40 transition-all duration-300 cursor-pointer"
                aria-label="Next quote"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
}
