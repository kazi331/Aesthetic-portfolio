import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Container from '@/components/shared/Container';

export default function NotFound() {
  return (
    <main className="bg-[#090909] text-[#F5F5F5] min-h-screen flex items-center justify-center">
      <Container className="text-center py-20">
        <span className="font-mono text-xs uppercase tracking-widest text-accent font-bold block mb-3">
          404 ERROR
        </span>
        <h1 className="text-4xl sm:text-6xl font-display font-bold mb-4">
          Page Not Found
        </h1>
        <p className="text-sm sm:text-base text-muted-text max-w-md mx-auto mb-8 font-sans">
          The requested engineering log or route doesn&apos;t exist or may have been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-mono text-xs font-bold uppercase tracking-wider hover:bg-white/90 transition-all shadow-xl"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </Container>
    </main>
  );
}
