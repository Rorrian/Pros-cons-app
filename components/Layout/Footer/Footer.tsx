'use client'

import { m, MotionProps } from 'framer-motion'
import { BaseHTMLAttributes } from 'react'

import { ShareSaveSection } from '@/components/ShareSaveSection/ShareSaveSection'
import { defaultTransition } from '@/helpers/constants'

import { footerStyles } from './Footer.css'

type FooterProps = BaseHTMLAttributes<HTMLElement> & MotionProps

export const Footer = (props: FooterProps) => {
  return (
    <m.footer
      className={footerStyles.wrapper}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={defaultTransition}
      {...props}
    >
      <ShareSaveSection />
    </m.footer>
  )
}
