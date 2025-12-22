import { readFile } from 'fs/promises';
import { join } from 'path';
import StaticImageWithBlur from './StaticImageWithBlur';
import { ComponentProps } from 'react';

interface StaticImageWithBlurServerProps extends Omit<ComponentProps<typeof StaticImageWithBlur>, 'blurDataURL'> {
  src: string;
}

const StaticImageWithBlurServer: React.FC<StaticImageWithBlurServerProps> = async ({ src, ...props }) => {
  let blurDataURL = '';

  try {
    // For static images in public folder, read directly from filesystem
    if (src.startsWith('/')) {
      const imagePath = join(process.cwd(), 'public', src);
      const imageBuffer = await readFile(imagePath);
      
      // Create base64 data URL - Next.js will automatically blur and optimize this
      blurDataURL = `data:image/png;base64,${imageBuffer.toString('base64')}`;
    }
  } catch (error) {
    // If reading fails, continue without blur placeholder
    // This is fine - the image will still load, just without blur effect
  }

  return (
    <StaticImageWithBlur
      src={src}
      blurDataURL={blurDataURL}
      {...props}
    />
  );
};

export default StaticImageWithBlurServer;

