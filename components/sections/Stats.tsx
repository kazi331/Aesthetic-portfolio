'use client';

import React from 'react';
import { stats } from '@/lib/data';
import Container from '@/components/shared/Container';
import Section from '@/components/shared/Section';
import StatisticCard from '@/components/cards/StatisticCard';

export default function Stats() {
  return (
    <Section id="stats" className="py-12 md:py-16 bg-[#090909] border-b border-white/5">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <StatisticCard
              key={stat.id}
              value={stat.value}
              label={stat.label}
              index={index}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
