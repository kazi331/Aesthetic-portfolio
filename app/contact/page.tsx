import ContactView from '@/components/pages/ContactView';
import { siteConfig } from '@/lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hire Full Stack Developer | Contact Remote React & Node.js Engineer',
  description: 'Hire a Full Stack Developer for React, Next.js, Node.js, Express, Nest.js & FastAPI projects. Available for US, EU, AU, CA & UK teams. Contact today.',
  alternates: {
    canonical: `${siteConfig.url}/contact`,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: `${siteConfig.url}/contact`,
    title: 'Hire Full Stack Developer | Contact Remote React & Node.js Engineer',
    description: 'Hire a Full Stack Developer for React, Next.js, Node.js, Express, Nest.js & FastAPI projects. Available for US, EU, AU, CA & UK teams. Contact today.',
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'Contact & Hire Full Stack Developer — Kazi Shariful Islam',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hire Full Stack Developer | Contact Remote React & Node.js Engineer',
    description: 'Hire a Full Stack Developer for React, Next.js, Node.js, Express, Nest.js & FastAPI projects. Available for US, EU, AU, CA & UK teams. Contact today.',
    creator: siteConfig.twitterHandle,
    site: siteConfig.twitterHandle,
    images: [siteConfig.ogImage],
  },
};

export default function ContactPage() {
  return <ContactView />;
}
