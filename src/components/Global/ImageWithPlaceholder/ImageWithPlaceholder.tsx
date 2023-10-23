import { PrismicNextImage } from '@prismicio/next';

interface ImageWithPlaceholderProps {
  imgData: any;
}

const ImageWithPlaceholder: React.FC<ImageWithPlaceholderProps> = async ({ imgData }) => {
  const imgUrl = `${imgData.url}&blur=200`;
  const base64 = '';

  return (
    <div className="image-with-placeholder">
      <PrismicNextImage loading='lazy' field={imgData} placeholder='blur' blurDataURL={base64} />
    </div>
  );
};

export default ImageWithPlaceholder;
