import React from 'react';
import { createClient } from '@/prismicio';
import { PrismicRichText } from "@prismicio/react";
const client = createClient();

import Container from '@/components/Global/Container/Container';

import st from '@/styles/page.module.scss';
import st2 from './blog_post.module.scss';
import PrismicImageWithBlur from '@/components/Global/PrismicImageWithBlur/PrismicImageWithBlur';

export async function generateMetadata({ params }: { params: { uid: string } }) {
  const page: any = await client.getByUID('blog_post', params.uid);

  return {
    title: `${ page.data.title } - Murtada al Mousawy`,
    openGraph: {
      images: [
        {
          url: page.data.cover_image.url.replace('?auto=format,compress', '?w=1200&h=1200&format=auto&q=75&fit=crop'),
          alt: page.data.cover_image.alt,
        },
      ],
    }
  };
}

const BlogPostPage = async ({ params }: { params: { uid: string } }) => {
  const page: any = await client.getByUID('blog_post', params.uid);

  const niceDate = new Date(page.data.date);
  const dateOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return (
    <>
      <div className={st.pageContainer}>
        <Container variant='article' classNames={st2.article}>
          <h1 className={st2.title}>{page.data.title}</h1>
          <time className={st2.date}>{niceDate.toLocaleDateString('en-US', dateOptions)}</time>
          <div className={st2.description}>
            <PrismicRichText field={page.data.content} />
          </div>
        </Container>
      </div>
    </>
  );
};

export default BlogPostPage;
