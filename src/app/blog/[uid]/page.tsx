import React from 'react';
import { createClient } from '@/prismicio';
import { PrismicRichText, SliceZone } from "@prismicio/react";
const client = createClient();

import { components } from "@/slices";

import Container from '@/components/Global/Container/Container';
import PostNavigation from '@/components/Blog/PostNavigation/PostNavigation';
import { formatDate } from '@/utils/dateUtils';

import st from '@/styles/page.module.scss';
import st2 from './blog_post.module.scss';

type tParams = Promise<{ uid: string }>;

export async function generateMetadata(props: { params: tParams }) {
  const { uid } = await await props.params;
  const page: any = await client.getByUID('blog_post', uid);

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

const BlogPostPage = async (props: { params: tParams }) => {
  const { uid } = await props.params;
  const page: any = await client.getByUID('blog_post', uid);

  // Fetch all posts ordered by date to find previous/next
  const allPosts = await client.getByType('blog_post', {
    orderings: [{ field: 'my.blog_post.date', direction: 'desc' }],
    fetch: ['blog_post.title', 'blog_post.date', 'blog_post.cover_image', 'blog_post.color'],
  });

  // Find current post index and get previous/next
  const currentIndex = allPosts.results.findIndex((post: any) => post.uid === uid);
  const nextPost = currentIndex > 0 ? allPosts.results[currentIndex - 1] : null;
  const previousPost = currentIndex < allPosts.results.length - 1 ? allPosts.results[currentIndex + 1] : null;

  return (
    <>
      <div className={st.pageContainer}>
        <Container variant='article' type='article' classNames={st2.article}>
          <h1 className={st2.title}>{page.data.title}</h1>
          <time className={st2.date}>{formatDate(page.data.date)}</time>
          <div className={st2.description}>
            <PrismicRichText field={page.data.content} />
          </div>
          <SliceZone slices={page.data.slices} components={components} />
          
        </Container>
        <Container variant='post-navigation'>
          <PostNavigation
            previousPost={previousPost ? { uid: previousPost.uid, title: previousPost.data.title || 'Untitled', cover_image: previousPost.data.cover_image, color: previousPost.data.color || undefined } : null}
            nextPost={nextPost ? { uid: nextPost.uid, title: nextPost.data.title || 'Untitled', cover_image: nextPost.data.cover_image, color: nextPost.data.color || undefined } : null}
          />
        </Container>
      </div>
    </>
  );
};

export default BlogPostPage;
