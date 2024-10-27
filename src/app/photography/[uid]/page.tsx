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
    photo.maxWidth = 1344;

    // Photo ratio
    const ratio = photo.image.dimensions.width / photo.image.dimensions.height;

    // Default orientation
    photo.orientation = 'landscape';

    // Check if photo is portrait
    if (ratio < 1) {
      photo.maxWidth = 640;
      photo.orientation = 'portrait';
    }

    if (photo.style === 'Full width') {
      photo.maxWidth = 2560;
    }

    // Calculate height based on aspect ratio and maxWidth
    photo.maxHeight = Math.round(photo.maxWidth / ratio);

    return photo;
  });

  let portraitImageCounter = 0;
  let renderBreak = false;

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
        { page.data.photos.map((photo: any, photoIndex: number) => {
          renderBreak = false;
          portraitImageCounter = photo.orientation === 'portrait' ? portraitImageCounter + 1 : 0;

          // If 3 portrait images in a row, add a break
          if (portraitImageCounter === 3) {
            renderBreak = true;
            portraitImageCounter = 0;
          }

          return (
            <React.Fragment key={photo.id}>
              { renderBreak && (
                <div className={st2.break}></div>
              ) }
              <div className={`${ st2.photo } ${ st2[`photo--orientation-${photo.orientation}`] }`}>
                <PrismicImageWithBlur loading="lazy" field={photo.image} width={photo.maxWidth}  imgixParams={{ format: 'auto', q: '95' }} />
              </div>
            </React.Fragment>
          )
        } ) }
      </div>
    </>
  );
};

export default PhotographyPage;
