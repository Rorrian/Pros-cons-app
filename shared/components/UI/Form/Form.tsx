import { PropsWithChildren } from 'react'
import { useFormContext } from 'react-hook-form'

import { WithClassName } from '@/shared/types'

interface FormProps extends PropsWithChildren, WithClassName {
  id?: string
  onError?: () => void
  onSubmit: () => void
}

export const Form = ({
  children,
  className,
  id,
  onError,
  onSubmit,
}: FormProps) => {
  const { handleSubmit } = useFormContext()

  return (
    <form
      id={id}
      className={className}
      onSubmit={handleSubmit(onSubmit, onError)}
    >
      {children}
    </form>
  )
}
