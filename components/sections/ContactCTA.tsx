'use client';

import React from 'react';
import { Mail, Calendar } from 'lucide-react';
import Container from '@/components/shared/Container';
import Section from '@/components/shared/Section';
import AnimatedButton from '@/components/buttons/AnimatedButton';

export default function ContactCTA() {
  return (
    <Section id="contact-cta" className="py-20 md:py-28 relative overflow-hidden bg-[#090909]">
      {/* Decorative vector background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#4E85BF]/3 rounded-full blur-3xl pointer-events-none" />

      <Container>
        <div className="border border-white/10 bg-[#121212]/50 rounded-[40px] p-8 md:p-16 text-center max-w-4xl mx-auto flex flex-col items-center relative overflow-hidden shadow-2xl">
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-[#4E85BF]/5 rounded-full blur-3xl" />
          
          <span className="text-xs uppercase tracking-[0.25em] text-[#4E85BF] font-mono mb-4 block font-bold">
            Work with Me
          </span>

          <h3 className="text-3xl md:text-5xl font-serif text-[#F5F5F5] mb-4 font-normal tracking-tight max-w-2xl leading-tight">
            Have a project in mind? Let&apos;s build something <span className="italic font-light text-[#89AACC]">resilient</span>.
          </h3>

          <p className="text-muted-text text-xs md:text-sm max-w-lg leading-relaxed mb-10 font-sans">
            I am currently accepting selective system reviews, code audits, and full stack project consulting agreements. Let&apos;s map your system requirements.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto relative z-10">
            <AnimatedButton variant="primary" href="mailto:kazisharifulislam52@gmail.com" className="w-full sm:w-auto px-8">
              <Mail className="w-4 h-4 mr-1.5" />
              Get in Touch
            </AnimatedButton>
            <AnimatedButton variant="outline" href="https://calendly.com" className="w-full sm:w-auto px-8">
              <Calendar className="w-4 h-4 mr-1.5" />
              Book Architecture Audit
            </AnimatedButton>
          </div>
        </div>
      </Container>
    </Section>
  );
}
