'use client';

import { usePathname } from 'next/navigation';
import Footer from './Footer';

export default function ConditionalFooter() {
  const pathname = usePathname();
  
  // Known valid routes
  const validRoutes = [
    '/',
    '/about',
    '/blog',
    '/photography',
  ];
  
  // Check if pathname matches a valid route pattern
  const isValidRoute = validRoutes.some(route => {
    if (route === '/') {
      return pathname === '/';
    }
    // Check exact match or if it's a child route (e.g., /blog matches /blog/123)
    return pathname === route || pathname.startsWith(`${route}/`);
  });
  
  // Hide footer on homepage or 404 pages (invalid routes)
  if (pathname === '/' || !isValidRoute) {
    return null;
  }
  
  return <Footer />;
}

