import Link from 'next/link';
import st from './PhotoAlbum.module.scss';
import PrismicImageWithBlur from '@/components/Global/PrismicImageWithBlur/PrismicImageWithBlur';

import { createClient } from '@/prismicio';

const PhotoAlbum = async ({ photoAlbum, key }: { photoAlbum: any, key: number }) => {
  const client = createClient();

  const album: any = await client.getByID(photoAlbum.album.id);

  return (
    <Link className={st.album} href={ `/photography/${album.uid}` } key={ key }>
      <PrismicImageWithBlur loading="lazy" className={st.album__cover} width={384} field={album.data.cover_image} imgixParams={{ format: 'auto', fit: 'crop', q: '95' }} />
      <span className={st.title}>{ album.data.title } &mdash; { album.data.year }</span>
    </Link>
  );
};

export default PhotoAlbum;
