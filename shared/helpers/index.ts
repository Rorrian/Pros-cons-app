import { FieldError } from 'react-hook-form'

export function getErrorMessage(error: FieldError | undefined): string | null {
  return error?.message ? String(error.message) : null
}
