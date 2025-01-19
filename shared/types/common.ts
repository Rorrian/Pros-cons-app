import { MotionProps } from 'framer-motion'
import { BaseHTMLAttributes } from 'react'

export interface WithClassName {
  className?: string
}

export type MotionElementProps = MotionProps & BaseHTMLAttributes<HTMLElement>
