'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Code2, Cpu, Zap, GitCompare } from 'lucide-react';
import Container from '@/components/shared/Container';
import Section from '@/components/shared/Section';

interface RichStat {
  id: string;
  value: string;
  label: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

export default function Stats() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const richStats: RichStat[] = [
    {
      id: 'exp',
      value: '03+',
      label: 'Years Experience',
      subtitle: 'System Engineering',
      description: 'Designing modular frontend structures and high-performance server microservices.',
      icon: <Code2 className="w-5 h-5 text-accent" />,
      color: 'rgba(78, 133, 191, 0.12)'
    },
    {
      id: 'projects',
      value: '12+',
      label: 'Projects Completed',
      subtitle: 'Production Deployed',
      description: 'Powering multi-tenant administrative portals, custom dashboards, and real-time backends.',
      icon: <Cpu className="w-5 h-5 text-emerald-400" />,
      color: 'rgba(16, 185, 129, 0.12)'
    },
    {
      id: 'perf',
      value: '+60%',
      label: 'Performance Gain',
      subtitle: 'Speed & Optimization',
      description: 'Maximized via server-side caching, localized state hydration, and asset budget optimizations.',
      icon: <Zap className="w-5 h-5 text-amber-400" />,
      color: 'rgba(245, 158, 11, 0.12)'
    },
    {
      id: 'roundtrips',
      value: '-40%',
      label: 'API Roundtrips',
      subtitle: 'Caching Efficiency',
      description: 'Minimized network latency by fine-tuning stale state queries and persistent cache rules.',
      icon: <GitCompare className="w-5 h-5 text-[#89AACC]" />,
      color: 'rgba(137, 170, 204, 0.12)'
    }
  ];

  return (
    <Section id="stats" className="py-16 md:py-20 bg-[#080808] border-b border-white/5 relative overflow-hidden">
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px)] bg-[size:6rem] [mask-image:linear-gradient(to_bottom,#000,transparent)] pointer-events-none z-0" />

      <Container className="relative z-10">
        
        {/* Modern stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {richStats.map((stat, index) => {
            const isHovered = hoveredIdx === index;
            return (
              <motion.div
                key={stat.id}
                id={`stat-card-${stat.id}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
                onMouseEnter={() => setHoveredIdx(index)}
                onMouseLeave={() => setHoveredIdx(null)}
                className="relative p-6 bg-[#0c0c0c] border border-white/5 hover:border-white/10 rounded-2xl flex flex-col justify-between h-[210px] md:h-[220px] overflow-hidden group transition-all duration-300 shadow-2xl text-left"
              >
                {/* Background glow when hovered */}
                <div 
                  style={{ 
                    background: `radial-gradient(circle at 50% 50%, ${stat.color}, transparent 65%)` 
                  }}
                  className="absolute -right-16 -top-16 w-36 h-36 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                />

                {/* Card Header: Icon & Subtitle */}
                <div className="flex items-center justify-between w-full relative z-10 mb-2">
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-white/3 border border-white/5 rounded-xl text-white group-hover:scale-110 transition-transform duration-300">
                      {stat.icon}
                    </div>
                    <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#89AACC]">
                      {stat.subtitle}
                    </span>
                  </div>

                  {/* Aesthetic dot indicator */}
                  <span className="w-1.5 h-1.5 rounded-full bg-white/10 group-hover:bg-accent/40 transition-colors" />
                </div>

                {/* Card Body: Metric Value & Label */}
                <div className="flex flex-col gap-0.5 relative z-10 mt-auto">
                  <span className="text-4xl md:text-5xl font-display font-black text-white group-hover:text-accent transition-colors tracking-tight leading-none">
                    {stat.value}
                  </span>
                  
                  <span className="text-xs font-mono font-extrabold uppercase tracking-widest text-white/90 mt-1">
                    {stat.label}
                  </span>

                  <p className="text-[11px] leading-relaxed text-muted-text mt-2 font-sans font-normal opacity-85 line-clamp-2 group-hover:opacity-100 transition-opacity">
                    {stat.description}
                  </p>
                </div>

                {/* Subtle bottom gradient accent */}
                <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:via-accent/25 transition-all duration-300" />
              </motion.div>
            );
          })}
        </div>

      </Container>
    </Section>
  );
}
