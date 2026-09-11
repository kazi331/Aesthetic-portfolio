import ProfileView from '@/components/pages/ProfileView';
import { siteConfig } from '@/lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Full Stack Developer Profile | React, Next.js & Node.js Remote Engineer',
  description: 'Hire a Senior Full Stack & React Developer. 3+ years experience with Next.js, TypeScript, Node.js, Express, Nest.js & FastAPI. Review background and resume.',
  alternates: {
    canonical: `${siteConfig.url}/profile`,
  },
  openGraph: {
    type: 'profile',
    locale: 'en_US',
    url: `${siteConfig.url}/profile`,
    title: 'Full Stack Developer Profile | React, Next.js & Node.js Remote Engineer',
    description: 'Hire a Senior Full Stack & React Developer. 3+ years experience with Next.js, TypeScript, Node.js, Express, Nest.js & FastAPI. Review background and resume.',
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'Kazi Shariful Islam — Full Stack & React Developer Profile',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Full Stack Developer Profile | React, Next.js & Node.js Remote Engineer',
    description: 'Hire a Senior Full Stack & React Developer. 3+ years experience with Next.js, TypeScript, Node.js, Express, Nest.js & FastAPI. Review background and resume.',
    creator: siteConfig.twitterHandle,
    site: siteConfig.twitterHandle,
    images: [siteConfig.ogImage],
  },
};

export default function ProfilePage() {
  return <ProfileView />;
}
