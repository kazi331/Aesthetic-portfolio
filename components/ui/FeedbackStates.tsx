'use client';

import React from 'react';
import { motion } from 'motion/react';
import { AlertCircle, EyeOff, Loader2 } from 'lucide-react';

export function LoadingSpinner({ className }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center p-8 ${className}`}>
      <Loader2 className="w-8 h-8 text-accent animate-spin" />
    </div>
  );
}

interface EmptyStateProps {
  title?: string;
  description?: string;
  className?: string;
}

export function EmptyState({
  title = 'No records found',
  description = 'Try widening your query or checking back later.',
  className,
}: EmptyStateProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center p-12 text-center rounded-2xl bg-surface border border-white/3 max-w-lg mx-auto ${className}`}
    >
      <div className="p-4 rounded-full bg-white/3 text-muted-text/80 mb-4">
        <EyeOff className="w-8 h-8" />
      </div>
      <h3 className="text-lg font-serif text-primary-text mb-1">{title}</h3>
      <p className="text-xs text-muted-text leading-relaxed">{description}</p>
    </div>
  );
}

interface ErrorStateProps {
  title?: string;
  description?: string;
  onRetry?: () => void;
  className?: string;
}

export function ErrorState({
  title = 'Something went wrong',
  description = 'An error occurred while loading this section.',
  onRetry,
  className,
}: ErrorStateProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center p-12 text-center rounded-2xl bg-surface border border-red-500/10 max-w-lg mx-auto ${className}`}
    >
      <div className="p-4 rounded-full bg-red-500/5 text-red-400 mb-4">
        <AlertCircle className="w-8 h-8" />
      </div>
      <h3 className="text-lg font-serif text-primary-text mb-1">{title}</h3>
      <p className="text-xs text-muted-text leading-relaxed mb-6">{description}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="px-5 py-2.5 bg-white/5 hover:bg-white/10 rounded-full text-xs font-mono text-primary-text border border-white/5 transition-all duration-300 cursor-pointer"
        >
          Try Again
        </button>
      )}
    </div>
  );
}

export function Skeleton({ className }: { className?: string }) {
  return (
    <motion.div
      animate={{ opacity: [0.5, 0.8, 0.5] }}
      transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
      className={`bg-white/5 rounded-xl ${className}`}
    />
  );
}
