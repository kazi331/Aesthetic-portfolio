'use client';

import React, { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import LoadingScreen from '@/components/layout/LoadingScreen';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import Stats from '@/components/sections/Stats';
import FeaturedProjects from '@/components/sections/FeaturedProjects';
import TechStack from '@/components/sections/TechStack';
import Services from '@/components/sections/Services';
import Testimonials from '@/components/sections/Testimonials';
import RecentBlog from '@/components/sections/RecentBlog';
import GithubPreview from '@/components/sections/GithubPreview';
import ContactCTA from '@/components/sections/ContactCTA';
import Footer from '@/components/layout/Footer';

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && (
          <LoadingScreen onComplete={() => setLoading(false)} />
        )}
      </AnimatePresence>

      {!loading && (
        <div className="bg-[#090909] text-primary-text min-h-screen relative font-sans antialiased selection:bg-accent/20 selection:text-primary-text">
          <Navbar />
          <main id="main-content">
            <Hero />
            <Stats />
            <FeaturedProjects />
            <TechStack />
            <Services />
            <Testimonials />
            <RecentBlog />
            <GithubPreview />
            <ContactCTA />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}
