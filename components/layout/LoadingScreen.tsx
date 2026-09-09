'use client';

import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 120); // Quick completion handoff
          return 100;
        }
        return prev + Math.floor(Math.random() * 9) + 6; // Quick, fluid progress
      });
    }, 25);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      id="loading-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="fixed inset-0 z-50 bg-[#090909] flex flex-col items-center justify-center p-8 select-none pointer-events-auto"
    >
      <div className="flex flex-col items-center max-w-xs w-full gap-5">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 bg-[#4E85BF] rounded-full animate-pulse" />
          <span className="font-bold tracking-tighter text-base text-primary-text font-sans uppercase">
            KS.01 // SYSTEM BOOT
          </span>
        </div>

        {/* Loading track line */}
        <div className="w-full h-[1px] bg-white/5 relative overflow-hidden rounded-full">
          <motion.div
            className="absolute top-0 left-0 h-full bg-[#4E85BF]"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>

        <div className="flex justify-between w-full text-[10px] font-mono text-muted-text">
          <span>INITIALIZING CORE</span>
          <span>{Math.min(progress, 100)}%</span>
        </div>
      </div>
    </motion.div>
  );
}
