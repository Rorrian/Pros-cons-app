import clsx from 'clsx'
import React, { ComponentPropsWithoutRef } from 'react'

import ClearIcon from '@/public/icons/close.svg'
import { MAX_LENGTH_CHARACTERS_IN_NAME } from '@/shared/helpers/constants'
import { errorText } from '@/shared/styles/shared.css'

import { inputBoxesStyles } from './InputBoxes.css'

interface TextAreaProps extends ComponentPropsWithoutRef<'textarea'> {
  errorMessage?: string | null
  isValid?: boolean
  onClearButtonClick?: () => void
}

export const TextArea = ({
  className,
  errorMessage,
  isValid = true,
  value,
  onChange,
  onClearButtonClick,
  ...props
}: TextAreaProps) => {
  return (
    <>
      <textarea
        className={clsx(inputBoxesStyles.textarea, className)}
        maxLength={MAX_LENGTH_CHARACTERS_IN_NAME}
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
        <span className={errorText}>{errorMessage}</span>
      )}
    </>
  )
}
