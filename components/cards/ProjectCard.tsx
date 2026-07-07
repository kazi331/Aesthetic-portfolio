'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Github } from 'lucide-react';
import { Project } from '@/types/portfolio';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  // Extract last word of title for italicized serif accent styling
  const words = project.title.split(' ');
  const lastWord = words.pop();
  const mainTitle = words.join(' ');

  return (
    <motion.div
      id={`project-card-${index}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="project-card-gradient border border-white/5 rounded-[40px] p-8 relative overflow-hidden group flex flex-col justify-between min-h-[420px] shadow-2xl hover:border-accent/30 transition-all duration-300"
    >
      {/* Dot Pattern Background Overlay */}
      <div className="absolute inset-0 opacity-[0.06] dot-pattern pointer-events-none group-hover:opacity-10 transition-opacity" />

      <div className="relative z-10 flex flex-col h-full justify-between">
        {/* Header content */}
        <div>
          <div className="flex justify-between items-start">
            <span className="text-[10px] font-mono opacity-50 uppercase tracking-widest">
              0{index + 1} / FEATURED CASE STUDY
            </span>
            <div className="flex items-center gap-2">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center text-muted-text hover:text-primary-text transition-all cursor-pointer"
                  aria-label="GitHub Repository"
                >
                  <Github className="w-4 h-4" />
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center text-muted-text hover:text-accent transition-all cursor-pointer"
                  aria-label="Live Demo"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          <h3 className="text-3xl font-bold mt-6 leading-tight text-primary-text group-hover:text-accent transition-colors">
            {mainTitle}{' '}
            <span className="font-serif italic font-light text-accent-secondary">
              {lastWord}
            </span>
          </h3>

          <p className="text-muted-text text-sm leading-relaxed mt-4 line-clamp-3">
            {project.description}
          </p>
        </div>

        {/* Footer content */}
        <div className="mt-8">
          {project.impact && (
            <div className="mb-4 bg-accent/5 border border-accent/10 px-4 py-3 rounded-2xl">
              <span className="text-[10px] font-mono text-accent uppercase tracking-widest block font-bold mb-0.5">
                Performance Impact
              </span>
              <p className="text-xs text-primary-text/90 font-mono">
                {project.impact}
              </p>
            </div>
          )}

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3.5 py-1.5 bg-white/5 border border-white/5 rounded-full text-[9px] font-mono text-muted-text uppercase tracking-widest"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
