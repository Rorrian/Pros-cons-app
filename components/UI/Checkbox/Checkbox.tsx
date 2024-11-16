'use client'

import clsx from 'clsx'
import React, { ComponentPropsWithoutRef, useState } from 'react'

import { errorText } from '@/styles/shared.css'

import { checkboxStyles } from './Checkbox.css'
import { CheckboxIcon } from './CheckboxIcon'

export type CheckboxProps = {
  className?: string
  errorMessage?: string | null
  isValid?: boolean
  label: string
} & ComponentPropsWithoutRef<'input'>

// FIXME: рефакторинг: избавиться от state?

export const Checkbox = ({
  className,
  errorMessage,
  isValid = true,
  label,
  onChange,
  ...props
}: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState(false)

  const handleToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked)
    onChange?.(event)
  }

  return (
    <div className={clsx(checkboxStyles.wrapper, className)}>
      <label className={checkboxStyles.label}>
        <CheckboxIcon
          isChecked={isChecked}
          onClick={() => setIsChecked(!isChecked)}
        />

        {label}

        <input
          className={checkboxStyles.checkbox}
          type="checkbox"
          onChange={handleToggle}
          {...props}
        />
      </label>

      {!isValid && errorMessage && <b className={errorText}>{errorMessage}</b>}
    </div>
  )
}
