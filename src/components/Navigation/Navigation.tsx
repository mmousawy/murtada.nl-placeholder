import ActiveLink from '@/components/Global/ActiveLink';

type NavigationProps = {
  menuData: any;
};

import st from './Navigation.module.scss';

const Navigation: React.FC<NavigationProps> = ({ menuData }) => {
  return (
    <nav>
      <ul className={st.navList}>
        { menuData.items.map((menuItem: any) => (
          <li key={menuItem.label}>
            <ActiveLink
              href={menuItem.link.slug}
              activeClassName={st.activeLink}
            >
              {menuItem.label}
            </ActiveLink>
          </li>
        )) }
      </ul>
    </nav>
  );
};

export default Navigation;
