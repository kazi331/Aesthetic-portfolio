'use client';

import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-center gap-4 mt-12 md:mt-16">
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="p-2 rounded-full border border-white/5 bg-surface text-muted-text hover:text-primary-text disabled:opacity-30 disabled:pointer-events-none hover:border-accent/40 transition-colors cursor-pointer"
        aria-label="Previous page"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      <span className="font-mono text-xs text-muted-text">
        Page <span className="text-primary-text font-semibold">{currentPage}</span> of{' '}
        <span className="text-primary-text font-semibold">{totalPages}</span>
      </span>

      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="p-2 rounded-full border border-white/5 bg-surface text-muted-text hover:text-primary-text disabled:opacity-30 disabled:pointer-events-none hover:border-accent/40 transition-colors cursor-pointer"
        aria-label="Next page"
      >
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
}
