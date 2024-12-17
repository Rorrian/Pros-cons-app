'use client'

import { HeaderTitle } from '@/components/HeaderTitle/HeaderTitle'
import { LanguageDropdown } from '@/components/LanguageDropdown/LanguageDropdown'
import { ThemeSwitcher } from '@/components/ThemeSwitcher/ThemeSwitcher'

import { headerStyles } from './Header.css'

import '../../../config/i18n'

export const Header = () => {
  return (
    <header className={headerStyles.wrapper}>
      <LanguageDropdown className={headerStyles.dropdown} />
      <HeaderTitle />
      <ThemeSwitcher className={headerStyles.themeSwitcher} />
    </header>
  )
}
