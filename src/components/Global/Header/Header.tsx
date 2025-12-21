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

  // Add style to header element when scrolled
  const [scrolled, setScrolled] = React.useState(false);
  // Menu open state
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    // Close menu on route change
    setMenuOpen(false);
  }, [pathname]);

  React.useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    const handleResize = () => {
      if (window.innerWidth > 576) {
        setMenuOpen(false);
      }
    }

    handleResize();
    handleScroll();

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const headerClassName = `${st.header} ${scrolled ? st['header--scrolled'] : ''}`;

  return (
    <header className={headerClassName}>
      <Container classNames={st.container} variant={'no-vertical-padding'}>
        <div className={st.logo}>
          <Logo />
        </div>
        <Navigation menuData={ menuData } menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </Container>
      <div className={`${st.header__background} ${menuOpen ? st['header__background--menu-open'] : ''}`}></div>
    </header>
  );
};

export default Header;
