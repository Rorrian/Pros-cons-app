'use client'

import i18next from 'i18next'
import { SyntheticEvent } from 'react'
import { useTranslation } from 'react-i18next'

import { locales } from '@/helpers/constants'
import LanguageIcon from '@/public/icons/language.svg'

import { languageDropdownStyles } from './LanguageDropdown.css'
import { Dropdown } from '../UI'

export const LanguageDropdown = () => {
  const { i18n } = useTranslation()

  return (
    <Dropdown
      buttonClassName={languageDropdownStyles.dropdownBtn}
      icon={<LanguageIcon />}
      iconClassName={languageDropdownStyles.icon}
      options={locales}
      selectedOptionValue={i18next.resolvedLanguage}
      wrapperClassName={languageDropdownStyles.dropdownWrapper}
      onSelect={(value: string | SyntheticEvent<HTMLDivElement, Event>) =>
        i18n.changeLanguage(value as string)
      }
    />
  )
}
