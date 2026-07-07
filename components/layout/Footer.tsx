'use client';

import React from 'react';
import Container from '@/components/shared/Container';
import { personalInfo } from '@/lib/data';

export default function Footer() {
  return (
    <footer id="footer" className="border-t border-white/5 bg-[#090909] py-12 relative overflow-hidden">
      <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-muted-text font-mono">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-[#4E85BF] rounded-full animate-pulse" />
            <span>KAZI SHARIFUL ISLAM // PORTFOLIO MMXXVI // SYSTEM_ONLINE</span>
          </div>

          <div className="flex items-center gap-8 text-[11px] font-medium tracking-widest uppercase">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors duration-300"
            >
              LinkedIn
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors duration-300"
            >
              Github
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="hover:text-accent transition-colors duration-300"
            >
              Email
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
