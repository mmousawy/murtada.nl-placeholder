import '@/styles/globals.scss';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
import { PrismicPreview } from '@prismicio/next';
import { repositoryName } from '@/prismicio';
import { createClient } from "@/prismicio";

import Header from '@/components/Global/Header/Header';
import Footer from '@/components/Global/Footer/Footer';

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
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  )
}
