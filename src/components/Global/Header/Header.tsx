'use client';

import React from 'react';
import Image from 'next/image';

import Navigation from '@/components/Navigation/Navigation';

import st from './Header.module.scss';
import Link from 'next/link';
import Container from '@/components/Global/Container/Container';

type HeaderProps = {
  menuData: any;
};

const Header: React.FC<HeaderProps> = ({ menuData }: HeaderProps) => {
  // Add style to header element when scrolled
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const headerClassName = `${st.header} ${scrolled ? st['header--scrolled'] : ''}`;

  return (
    <header className={headerClassName}>
      <Container classNames={st.container} variant={'less-padding'}>
        <div className={st.logo}>
          <Link href="/" aria-label="Home">
            <Image src="/logo.svg" alt="Murtada.nl logo" width={48} height={48} />
          </Link>
        </div>
        <Navigation menuData={ menuData } />
        <a href="mailto:info@murtada.nl" className={st.contactButton}>Contact me</a>
      </Container>
    </header>
  );
};

export default Header;
