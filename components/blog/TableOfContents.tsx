'use client';

import React, { useEffect, useState, useMemo } from 'react';
import { slugifyHeading } from './MarkdownRenderer';
import { AlignLeft, ChevronRight } from 'lucide-react';

interface HeadingItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  content: string;
}

export default function TableOfContents({ content }: TableOfContentsProps) {
  const headings = useMemo<HeadingItem[]>(() => {
    if (!content) return [];

    const lines = content.split('\n');
    const items: HeadingItem[] = [];

    lines.forEach((line) => {
      if (line.startsWith('## ')) {
        const text = line.replace('## ', '').trim();
        items.push({
          id: slugifyHeading(text),
          text,
          level: 2,
        });
      } else if (line.startsWith('### ')) {
        const text = line.replace('### ', '').trim();
        items.push({
          id: slugifyHeading(text),
          text,
          level: 3,
        });
      }
    });

    return items;
  }, [content]);

  const [activeId, setActiveId] = useState<string>(() => headings[0]?.id || '');

  // Scroll listener for active heading
  useEffect(() => {
    if (headings.length === 0) return;

    const handleScroll = () => {
      const scrollY = window.scrollY + 140;

      for (let i = headings.length - 1; i >= 0; i--) {
        const el = document.getElementById(headings[i].id);
        if (el && el.offsetTop <= scrollY) {
          setActiveId(headings[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [headings]);

  const scrollToHeading = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveId(id);
    }
  };

  if (headings.length === 0) return null;

  return (
    <div className="bg-[#121212]/80 backdrop-blur-md border border-white/10 rounded-2xl p-5 shadow-xl">
      <div className="flex items-center gap-2 pb-3 mb-3 border-b border-white/5">
        <AlignLeft className="w-3.5 h-3.5 text-accent" />
        <span className="font-mono text-xs uppercase font-bold tracking-wider text-[#F5F5F5]">
          Table of Contents
        </span>
      </div>

      <nav className="space-y-1 max-h-[60vh] overflow-y-auto pr-1 scrollbar-none">
        {headings.map((h) => {
          const isActive = activeId === h.id;
          return (
            <button
              key={h.id}
              onClick={() => scrollToHeading(h.id)}
              className={`w-full text-left font-sans text-xs py-1.5 px-2.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                h.level === 3 ? 'pl-5 text-[11px]' : ''
              } ${
                isActive
                  ? 'text-accent bg-accent/10 font-medium'
                  : 'text-muted-text hover:text-white hover:bg-white/5'
              }`}
            >
              <ChevronRight
                className={`w-3 h-3 shrink-0 transition-transform ${
                  isActive ? 'rotate-90 text-accent' : 'opacity-40'
                }`}
              />
              <span className="truncate">{h.text}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}
