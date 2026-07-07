'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { projects } from '@/lib/data';
import Container from '@/components/shared/Container';
import Section from '@/components/shared/Section';
import SectionHeading from '@/components/shared/SectionHeading';
import ProjectCard from '@/components/cards/ProjectCard';
import AnimatedButton from '@/components/buttons/AnimatedButton';

export default function FeaturedProjects() {
  // Get featured projects
  const featured = projects.filter((p) => p.featured).slice(0, 4);

  return (
    <Section id="featured-projects" className="bg-[#090909]">
      <Container>
        <SectionHeading
          title="Featured Case Studies"
          subtitle="Selected Works"
          description="A close look at some of the highly modular backend nodes, fluid interactive layouts, and high-performance caching applications I have shipped."
        />

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {featured.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>

        {/* Action button */}
        <div className="flex items-center justify-center">
          <AnimatedButton variant="outline" href="https://github.com">
            Explore All Engineering Projects
            <ArrowRight className="w-4 h-4 text-accent" />
          </AnimatedButton>
        </div>
      </Container>
    </Section>
  );
}
