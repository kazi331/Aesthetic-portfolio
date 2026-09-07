'use client';

import Footer from '@/components/layout/Footer';
import LoadingScreen from '@/components/layout/LoadingScreen';
import Navbar from '@/components/layout/Navbar';
import ContactCTA from '@/components/sections/ContactCTA';
import ExperienceV2 from '@/components/sections/ExperienceV2';
import FeaturedProjects from '@/components/sections/FeaturedProjects';
import GithubPreview from '@/components/sections/GithubPreview';
import HeroV3 from '@/components/sections/HeroV3';
import RecentBlog from '@/components/sections/RecentBlog';
import Services from '@/components/sections/Services';
import Stats from '@/components/sections/Stats';
import TechStackV2 from '@/components/sections/TechStackV2';
import Testimonials from '@/components/sections/Testimonials';
import { AnimatePresence } from 'motion/react';
import { useState } from 'react';

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
            {/* <Hero /> */}
            {/* <HeroV2 /> */}
            <HeroV3 />
            <Stats />
            <FeaturedProjects />
            {/* <TechStack /> */}
            <TechStackV2 />
            {/* <Experience /> */}
            <ExperienceV2 />
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
