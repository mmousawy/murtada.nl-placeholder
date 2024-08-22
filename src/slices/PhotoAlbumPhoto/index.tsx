import PrismicImageWithBlur from "@/components/Global/PrismicImageWithBlur/PrismicImageWithBlur";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { createClient } from "@/prismicio";

/**
 * Props for `PhotoAlbumPhoto`.
 */
export type PhotoAlbumPhotoProps =
  SliceComponentProps<Content.PhotoAlbumPhotoSlice>;

/**
 * Component for "PhotoAlbumPhoto" Slices.
 */
const PhotoAlbumPhoto = ({ slice }: PhotoAlbumPhotoProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicImageWithBlur field={slice.image} />
    </section>
  );
};

export default PhotoAlbumPhoto;
