'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Clock, Calendar, Share2, Check, Copy } from 'lucide-react';
import Link from 'next/link';
import { blogPosts } from '@/lib/data';
import Container from '@/components/shared/Container';

interface ArticleDetailsClientProps {
  slug: string;
}

export default function ArticleDetailsClient({ slug }: ArticleDetailsClientProps) {
  const post = blogPosts.find((p) => p.slug === slug);
  const [copied, setCopied] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!post) {
    return (
      <main className="bg-[#090909] text-[#F5F5F5] min-h-screen py-24 flex items-center justify-center">
        <Container className="text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-text mb-4">
            Article not found
          </p>
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 text-accent font-mono text-xs uppercase tracking-wider hover:underline"
          >
            <ArrowLeft className="w-4 h-4" /> Return to technical logs
          </Link>
        </Container>
      </main>
    );
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.description,
        url: window.location.href,
      }).catch(console.error);
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Helper function to render a mini custom markdown parser to avoid heavy dependency issues
  const renderContent = (contentString: string) => {
    if (!contentString) return null;

    const lines = contentString.split('\n');
    const elements: React.ReactNode[] = [];
    let insideCodeBlock = false;
    let codeBlockLanguage = '';
    let codeBlockLines: string[] = [];

    lines.forEach((line, index) => {
      // Check for code blocks
      if (line.trim().startsWith('```')) {
        if (insideCodeBlock) {
          // Close block
          insideCodeBlock = false;
          const codeContent = codeBlockLines.join('\n');
          elements.push(
            <div key={`code-${index}`} className="my-8 bg-[#121212] border border-white/5 rounded-2xl overflow-hidden shadow-2xl">
              {/* Header/Mac toolbar */}
              <div className="flex items-center justify-between px-5 py-3.5 bg-white/3 border-b border-white/5 text-[10px] font-mono text-muted-text">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
                  <span className="ml-2 font-semibold text-primary-text">{codeBlockLanguage || 'source'}</span>
                </div>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(codeContent);
                    alert('Source code copied to clipboard!');
                  }}
                  className="hover:text-accent flex items-center gap-1 cursor-pointer transition-colors"
                >
                  <Copy className="w-3.5 h-3.5" />
                  Copy
                </button>
              </div>
              <pre className="p-5 overflow-x-auto text-xs font-mono text-[#89AACC] leading-relaxed bg-[#0b0b0b]">
                <code>{codeContent}</code>
              </pre>
            </div>
          );
          codeBlockLines = [];
        } else {
          // Open block
          insideCodeBlock = true;
          codeBlockLanguage = line.replace('```', '').trim();
        }
        return;
      }

      if (insideCodeBlock) {
        codeBlockLines.push(line);
        return;
      }

      // Check for headers
      if (line.startsWith('### ')) {
        elements.push(
          <h3 key={index} className="text-xl sm:text-2xl font-bold font-display text-primary-text mt-8 mb-4 tracking-tight">
            {line.replace('### ', '')}
          </h3>
        );
        return;
      }

      if (line.startsWith('## ')) {
        elements.push(
          <h2 key={index} className="text-2xl sm:text-3xl font-bold font-display text-primary-text mt-10 mb-5 pb-2 border-b border-white/5 tracking-tight">
            {line.replace('## ', '')}
          </h2>
        );
        return;
      }

      if (line.startsWith('# ')) {
        elements.push(
          <h1 key={index} className="text-3xl sm:text-4xl font-bold font-display text-primary-text mt-12 mb-6 tracking-tight">
            {line.replace('# ', '')}
          </h1>
        );
        return;
      }

      // Check for horizontal rules
      if (line.trim() === '---') {
        elements.push(<hr key={index} className="my-10 border-white/5" />);
        return;
      }

      // Check for bullet lists
      if (line.startsWith('- ')) {
        const processedLine = line.replace('- ', '');
        const parts = processedLine.split('**');
        elements.push(
          <ul key={index} className="list-none pl-1 my-3">
            <li className="text-sm text-muted-text flex items-start gap-2.5 leading-relaxed">
              <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0" />
              <span>
                {parts.map((part, pIdx) => (
                  pIdx % 2 === 1 ? <strong key={pIdx} className="text-primary-text font-semibold">{part}</strong> : part
                ))}
              </span>
            </li>
          </ul>
        );
        return;
      }

      // Standalone inline formatting check for paragraphs
      if (line.trim()) {
        const parts = line.split('**');
        const formattedLine = parts.map((part, pIdx) => {
          if (part.includes('`')) {
            const subParts = part.split('`');
            return subParts.map((sub, sIdx) => (
              sIdx % 2 === 1 ? <code key={`code-${sIdx}`} className="bg-white/5 border border-white/5 px-1.5 py-0.5 rounded text-xs text-accent font-mono">{sub}</code> : sub
            ));
          }
          return pIdx % 2 === 1 ? <strong key={pIdx} className="text-primary-text font-semibold">{part}</strong> : part;
        });

        elements.push(
          <p key={index} className="text-sm sm:text-base text-muted-text leading-relaxed mb-6 font-sans">
            {formattedLine}
          </p>
        );
      }
    });

    return elements;
  };

  return (
    <main className="bg-[#090909] text-[#F5F5F5] min-h-screen py-20 relative overflow-hidden selection:bg-accent/30">
      {/* Scroll indicator bar */}
      <div className="fixed top-0 left-0 right-0 h-[3px] bg-white/5 z-50">
        <div className="h-full bg-accent transition-all duration-100" style={{ width: `${scrollProgress}%` }} />
      </div>

      <Container>
        {/* Back navigation */}
        <div className="mb-12 flex items-center justify-between">
          <Link
            href="/articles"
            className="group inline-flex items-center gap-2.5 text-xs font-mono font-bold uppercase tracking-widest text-muted-text hover:text-accent transition-colors duration-300"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Articles
          </Link>

          <button
            onClick={handleShare}
            className="inline-flex items-center gap-2 text-xs font-mono text-muted-text hover:text-accent transition-colors border border-white/5 hover:border-accent/20 px-4 py-2 rounded-full bg-[#121212]/40 cursor-pointer"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-green-400 animate-scale" /> : <Share2 className="w-3.5 h-3.5" />}
            {copied ? 'Copied' : 'Share'}
          </button>
        </div>

        {/* Article Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl border-b border-white/5 pb-10 mb-12"
        >
          <div className="flex flex-wrap items-center gap-5 text-xs font-mono text-muted-text mb-6">
            <span className="flex items-center gap-1.5 text-accent font-semibold">
              <Calendar className="w-3.5 h-3.5" />
              {post.date}
            </span>
            <span className="opacity-30">•</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-display tracking-tighter mb-6 leading-tight text-primary-text">
            {post.title}
          </h1>

          <p className="text-muted-text text-base sm:text-lg leading-relaxed italic border-l-2 border-accent/30 pl-4 font-sans">
            {post.description}
          </p>
        </motion.div>

        {/* Article Body */}
        <motion.article
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="max-w-3xl"
        >
          {post.content ? renderContent(post.content) : (
            <p className="text-muted-text leading-relaxed font-sans">{post.description}</p>
          )}
        </motion.article>

        {/* Footer Navigation */}
        <div className="mt-16 pt-10 border-t border-white/5 max-w-3xl flex items-center justify-between">
          <div>
            <h5 className="font-mono text-xs uppercase tracking-widest text-[#F5F5F5] font-bold mb-2">
              Kazi Shariful Islam
            </h5>
            <p className="text-xs text-muted-text font-sans">
              Full Stack Developer specializing in Next.js & Node.js
            </p>
          </div>

          <Link
            href="/articles"
            className="group flex items-center gap-2 text-xs font-mono font-bold text-accent hover:text-accent-secondary uppercase tracking-widest"
          >
            All Articles
            <ArrowLeft className="w-3.5 h-3.5 rotate-180 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </Container>
    </main>
  );
}
