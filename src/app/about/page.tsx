import React from 'react';
import st from '@/styles/page.module.scss';
import st2 from './about.module.scss';

import { createClient } from '@/prismicio';
import { PrismicRichText, PrismicText, SliceZone } from "@prismicio/react";
import { components } from "@/slices";
import Container from '@/components/Global/Container/Container';
import { PrismicNextImage } from '@prismicio/next';

const AboutPage = async () => {
  const client = createClient();

  const page: any = await client.getSingle('about');

  const smallImgUrl = page.data.left_image?.url?.replace(/&w=(\d+)/gm, '&w=20');

  const base64str = await fetch(smallImgUrl).then(async (res) =>
    Buffer.from(await res.arrayBuffer()).toString('base64')
  );

  return (
    <div className={st.pageContainer}>
      <Container classNames={st2.grid}>
        <h1 className={st2.title}>{page.data.title}</h1>
        <div className={st2.leftIntro}>
          <PrismicRichText field={page.data.left_intro} />
          <PrismicNextImage field={page.data.left_image} placeholder='blur' blurDataURL={`data:image/png;base64,${base64str}`} />
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
