'use client'

import { m } from 'framer-motion'
import { forwardRef } from 'react'

import MoonIcon from '@/public/icons/moon.svg'
import SunIcon from '@/public/icons/sun.svg'
import { useThemeStore } from '@/store'
import { Kind, Size } from '@/types/button/enums'

import { Button } from '../UI/Button/Button'
import { headerStyles } from '../UI/Header/Header.css'

export const ToggleThemeBtn = forwardRef(
  (props, ref: React.Ref<HTMLButtonElement> | undefined) => {
    const [isDarkMode, toggleTheme] = useThemeStore(state => [
      state.isDarkMode,
      state.toggleTheme,
    ])

    return (
      <Button
        ref={ref}
        aria-label="Toggle theme"
        className={headerStyles.themeBtn}
        icon={isDarkMode ? <MoonIcon /> : <SunIcon />}
        iconClassName={headerStyles.icon}
        kind={Kind.Transparent}
        size={Size.Small}
        onClick={toggleTheme}
      />
    )
  },
)

ToggleThemeBtn.displayName = 'ToggleThemeBtn'

export const MToggleThemeBtn = m.create(ToggleThemeBtn)
