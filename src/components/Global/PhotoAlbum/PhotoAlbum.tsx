import Link from 'next/link';
import st from './PhotoAlbum.module.scss';
import PrismicImageWithBlur from '../PrismicImageWithBlur/PrismicImageWithBlur';

import { createClient } from '@/prismicio';

const PhotoAlbum = async (photoAlbum: any) => {
  const client = createClient();

  const album: any = await client.getByID(photoAlbum.photoAlbum.album.id);

  return (
    <Link className={st.album} href={ `/photography/${album.uid}` }>
      <PrismicImageWithBlur className={st.album__cover} width={384} field={album.data.cover_image} imgixParams={{ format: 'auto', fit: 'crop' }} />
      <span className={st.title}>{ album.data.title } &mdash; { album.data.year }</span>
    </Link>
  );
};

export default PhotoAlbum;
