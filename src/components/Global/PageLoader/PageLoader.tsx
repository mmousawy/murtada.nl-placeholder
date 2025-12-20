'use client';

import { useEffect, useState, useRef } from 'react';
import { usePathname } from 'next/navigation';
import st from './PageLoader.module.scss';

export default function PageLoader() {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const prevPathnameRef = useRef(pathname);
  const loadingTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const loadingStartTimeRef = useRef<number | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    // Detect when pathname is about to change (navigation started)
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
            setIsLoading(true);
            setProgress(0);
            loadingStartTimeRef.current = Date.now();
            
            // Clear any existing timeouts
            if (loadingTimeoutRef.current) {
              clearTimeout(loadingTimeoutRef.current);
            }
            if (progressIntervalRef.current) {
              clearInterval(progressIntervalRef.current);
            }
            if (animationFrameRef.current) {
              cancelAnimationFrame(animationFrameRef.current);
            }

            // Simulate progress to ensure animation completes
            let currentProgress = 0;
            const startTime = Date.now();
            const minDuration = 600; // Minimum 600ms for animation
            
            const updateProgress = () => {
              const elapsed = Date.now() - startTime;
              // Simulate progress: start fast, slow down near the end
              if (elapsed < minDuration) {
                // Simulate progress up to 90% during minimum duration
                currentProgress = Math.min(90, (elapsed / minDuration) * 90);
              } else {
                // Slow progress from 90% to 100%
                const extraTime = elapsed - minDuration;
                currentProgress = Math.min(100, 90 + (extraTime / 400) * 10);
              }
              
              setProgress(currentProgress);
              
              if (currentProgress < 100) {
                animationFrameRef.current = requestAnimationFrame(updateProgress);
              }
            };
            
            animationFrameRef.current = requestAnimationFrame(updateProgress);
          }
        } catch (err) {
          // Invalid URL, ignore
        }
      }
    };

    // Use capture phase to catch clicks early
    document.addEventListener('click', handleLinkClick, true);

    return () => {
      document.removeEventListener('click', handleLinkClick, true);
    };
  }, []);

  useEffect(() => {
    // When pathname changes, wait for page to be ready
    if (prevPathnameRef.current !== pathname) {
      prevPathnameRef.current = pathname;
      
      // Clear any existing timeouts
      if (loadingTimeoutRef.current) {
        clearTimeout(loadingTimeoutRef.current);
      }
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
      
      // Ensure progress reaches 100% before hiding
      const ensureCompleteAndHide = () => {
        // Set progress to 100% if not already
        setProgress(100);
        
        // Wait a bit for the animation to complete, then hide
        setTimeout(() => {
          setIsLoading(false);
          setProgress(0);
          loadingStartTimeRef.current = null;
        }, 200);
      };

      // Wait for page to be ready
      if (document.readyState === 'complete') {
        ensureCompleteAndHide();
      } else {
        // Wait for load event
        window.addEventListener('load', ensureCompleteAndHide, { once: true });
        // Also check when DOM is ready
        if (document.readyState === 'interactive') {
          setTimeout(ensureCompleteAndHide, 100);
        } else {
          document.addEventListener('DOMContentLoaded', () => {
            setTimeout(ensureCompleteAndHide, 100);
          }, { once: true });
        }
        // Fallback timeout
        loadingTimeoutRef.current = setTimeout(() => {
          ensureCompleteAndHide();
        }, 3000);
      }
    }

    return () => {
      if (loadingTimeoutRef.current) {
        clearTimeout(loadingTimeoutRef.current);
      }
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [pathname]);

  if (!isLoading) return null;

  return (
    <div className={st.loader}>
      <div 
        className={st.loader__bar}
        style={{ transform: `scaleX(${progress / 100})` }}
      ></div>
    </div>
  );
}

