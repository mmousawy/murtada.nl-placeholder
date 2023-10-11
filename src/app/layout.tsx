import '@/styles/globals.scss'
import type { Metadata } from 'next'
import Image from 'next/image';
import { Inter } from 'next/font/google'
import styles from '@/styles/page.module.scss'
import NoiseFilter from './NoiseFilter';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Murtada al Mousawy - Senior Web Developer',
  description: 'Portfolio of Murtada al Mousawy, Senior Web Developer in Rotterdam & The Hague',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Image
          className={styles.bg}
          src="/bg3.webp"
          alt="Background image"
          width={1920}
          height={1080}
        />
        <NoiseFilter />
      </body>
    </html>
  )
}
