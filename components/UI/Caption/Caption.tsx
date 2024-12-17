import clsx from 'clsx'

import { captionStyles } from './Caption.css'

interface CaptionProps {
  className?: string
  text: string
}

export const Caption = ({ className, text }: CaptionProps) => {
  return <p className={clsx(captionStyles.text, className)}>{text}</p>
}
