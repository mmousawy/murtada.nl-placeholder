import PrismicImageWithBlur from "@/components/Global/PrismicImageWithBlur/PrismicImageWithBlur";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { JSX } from "react";

/**
 * Props for `ArticleImage`.
 */
export type ArticleImageProps = SliceComponentProps<Content.ArticleImageSlice>;

/**
 * Component for "ArticleImage" Slices.
 */
const ArticleImage = ({ slice }: ArticleImageProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicImageWithBlur priority field={ slice.primary.image } width={ 672 } />
    </section>
  );
};

export default ArticleImage;
