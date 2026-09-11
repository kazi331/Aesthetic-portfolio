import ProfileView from '@/components/pages/ProfileView';
import { siteConfig } from '@/lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Engineering Profile & Biography',
  description: 'Profile, engineering experience, technical stack, career highlights, education, and certifications for Kazi Shariful Islam.',
  alternates: {
    canonical: `${siteConfig.url}/profile`,
  },
  openGraph: {
    type: 'profile',
    locale: 'en_US',
    url: `${siteConfig.url}/profile`,
    title: 'Engineering Profile & Biography | Kazi Shariful Islam',
    description: 'Profile, engineering experience, technical stack, career highlights, education, and certifications for Kazi Shariful Islam.',
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'Kazi Shariful Islam Profile',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Engineering Profile & Biography | Kazi Shariful Islam',
    description: 'Profile, engineering experience, technical stack, career highlights, education, and certifications for Kazi Shariful Islam.',
    creator: siteConfig.twitterHandle,
    site: siteConfig.twitterHandle,
    images: [siteConfig.ogImage],
  },
};

export default function ProfilePage() {
  return <ProfileView />;
}
