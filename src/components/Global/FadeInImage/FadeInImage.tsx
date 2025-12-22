'use client';

import Image from 'next/image';
import { ComponentProps, useState, useRef, useLayoutEffect } from 'react';
import st from './FadeInImage.module.scss';

interface FadeInImageProps extends ComponentProps<typeof Image> {
  fadeDuration?: number; // fade duration in ms, default 300
}

const FadeInImage: React.FC<FadeInImageProps> = ({ 
  fadeDuration = 300,
  className,
  onLoad,
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [skipAnimation, setSkipAnimation] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Check if image is already cached on mount (useLayoutEffect runs before paint)
  useLayoutEffect(() => {
    if (imgRef.current?.complete) {
      setSkipAnimation(true);
      setIsLoaded(true);
    }
  }, []);

  const handleLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    setIsLoaded(true);
    onLoad?.(e);
  };

  return (
    <Image
      {...props}
      ref={imgRef}
      className={`${className || ''} ${st.image} ${isLoaded ? st.loaded : ''} ${skipAnimation ? st.noAnimation : ''}`}
      style={{ 
        '--fade-duration': `${fadeDuration}ms`,
        ...props.style 
      } as React.CSSProperties}
      onLoad={handleLoad}
    />
  );
};

export default FadeInImage;

