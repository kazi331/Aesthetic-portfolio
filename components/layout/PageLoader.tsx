'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';

export default function PageLoader() {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  // Reset loading state when pathname changes
  useEffect(() => {
    let active = true;
    if (loading) {
      const timer = setTimeout(() => {
        if (active) {
          setLoading(false);
        }
      }, 0);
      return () => {
        active = false;
        clearTimeout(timer);
      };
    }
  }, [pathname, loading]);

  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      // Find the closest anchor tag
      let target = e.target as HTMLElement | null;
      while (target && target.tagName !== 'A') {
        target = target.parentElement;
      }

      if (target && target.tagName === 'A') {
        const href = target.getAttribute('href');
        // If it's a relative internal link, trigger the loader
        if (href && href.startsWith('/') && !href.startsWith('//')) {
          try {
            const targetUrl = new URL(href, window.location.origin);
            // Only load if navigating to a different page path
            if (targetUrl.pathname !== window.location.pathname) {
              setLoading(true);
            }
          } catch (err) {
            // Fallback
            setLoading(true);
          }
        }
      }
    };

    document.addEventListener('click', handleLinkClick);
    return () => {
      document.removeEventListener('click', handleLinkClick);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <div className="fixed top-0 left-0 right-0 z-[9999] pointer-events-none h-[3px] overflow-hidden">
          {/* Glowing Top Progress Bar */}
          <motion.div
            initial={{ width: '0%' }}
            animate={{ width: '92%' }}
            exit={{ width: '100%', opacity: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="h-full bg-[#4E85BF] shadow-[0_0_12px_rgba(78,133,191,0.8)]"
          />
        </div>
      )}
    </AnimatePresence>
  );
}
