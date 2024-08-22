import { PrismicNextImage } from '@prismicio/next';
import Image from 'next/image'

import st from './PrismicImageWithBlur.module.scss';

interface PrismicImageWithBlurProps {
  field: any;
  className?: string;
  width?: number;
  imgixParams?: Record<string, string>;
  loading?: 'eager' | 'lazy';
  priority?: boolean;
}

const PrismicImageWithBlur: React.FC<PrismicImageWithBlurProps> = async ({ field, ...props }) => {
  const smallImgUrl = field.url?.replace(/\?auto=format,compress/gm, '\?w=20&format=auto');
  console.log(smallImgUrl);

  const searchParams = new URLSearchParams(props.imgixParams);

  field.url = field.url?.replace(/\?.+/gm, '?' + searchParams.toString());

  let base64str = '';

  if (smallImgUrl) {
    base64str = await fetch(smallImgUrl).then(async (res) =>
      Buffer.from(await res.arrayBuffer()).toString('base64')
    );
  }

  return (
    <PrismicNextImage
      field={field}
      placeholder='blur'
      blurDataURL={`data:image/png;base64,${base64str}`}
      className={st.image}
      {...props}
    />
  );
};

export default PrismicImageWithBlur;
