'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronDown, 
  ArrowRight, 
  Sparkles, 
  Layers, 
  Server, 
  Database, 
  ShieldCheck, 
  Cpu, 
  Zap, 
  Code,
  Network
} from 'lucide-react';
import Container from '@/components/shared/Container';
import Section from '@/components/shared/Section';
import { personalInfo } from '@/lib/data';

interface SystemNode {
  id: string;
  label: string;
  role: string;
  icon: React.ReactNode;
  color: string;
  specs: string[];
  x: number; // grid column layout
  y: number; // grid row layout
}

export default function HeroV3() {
  const [activeSystemNode, setActiveSystemNode] = useState<string>('edge');
  const [systemTraceActive, setSystemTraceActive] = useState<boolean>(true);

  const handleScrollToProjects = () => {
    const el = document.getElementById('featured-projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Interactive System Nodes mapping to a live full-stack request pipeline
  const systemNodes: SystemNode[] = [
    {
      id: 'client',
      label: 'Interactive Client',
      role: 'Optimized Hydration',
      icon: <Layers className="w-4 h-4" />,
      color: '#4E85BF',
      specs: [
        'React 19 / Next.js Client Shell',
        'State Preserving Micro-Animations',
        'Optimized Touch Target Matrices',
        'Fluid Mobile Responsive Scaling'
      ],
      x: 15,
      y: 20
    },
    {
      id: 'edge',
      label: 'Edge Gateway (SSR)',
      role: 'Server Components',
      icon: <Cpu className="w-4 h-4" />,
      color: '#10B981',
      specs: [
        'Next.js Route Handlers',
        'Dynamic Server Side Rendering',
        'JWT Header Authorization Guards',
        'Incremental Re-generation (ISR)'
      ],
      x: 50,
      y: 40
    },
    {
      id: 'api',
      label: 'NestJS / Backend API',
      role: 'Structured Controller',
      icon: <Server className="w-4 h-4" />,
      color: '#89AACC',
      specs: [
        'Modular Dependency Injection',
        'REST Controller Routing Pipelines',
        'DTO Guard Validation Schemas',
        'Real-time Socket.IO Handshakes'
      ],
      x: 50,
      y: 80
    },
    {
      id: 'db',
      label: 'PostgreSQL DB Engine',
      role: 'Durable Persistence',
      icon: <Database className="w-4 h-4" />,
      color: '#F59E0B',
      specs: [
        'Relational Data Normalization',
        'Prisma Schema Migrations',
        'Optimized Key-Value Indexing',
        'Transaction Rollback Safety'
      ],
      x: 85,
      y: 60
    }
  ];

  const currentActiveNode = systemNodes.find(node => node.id === activeSystemNode) || systemNodes[1];

  // Micro-entrance animation container
  const parentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.85,
        ease: [0.16, 1, 0.3, 1] // Custom cubic-bezier for signature smooth springiness
      }
    }
  };

  return (
    <Section id="hero" className="min-h-screen flex flex-col justify-center pt-32 pb-20 bg-[#070707] relative overflow-hidden border-b border-white/5">
      
      {/* Editorial space mesh background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(16,185,129,0.015),transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_80%,transparent_100%)] pointer-events-none z-0" />

      {/* Atmospheric accent lights */}
      <div className="absolute -top-40 right-10 w-[500px] h-[500px] bg-[#4E85BF]/5 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute -bottom-40 left-10 w-[500px] h-[500px] bg-[#10B981]/5 rounded-full blur-[140px] pointer-events-none z-0" />

      <Container className="relative z-10 w-full">
        <motion.div
          variants={parentVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
        >
          {/* Left Column: Monumental Headline Typography */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            
            {/* Status Live Tag */}
            <motion.div
              variants={childVariants}
              className="flex items-center gap-2 px-3 py-1 bg-white/3 border border-white/5 rounded-full mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]"></span>
              </span>
              <span className="font-mono text-[9px] font-bold uppercase tracking-[0.25em] text-[#89AACC]">
                Live Portfolio Engine
              </span>
            </motion.div>

            {/* Monumental, staggered headings */}
            <div className="space-y-4 mb-8">
              <motion.div variants={childVariants} className="overflow-hidden">
                <span className="font-mono text-xs uppercase tracking-[0.3em] text-white/40 block mb-1">
                  INTRODUCING
                </span>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-black tracking-tight text-white leading-none">
                  Kazi Shariful Islam
                </h1>
              </motion.div>

              <motion.div variants={childVariants} className="overflow-hidden">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-sans font-light tracking-tight text-muted-text leading-tight">
                  Full Stack Developer & <br />
                  <span className="font-serif italic text-accent font-normal tracking-wide">
                    Systems Architect
                  </span>
                </h2>
              </motion.div>
            </div>

            {/* Short editorial description */}
            <motion.p
              variants={childVariants}
              className="text-sm text-muted-text/90 leading-relaxed font-sans max-w-lg mb-10"
            >
              I engineer performant web architectures using Next.js and React paired with robust, modular backend systems in NestJS, Node.js, and Python (FastAPI). Focused on pristine UX, clean API designs, and scalable relational databases.
            </motion.p>

            {/* Tech tag loop */}
            <motion.div
              variants={childVariants}
              className="flex flex-wrap gap-2.5 mb-10 max-w-md"
            >
              {['Next.js', 'NestJS', 'PostgreSQL', 'TypeScript', 'Prisma ORM', 'FastAPI', 'Redis'].map((tag) => (
                <span 
                  key={tag}
                  className="px-3 py-1.5 bg-white/3 border border-white/5 hover:border-white/10 rounded-lg font-mono text-[10px] font-bold text-muted-text/90 hover:text-white transition-colors"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* Primary Action Buttons */}
            <motion.div
              variants={childVariants}
              className="flex flex-wrap gap-4 items-center w-full sm:w-auto"
            >
              <button
                onClick={handleScrollToProjects}
                className="px-6 py-3.5 bg-accent text-primary-bg rounded-xl font-mono text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-xl shadow-accent/10 hover:shadow-accent/20 hover:bg-accent/90 flex items-center gap-2 group cursor-pointer w-full sm:w-auto justify-center"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href="#contact"
                className="px-6 py-3.5 bg-white/3 border border-white/5 hover:border-white/10 text-[#F5F5F5] rounded-xl font-mono text-xs font-bold uppercase tracking-wider transition-all duration-300 backdrop-blur-sm flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                <span>Connect</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
              </a>
            </motion.div>

          </div>

          {/* Right Column: High Fidelity Interactive System Blueprint */}
          <div className="lg:col-span-6 relative w-full flex flex-col justify-center">
            
            <motion.div
              variants={childVariants}
              className="w-full bg-[#0c0c0c]/90 border border-white/10 rounded-[32px] p-6 md:p-8 shadow-2xl relative overflow-hidden backdrop-blur-md"
            >
              {/* Header inside Blueprint */}
              <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <Network className="w-4 h-4 text-accent animate-pulse" />
                  <span className="font-mono text-[10px] font-extrabold uppercase tracking-widest text-[#F5F5F5]">
                    System Blueprint Trace
                  </span>
                </div>
                <button
                  onClick={() => setSystemTraceActive(!systemTraceActive)}
                  className={`px-3 py-1 rounded-full font-mono text-[8px] font-extrabold uppercase tracking-wider transition-all border cursor-pointer ${
                    systemTraceActive 
                      ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-500' 
                      : 'bg-white/3 border-white/5 text-muted-text'
                  }`}
                >
                  {systemTraceActive ? 'Live Trace On' : 'Paused'}
                </button>
              </div>

              {/* Graphical Blueprint Grid */}
              <div className="relative w-full h-48 bg-black/40 border border-white/5 rounded-2xl p-4 flex items-center justify-between overflow-hidden">
                
                {/* SVG Connections */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40" xmlns="http://www.w3.org/2000/svg">
                  {/* Dynamic path trace */}
                  <path
                    d="M 40 96 C 100 40, 140 40, 180 96 C 220 150, 260 150, 320 96"
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="1"
                    strokeOpacity="0.1"
                  />
                  
                  {systemTraceActive && (
                    <motion.path
                      d="M 40 96 C 100 40, 140 40, 180 96 C 220 150, 260 150, 320 96"
                      fill="none"
                      stroke="url(#traceGrad)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      initial={{ strokeDasharray: '0 400' }}
                      animate={{ strokeDasharray: '400 400', strokeDashoffset: [400, 0] }}
                      transition={{ repeat: Infinity, duration: 3.5, ease: 'linear' }}
                    />
                  )}

                  <defs>
                    <linearGradient id="traceGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#4E85BF" stopOpacity="0" />
                      <stop offset="50%" stopColor="#10B981" stopOpacity="1" />
                      <stop offset="100%" stopColor="#89AACC" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Nodes rendering inside Grid */}
                {systemNodes.map((node) => {
                  const isActive = activeSystemNode === node.id;
                  return (
                    <div
                      key={node.id}
                      onClick={() => setActiveSystemNode(node.id)}
                      className={`relative flex flex-col items-center justify-center cursor-pointer transition-all duration-300 z-10 ${
                        isActive ? 'scale-110' : 'opacity-70 hover:opacity-100 hover:scale-105'
                      }`}
                    >
                      {/* Glow backing */}
                      {isActive && (
                        <div 
                          style={{ backgroundColor: node.color }}
                          className="absolute w-12 h-12 rounded-full filter blur-[15px] opacity-25 pointer-events-none" 
                        />
                      )}

                      {/* Icon Container */}
                      <div 
                        style={{ 
                          borderColor: isActive ? node.color : 'rgba(255,255,255,0.1)',
                          backgroundColor: isActive ? 'rgba(255,255,255,0.03)' : 'transparent'
                        }}
                        className="w-10 h-10 rounded-xl border flex items-center justify-center text-white mb-2 transition-all duration-300"
                      >
                        {node.icon}
                      </div>

                      <span className="font-mono text-[9px] text-[#F5F5F5] font-bold">
                        {node.id.toUpperCase()}
                      </span>
                    </div>
                  );
                })}

              </div>

              {/* Dynamic Detail Panel explaining the node role */}
              <div className="mt-6 bg-black/20 border border-white/5 rounded-2xl p-5 text-left min-h-[160px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSystemNode}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {/* Node Header */}
                    <div className="flex items-center justify-between mb-3 border-b border-white/5 pb-2.5">
                      <div className="flex items-center gap-2">
                        <span 
                          style={{ backgroundColor: currentActiveNode.color }}
                          className="w-2 h-2 rounded-full" 
                        />
                        <h4 className="font-sans font-black text-sm text-white">
                          {currentActiveNode.label}
                        </h4>
                      </div>
                      <span className="font-mono text-[9px] text-muted-text uppercase font-bold">
                        {currentActiveNode.role}
                      </span>
                    </div>

                    {/* Node Spec bullet list */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4">
                      {currentActiveNode.specs.map((spec, sIdx) => (
                        <div key={sIdx} className="flex items-start gap-2 text-[11px] text-muted-text leading-tight">
                          <ShieldCheck className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>

                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Blueprint Legend Footer */}
              <div className="mt-4 flex items-center justify-between text-[10px] font-mono text-muted-text/80">
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-accent animate-spin-slow" />
                  <span>Click nodes to trace the stack role</span>
                </span>
                <span>Active: <strong className="text-white uppercase">{activeSystemNode}</strong></span>
              </div>

            </motion.div>

          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
