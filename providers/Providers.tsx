import { domAnimation, LazyMotion } from 'framer-motion'

import QueryProvider from './QueryProvider/QueryProvider'
import ThemeProvider from './ThemeProvider/ThemeProvider'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryProvider>
      <ThemeProvider>
        <LazyMotion features={domAnimation}>{children}</LazyMotion>
      </ThemeProvider>
    </QueryProvider>
  )
}
