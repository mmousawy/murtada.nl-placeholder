'use client';

import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import Footer from './Footer';
import st from './Footer.module.scss';

export default function ConditionalFooter() {
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const prevPathnameRef = useRef(pathname);
  
  // Known valid routes
  const validRoutes = [
    '/',
    '/about',
    '/blog',
    '/photography',
  ];
  
  // Check if pathname matches a valid route pattern
  const isValidRoute = validRoutes.some(route => {
    if (route === '/') {
      return pathname === '/';
    }
    // Check exact match or if it's a child route (e.g., /blog matches /blog/123)
    return pathname === route || pathname.startsWith(`${route}/`);
  });

  // Listen for page transition events
  useEffect(() => {
    const handleTransitionStart = () => {
      setIsTransitioning(true);
    };

    window.addEventListener('page-transition-start', handleTransitionStart);
    return () => {
      window.removeEventListener('page-transition-start', handleTransitionStart);
    };
  }, []);

  // Fade in when pathname changes (navigation complete)
  useEffect(() => {
    if (pathname !== prevPathnameRef.current) {
      prevPathnameRef.current = pathname;
      // Small delay to sync with page content fade-in
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(false);
        });
      });
    }
  }, [pathname]);
  
  // Hide footer on homepage or 404 pages (invalid routes)
  if (pathname === '/' || !isValidRoute) {
    return null;
  }
  
  return (
    <div className={`${st.footerWrapper} ${isTransitioning ? st.fadeOut : st.fadeIn}`}>
      <Footer />
    </div>
  );
}

