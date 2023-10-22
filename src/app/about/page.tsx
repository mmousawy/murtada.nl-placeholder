import React from 'react';
import st from '@/styles/page.module.scss';
import { createClient } from '@/prismicio';
import { PrismicText, SliceZone } from "@prismicio/react";
import { components } from "@/slices";

const AboutPage = async () => {
  const client = createClient();

  const page: any = await client.getSingle('about');

  return (
    <div className={st.pageContainer}>
      <SliceZone slices={page.data.slices} components={components} />
    </div>
  );
};

export default AboutPage;
