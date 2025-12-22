'use client';

import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import ActiveLink from '@/components/Global/ActiveLink';
import ShadowWrapper from '@/components/Global/ShadowWrapper/ShadowWrapper';

import st from './Navigation.module.scss';

type NavigationProps = {
  menuData: any;
  menuOpen: boolean;
  setMenuOpen: (menuOpen: boolean) => void;
};

const Navigation: React.FC<NavigationProps> = ({ menuData, menuOpen, setMenuOpen }) => {
  const pathname = usePathname();
  
  // Interaction state
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [stickyIndex, setStickyIndex] = useState<number | null>(null); // Remembers last hovered (cleared on nav leave)
  const [navigatingIndex, setNavigatingIndex] = useState<number | null>(null); // Clicked link during navigation
  const [pendingTargetIndex, setPendingTargetIndex] = useState<number | null>(null); // Target index from page transition (for non-nav links like logo)
  const [isInitialOpen, setIsInitialOpen] = useState(false); // Track initial open for animation delay
  
  // Indicator visual state
  const [indicatorPos, setIndicatorPos] = useState<{ left: number; width: number } | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  // Refs
  const navListRef = useRef<HTMLUListElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const prevTargetRef = useRef<number | null>(null); // Track previous target for animation decisions
  const hasInitializedRef = useRef(false); // Track if we've done initial render
  const contactButtonRef = useRef<HTMLAnchorElement>(null);
  const mouseLeaveTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  // Active link based on current pathname
  const activeIndex = useMemo(() => {
    return menuData.items.findIndex((item: any) => 
      pathname.startsWith(`/${item.link.slug}`)
    );
  }, [pathname, menuData.items]);
  
  // Clear navigation state when route changes
  useEffect(() => {
    setNavigatingIndex(null);
    setPendingTargetIndex(null);
  }, [pathname]);

  // Listen for page-transition-start to update indicator before route changes
  useEffect(() => {
    const handleTransitionStart = (e: Event) => {
      const customEvent = e as CustomEvent<{ targetPath: string }>;
      const targetPath = customEvent.detail?.targetPath;
      
      if (targetPath) {
        // Find which nav item matches the target path
        const targetIdx = menuData.items.findIndex((item: any) => 
          targetPath.startsWith(`/${item.link.slug}`)
        );
        // Set to -1 if no match (e.g., going to homepage), otherwise the matching index
        setPendingTargetIndex(targetIdx);
      }
    };

    window.addEventListener('page-transition-start', handleTransitionStart);
    return () => {
      window.removeEventListener('page-transition-start', handleTransitionStart);
    };
  }, [menuData.items]);

  // Track initial open for delay animation
  useEffect(() => {
    if (menuOpen && !isInitialOpen) {
      setIsInitialOpen(true);
    }
  }, [menuOpen, isInitialOpen]);
  
  // Compute target index with priority: pendingTarget/navigating > hovered > sticky > active
  const targetIndex = useMemo(() => {
    // If navigating to a specific nav item (clicked a nav link)
    if (navigatingIndex !== null) return navigatingIndex;
    // If navigating via non-nav link (e.g., logo) - pendingTargetIndex can be -1 (no match) or a valid index
    if (pendingTargetIndex !== null) {
      return pendingTargetIndex >= 0 ? pendingTargetIndex : null; // -1 means no nav item matches, hide indicator
    }
    if (hoveredIndex !== null) return hoveredIndex;
    if (stickyIndex !== null) return stickyIndex;
    if (activeIndex >= 0) return activeIndex;
    return null;
  }, [navigatingIndex, pendingTargetIndex, hoveredIndex, stickyIndex, activeIndex]);
  
  // Calculate indicator position for a given link index
  const getIndicatorPosition = useCallback((index: number) => {
    const link = linkRefs.current[index];
    if (!link || !navListRef.current) return null;
    
    const navListRect = navListRef.current.getBoundingClientRect();
    const linkRect = link.getBoundingClientRect();
    const computedStyle = window.getComputedStyle(link);
    const paddingLeft = parseFloat(computedStyle.paddingLeft);
    const paddingRight = parseFloat(computedStyle.paddingRight);
    
    return {
      left: Math.round(linkRect.left - navListRect.left + paddingLeft),
      width: linkRect.width - paddingLeft - paddingRight,
    };
  }, []);
  
  // Update indicator when target changes
  useEffect(() => {
    const updateIndicator = () => {
      if (targetIndex === null) {
        // Hide and reset position
        setIsVisible(false);
        prevTargetRef.current = null;
        // Reset position after fade-out transition completes
        setTimeout(() => {
          setIndicatorPos(null);
        }, 200);
        return;
      }
      
      const pos = getIndicatorPosition(targetIndex);
      if (!pos) return;
      
      const prevTarget = prevTargetRef.current;
      
      // If indicator was hidden, reset position first before showing
      if (!isVisible && indicatorPos) {
        setIndicatorPos(null);
        // Wait for position reset, then set new position and show
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setIndicatorPos(pos);
            prevTargetRef.current = targetIndex;
            setIsVisible(true);
          });
        });
        return;
      }
      
      setIndicatorPos(pos);
      prevTargetRef.current = targetIndex;
      
      // Show indicator - animate fade-in only on first appearance
      if (prevTarget === null) {
        if (!hasInitializedRef.current && targetIndex === activeIndex) {
          // First render with active link - show immediately
          hasInitializedRef.current = true;
          setIsVisible(true);
        } else {
          // Fade in animation
          hasInitializedRef.current = true;
          requestAnimationFrame(() => {
            requestAnimationFrame(() => setIsVisible(true));
          });
        }
      } else {
        // Already visible - just update position
        setIsVisible(true);
      }
    };
    
    requestAnimationFrame(updateIndicator);
  }, [targetIndex, getIndicatorPosition, activeIndex, isVisible, indicatorPos]);
  
  // Recalculate position on resize
  useEffect(() => {
    const handleResize = () => {
      if (targetIndex !== null) {
        const pos = getIndicatorPosition(targetIndex);
        if (pos) setIndicatorPos(pos);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      // Cleanup timeout on unmount
      if (mouseLeaveTimeoutRef.current) {
        clearTimeout(mouseLeaveTimeoutRef.current);
      }
    };
  }, [targetIndex, getIndicatorPosition]);
  
  // Global mouse tracking to handle fast mouse movement
  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    const handleMouseMove = (e: MouseEvent) => {
      const target = e.target as Node;
      
      // Check if mouse is over any nav link or still within nav
      const isOverLink = linkRefs.current.some(link => link && link.contains(target));
      const isInNav = nav.contains(target);
      
      if (!isOverLink && hoveredIndex !== null) {
        // Mouse is not over any link
        if (isInNav) {
          // Still in nav - cancel any timeout, keep stickyIndex (indicator stays on last hovered)
          if (mouseLeaveTimeoutRef.current) {
            clearTimeout(mouseLeaveTimeoutRef.current);
            mouseLeaveTimeoutRef.current = null;
          }
        } else {
          // Left nav entirely - start delay timer to revert to active link
          if (mouseLeaveTimeoutRef.current) {
            clearTimeout(mouseLeaveTimeoutRef.current);
          }
          mouseLeaveTimeoutRef.current = setTimeout(() => {
            setHoveredIndex(null);
            setStickyIndex(null);
            mouseLeaveTimeoutRef.current = null;
          }, 150);
        }
      } else if (isOverLink && mouseLeaveTimeoutRef.current) {
        // Mouse is over a link - cancel any pending timeout
        clearTimeout(mouseLeaveTimeoutRef.current);
        mouseLeaveTimeoutRef.current = null;
      }
    };

    // Use capture phase to catch events even if they're handled elsewhere
    document.addEventListener('mousemove', handleMouseMove, true);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove, true);
      if (mouseLeaveTimeoutRef.current) {
        clearTimeout(mouseLeaveTimeoutRef.current);
      }
    };
  }, [hoveredIndex]);

  // Handle keyboard focus
  useEffect(() => {
    const links = linkRefs.current;
    const nav = navRef.current;
    
    const handleFocus = (index: number) => () => {
      setHoveredIndex(index);
      setStickyIndex(index);
    };
    
    const handleBlur = (e: FocusEvent) => {
      if (nav && e.relatedTarget && nav.contains(e.relatedTarget as Node)) {
        return; // Focus still within nav
      }
      setHoveredIndex(null);
      setStickyIndex(null);
    };
    
    links.forEach((link, index) => {
      if (link) {
        link.addEventListener('focus', handleFocus(index));
        link.addEventListener('blur', handleBlur);
      }
    });
    
    return () => {
      links.forEach((link, index) => {
        if (link) {
          link.removeEventListener('focus', handleFocus(index));
          link.removeEventListener('blur', handleBlur);
        }
      });
    };
  }, [menuData.items.length, menuOpen]);

  return (
    <>
      <button className={st.menuButton} aria-label='Menu' onClick={() => setMenuOpen(!menuOpen)}>
        <div className={`${menuOpen ? st['menuIcon--close'] : st.menuIcon}`}></div>
      </button>
      <nav 
        className={`${st.navigation} ${menuOpen ? st['navigation--open'] : ''}`}
        ref={navRef}
        onMouseLeave={() => {
          // Clear timeout when leaving nav entirely
          if (mouseLeaveTimeoutRef.current) {
            clearTimeout(mouseLeaveTimeoutRef.current);
            mouseLeaveTimeoutRef.current = null;
          }
          setStickyIndex(null);
        }}
      >
        <ul className={st.navList} ref={navListRef}>
          <span
            className={`${st.indicator} ${isVisible && indicatorPos ? st.indicatorVisible : ''}`}
            style={indicatorPos ? { left: `${indicatorPos.left}px`, width: `${indicatorPos.width}px` } : undefined}
          />
          {menuData.items.map((menuItem: any, index: number) => {
            const hasIndicator = targetIndex === index;
            // Disable active state if navigating to a different nav item, or if navigating away entirely (e.g., to homepage)
            const disableActive = (navigatingIndex !== null && navigatingIndex !== index) || 
                                  (pendingTargetIndex !== null && pendingTargetIndex !== index);
            
            return (
              <li 
                key={menuItem.label}
                onMouseEnter={() => {
                  // Clear any pending timeout
                  if (mouseLeaveTimeoutRef.current) {
                    clearTimeout(mouseLeaveTimeoutRef.current);
                    mouseLeaveTimeoutRef.current = null;
                  }
                  setHoveredIndex(index);
                  setStickyIndex(index);
                }}
                onMouseLeave={() => {
                  // Delay clearing hoveredIndex and stickyIndex to prevent immediate revert to active link
                  mouseLeaveTimeoutRef.current = setTimeout(() => {
                    setHoveredIndex(null);
                    setStickyIndex(null); // Clear stickyIndex so it falls back to activeIndex
                    mouseLeaveTimeoutRef.current = null;
                  }, 100);
                }}
              >
                <ActiveLink
                  href={`/${menuItem.link.slug}`}
                  activeClassName={st.activeLink}
                  className={`${hasIndicator ? st.indicatedLink : ''} ${navigatingIndex === index ? st.activatingLink : ''}`}
                  disableActive={disableActive}
                  ref={(el: HTMLAnchorElement | null) => {
                    linkRefs.current[index] = el;
                  }}
                  onClick={() => {
                    // Only set navigatingIndex if clicking a different link
                    // If clicking the active link, Next.js won't navigate, so clear it immediately
                    if (index === activeIndex) {
                      setNavigatingIndex(null);
                    } else {
                      setNavigatingIndex(index);
                    }
                  }}
                >
                  {menuItem.label}
                </ActiveLink>
              </li>
            );
          })}
        </ul>
        <a href="mailto:hello@murtada.nl" className={`${st.contactButtonMobile} ${menuOpen && !isInitialOpen ? st.contactButtonMobileDelayed : ''}`} ref={contactButtonRef}>
          <ShadowWrapper noBorder>
            <span className={st.contactButtonContent}>Contact me</span>
          </ShadowWrapper>
        </a>
      </nav>
      <a href="mailto:hello@murtada.nl" className={st.contactButton}>
        <ShadowWrapper noBorder>
          <span className={st.contactButtonContent}>Contact me</span>
        </ShadowWrapper>
      </a>
    </>
  );
};

export default Navigation;
