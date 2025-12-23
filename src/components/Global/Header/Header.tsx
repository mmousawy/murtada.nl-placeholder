'use client';

import React from 'react';
import { usePathname, useRouter } from 'next/navigation';

import Navigation from '@/components/Navigation/Navigation';
import Logo from '@/components/Global/Logo/Logo';

import st from './Header.module.scss';
import Link from 'next/link';
import Container from '@/components/Global/Container/Container';

type HeaderProps = {
  menuData: any;
};

const Header: React.FC<HeaderProps> = ({ menuData }: HeaderProps) => {
  const pathname = usePathname();

  // Scroll state
  const [scrolled, setScrolled] = React.useState(false);
  // Menu open state
  const [menuOpen, setMenuOpen] = React.useState(false);
  // Menu transition state: 'opening', 'closing', or null
  const [menuTransition, setMenuTransition] = React.useState<'opening' | 'closing' | null>(null);
  const prevMenuOpenRef = React.useRef(false);

  React.useEffect(() => {
    // Track menu state changes for opening/closing transitions
    if (menuOpen !== prevMenuOpenRef.current) {
      if (menuOpen) {
        setMenuTransition('opening');
      } else {
        setMenuTransition('closing');
      }
      prevMenuOpenRef.current = menuOpen;
      
      // Clear transition state after animation completes
      const timeout = setTimeout(() => {
        setMenuTransition(null);
      }, 400); // Match your transition duration
      
      return () => clearTimeout(timeout);
    }
  }, [menuOpen]);

  React.useEffect(() => {
    // Close menu on route change
    setMenuOpen(false);
  }, [pathname]);

  React.useEffect(() => {
    // Close menu after a short delay when page transition starts
    // This allows the activating link indicator animation to be visible
    const handleTransitionStart = () => {
      setTimeout(() => {
        setMenuOpen(false);
      }, 300); // Match fade-out duration
    };

    window.addEventListener('page-transition-start', handleTransitionStart);

    return () => {
      window.removeEventListener('page-transition-start', handleTransitionStart);
    };
  }, []);

  React.useEffect(() => {
    let scrollTicking = false;
    let resizeTimeout: NodeJS.Timeout | null = null;

    const handleScroll = () => {
      // Throttle scroll events using requestAnimationFrame
      if (!scrollTicking) {
        scrollTicking = true;
        requestAnimationFrame(() => {
          const isScrolled = window.scrollY > 0;
          setScrolled(isScrolled);
          scrollTicking = false;
        });
      }
    };

    const handleResize = () => {
      // Debounce resize events
      if (resizeTimeout) {
        clearTimeout(resizeTimeout);
      }
      resizeTimeout = setTimeout(() => {
        if (window.innerWidth > 576) {
          setMenuOpen(false);
        }
      }, 100);
    };

    // Initial checks
    setScrolled(window.scrollY > 0);
    if (window.innerWidth > 576) {
      setMenuOpen(false);
    }

    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      if (resizeTimeout) {
        clearTimeout(resizeTimeout);
      }
    };
  }, []);

  const headerClassName = `${st.header} ${scrolled ? st['header--scrolled'] : ''}`;

  return (
    <header className={headerClassName}>
      <Container classNames={`${st.container} ${pathname.startsWith('/blog/') ? st.containerSlim : ''}`} variant={'no-vertical-padding'}>
        <div className={st.logo}>
          <Logo />
        </div>
        <Navigation menuData={ menuData } menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </Container>
      <div className={`${st.header__background} ${scrolled ? st['header__background--scrolled'] : ''} ${menuOpen ? st['header__background--menu-open'] : ''} ${menuTransition ? st[`header__background--menu-${menuTransition}`] : ''}`}></div>
    </header>
  );
};

export default Header;
