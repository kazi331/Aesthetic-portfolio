'use client';

import { Project } from '@/types/portfolio';
import { CheckCircle2, ExternalLink, Github, Layers, Sparkles, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import Image from 'next/image';
import { useEffect } from 'react';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  index?: number;
}

export default function ProjectModal({ project, isOpen, onClose, index = 0 }: ProjectModalProps) {
  // Prevent background scroll when open & handle Escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;

    // Rigorously block background scrolling on both body and html
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    // Prevent touch scrolling on backdrop on mobile/tablet
    const preventBackdropScroll = (e: TouchEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && target.closest('#project-modal-dialog')) {
        return; // Allow scrolling inside the modal dialog
      }
      e.preventDefault();
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('touchmove', preventBackdropScroll, { passive: false });

    return () => {
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('touchmove', preventBackdropScroll);
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          id="project-modal-backdrop"
          data-lenis-prevent
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8"
        >
          {/* Backdrop Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            id="project-modal-dialog"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', stiffness: 320, damping: 32 }}
            className="relative z-10 w-full max-w-5xl max-h-[92vh] bg-[#0c0c0c] border border-white/10 rounded-[28px] sm:rounded-[36px] shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Scrollable Content wrapper */}
            <div className="overflow-y-auto scrollbar-none p-5 sm:p-8 lg:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-start">

                {/* Left Column: Featured Project Image */}
                <div className="lg:col-span-5 relative w-full h-[280px] sm:h-[360px] lg:h-[520px] rounded-[22px] sm:rounded-[28px] overflow-hidden border border-white/10 shadow-xl bg-black/40">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 42vw"
                      priority
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#121212] to-[#1e293b] flex items-center justify-center">
                      <Layers className="w-12 h-12 text-white/30" />
                    </div>
                  )}

                  {/* Gradient bottom overlay on image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

                  {/* Category Pill on Image */}
                  {project.category && (
                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[10px] font-mono uppercase tracking-widest text-white/90 font-medium">
                        {project.category}
                      </span>
                    </div>
                  )}

                  {/* Case study indicator */}
                  <div className="absolute bottom-4 left-4 z-10">
                    <span className="text-[10px] font-mono tracking-widest uppercase text-white/70 bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm border border-white/10">
                      CASE STUDY 0{index + 1}
                    </span>
                  </div>
                </div>

                {/* Right Column: Project Details */}
                <div className="lg:col-span-7 flex flex-col justify-between h-full space-y-6">
                  {/* Top Bar: Tags & Close Button */}
                  <div className="flex items-start justify-between gap-4">
                    {/* Tags List */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full text-[10px] font-mono font-medium tracking-wider uppercase bg-[#142338]/70 border border-[#4E85BF]/30 text-[#89AACC]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Close Button */}
                    <button
                      id="close-project-modal-btn"
                      onClick={onClose}
                      className="shrink-0 w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white/80 hover:text-white transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent/40"
                      aria-label="Close modal"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Title & Overview */}
                  <div className="space-y-3">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display tracking-tight text-white leading-tight">
                      {project.title}
                    </h2>
                    <p className="text-sm sm:text-base text-muted-text font-sans leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Challenge & Solution Grid/Sections */}
                  {(project.challenge || project.solution) && (
                    <div className="space-y-4 pt-1">
                      {project.challenge && (
                        <div>
                          <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-white/50 font-bold block mb-1.5">
                            THE CHALLENGE
                          </span>
                          <p className="text-xs sm:text-sm text-[#D1D5DB] leading-relaxed font-sans">
                            {project.challenge}
                          </p>
                        </div>
                      )}

                      {project.solution && (
                        <div>
                          <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-white/50 font-bold block mb-1.5">
                            THE SOLUTION
                          </span>
                          <p className="text-xs sm:text-sm text-[#D1D5DB] leading-relaxed font-sans">
                            {project.solution}
                          </p>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Key Impact Card */}
                  {project.impact && (
                    <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/10 relative overflow-hidden">
                      <div className="flex items-center gap-2 mb-2">
                        <Sparkles className="w-3.5 h-3.5 text-[#4E85BF]" />
                        <span className="text-[10px] sm:text-[11px] font-mono text-[#4E85BF] font-bold uppercase tracking-wider">
                          KEY IMPACT
                        </span>
                      </div>

                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-[#4E85BF] shrink-0 mt-0.5" />
                        <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-sans">
                          {project.impact}
                        </p>
                      </div>

                      {/* Optional metric chips */}
                      {project.metrics && project.metrics.length > 0 && (
                        <div className="flex flex-wrap gap-2.5 mt-3 pt-3 border-t border-white/5">
                          {project.metrics.map((metric) => (
                            <div
                              key={metric.label}
                              className="px-3 py-1 rounded-xl bg-white/5 border border-white/5 flex items-center gap-1.5 text-xs font-mono"
                            >
                              <span className="text-muted-text">{metric.label}:</span>
                              <span className="text-[#89AACC] font-bold">{metric.value}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Action Buttons: Live Demo & Source Code (Staggered Animation) */}
                  <div className="flex flex-wrap items-center gap-3.5 pt-2">
                    {project.liveUrl && (
                      <motion.a
                        id="modal-live-demo-link"
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35, delay: 0.1, ease: 'easeOut' }}
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 rounded-2xl bg-white hover:bg-white/90 text-black font-semibold text-xs sm:text-sm flex items-center gap-2 shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-3.5 h-3.5 text-black stroke-[2.5]" />
                      </motion.a>
                    )}

                    {project.githubUrl && (
                      <motion.a
                        id="modal-github-source-link"
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35, delay: 0.2, ease: 'easeOut' }}
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-xs sm:text-sm flex items-center gap-2 transition-all transform hover:-translate-y-0.5 cursor-pointer"
                      >
                        <Github className="w-4 h-4" />
                        <span>Source</span>
                      </motion.a>
                    )}
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
