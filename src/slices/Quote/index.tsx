import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { JSX } from "react";

import st from "./Quote.module.scss";

/**
 * Props for `Quote`.
 */
export type QuoteProps = SliceComponentProps<Content.QuoteSlice>;

/**
 * Component for "Quote" Slices.
 */
const Quote = ({ slice }: QuoteProps): JSX.Element => {
  return (
    <figure
      className={st.quote}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <span className={st.quoteIcon} aria-hidden="true">“</span>
      <blockquote className={st.quoteText}>
        <PrismicRichText field={slice.primary.quote} />
      </blockquote>
      {(slice.primary.author || slice.primary.source) && (
        <figcaption className={st.attribution}>
          {slice.primary.author && (
            <span className={st.author}>{slice.primary.author}</span>
          )}
          {slice.primary.source && (
            <cite className={st.source}>{slice.primary.source}</cite>
          )}
        </figcaption>
      )}
    </figure>
  );
};

export default Quote;

