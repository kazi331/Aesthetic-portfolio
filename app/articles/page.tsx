'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Search, Calendar, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { blogPosts } from '@/lib/data';
import Container from '@/components/shared/Container';

export default function ArticlesPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <main className="bg-[#090909] text-[#F5F5F5] min-h-screen py-20 relative overflow-hidden selection:bg-accent/30">
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-[#89AACC]/5 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        {/* Back navigation */}
        <div className="mb-12">
          <Link
            href="/"
            className="group inline-flex items-center gap-2.5 text-xs font-mono font-bold uppercase tracking-widest text-muted-text hover:text-accent transition-colors duration-300"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </div>

        {/* Page Heading */}
        <div className="max-w-3xl mb-16">
          <span className="text-accent font-mono text-xs tracking-widest uppercase font-semibold block mb-3">
            [ Tech Logbook ]
          </span>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold font-display tracking-tighter mb-6 leading-none">
            ENGINEERING <br />
            <span className="font-serif italic font-light text-[#89AACC]">
              Articles & Logs
            </span>
          </h1>
          <p className="text-muted-text text-base sm:text-lg leading-relaxed max-w-xl">
            Detailed technical breakdowns, software design pattern deep-dives, and optimization post-mortems compiled from production experience.
          </p>
        </div>

        {/* Search & Stats Header */}
        <div className="flex flex-col md:flex-row gap-6 justify-between items-center border-b border-white/5 pb-8 mb-12">
          {/* Interactive Search bar */}
          <div className="relative w-full md:max-w-md group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-text group-focus-within:text-accent transition-colors" />
            <input
              type="text"
              placeholder="Search articles by keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#121212]/80 border border-white/5 hover:border-white/10 focus:border-accent/40 rounded-full py-3.5 pl-12 pr-6 text-sm text-primary-text outline-none transition-all duration-300 font-sans shadow-inner placeholder:text-muted-text/60"
            />
          </div>

          <div className="flex gap-8 text-xs font-mono text-muted-text self-start md:self-center">
            <div>
              Total logs: <span className="text-[#F5F5F5] font-semibold">{blogPosts.length}</span>
            </div>
            <div>
              Read time: <span className="text-[#F5F5F5] font-semibold">~16 mins</span>
            </div>
          </div>
        </div>

        {/* Articles List / Grid */}
        {filteredPosts.length > 0 ? (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl"
          >
            {filteredPosts.map((post) => (
              <motion.div key={post.slug} variants={itemVariants}>
                <Link href={`/articles/${post.slug}`} className="block group h-full">
                  <div className="bg-[#121212]/40 hover:bg-[#121212]/80 border border-white/5 hover:border-accent/25 rounded-[32px] p-8 flex flex-col justify-between h-full transition-all duration-500 shadow-xl relative overflow-hidden group">
                    {/* Corner accent glow */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    <div>
                      <div className="flex items-center justify-between text-[10px] font-mono text-muted-text mb-6">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" />
                          {post.date}
                        </span>
                        <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/5 uppercase tracking-widest text-[8px] flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {post.readTime}
                        </span>
                      </div>

                      <h2 className="text-2xl font-bold font-display text-primary-text mb-3 leading-snug group-hover:text-accent transition-colors duration-300">
                        {post.title}
                      </h2>
                      <p className="text-muted-text text-sm leading-relaxed mb-6 font-sans">
                        {post.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-5 border-t border-white/5 mt-auto">
                      <span className="text-[10px] font-mono text-accent uppercase tracking-widest font-bold group-hover:text-accent-secondary transition-colors">
                        Read Entry
                      </span>
                      <ArrowRight className="w-4 h-4 text-muted-text group-hover:text-accent group-hover:translate-x-1.5 transition-all duration-300" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-24 bg-[#121212]/20 border border-white/5 rounded-[32px] max-w-5xl">
            <p className="text-muted-text text-sm font-mono uppercase tracking-widest">
              No articles found matching &quot;{searchQuery}&quot;
            </p>
          </div>
        )}
      </Container>
    </main>
  );
}
