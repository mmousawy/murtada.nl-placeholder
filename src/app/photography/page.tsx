import React from 'react';
import st from '@/styles/page.module.scss';
import st2 from './photography.module.scss';

import { createClient } from '@/prismicio';
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";
import Container from '@/components/Global/Container/Container';
import PhotoAlbum from '@/components/Global/PhotoAlbum/PhotoAlbum';

const PhotographyPage = async () => {
  const client = createClient();

  const page: any = await client.getSingle('photography');

  const photoAlbums = page.data.selected_photo_albums;

  return (
    <div className={st.pageContainer}>
      <Container classNames={st2.grid}>
        <h1 className={st2.title}>{page.data.title}</h1>
        <div className={st2.photoAlbums}>
          { photoAlbums.map((photoAlbum: any) => (
            <>
            <PhotoAlbum key={photoAlbum.id} photoAlbum={photoAlbum} />
            </>
          )) }
        </div>
      </Container>
      <SliceZone slices={page.data.slices} components={components} />
    </div>
  );
};

export default PhotographyPage;
