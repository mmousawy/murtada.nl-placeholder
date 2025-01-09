import type { Metadata } from 'next';

import { Analytics } from "@vercel/analytics/react"

import { PrismicPreview } from '@prismicio/next';
import { repositoryName } from '@/prismicio';
import { createClient } from "@/prismicio";

import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

import Header from '@/components/Global/Header/Header';
import Footer from '@/components/Global/Footer/Footer';

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
      <body className={inter.className}>
        <Header menuData={ menuData.data } />
        {children}
        <Footer />
        {process.env.NODE_ENV === "production" ? null : (<PrismicPreview repositoryName={repositoryName} />)}
        <Analytics />
      </body>
    </html>
  )
}
