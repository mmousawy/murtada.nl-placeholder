import Link from 'next/link';
import st from './PhotoAlbum.module.scss';
import PrismicImageWithBlur from '@/components/Global/PrismicImageWithBlur/PrismicImageWithBlur';
import ShadowWrapper from '@/components/Global/ShadowWrapper/ShadowWrapper';

import { createClient } from '@/prismicio';

const PhotoAlbum = async ({ photoAlbum }: { photoAlbum: any }) => {
  const client = createClient();

  if (photoAlbum?.album?.id === undefined) {
    return null;
  }

  const album: any = await client.getByID(photoAlbum.album.id);

  return (
    <Link className={st.album} href={ `/photography/${album.uid}` }>
      <ShadowWrapper className={st.albumWrapper}>
        <span className={st.album__cover_wrapper}>
          <PrismicImageWithBlur
            loading="lazy"
            className={st.album__cover}
            width={384}
            field={album.data.cover_image}
            imgixParams={{ format: 'auto', fit: 'crop', q: '95' }}
          />
        </span>
      </ShadowWrapper>
      <span className={st.title}>{ album.data.title } &mdash; { album.data.year }</span>
    </Link>
  );
};

export default PhotoAlbum;
