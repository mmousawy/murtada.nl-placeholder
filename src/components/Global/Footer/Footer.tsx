import { FC } from 'react';

import st from './Footer.module.scss';
import Container from '@/components/Global/Container/Container';

const Footer: FC = () => {
  return (
    <footer className={st.footer}>
      <Container>
        &copy; {new Date().getFullYear()} Murtada al Mousawy
      </Container>
    </footer>
  );
};

export default Footer;
