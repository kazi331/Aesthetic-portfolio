import { Inter, Space_Grotesk, Playfair_Display, Fugaz_One, Shrikhand } from 'next/font/google';
import SmoothScroll from '@/components/shared/SmoothScroll';
import PageLoader from '@/components/layout/PageLoader';
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

export const metadata = {
  title: 'Kazi Shariful Islam — Full Stack Developer Portfolio',
  description: 'An elegant, editorial-styled software engineering portfolio showcase for Kazi Shariful Islam.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${playfairDisplay.variable} ${fugazOne.variable} ${shrikhand.variable}`}>
      <body className="bg-[#090909] text-[#F5F5F5] antialiased font-sans">
        <PageLoader />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
