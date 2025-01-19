'use client'

import { m } from 'framer-motion'

import { opacityAnimation } from '@/shared/helpers/constants'
import { MotionElementProps } from '@/shared/types/common'

import { footerStyles } from './Footer.css'

export const Footer = ({ children, ...props }: MotionElementProps) => {
  return (
    <m.footer className={footerStyles.wrapper} {...opacityAnimation} {...props}>
      {children}
    </m.footer>
  )
}
