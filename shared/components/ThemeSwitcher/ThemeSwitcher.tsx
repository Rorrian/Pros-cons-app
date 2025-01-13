'use client'

import clsx from 'clsx'

// import MoonIcon from '@/public/icons/moon.svg'
import SunIcon from '@/public/icons/sun.svg'
import { useThemeStore } from '@/shared/store'
import { Kind, Size } from '@/shared/types/button/enums'

import { themeSwitcherStyles } from './ThemeSwitcher.css'
import { Button } from '../UI'

interface ThemeSwitcherProps {
  className?: string
}

const MoonIcon = () => (
  <img
    src="data:image/png;base64,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"
    alt="do-not-disturb-2"
  />
)

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const [isDarkMode, toggleTheme] = useThemeStore(state => [
    state.isDarkMode,
    state.toggleTheme,
  ])

  const icon = isDarkMode ? <SunIcon /> : <MoonIcon />

  return (
    <Button
      aria-label="Toggle theme"
      className={clsx(themeSwitcherStyles.themeBtn, className)}
      icon={icon}
      iconClassName={themeSwitcherStyles.icon}
      kind={Kind.Transparent}
      size={Size.Small}
      onClick={toggleTheme}
    />
  )
}
