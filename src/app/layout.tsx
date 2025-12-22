import type { Metadata } from 'next';

import { Analytics } from "@vercel/analytics/react"

import { PrismicPreview } from '@prismicio/next';
import { repositoryName } from '@/prismicio';
import { createClient } from "@/prismicio";

import { Outfit, Zilla_Slab } from 'next/font/google';
const outfit = Outfit({ subsets: ['latin'] });
const zillaSlab = Zilla_Slab({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-zilla-slab',
});

import Header from '@/components/Global/Header/Header';
import ConditionalFooter from '@/components/Global/Footer/ConditionalFooter';
import PageLoader from '@/components/Global/PageLoader/PageLoader';
import PageTransition from '@/components/Global/PageTransition/PageTransition';

import '@/styles/globals.scss';

export const metadata: Metadata = {
  title: 'Murtada al Mousawy - Senior Web Developer',
  description: 'Portfolio of Murtada al Mousawy, Senior Web Developer in Rotterdam & The Hague',
  metadataBase: new URL('https://murtada.nl'),
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const client = createClient();

  const menuData = await client.getSingle("main_navigation");

  return (
    <html lang="en">
      <body className={`${outfit.className} ${zillaSlab.variable}`}>
        <PageLoader />
        <Header menuData={ menuData.data } />
        <PageTransition>{children}</PageTransition>
        <ConditionalFooter />
        {process.env.NODE_ENV === "production" ? null : (<PrismicPreview repositoryName={repositoryName} />)}
        <Analytics />
      </body>
    </html>
  )
}
