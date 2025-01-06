import { PropsWithChildren } from 'react'
import { useFormContext } from 'react-hook-form'

interface FormProps extends PropsWithChildren {
  className?: string
  id?: string
  onError?(): void
  onSubmit(): void
}

export const Form = ({
  id,
  className,
  children,
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
