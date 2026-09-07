'use client';

import { Project } from '@/types/portfolio';
import { ArrowUpRight, Github, Plus, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import Image from 'next/image';

interface ProjectCardProps {
  project: Project;
  index: number;
  onSelect?: (project: Project) => void;
}

export default function ProjectCard({ project, index, onSelect }: ProjectCardProps) {
  // Extract last word of title for subtle display styling if needed
  const words = project.title.split(' ');
  const lastWord = words.length > 1 ? words.pop() : '';
  const mainTitle = words.length > 0 ? words.join(' ') : project.title;

  return (
    <motion.div
      id={`project-card-${index}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onClick={() => onSelect?.(project)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect?.(project);
        }
      }}
      role="button"
      tabIndex={0}
      className="group relative w-full min-h-[380px] sm:min-h-[420px] rounded-[28px] sm:rounded-[36px] overflow-hidden border border-white/10 hover:border-accent/40 shadow-2xl transition-all duration-500 cursor-pointer flex flex-col justify-between p-6 sm:p-8 select-none focus:outline-none focus:ring-2 focus:ring-accent/50"
    >
      {/* Background Image with Smooth Zoom Effect on Hover */}
      {project.image ? (
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-[#121212] via-[#1a2333] to-[#090909]" />
      )}

      {/* Atmospheric Multi-Layer Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-black/25 pointer-events-none transition-opacity duration-300 group-hover:opacity-90 z-0" />
      <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0" />

      {/* Top Bar: Case Study Index & Interactive Plus Action Button */}
      <div className="relative z-10 flex items-center justify-between w-full">
        {/* Index Pill */}
        <div className="flex items-center gap-2">
          <span className="px-3.5 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/15 text-[10px] font-mono tracking-widest uppercase text-white/80 font-bold">
            0{index + 1} / CASE STUDY
          </span>
        </div>

        {/* Top-Right Quick Links and Featured Plus Icon (Hidden initially, staggered reveal on hover) */}
        <div className="flex items-center gap-2.5">
          {/* Direct GitHub link - 1st to appear */}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="w-9 h-9 rounded-full bg-black/50 backdrop-blur-md border border-white/15 flex items-center justify-center text-white/70 hover:text-white hover:bg-black/80 hover:border-white/30 transition-all duration-300 ease-out opacity-0 translate-y-2 scale-90 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:translate-y-0 group-focus-within:scale-100 group-focus-within:pointer-events-auto delay-0 cursor-pointer shadow-lg"
              aria-label="GitHub Repository"
            >
              <Github className="w-3.5 h-3.5" />
            </a>
          )}

          {/* Direct Live Demo link - 2nd to appear */}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="w-9 h-9 rounded-full bg-black/50 backdrop-blur-md border border-white/15 flex items-center justify-center text-white/70 hover:text-accent hover:bg-black/80 hover:border-white/30 transition-all duration-300 ease-out opacity-0 translate-y-2 scale-90 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:translate-y-0 group-focus-within:scale-100 group-focus-within:pointer-events-auto delay-100 cursor-pointer shadow-lg"
              aria-label="Live Demo"
            >
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          )}

          {/* Plus Icon - 3rd to appear with glow */}
          <div className="relative ml-1 transition-all duration-300 ease-out opacity-0 translate-y-2 scale-90 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:translate-y-0 group-focus-within:scale-100 group-focus-within:pointer-events-auto delay-200">
            {/* <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#8b5cf6]/70 blur-[5px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" /> */}
            <div className="w-10 h-10 rounded-full bg-white/20 group-hover:bg-white/30 backdrop-blur-md border border-white/25 group-hover:border-white/40 flex items-center justify-center text-white shadow-xl transition-all duration-300 transform group-hover:scale-105 group-hover:rotate-90">
              <Plus className="w-4 h-4 text-white stroke-[2.5]" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Content: Tags, Monumental Title & Quick Impact */}
      <div className="relative z-10 flex flex-col justify-end mt-auto pt-8">
        {/* Tags Row */}
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-3.5 py-1.5 bg-black/50 backdrop-blur-md border border-white/15 rounded-full text-[10px] font-mono text-white/90 uppercase tracking-widest font-semibold"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="px-2.5 py-1.5 bg-black/40 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-mono text-white/60">
              +{project.tags.length - 3}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-2xl sm:text-3xl font-bold font-display tracking-tight text-white group-hover:text-accent transition-colors duration-300">
          {mainTitle}
          {lastWord && (
            <span className="ml-1.5 font-light text-[#89AACC]">
              {lastWord}
            </span>
          )}
        </h3>

        {/* Subtitle / Impact Peek */}
        {project.impact && (
          <div className="mt-2.5 flex items-center gap-2 text-xs font-mono text-white/70 overflow-hidden text-ellipsis whitespace-nowrap">
            <Sparkles className="w-3 h-3 text-[#4E85BF] shrink-0" />
            <span className="truncate">{project.impact}</span>
          </div>
        )}
      </div>
    </motion.div>
  );
}
