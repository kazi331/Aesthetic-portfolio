'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { BlogPost } from '@/types/portfolio';

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

export default function BlogCard({ post, index }: BlogCardProps) {
  return (
    <motion.div
      id={`blog-card-${index}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="bg-[#121212] rounded-[32px] border border-white/5 p-6 md:p-8 flex flex-col justify-between min-h-[220px] hover:border-accent/30 transition-all duration-300 group shadow-lg"
    >
      <div>
        <div className="flex items-center justify-between text-[10px] font-mono text-muted-text mb-4">
          <span>{post.date}</span>
          <span className="px-2 py-0.5 rounded bg-white/5 border border-white/5 uppercase tracking-widest text-[8px]">
            {post.readTime}
          </span>
        </div>

        <h4 className="font-semibold text-lg text-primary-text mb-2.5 group-hover:text-accent transition-colors leading-snug font-sans line-clamp-2">
          {post.title}
        </h4>
        <p className="text-muted-text text-xs leading-relaxed line-clamp-2 font-sans">
          {post.description}
        </p>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-white/5 mt-4">
        <span className="text-[10px] font-mono text-accent uppercase tracking-widest font-bold">
          Read Entry
        </span>
        <ArrowUpRight className="w-4 h-4 text-muted-text group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
      </div>
    </motion.div>
  );
}
