import clsx from 'clsx'
import React, { ComponentPropsWithoutRef, useId } from 'react'

import { inputBoxesStyles } from './InputBoxes.css'

export type TextFieldProps = {
  errorMessage?: string | null
  isValid?: boolean
} & ComponentPropsWithoutRef<'input'>

export const TextField = ({
  className,
  errorMessage,
  isValid = true,
  type,
  value,
  onChange,
  ...props
}: TextFieldProps) => {
  const id = useId()

  return (
    <>
      <input
        className={clsx(inputBoxesStyles.textfield, className)}
        id={id}
        type={type}
        spellCheck={false}
        value={value}
        {...props}
        onChange={onChange}
      />

      {!isValid && errorMessage && (
        <b className={inputBoxesStyles.error}>{errorMessage}</b>
      )}
    </>
  )
}
