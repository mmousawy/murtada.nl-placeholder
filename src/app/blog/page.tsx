import React from 'react';
import st from '@/styles/page.module.scss';
import st2 from './blog.module.scss';

import { createClient } from '@/prismicio';
import { PrismicRichText, PrismicText, SliceZone } from "@prismicio/react";
import Link from 'next/link';

import Container from '@/components/Global/Container/Container';
import PrismicImageWithBlur from '@/components/Global/PrismicImageWithBlur/PrismicImageWithBlur';
import ShadowWrapper from '@/components/Global/ShadowWrapper/ShadowWrapper';
import { formatDate } from '@/utils/dateUtils';

export const metadata = {
  title: 'Blog - Murtada al Mousawy',
};

const BlogPage = async () => {
  const client = createClient();

  const page: any = await client.getSingle('blog');

  const blogPosts = await client.getByType('blog_post', {
    orderings: { field: "document.first_publication_date", direction: "desc" },
    fetch: ['blog_post.title', 'blog_post.date', 'blog_post.description', 'blog_post.cover_image', 'blog_post.color'],
  });

  return (
    <div className={st.pageContainer}>
      <Container classNames={st2.grid}>
        <h1 className={st2.title}>{page.data.title}</h1>
        <div className={st2.description}>
          <PrismicRichText field={page.data.description} />
        </div>
        <div className={st2.blogPosts}>
          { blogPosts.results.map((post: any) => {
            const postColor = post.data.color || null;
            
            return (
              <Link 
                key={post.id} 
                className={st2.blogPost}  
                href={`/blog/${post.uid}`}
              >
                <ShadowWrapper className={st2.blogPostWrapper} shadowColor={postColor || undefined}>
                  <div className={st2.blogPost__inner}>
                    <div className={st2.blogPost__image}>
                      <PrismicImageWithBlur loading="lazy" width={90} height={90} field={post.data.cover_image} imgixParams={{ format: 'auto', fit: 'crop', q: '95', w: '90', h: '90' }} />
                    </div>
                    <div className={st2.blogPost__content}>
                      <h2 className={st2.postTitle}>{ post.data.title }</h2>
                      <time className={st2.date}>{formatDate(post.data.date)}</time>
                    </div>
                  </div>
                </ShadowWrapper>
              </Link>
            );
          }) }
        </div>
      </Container>
    </div>
  );
};

export default BlogPage;
