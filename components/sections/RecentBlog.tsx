'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { blogPosts } from '@/lib/data';
import Container from '@/components/shared/Container';
import Section from '@/components/shared/Section';
import SectionHeading from '@/components/shared/SectionHeading';
import BlogCard from '@/components/cards/BlogCard';
import AnimatedButton from '@/components/buttons/AnimatedButton';

export default function RecentBlog() {
  // Grab recent 2 blog posts
  const recent = blogPosts.slice(0, 2);

  return (
    <Section id="recent-blog" className="bg-[#090909]">
      <Container>
        <SectionHeading
          title="Recent Engineering Articles"
          subtitle="Tech Logbook"
          description="A collection of structured post-mortems, software design patterns, and in-depth framework studies."
        />

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12 max-w-4xl mx-auto">
          {recent.map((post, index) => (
            <BlogCard key={post.slug} post={post} index={index} />
          ))}
        </div>

        {/* View all button */}
        <div className="flex items-center justify-center">
          <AnimatedButton variant="outline" href="https://github.com">
            View All Engineering Logs
            <ArrowRight className="w-4 h-4 text-accent" />
          </AnimatedButton>
        </div>
      </Container>
    </Section>
  );
}
