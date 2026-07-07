'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Star, GitFork, ArrowUpRight, Github } from 'lucide-react';
import { openSourceProjects } from '@/lib/data';
import Container from '@/components/shared/Container';
import Section from '@/components/shared/Section';
import SectionHeading from '@/components/shared/SectionHeading';

const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: '#3178c6',
  JavaScript: '#f1e05a',
  Go: '#00add8',
  Python: '#3572a5',
  Rust: '#dea584',
};

export default function GithubPreview() {
  return (
    <Section id="github-preview" className="bg-[#121212]/10">
      <Container>
        <SectionHeading
          title="Open Source & Utilities"
          subtitle="Code Contributions"
          description="A selection of independent npm utilities, plugins, and custom ORM modules I maintain in the developer ecosystem."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto mb-10">
          {openSourceProjects.map((repo, index) => {
            const langColor = LANGUAGE_COLORS[repo.language] || '#8D8D8D';
            return (
              <motion.a
                key={repo.name}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="p-6 rounded-2xl bg-[#121212] border border-white/5 flex flex-col justify-between h-52 hover:border-accent/30 hover:shadow-lg hover:shadow-[#4E85BF]/2 transition-all duration-300 group cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <span className="p-1.5 rounded-lg bg-[#090909] border border-white/5 text-muted-text group-hover:text-accent transition-colors">
                      <Github className="w-4 h-4" />
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-muted-text/40 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>

                  <h4 className="text-sm font-mono font-medium text-primary-text mb-2 block group-hover:text-accent transition-colors">
                    {repo.name}
                  </h4>
                  
                  <p className="text-muted-text text-[11px] leading-relaxed line-clamp-3">
                    {repo.description}
                  </p>
                </div>

                {/* Stars / Language footer */}
                <div className="flex items-center justify-between pt-4 border-t border-white/5 text-[10px] font-mono text-muted-text">
                  <div className="flex items-center gap-1.5">
                    <span
                      className="w-2.5 h-2.5 rounded-full inline-block"
                      style={{ backgroundColor: langColor }}
                    />
                    <span>{repo.language}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-0.5">
                      <Star className="w-3.5 h-3.5 text-amber-400" />
                      {repo.stars.toLocaleString()}
                    </span>
                    <span className="flex items-center gap-0.5">
                      <GitFork className="w-3.5 h-3.5" />
                      {repo.forks.toLocaleString()}
                    </span>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
