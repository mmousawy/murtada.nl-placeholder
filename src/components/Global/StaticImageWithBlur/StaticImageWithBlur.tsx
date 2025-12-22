import Image from 'next/image';
import { ComponentProps } from 'react';

interface StaticImageWithBlurProps extends Omit<ComponentProps<typeof Image>, 'placeholder' | 'blurDataURL'> {
  src: string;
  blurDataURL?: string;
}

const StaticImageWithBlur: React.FC<StaticImageWithBlurProps> = ({ src, blurDataURL, ...props }) => {
  return (
    <Image
      src={src}
      placeholder={blurDataURL ? 'blur' : 'empty'}
      blurDataURL={blurDataURL}
      {...props}
    />
  );
};

export default StaticImageWithBlur;

