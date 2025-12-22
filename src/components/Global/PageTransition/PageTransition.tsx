'use client';

import { useEffect, useState, useRef } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import st from './PageTransition.module.scss';

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayChildren, setDisplayChildren] = useState(children);
  const prevPathnameRef = useRef(pathname);
  const pendingNavigationRef = useRef<string | null>(null);

  useEffect(() => {
    // Intercept link clicks to fade out before navigation
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      
      if (link && link.href) {
        try {
          const url = new URL(link.href);
          const currentUrl = new URL(window.location.href);
          
          // Only handle internal navigation
          if (url.origin === currentUrl.origin && 
              url.pathname !== currentUrl.pathname &&
              !link.hasAttribute('target') &&
              !link.hasAttribute('download')) {
            // Prevent default navigation (but allow event to propagate so onClick handlers run)
            e.preventDefault();
            
            // Dispatch event to notify other components (e.g., close mobile menu)
            // Include target URL so navigation can update indicator
            window.dispatchEvent(new CustomEvent('page-transition-start', {
              detail: { targetPath: url.pathname }
            }));
            
            // Store the pending navigation target
            pendingNavigationRef.current = url.pathname + url.search + url.hash;
            
            // Start fade-out animation
            setIsTransitioning(true);
            
            // After fade-out completes, navigate
            setTimeout(() => {
              if (pendingNavigationRef.current) {
                router.push(pendingNavigationRef.current);
                pendingNavigationRef.current = null;
              }
            }, 300); // Match fade-out duration
          }
        } catch (error) {
          // Invalid URL, ignore
        }
      }
    };

    // Use capture phase to ensure we catch all link clicks
    document.addEventListener('click', handleLinkClick, true);

    return () => {
      document.removeEventListener('click', handleLinkClick, true);
    };
  }, [router]);

  useEffect(() => {
    // Handle pathname change after navigation
    if (pathname !== prevPathnameRef.current) {
      // Update content and fade in
      setDisplayChildren(children);
      prevPathnameRef.current = pathname;
      
      // Fade in after content is updated
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(false);
        });
      });
    } else {
      // Initial render or same pathname - ensure children are synced
      setDisplayChildren(children);
    }
  }, [pathname, children]);

  return (
    <div className={`${st.pageTransition} ${isTransitioning ? st.fadeOut : st.fadeIn}`}>
      {displayChildren}
    </div>
  );
}

