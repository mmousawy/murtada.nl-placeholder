import React from 'react';
import { createClient } from '@/prismicio';
import { PrismicRichText } from "@prismicio/react";
const client = createClient();

import Container from '@/components/Global/Container/Container';

import st from '@/styles/page.module.scss';
import st2 from './photo_album.module.scss';
import PrismicImageWithBlur from '@/components/Global/PrismicImageWithBlur/PrismicImageWithBlur';

export async function generateMetadata({ params }: { params: { uid: string } }) {
  const page: any = await client.getByUID('photo_album', params.uid);

  return {
    title: `${ page.data.title } (Photography album) - Murtada al Mousawy`,
    openGraph: {
      images: [
        {
          url: page.data.cover_image.url.replace('?auto=format,compress', '?w=1200&h=1200&format=auto&q=75&fit=crop'),
          alt: page.data.cover_image.alt,
        },
      ],
    }
  };
}

const PhotographyPage = async ({ params }: { params: { uid: string } }) => {
  const page: any = await client.getByUID('photo_album', params.uid);

  page.data.photos = page.data.photos.map((photo: any) => {
    photo.maxWidth = 1920;
    photo.orientation = 'landscape';

    // If image height is greater than width, set max width to 600
    if (photo.image.dimensions.height > photo.image.dimensions.width) {
      photo.maxWidth = 640;
      photo.orientation = 'portrait';
    }

    if (photo.style === 'Full width') {
      photo.maxWidth = 2560;
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
              <PrismicImageWithBlur loading="lazy" field={photo.image} width={photo.maxWidth} imgixParams={{ format: 'auto', q: '95' }} />
            </div>
          </React.Fragment>
        )) }
      </div>
    </>
  );
};

export default PhotographyPage;
