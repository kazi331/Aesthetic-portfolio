'use client';

import { personalInfo } from '@/lib/data';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const navItems = [
  { label: 'Home', id: 'hero', path: '/' },
  { label: 'Projects', id: 'featured-projects', path: '/#featured-projects' },
  { label: 'Stack', id: 'tech-stack', path: '/#tech-stack' },
  { label: 'Journey', id: 'experience', path: '/#experience' },
  { label: 'Blog', id: 'recent-blog', path: '/blog' },
  { label: 'Services', id: 'services', path: '/#services' },
  { label: 'Reviews', id: 'testimonials', path: '/#testimonials' },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const isBlogPage = pathname.startsWith('/blog') || pathname.startsWith('/articles');

  const [active, setActive] = useState(() => (isBlogPage ? 'recent-blog' : 'hero'));
  const [isOpen, setIsOpen] = useState(false);

  // Simple scroll spy to update active item on home page
  useEffect(() => {
    if (isBlogPage) return;

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
  }, [isBlogPage]);

  // Close mobile dropdown when tapping outside
  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('#navbar')) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  const scrollToTarget = (targetId: string) => {
    if (targetId === 'hero') {
      const lenis = (window as unknown as { __lenis?: { scrollTo: (target: number | HTMLElement, opts?: object) => void } }).__lenis;
      if (lenis && typeof lenis.scrollTo === 'function') {
        lenis.scrollTo(0, { duration: 1 });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    const targetEl =
      document.getElementById(targetId) ||
      (targetId === 'featured-projects' ? document.getElementById('projects') : null) ||
      (targetId === 'projects' ? document.getElementById('featured-projects') : null) ||
      (targetId === 'tech-stack' ? document.getElementById('stack') : null) ||
      (targetId === 'stack' ? document.getElementById('tech-stack') : null) ||
      (targetId === 'recent-blog' ? document.getElementById('blog') : null);

    if (!targetEl) return;

    const lenis = (window as unknown as { __lenis?: { scrollTo: (target: number | HTMLElement, opts?: object) => void } }).__lenis;
    if (lenis && typeof lenis.scrollTo === 'function') {
      lenis.scrollTo(targetEl, { offset: -90, duration: 1 });
    } else {
      const navOffset = 90;
      const elementPosition = targetEl.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = Math.max(0, elementPosition - navOffset);
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleScrollTo = (item: (typeof navItems)[number]) => {
    setIsOpen(false);

    if (item.path === '/blog') {
      if (!isBlogPage) {
        router.push('/blog');
      } else {
        scrollToTarget('hero');
      }
      return;
    }

    if (isBlogPage) {
      router.push(item.path || `/#${item.id}`);
      return;
    }

    // Small timeout allows the mobile menu collapse to start without interfering with smooth scroll
    setTimeout(() => {
      scrollToTarget(item.id);
    }, 20);
  };

  return (
    <nav
      id="navbar"
      className={`fixed top-6 left-1/2 -translate-x-1/2 glass-nav z-50 w-[92%] max-w-3xl shadow-xl border border-white/10 transition-[border-radius] duration-300 overflow-hidden rounded-[28px]`}
    >
      {/* Top Header Bar */}
      <div className="px-5 sm:px-8 py-3 flex items-center gap-4 sm:gap-8 justify-between sm:justify-start">
        {/* Left Brand Logo */}
        <div
          id="navbar-logo"
          className="flex items-center gap-2 cursor-pointer shrink-0"
          onClick={() => {
            if (pathname !== '/') {
              router.push('/');
            } else {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
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
                onClick={() => handleScrollTo(item)}
                className={`cursor-pointer transition-colors duration-300 ${isSelected ? 'text-[#4E85BF]' : 'text-[#F5F5F5]/70 hover:text-[#F5F5F5]'
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
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Attached Mobile Slide-Down Menu Content */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id="navbar-mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="sm:hidden overflow-hidden border-t border-white/10"
          >
            <motion.div
              initial={{ y: -8 }}
              animate={{ y: 0 }}
              exit={{ y: -8 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              className="px-5 pb-5 pt-3.5 flex flex-col gap-1.5"
            >
              <div className="font-mono text-[9px] uppercase tracking-widest text-muted-text border-b border-white/5 pb-2 mb-1">
                Navigation Menu
              </div>
              {navItems.map((item) => {
                const isSelected = active === item.id;
                return (
                  <button
                    key={item.id}
                    id={`mobile-nav-${item.id}`}
                    type="button"
                    onClick={() => handleScrollTo(item)}
                    className={`w-full text-left font-mono font-bold uppercase tracking-wider text-sm py-2.5 px-3.5 rounded-xl transition-all ${isSelected
                      ? 'text-[#4E85BF] bg-white/5 border-l-2 border-[#4E85BF]'
                      : 'text-muted-text hover:text-[#F5F5F5] hover:bg-white/3'
                      }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
