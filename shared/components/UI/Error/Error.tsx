import clsx from 'clsx'

import { errorStyles } from './Error.css'

interface ErrorProps {
  className?: string
  text: string
}

export const Error = ({ className, text }: ErrorProps) => {
  return <p className={clsx(errorStyles.text, className)}>{text}</p>
}
