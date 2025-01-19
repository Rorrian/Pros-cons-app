import clsx from 'clsx'

import { WithClassName } from '@/shared/types'

import { captionStyles } from './Caption.css'

interface CaptionProps extends WithClassName {
  text: string
}

export const Caption = ({ className, text }: CaptionProps) => {
  if (!text.trim()) return null

  return <p className={clsx(captionStyles.text, className)}>{text}</p>
}
