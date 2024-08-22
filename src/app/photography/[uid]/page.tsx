import React from 'react';
import { useRouter } from 'next/router';
import { createClient } from '@/prismicio';
import { PrismicRichText, SliceZone } from "@prismicio/react";
import { components } from "@/slices";

import Container from '@/components/Global/Container/Container';

import st from '@/styles/page.module.scss';
import st2 from './photo_album.module.scss';
import PrismicImageWithBlur from '@/components/Global/PrismicImageWithBlur/PrismicImageWithBlur';

const PhotographyPage = async ({ params }: { params: { uid: string } }) => {
  const client = createClient();

  const page: any = await client.getByUID('photo_album', params.uid);

  page.data.photos = page.data.photos.map((photo: any) => {
    photo.maxWidth = 1200;
    photo.orientation = 'landscape';

    // If image height is greater than width, set max width to 600
    if (photo.image.dimensions.height > photo.image.dimensions.width) {
      photo.maxWidth = 568;
      photo.orientation = 'portrait';
    }

    if (photo.style === 'Full width') {
      photo.maxWidth = 1792;
    }

    return photo;
  });

  return (
    <>
      <div className={st.pageContainer}>
        <Container classNames={st2.grid}>
          <h1 className={st2.title}>{page.data.title}</h1>
          <time className={st2.date}>{page.data.year}</time>
          <div className={st2.description}>
            <PrismicRichText field={page.data.description} />
          </div>
        </Container>
      </div>
      <div className={st2.photos}>
        { page.data.photos.map((photo: any) => (
          <React.Fragment key={photo.id}>
            <div className={`${ st2.photo } ${ st2[`photo--orientation-${photo.orientation}`] }`}>
              <PrismicImageWithBlur loading="lazy" field={photo.image} width={photo.maxWidth} imgixParams={{ format: 'auto', q: '75' }} />
            </div>
          </React.Fragment>
        )) }
      </div>
    </>
  );
};

export default PhotographyPage;
