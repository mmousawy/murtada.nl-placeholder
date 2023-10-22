import React from 'react';
import Image from 'next/image';

import Navigation from '@/components/Navigation/Navigation';

import st from './Header.module.scss';
import Link from 'next/link';

type HeaderProps = {
  menuData: any;
};

const Header: React.FC<HeaderProps> = ({ menuData }: HeaderProps) => {
  return (
    <header className={st.header}>
      <div className={st.container}>
        <div className={st.logo}>
          <Link href="/" aria-label="Home">
            <Image src="/logo.svg" alt="Murtada.nl logo" width={48} height={48} />
          </Link>
        </div>
        <Navigation menuData={ menuData } />
        <a href="mailto:info@murtada.nl" className={st.contactButton}>Contact me</a>
      </div>
    </header>
  );
};

export default Header;
