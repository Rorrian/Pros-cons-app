'use client'

import { PropsWithChildren } from 'react'

import { useThemeStore } from '@/store'
import { darkTheme, lightTheme } from '@/theme/theme.css'

export default function ThemeProvider({ children }: PropsWithChildren) {
  const isDarkMode = useThemeStore(state => state.isDarkMode)

  return <div className={isDarkMode ? darkTheme : lightTheme}>{children}</div>
}
