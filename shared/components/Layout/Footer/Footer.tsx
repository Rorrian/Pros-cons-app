'use client'

import { m, MotionProps } from 'framer-motion'
import { BaseHTMLAttributes } from 'react'

import { defaultTransition } from '@/shared/helpers/constants'

import { footerStyles } from './Footer.css'

type FooterProps = BaseHTMLAttributes<HTMLElement> & MotionProps

export const Footer = ({ children, ...props }: FooterProps) => {
  return (
    <m.footer
      className={footerStyles.wrapper}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={defaultTransition}
      {...props}
    >
      {children}
    </m.footer>
  )
}
