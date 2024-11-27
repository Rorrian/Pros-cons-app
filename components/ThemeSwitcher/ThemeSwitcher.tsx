'use client'

import MoonIcon from '@/public/icons/moon.svg'
import SunIcon from '@/public/icons/sun.svg'
import { useThemeStore } from '@/store'
import { Kind, Size } from '@/types/button/enums'

import { themeSwitcherStyles } from './ThemeSwitcher.css'
import { Button } from '../UI'

export const ThemeSwitcher = () => {
  const [isDarkMode, toggleTheme] = useThemeStore(state => [
    state.isDarkMode,
    state.toggleTheme,
  ])

  return (
    <Button
      aria-label="Toggle theme"
      className={themeSwitcherStyles.themeBtn}
      icon={isDarkMode ? <MoonIcon /> : <SunIcon />}
      iconClassName={themeSwitcherStyles.icon}
      kind={Kind.Transparent}
      size={Size.Small}
      onClick={toggleTheme}
    />
  )
}
