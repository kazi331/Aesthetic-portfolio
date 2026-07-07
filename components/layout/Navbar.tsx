'use client';

import React, { useState, useEffect } from 'react';
import { personalInfo } from '@/lib/data';

export default function Navbar() {
  const [active, setActive] = useState('hero');

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'Projects', id: 'featured-projects' },
    { label: 'Stack', id: 'tech-stack' },
    { label: 'Journey', id: 'experience' },
    { label: 'Services', id: 'services' },
    { label: 'Reviews', id: 'testimonials' },
  ];

  // Simple scroll spy to update active item
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 180;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActive(item.id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav id="navbar" className="fixed top-6 left-1/2 -translate-x-1/2 glass-nav px-6 sm:px-8 py-3.5 rounded-full flex items-center gap-6 sm:gap-8 z-50 w-[92%] max-w-3xl justify-between sm:justify-start shadow-xl border border-white/10">
      <div
        id="navbar-logo"
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <div className="w-2.5 h-2.5 bg-[#4E85BF] rounded-full" />
        <span className="font-bold tracking-tighter text-sm text-[#F5F5F5]">KS.01</span>
      </div>

      <div className="h-4 w-[1px] bg-white/10 hidden sm:block" />

      <ul id="navbar-menu" className="hidden sm:flex gap-5 text-[10px] font-mono font-semibold tracking-widest uppercase opacity-85">
        {navItems.map((item) => {
          const isSelected = active === item.id;
          return (
            <li
              key={item.id}
              onClick={() => handleScrollTo(item.id)}
              className={`cursor-pointer transition-colors duration-300 ${
                isSelected ? 'text-[#4E85BF]' : 'text-[#F5F5F5]/70 hover:text-[#F5F5F5]'
              }`}
            >
              {item.label}
            </li>
          );
        })}
      </ul>

      <div className="h-4 w-[1px] bg-white/10 hidden sm:block" />

      <button
        id="navbar-resume-btn"
        onClick={() => window.open(`mailto:${personalInfo.email}?subject=Hi Kazi, let's connect!`, '_self')}
        className="text-[10px] font-mono font-bold bg-[#F5F5F5] text-black px-4 py-1.5 rounded-full uppercase tracking-widest hover:bg-[#F5F5F5]/90 transition-all cursor-pointer"
      >
        Hire Me
      </button>
    </nav>
  );
}
