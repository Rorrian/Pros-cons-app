'use client'

import { m, MotionProps } from 'framer-motion'
import { BaseHTMLAttributes } from 'react'

import { opacityAnimation } from '@/shared/helpers/constants'

import { footerStyles } from './Footer.css'

type FooterProps = BaseHTMLAttributes<HTMLElement> & MotionProps

export const Footer = ({ children, ...props }: FooterProps) => {
  return (
    <m.footer className={footerStyles.wrapper} {...opacityAnimation} {...props}>
      {children}
    </m.footer>
  )
}
