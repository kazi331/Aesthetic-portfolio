'use client';

import React from 'react';
import { motion } from 'motion/react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import Link from 'next/link';

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  href?: string;
  className?: string;
  children: React.ReactNode;
}

export default function AnimatedButton({
  variant = 'primary',
  href,
  className = '',
  children,
  ...props
}: AnimatedButtonProps) {
  const baseStyle =
    'px-6 py-3 rounded-full text-[11px] font-semibold uppercase tracking-widest transition-all duration-300 inline-flex items-center justify-center gap-2.5 cursor-pointer';

  const variants = {
    primary: 'bg-[#F5F5F5] text-[#090909] hover:bg-[#F5F5F5]/90 border border-[#F5F5F5] shadow-lg shadow-[#F5F5F5]/5',
    secondary: 'bg-[#121212] text-[#F5F5F5] border border-white/5 hover:bg-white/8',
    outline: 'bg-transparent text-[#F5F5F5] border border-white/10 hover:border-[#4E85BF] hover:text-[#4E85BF] hover:bg-[#4E85BF]/5',
    text: 'bg-transparent text-[#8D8D8D] hover:text-[#F5F5F5] border-transparent px-0 py-0 rounded-none tracking-widest',
  };

  const buttonClass = twMerge(clsx(baseStyle, variants[variant], className));

  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:');
    if (isExternal) {
      return (
        <a id="animated-button-link-ext" href={href} target="_blank" rel="noopener noreferrer" className={buttonClass}>
          {children}
        </a>
      );
    }
    return (
      <Link id="animated-button-link-int" href={href} className={buttonClass}>
        {children}
      </Link>
    );
  }

  return (
    <motion.button
      id="animated-button"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={buttonClass}
      {...(props as any)}
    >
      {children}
    </motion.button>
  );
}
