'use client'

import clsx from 'clsx'
import { AnimatePresence } from 'framer-motion'
import localFont from 'next/font/local'
import { useTranslation } from 'react-i18next'

import { AnimatedText } from '@/shared/components'

import { headerTitleStyles } from './HeaderTitle.css'
import { Title } from '../UI'

const AlayaRoza = localFont({ src: '../../fonts/AlayaRozaDemo.woff2' })

export const HeaderTitle = () => {
  const { t } = useTranslation()

  const textElements = t('main.title', { returnObjects: true }) as string[]

  if (!textElements.length) return null

  return (
    <Title
      headingType="h1"
      titleClassName={clsx(AlayaRoza.className, headerTitleStyles.title)}
    >
      <AnimatePresence mode="wait">
        <AnimatedText textElements={textElements} />
      </AnimatePresence>
    </Title>
  )
}
