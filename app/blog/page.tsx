import React, { Suspense } from 'react';
import { Metadata } from 'next';
import BlogListingView from '@/components/blog/BlogListingView';

export const metadata: Metadata = {
  title: 'Engineering Blog & Architectural Logs | Kazi Shariful Islam',
  description: 'In-depth engineering logs, WebAssembly on the edge, Next.js optimization post-mortems, and software patterns from production systems.',
};

export default function BlogPage() {
  return (
    <Suspense fallback={<div className="bg-[#090909] min-h-screen" />}>
      <BlogListingView basePath="/blog" />
    </Suspense>
  );
}
