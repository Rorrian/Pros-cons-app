import { domAnimation, LazyMotion } from 'framer-motion'
import { PropsWithChildren } from 'react'

import QueryProvider from './QueryProvider/QueryProvider'
import ThemeProvider from './ThemeProvider/ThemeProvider'

export default function Providers({ children }: PropsWithChildren) {
  return (
    <QueryProvider>
      <ThemeProvider>
        <LazyMotion features={domAnimation}>{children}</LazyMotion>
      </ThemeProvider>
    </QueryProvider>
  )
}
