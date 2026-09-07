import React from 'react';
import { Metadata } from 'next';
import { blogPosts } from '@/lib/data';
import BlogDetailsView from '@/components/blog/BlogDetailsView';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    return {
      title: 'Article Not Found | Kazi Shariful Islam',
    };
  }

  return {
    title: `${post.title} | Engineering Blog`,
    description: post.description,
  };
}

export default async function SingleBlogPage({ params }: PageProps) {
  const resolvedParams = await params;
  return <BlogDetailsView slug={resolvedParams.slug} basePath="/blog" />;
}
