import clsx from 'clsx'
import React, { ComponentPropsWithoutRef } from 'react'

import { errorText } from '@/shared/styles/shared.css'

import { inputBoxesStyles } from './InputBoxes.css'

export type TextFieldProps = {
  errorClassName?: string
  errorMessage?: string | null
  isValid?: boolean
} & ComponentPropsWithoutRef<'input'>

export const TextField = ({
  className,
  errorClassName,
  errorMessage,
  isValid = true,
  type,
  value,
  onChange,
  ...props
}: TextFieldProps) => {
  return (
    <>
      <input
        className={clsx(inputBoxesStyles.textfield, className)}
        type={type}
        spellCheck={false}
        value={value}
        {...props}
        onChange={onChange}
      />

      {!isValid && errorMessage && (
        <b className={clsx(errorText, errorClassName)}>{errorMessage}</b>
      )}
    </>
  )
}
