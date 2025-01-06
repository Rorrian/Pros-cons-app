'use client'

import i18next from 'i18next'
import { SyntheticEvent } from 'react'
import { useTranslation } from 'react-i18next'

import LanguageIcon from '@/public/icons/language.svg'
import { locales } from '@/shared/helpers/constants'

import { languageDropdownStyles } from './LanguageDropdown.css'
import { Dropdown } from '../UI'

interface LanguageDropdownProps {
  className?: string
}

// TODO: Сделать автоперевод данных в стейте

export const LanguageDropdown = ({ className }: LanguageDropdownProps) => {
  const { i18n } = useTranslation()

  return (
    <div className={className}>
      <Dropdown
        buttonClassName={languageDropdownStyles.toggleButton}
        icon={<LanguageIcon size={32} />}
        iconClassName={languageDropdownStyles.icon}
        options={locales}
        selectedOptionValue={i18next.resolvedLanguage}
        onSelect={(value: string | SyntheticEvent<HTMLDivElement, Event>) => {
          i18n.changeLanguage(value as string)
        }}
      />
    </div>
  )
}
