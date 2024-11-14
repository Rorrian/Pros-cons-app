'use client'

import clsx from 'clsx'
import { AnimatePresence } from 'framer-motion'
import i18next from 'i18next'
import localFont from 'next/font/local'
import { useTranslation } from 'react-i18next'

import { AnimatedText } from '@/components/AnimatedText/AnimatedText'
import { ToggleThemeBtn } from '@/components/ToggleThemeBtn/ToggleThemeBtn'
import { MTitle } from '@/components/UI/Title/Title'
import LanguageIcon from '@/public/icons/language.svg'

import { headerStyles } from './Header.css'
import { locales } from '../../../helpers/constants'
import { Dropdown } from '../Dropdown/Dropdown'

import '../../../config/i18n'

const AlayaRoza = localFont({ src: '../../../fonts/AlayaRozaDemo.woff2' })

export const Header = () => {
  const { t, i18n } = useTranslation()

  const textElements = t('main.title', { returnObjects: true }) as string[]

  return (
    <header className={headerStyles.header}>
      <Dropdown
        buttonClassName={headerStyles.dropdownBtn}
        icon={<LanguageIcon />}
        iconClassName={headerStyles.icon}
        options={locales}
        selectedOptionValue={i18next.resolvedLanguage}
        wrapperClassName={headerStyles.dropdownWrapper}
        onSelect={i18n.changeLanguage}
      />

      {!!textElements.length && (
        <MTitle
          headingType="h1"
          titleClassName={clsx(AlayaRoza.className, headerStyles.title)}
        >
          <AnimatePresence mode="wait">
            <AnimatedText textElements={textElements} />
          </AnimatePresence>
        </MTitle>
      )}

      <ToggleThemeBtn />
    </header>
  )
}
