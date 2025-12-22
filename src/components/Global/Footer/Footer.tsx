'use client';

import { FC } from 'react';
import { usePathname } from 'next/navigation';

import st from './Footer.module.scss';
import Container from '@/components/Global/Container/Container';

const Footer: FC = () => {
  const pathname = usePathname();

  return (
    <footer className={st.footer}>
      <Container classNames={`${st.container}`} variant={pathname.includes('/blog/') ? 'slim' : pathname.includes('/photography/') ? 'centered' : undefined}>
        <span>&copy; {new Date().getFullYear()} Murtada al Mousawy</span>
      </Container>
    </footer>
  );
};

export default Footer;
