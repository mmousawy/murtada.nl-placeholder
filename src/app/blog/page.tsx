import React from 'react';
import st from '@/styles/page.module.scss';
import st2 from './blog.module.scss';

import { createClient } from '@/prismicio';
import { PrismicRichText, PrismicText, SliceZone } from "@prismicio/react";
import Container from '@/components/Global/Container/Container';
import Link from 'next/link';

export const metadata = {
  title: 'Blog - Murtada al Mousawy',
};

const BlogPage = async () => {
  const client = createClient();

  const page: any = await client.getSingle('blog');

  const blogPosts = await client.getByType('blog_post', {
    orderings: { field: "document.first_publication_date", direction: "desc" },
    fetch: ['blog_post.title', 'blog_post.date', 'blog_post.description'],
  });

  console.log(blogPosts);

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
              <h2 className={st2.postTitle}>{ post.data.title }</h2>
              <time className={st2.date}>{post.data.date}</time>
            </Link>
          )) }
        </div>
      </Container>
    </div>
  );
};

export default BlogPage;
