'use client';

import React from 'react';
import ActiveLink from '@/components/Global/ActiveLink';

type NavigationProps = {
  menuData: any;
  menuOpen: boolean;
  setMenuOpen: (menuOpen: boolean) => void;
};

import st from './Navigation.module.scss';

const Navigation: React.FC<NavigationProps> = ({ menuData, menuOpen, setMenuOpen }) => {

  const switchMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <button className={st.menuButton} aria-label='Menu' onClick={switchMenuOpen}>
        <div className={`${menuOpen ? st['menuIcon--close'] : st.menuIcon}`}></div>
      </button>
      <nav className={`${st.navigation} ${menuOpen ? st['navigation--open'] : ''}`}>
        <ul className={st.navList}>
          { menuData.items.map((menuItem: any) => (
            <li key={menuItem.label}>
              <ActiveLink
                href={`/${menuItem.link.slug}`}
                activeClassName={st.activeLink}
              >
                {menuItem.label}
              </ActiveLink>
            </li>
          )) }
        </ul>
        <a href="mailto:info@murtada.nl" className={st.contactButtonMobile}>Contact me</a>
      </nav>
      <a href="mailto:info@murtada.nl" className={st.contactButton}>Contact me</a>
    </>
  );
};

export default Navigation;
