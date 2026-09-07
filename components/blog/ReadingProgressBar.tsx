'use client';

import React, { useEffect, useState } from 'react';

export default function ReadingProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      id="reading-progress-track"
      className="fixed top-0 left-0 right-0 h-[3px] bg-transparent z-50 pointer-events-none"
    >
      <div
        id="reading-progress-bar"
        style={{ width: `${progress}%` }}
        className="h-full bg-gradient-to-r from-accent via-[#4E85BF] to-[#10B981] transition-all duration-75 ease-out shadow-[0_0_12px_rgba(78,133,191,0.8)]"
      />
    </div>
  );
}
