import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import BlogListingView from '@/components/blog/BlogListingView';
import { siteConfig } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Engineering Blog & Architectural Logs',
  description: 'In-depth engineering logs, WebAssembly on the edge, Next.js optimization post-mortems, and software patterns from production systems.',
  alternates: {
    canonical: `${siteConfig.url}/blog`,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: `${siteConfig.url}/blog`,
    title: 'Engineering Blog & Architectural Logs | Kazi Shariful Islam',
    description: 'In-depth engineering logs, WebAssembly on the edge, Next.js optimization post-mortems, and software patterns from production systems.',
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'Engineering Blog & Architectural Logs | Kazi Shariful Islam',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Engineering Blog & Architectural Logs | Kazi Shariful Islam',
    description: 'In-depth engineering logs, WebAssembly on the edge, Next.js optimization post-mortems, and software patterns from production systems.',
    creator: siteConfig.twitterHandle,
    site: siteConfig.twitterHandle,
    images: [siteConfig.ogImage],
  },
};

export default function BlogPage() {
  return (
    <Suspense fallback={<div className="bg-[#090909] min-h-screen" />}>
      <BlogListingView basePath="/blog" />
    </Suspense>
  );
}
