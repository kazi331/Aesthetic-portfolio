'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { personalInfo } from '@/lib/data';

const navItems = [
  { label: 'Home', id: 'hero' },
  { label: 'Projects', id: 'featured-projects' },
  { label: 'Stack', id: 'tech-stack' },
  { label: 'Journey', id: 'experience' },
  { label: 'Services', id: 'services' },
  { label: 'Reviews', id: 'testimonials' },
];

export default function Navbar() {
  const [active, setActive] = useState('hero');
  const [isOpen, setIsOpen] = useState(false);

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
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav id="navbar" className="fixed top-6 left-1/2 -translate-x-1/2 glass-nav px-5 sm:px-8 py-3 rounded-full flex items-center gap-4 sm:gap-8 z-50 w-[92%] max-w-3xl justify-between sm:justify-start shadow-xl border border-white/10">
        {/* Left Brand Logo */}
        <div
          id="navbar-logo"
          className="flex items-center gap-2 cursor-pointer shrink-0"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="w-2.5 h-2.5 bg-[#4E85BF] rounded-full" />
          <span className="font-bold tracking-tighter text-xs sm:text-sm text-[#F5F5F5]">KS.01</span>
        </div> 

        <div className="h-4 w-[1px] bg-white/10 hidden sm:block" />

        {/* Desktop Menu */}
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

        {/* Right Buttons Container */}
        <div className="flex items-center gap-2">
          <button
            id="navbar-resume-btn"
            onClick={() => window.open(`mailto:${personalInfo.email}?subject=Hi Kazi, let's connect!`, '_self')}
            className="text-[9px] sm:text-[10px] font-mono font-bold bg-[#F5F5F5] text-black px-3.5 py-1.5 rounded-full uppercase tracking-widest hover:bg-[#F5F5F5]/90 transition-all cursor-pointer"
          >
            Hire Me
          </button>

          {/* Hamburger Icon on mobile view */}
          <button
            id="navbar-toggle-btn"
            onClick={() => setIsOpen(!isOpen)}
            className="sm:hidden text-[#F5F5F5] p-1.5 rounded-full hover:bg-white/5 transition-all cursor-pointer focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      {/* Animated Dropdown Menu for Mobile Screen */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 w-[92%] max-w-sm bg-[#111111]/95 backdrop-blur-md border border-white/10 rounded-2xl p-5 z-40 shadow-2xl flex flex-col gap-3"
          >
            <div className="font-mono text-[9px] uppercase tracking-widest text-muted-text border-b border-white/5 pb-2 mb-1">
              Navigation Menu
            </div>
            {navItems.map((item) => {
              const isSelected = active === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleScrollTo(item.id)}
                  className={`w-full text-left font-mono font-bold uppercase tracking-wider text-xs py-2 px-3 rounded-lg transition-all ${
                    isSelected
                      ? 'text-[#4E85BF] bg-white/5 border-l-2 border-[#4E85BF]'
                      : 'text-muted-text hover:text-[#F5F5F5] hover:bg-white/3'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
