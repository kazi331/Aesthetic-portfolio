'use client';

import React, { useEffect, useState, useRef, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';

export function triggerRouteTransition(targetPath?: string) {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(
      new CustomEvent('route-transition-start', { detail: { targetPath } })
    );
  }
}

export default function PageLoader() {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('TRANSITING ROUTE');
  const pathname = usePathname();
  const currentPathRef = useRef(pathname);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Helper to derive a clean tactical label based on target URL
  const getRouteLabel = (targetPath: string) => {
    if (targetPath.startsWith('/blog/') || targetPath.startsWith('/articles/')) {
      return 'FETCHING ARTICLE LOG';
    }
    if (targetPath === '/blog' || targetPath === '/articles') {
      return 'OPENING BLOG DIRECTORY';
    }
    if (targetPath === '/' || targetPath === '') {
      return 'RETURNING TO WORKSPACE';
    }
    return 'SYNCHRONIZING ROUTE';
  };

  const completeLoading = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setProgress(100);
    setTimeout(() => {
      setLoading(false);
      setProgress(0);
    }, 140);
  }, []);

  const startLoading = useCallback((targetPath?: string) => {
    if (targetPath) {
      setStatusText(getRouteLabel(targetPath));
    } else {
      setStatusText('TRANSITING ROUTE');
    }
    setProgress(15);
    setLoading(true);

    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) return prev;
        const inc = Math.floor(Math.random() * 12) + 6;
        return Math.min(prev + inc, 90);
      });
    }, 35);

    // Fallback safety timeout (3.5s)
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      completeLoading();
    }, 3500);
  }, [completeLoading]);

  // When pathname changes, complete route transition
  useEffect(() => {
    if (currentPathRef.current !== pathname) {
      currentPathRef.current = pathname;
      if (loading) {
        const timer = setTimeout(() => {
          completeLoading();
        }, 10);
        return () => clearTimeout(timer);
      }
    }
  }, [pathname, loading, completeLoading]);

  useEffect(() => {
    // 1. Intercept link clicks across the entire document
    const handleLinkClick = (e: MouseEvent) => {
      let target = e.target as HTMLElement | null;
      while (target && target.tagName !== 'A') {
        target = target.parentElement;
      }

      if (target && target.tagName === 'A') {
        const href = target.getAttribute('href');
        const targetAttr = target.getAttribute('target');

        // Ignore new tab links, anchors, tel/mailto, or external URLs
        if (
          !href ||
          targetAttr === '_blank' ||
          href.startsWith('mailto:') ||
          href.startsWith('tel:') ||
          href.startsWith('#') ||
          href.startsWith('javascript:')
        ) {
          return;
        }

        try {
          const url = new URL(href, window.location.origin);
          // Only trigger if destination pathname differs from current pathname
          if (url.origin === window.location.origin && url.pathname !== window.location.pathname) {
            startLoading(url.pathname);
          }
        } catch {
          // If relative path
          if (href.startsWith('/') && !href.startsWith('//') && href !== window.location.pathname) {
            startLoading(href);
          }
        }
      }
    };

    // 2. Custom event listener for programmatic navigation
    const handleCustomRouteStart = (e: Event) => {
      const customEvent = e as CustomEvent<{ targetPath?: string }>;
      startLoading(customEvent.detail?.targetPath);
    };

    // 3. Browser back/forward navigation
    const handlePopState = () => {
      if (window.location.pathname !== currentPathRef.current) {
        startLoading(window.location.pathname);
      }
    };

    // 4. Monkey-patch pushState & replaceState to catch programmatic router.push calls
    const originalPushState = window.history.pushState;
    const originalReplaceState = window.history.replaceState;

    window.history.pushState = function (...args) {
      const url = args[2];
      if (url && typeof url === 'string') {
        try {
          const dest = new URL(url, window.location.origin);
          if (dest.pathname !== window.location.pathname) {
            startLoading(dest.pathname);
          }
        } catch {}
      }
      return originalPushState.apply(this, args);
    };

    window.history.replaceState = function (...args) {
      const url = args[2];
      if (url && typeof url === 'string') {
        try {
          const dest = new URL(url, window.location.origin);
          if (dest.pathname !== window.location.pathname) {
            startLoading(dest.pathname);
          }
        } catch {}
      }
      return originalReplaceState.apply(this, args);
    };

    document.addEventListener('click', handleLinkClick, true);
    window.addEventListener('route-transition-start', handleCustomRouteStart);
    window.addEventListener('popstate', handlePopState);

    return () => {
      document.removeEventListener('click', handleLinkClick, true);
      window.removeEventListener('route-transition-start', handleCustomRouteStart);
      window.removeEventListener('popstate', handlePopState);
      window.history.pushState = originalPushState;
      window.history.replaceState = originalReplaceState;
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [startLoading]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          id="route-transition-screen"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
          className="fixed inset-0 z-[99999] bg-[#090909]/92 backdrop-blur-md flex flex-col items-center justify-center p-6 select-none pointer-events-auto"
        >
          {/* Top Edge Laser Progress Bar */}
          <div className="fixed top-0 left-0 right-0 h-[2.5px] overflow-hidden pointer-events-none">
            <motion.div
              className="h-full bg-[#4E85BF] shadow-[0_0_12px_#4E85BF]"
              style={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ ease: 'easeOut', duration: 0.15 }}
            />
          </div>

          {/* Center Tactical Transit HUD (Homage to initial system boot screen) */}
          <motion.div
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.98, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="flex flex-col items-center max-w-xs w-full gap-4 px-6 py-5 rounded-2xl bg-[#111111]/85 border border-white/10 shadow-2xl shadow-black/80"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-2 h-2 bg-[#4E85BF] rounded-full animate-pulse shadow-[0_0_8px_#4E85BF]" />
              <span className="font-bold tracking-tighter text-sm text-primary-text font-sans uppercase">
                KS.01 // ROUTE TRANSIT
              </span>
            </div>

            {/* Loading track line */}
            <div className="w-full h-[1.5px] bg-white/10 relative overflow-hidden rounded-full">
              <motion.div
                className="absolute top-0 left-0 h-full bg-[#4E85BF] shadow-[0_0_8px_#4E85BF]"
                style={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ ease: 'linear', duration: 0.05 }}
              />
            </div>

            <div className="flex justify-between w-full text-[9px] font-mono text-muted-text">
              <span className="tracking-wider uppercase">{statusText}</span>
              <span className="text-[#89AACC] font-bold">{Math.min(progress, 100)}%</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
