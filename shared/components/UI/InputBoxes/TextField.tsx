import clsx from 'clsx'
import React, { ComponentPropsWithoutRef } from 'react'

import ClearIcon from '@/public/icons/close.svg'
import { errorText } from '@/shared/styles/shared.css'

import { inputBoxesStyles } from './InputBoxes.css'

interface TextFieldProps extends ComponentPropsWithoutRef<'input'> {
  errorClassName?: string
  errorMessage?: string | null
  isValid?: boolean
  onClearButtonClick?: () => void
}

export const TextField = ({
  className,
  errorClassName,
  errorMessage,
  isValid = true,
  type,
  value,
  onChange,
  onClearButtonClick,
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
      {!!value && (
        <button
          aria-label="Clear field"
          type="button"
          className={inputBoxesStyles.clearButton}
          onClick={onClearButtonClick}
        >
          <ClearIcon />
        </button>
      )}
      {!isValid && errorMessage && (
        <span className={clsx(errorText, errorClassName)}>{errorMessage}</span>
      )}
    </>
  )
}
