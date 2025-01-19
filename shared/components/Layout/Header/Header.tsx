'use client'

import Image from 'next/image'

import { LanguageDropdown } from '@/shared/components/LanguageDropdown/LanguageDropdown'
import { ThemeSwitcher } from '@/shared/components/ThemeSwitcher/ThemeSwitcher'
import useIsMobile from '@/shared/hooks/useIsMobile'

import { headerStyles } from './Header.css'

import '../../../config/i18n'

export const Header = () => {
  const { isMobile } = useIsMobile(999)
  const logoSize = isMobile ? 24 : 32

  return (
    <header className={headerStyles.wrapper}>
      <div className={headerStyles.titleWrapper}>
        <Image
          src="/scales.webp"
          alt="logo"
          width={logoSize}
          height={logoSize}
          priority
        />
        <p className={headerStyles.title}>DecisionWise</p>
      </div>

      <div className={headerStyles.buttons}>
        <LanguageDropdown />
        <ThemeSwitcher />
      </div>
    </header>
  )
}
