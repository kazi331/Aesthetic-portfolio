import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

export default function Section({ children, id, className = '' }: SectionProps) {
  return (
    <section
      id={id}
      className={`py-20 md:py-28 relative border-b border-white/5 overflow-hidden ${className}`}
    >
      {children}
    </section>
  );
}
