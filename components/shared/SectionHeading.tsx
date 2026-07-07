import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  description?: string;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  description,
  className = '',
}: SectionHeadingProps) {
  // Let's add editorial style by rendering the last word or specific parts in an elegant serif italic style.
  const words = title.split(' ');
  const lastWord = words.pop();
  const mainTitle = words.join(' ');

  return (
    <div id="section-heading" className={`mb-12 md:mb-16 max-w-3xl ${className}`}>
      {subtitle && (
        <div className="flex items-center gap-3 mb-4">
          <span className="text-accent font-mono text-xs tracking-widest uppercase">
            [ {subtitle} ]
          </span>
          <div className="h-[1px] w-12 bg-white/10" />
        </div>
      )}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-primary-text mb-4 leading-[1.1]">
        {mainTitle}{' '}
        <span className="font-serif italic font-light text-accent-secondary">
          {lastWord}
        </span>
      </h2>
      {description && (
        <p className="text-muted-text text-sm sm:text-base leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}
