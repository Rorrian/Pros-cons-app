import clsx from 'clsx'

import { WithClassName } from '@/shared/types'

import { errorStyles } from './Error.css'

interface ErrorProps extends WithClassName {
  text: string
}

export const Error = ({ className, text }: ErrorProps) => {
  return (
    <p className={clsx(errorStyles.text, className)} role="alert">
      {text}
    </p>
  )
}
