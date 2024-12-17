import i18next from 'i18next'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { PropsWithChildren, Suspense } from 'react'

import { Footer, Header, ListPanel, Sidebar } from '@/components'
import { Caption } from '@/components/UI'
import Providers from '@/providers/Providers'

import '../styles/index.scss'

import { homeStyles } from './Home.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pros-cons-app',
  description: 'App for keeping track of pros and cons',
  icons: {
    icon: '/favicon.ico',
  },
  other: {
    preloadImages: ['/background/bgDay.webp', '/background/bgNight.webp'],
  },
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang={i18next.resolvedLanguage}>
      <body className={inter.className}>
        <Suspense fallback={<div>Loading...</div>}>
          <Providers>
            <main className={homeStyles.main}>
              <Sidebar>
                <ListPanel />
                <Caption
                  className={homeStyles.caption}
                  text="Handcrafted by Rorrian ✨"
                />
              </Sidebar>

              <div className={homeStyles.wrapper}>
                <Header />

                {children}

                <Footer />
              </div>
            </main>
          </Providers>
        </Suspense>
      </body>
    </html>
  )
}
