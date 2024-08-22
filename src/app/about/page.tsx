import React from 'react';
import st from '@/styles/page.module.scss';
import st2 from './about.module.scss';

import { createClient } from '@/prismicio';
import { PrismicRichText, PrismicText, SliceZone } from "@prismicio/react";
import { components } from "@/slices";
import Container from '@/components/Global/Container/Container';
import PrismicImageWithBlur from '@/components/Global/PrismicImageWithBlur/PrismicImageWithBlur';

export const metadata = {
  title: 'About - Murtada al Mousawy',
};

const AboutPage = async () => {
  const client = createClient();

  const page: any = await client.getSingle('about');

  return (
    <div className={st.pageContainer}>
      <Container classNames={st2.grid}>
        <h1 className={st2.title}>{page.data.title}</h1>
        <div className={st2.leftIntro}>
          <PrismicRichText field={page.data.left_intro} />
          <PrismicImageWithBlur priority field={page.data.left_image} />
        </div>
        <div className={st2.rightIntro}>
          <PrismicRichText field={page.data.right_intro} />
        </div>
      </Container>
      <SliceZone slices={page.data.slices} components={components} />
    </div>
  );
};

export default AboutPage;
