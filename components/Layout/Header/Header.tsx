'use client'

import clsx from 'clsx'

import { HeaderTitle } from '@/components/HeaderTitle/HeaderTitle'
import { LanguageDropdown } from '@/components/LanguageDropdown/LanguageDropdown'
import { ThemeSwitcher } from '@/components/ThemeSwitcher/ThemeSwitcher'
import { flexCentered, flexRow } from '@/styles/shared.css'

import '../../../config/i18n'

export const Header = () => {
  return (
    <header className={clsx(flexRow, flexCentered)}>
      <LanguageDropdown />
      <HeaderTitle />
      <ThemeSwitcher />
    </header>
  )
}
