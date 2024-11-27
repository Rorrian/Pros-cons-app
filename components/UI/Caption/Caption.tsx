'use client'

import clsx from 'clsx'
import { useTranslation } from 'react-i18next'

import { useProsConsStore } from '@/store'

import { captionStyles } from './Caption.css'

interface CaptionProps {
  className?: string
  text: string
}

export const Caption = ({ className, text }: CaptionProps) => {
  const { t } = useTranslation()
  const sharedItems = useProsConsStore(state => state.sharedItems)
  const hasSharedList = !!sharedItems?.length

  if (!hasSharedList) return null

  return <p className={clsx(captionStyles.text, className)}>{t(text)}</p>
}
