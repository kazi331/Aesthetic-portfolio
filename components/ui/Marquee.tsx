'use client';

import React from 'react';
import { motion, useReducedMotion } from 'motion/react';

interface MarqueeProps {
  items: string[];
  direction?: 'left' | 'right';
  speed?: number; // Duration in seconds
}

export default function Marquee({ items, direction = 'left', speed = 25 }: MarqueeProps) {
  const shouldReduceMotion = useReducedMotion();

  // If user requests reduced motion, show simple static flex alignment without animation
  if (shouldReduceMotion) {
    return (
      <div className="py-6 border-y border-white/5 overflow-hidden">
        <div className="flex flex-wrap justify-center gap-6">
          {items.map((item, index) => (
            <span
              key={index}
              className="text-2xl font-serif text-muted-text font-normal tracking-tight"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    );
  }

  const travelDistance = direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'];

  return (
    <div className="py-6 border-y border-white/5 overflow-hidden w-full flex relative select-none pointer-events-none">
      <motion.div
        animate={{ x: travelDistance }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: speed,
        }}
        className="flex gap-16 pr-16 text-nowrap whitespace-nowrap"
      >
        {/* Render items twice to allow seamless infinite loops */}
        {[...items, ...items, ...items, ...items].map((item, index) => (
          <span
            key={index}
            className="text-3xl md:text-5xl font-serif text-muted-text/30 group-hover:text-accent font-normal tracking-tight flex items-center gap-4 transition-colors duration-300"
          >
            {item}
            <span className="text-accent/40 text-xl font-mono">•</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
