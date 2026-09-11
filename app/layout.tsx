import type { Metadata } from 'next';
import { Inter, Space_Grotesk, Playfair_Display, Fugaz_One, Shrikhand } from 'next/font/google';
import SmoothScroll from '@/components/shared/SmoothScroll';
import PageLoader from '@/components/layout/PageLoader';
import { siteConfig } from '@/lib/seo';
import { personalInfo } from '@/lib/data';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
});

const fugazOne = Fugaz_One({
  subsets: ['latin'],
  weight: '400', // Fugaz One only has weight 400 in Google Fonts, but it is naturally heavy (700-like bold style)
  variable: '--font-fugaz',
});

const shrikhand = Shrikhand({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-shrikhand',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'Kazi Shariful Islam Portfolio',
    template: '%s | Kazi Shariful Islam Portfolio',
  },
  description: 'An elegant, editorial-styled engineering portfolio showcase for Kazi Shariful Islam.',
  applicationName: 'Kazi Shariful Islam Portfolio',
  authors: [{ name: 'Kazi Shariful Islam', url: siteConfig.url }],
  creator: 'Kazi Shariful Islam',
  publisher: 'Kazi Shariful Islam',
  keywords: siteConfig.keywords,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    siteName: 'Kazi Shariful Islam Portfolio',
    title: 'Kazi Shariful Islam Portfolio',
    description: 'An elegant, editorial-styled engineering portfolio showcase for Kazi Shariful Islam.',
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'Kazi Shariful Islam Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kazi Shariful Islam Portfolio',
    description: 'An elegant, editorial-styled engineering portfolio showcase for Kazi Shariful Islam.',
    creator: siteConfig.twitterHandle,
    site: siteConfig.twitterHandle,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: 'Kazi Shariful Islam Portfolio',
      description: siteConfig.description,
      publisher: {
        '@id': `${siteConfig.url}/#person`,
      },
      inLanguage: 'en-US',
    },
    {
      '@type': 'Person',
      '@id': `${siteConfig.url}/#person`,
      name: personalInfo.name,
      jobTitle: personalInfo.title,
      url: siteConfig.url,
      email: personalInfo.email,
      image: personalInfo.profileImage,
      sameAs: [personalInfo.github, personalInfo.linkedin],
      knowsAbout: [
        'Full Stack Development',
        'TypeScript',
        'Next.js',
        'React',
        'Node.js',
        'Shopify Functions',
        'GraphQL',
        'PostgreSQL',
      ],
      description: personalInfo.summary,
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${playfairDisplay.variable} ${fugazOne.variable} ${shrikhand.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#090909] text-[#F5F5F5] antialiased font-sans">
        <PageLoader />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
