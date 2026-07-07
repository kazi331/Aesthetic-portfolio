'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Layout, Cpu, CheckCircle2 } from 'lucide-react';
import { Service } from '@/types/portfolio';

interface ServiceCardProps {
  service: Service;
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  // Select icon component
  const getIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case 'layout':
        return <Layout className="w-5 h-5 text-accent" />;
      case 'cpu':
        return <Cpu className="w-5 h-5 text-accent" />;
      default:
        return <Cpu className="w-5 h-5 text-accent" />;
    }
  };

  return (
    <motion.div
      id={`service-card-${index}`}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="p-8 rounded-[32px] bg-[#121212]/90 border border-white/5 flex flex-col justify-between h-full hover:border-accent/30 transition-all duration-300 shadow-xl group"
    >
      <div>
        <div className="flex items-center justify-between mb-6">
          <div className="p-3 bg-white/3 border border-white/5 rounded-2xl group-hover:bg-accent/10 group-hover:border-accent/20 transition-all duration-300">
            {getIcon(service.iconName)}
          </div>
          <span className="text-[9px] font-mono opacity-30 uppercase tracking-widest">
            SERVICE_NODE_0{index + 1}
          </span>
        </div>

        <h3 className="text-xl font-bold text-primary-text mb-3 tracking-tight group-hover:text-accent transition-colors font-display">
          {service.title}
        </h3>
        <p className="text-muted-text text-xs sm:text-sm leading-relaxed mb-6 font-sans">
          {service.description}
        </p>
      </div>

      <div className="pt-5 border-t border-white/5">
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {service.capabilities.map((cap) => (
            <li key={cap} className="text-xs text-muted-text flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-accent flex-shrink-0" />
              <span className="leading-tight">{cap}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
