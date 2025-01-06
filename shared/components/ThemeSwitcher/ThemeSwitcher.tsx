'use client'

import clsx from 'clsx'

import MoonIcon from '@/public/icons/moon.svg'
import SunIcon from '@/public/icons/sun.svg'
import { useThemeStore } from '@/shared/store'
import { Kind, Size } from '@/shared/types/button/enums'

import { themeSwitcherStyles } from './ThemeSwitcher.css'
import { Button } from '../UI'

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const [isDarkMode, toggleTheme] = useThemeStore(state => [
    state.isDarkMode,
    state.toggleTheme,
  ])

  return (
    <Button
      aria-label="Toggle theme"
      className={clsx(themeSwitcherStyles.themeBtn, className)}
      icon={isDarkMode ? <MoonIcon /> : <SunIcon />}
      iconClassName={themeSwitcherStyles.icon}
      kind={Kind.Transparent}
      size={Size.Small}
      onClick={toggleTheme}
    />
  )
}
