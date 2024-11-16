import clsx from 'clsx'
import React, { ComponentPropsWithoutRef } from 'react'

import { MAX_LENGTH_CHARACTERS_IN_NAME } from '@/helpers/constants'
import ClearIcon from '@/public/icons/close.svg'
import { errorText } from '@/styles/shared.css'

import { inputBoxesStyles } from './InputBoxes.css'

export type TextAreaProps = {
  errorMessage?: string | null
  isValid?: boolean
  onClearButtonClick?: () => void
} & ComponentPropsWithoutRef<'textarea'>

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
      <button
        type="button"
        className={inputBoxesStyles.clearButton}
        onClick={onClearButtonClick}
      >
        <ClearIcon />
      </button>

      {!isValid && errorMessage && <b className={errorText}>{errorMessage}</b>}
    </>
  )
}
