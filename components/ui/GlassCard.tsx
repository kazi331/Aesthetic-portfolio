'use client';

import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tw-merge';
import { motion } from 'motion/react';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  animate?: boolean;
  hoverable?: boolean;
}

export default function GlassCard({
  children,
  className,
  animate = true,
  hoverable = true,
  ...props
}: GlassCardProps) {
  const Component = animate ? motion.div : 'div';
  
  const animationProps = animate
    ? {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: '-50px' },
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
      }
    : {};

  return (
    // @ts-expect-error motion compatibility
    <Component
      className={twMerge(
        'glass-card rounded-2xl p-6 md:p-8 relative overflow-hidden transition-all duration-500',
        hoverable && 'glass-card-hover hover:-translate-y-1',
        className
      )}
      {...animationProps}
      {...props}
    >
      {/* Background glow vector accent inside the card */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </Component>
  );
}
