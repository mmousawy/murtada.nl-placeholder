// app/server-sitemap-index.xml/route.ts
import { getServerSideSitemapIndex } from 'next-sitemap'
import { createClient } from '@/prismicio';

export async function GET(request: Request) {
  const client = createClient();
  // Get all photography pages
  const photographyPages = await client.getByType('photo_album', {
    orderings: { field: "document.first_publication_date", direction: "desc" },
    fetch: ['photo_album.title', 'photo_album.year', 'photo_album.cover_image'],
  });

  // Get all blog pages
  const blogPosts = await client.getByType('blog_post', {
    orderings: { field: "document.first_publication_date", direction: "desc" },
    fetch: ['blog_post.title', 'blog_post.date', 'blog_post.description', 'blog_post.cover_image'],
  });

  return getServerSideSitemapIndex([
    ...photographyPages.results.map((post: any) => `https://murtada.nl/photography/${post.uid}`),
    ...blogPosts.results.map((post: any) => `https://murtada.nl/blog/${post.uid}`),
  ]);
}
