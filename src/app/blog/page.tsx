import React from 'react';
import st from '@/styles/page.module.scss';
import st2 from './blog.module.scss';

import { createClient } from '@/prismicio';
import { PrismicRichText, PrismicText, SliceZone } from "@prismicio/react";
import Link from 'next/link';

import Container from '@/components/Global/Container/Container';
import PrismicImageWithBlur from '@/components/Global/PrismicImageWithBlur/PrismicImageWithBlur';

export const metadata = {
  title: 'Blog - Murtada al Mousawy',
};

const BlogPage = async () => {
  const client = createClient();

  const page: any = await client.getSingle('blog');

  const blogPosts = await client.getByType('blog_post', {
    orderings: { field: "document.first_publication_date", direction: "desc" },
    fetch: ['blog_post.title', 'blog_post.date', 'blog_post.description', 'blog_post.cover_image'],
  });

  return (
    <div className={st.pageContainer}>
      <Container classNames={st2.grid}>
        <h1 className={st2.title}>{page.data.title}</h1>
        <div className={st2.description}>
          <PrismicRichText field={page.data.description} />
        </div>
        <div className={st2.blogPosts}>
          { blogPosts.results.map((post: any) => (
            <Link key={post.id} className={st2.blogPost}  href={`/blog/${post.uid}`}>
              <PrismicImageWithBlur loading="lazy" width={128} field={post.data.cover_image} imgixParams={{ format: 'auto', fit: 'crop', q: '95' }} />
              <div className={st2.blogPost__content}>
                <h2 className={st2.postTitle}>{ post.data.title }</h2>
                <time className={st2.date}>{post.data.date}</time>
              </div>
            </Link>
          )) }
        </div>
      </Container>
    </div>
  );
};

export default BlogPage;
