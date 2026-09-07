import React, { Suspense } from 'react';
import { Metadata } from 'next';
import BlogListingView from '@/components/blog/BlogListingView';

export const metadata: Metadata = {
  title: 'Engineering Articles & Logs | Kazi Shariful Islam',
  description: 'Technical breakdowns, software design pattern deep-dives, and optimization post-mortems compiled from production experience.',
};

export default function ArticlesPage() {
  return (
    <Suspense fallback={<div className="bg-[#090909] min-h-screen" />}>
      <BlogListingView basePath="/articles" />
    </Suspense>
  );
}
