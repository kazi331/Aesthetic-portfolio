'use client';

import React from 'react';
import { motion } from 'motion/react';

interface StatisticCardProps {
  value: string;
  label: string;
  index: number;
}

export default function StatisticCard({ value, label, index }: StatisticCardProps) {
  return (
    <motion.div
      id={`statistic-card-${index}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="px-6 py-5 bg-[#121212] border border-white/5 rounded-2xl flex flex-col gap-2.5 shadow-lg relative group overflow-hidden hover:border-accent/20 transition-all duration-300"
    >
      <div className="absolute inset-0 opacity-[0.02] dot-pattern pointer-events-none" />
      <span className="text-3xl sm:text-4xl font-bold font-mono text-primary-text group-hover:text-accent transition-colors">
        {value}
      </span>
      <span className="text-[10px] uppercase tracking-widest text-[#8D8D8D] font-mono leading-tight font-medium">
        {label}
      </span>
    </motion.div>
  );
}
