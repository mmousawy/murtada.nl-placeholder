import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

import Container from '@/components/Global/Container/Container';

import st from './Hero.module.scss';

export type HeroProps = SliceComponentProps<Content.HeroSlice>;

const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Container>
        <div className={st.container}>
          <h1 className={st.title}>{slice.primary.title}</h1>
          <PrismicRichText field={slice.primary.intro} />
        </div>
      </Container>
    </section>
  );
};

export default Hero;
