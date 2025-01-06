'use client'

import clsx from 'clsx'
import { PropsWithChildren } from 'react'

import { useThemeStore } from '@/shared/store'
import { overflowXHidden } from '@/shared/styles/shared.css'
import { darkTheme, lightTheme } from '@/shared/theme/theme.css'

export default function ThemeProvider({ children }: PropsWithChildren) {
  const isDarkMode = useThemeStore(state => state.isDarkMode)

  return (
    <div className={clsx(overflowXHidden, isDarkMode ? darkTheme : lightTheme)}>
      {children}
    </div>
  )
}
