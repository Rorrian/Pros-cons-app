'use client'

import clsx from 'clsx'
import { AnimatePresence } from 'framer-motion'
import i18next from 'i18next'
import localFont from 'next/font/local'
import { SyntheticEvent } from 'react'
import { useTranslation } from 'react-i18next'

import { AnimatedText, ThemeSwitcher } from '@/components'
import { locales } from '@/helpers/constants'
import LanguageIcon from '@/public/icons/language.svg'

import { headerStyles } from './Header.css'
import { Dropdown, Title } from '../../'

import '../../../../config/i18n'

const AlayaRoza = localFont({ src: '../../../../fonts/AlayaRozaDemo.woff2' })

export const Header = () => {
  const { t, i18n } = useTranslation()

  const textElements = t('main.title', { returnObjects: true }) as string[]

  return (
    <header className={headerStyles.wrapper}>
      <Dropdown
        buttonClassName={headerStyles.dropdownBtn}
        icon={<LanguageIcon />}
        iconClassName={headerStyles.icon}
        options={locales}
        selectedOptionValue={i18next.resolvedLanguage}
        wrapperClassName={headerStyles.dropdownWrapper}
        onSelect={(value: string | SyntheticEvent<HTMLDivElement, Event>) =>
          i18n.changeLanguage(value as string)
        }
      />

      {!!textElements.length && (
        <Title
          headingType="h1"
          titleClassName={clsx(AlayaRoza.className, headerStyles.title)}
        >
          <AnimatePresence mode="wait">
            <AnimatedText textElements={textElements} />
          </AnimatePresence>
        </Title>
      )}

      <ThemeSwitcher />
    </header>
  )
}
