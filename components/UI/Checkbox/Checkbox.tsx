'use client'

import clsx from 'clsx'
import { m } from 'framer-motion'
import React, { forwardRef, ComponentPropsWithoutRef } from 'react'

import { errorText } from '@/styles/shared.css'

import { checkboxStyles } from './Checkbox.css'

export type CheckboxProps = {
  className?: string
  errorMessage?: string | null
  isValid?: boolean
  label: string
} & ComponentPropsWithoutRef<'input'>

// TODO: Анимация чекбокса как в документации framer-motion

export const Checkbox = forwardRef(
  (
    {
      className,
      errorMessage,
      isValid = true,
      label,
      onChange,
      ...props
    }: CheckboxProps,
    ref: React.Ref<HTMLInputElement> | undefined,
  ) => {
    return (
      <div className={clsx(checkboxStyles.wrapper, className)}>
        <label className={checkboxStyles.label}>
          <input
            ref={ref}
            className={checkboxStyles.checkbox}
            type="checkbox"
            onChange={onChange}
            {...props}
          />
          {label}
        </label>

        {!isValid && errorMessage && (
          <b className={errorText}>{errorMessage}</b>
        )}
      </div>
    )
  },
)

Checkbox.displayName = 'Checkbox'

export const MCheckbox = m.create(Checkbox)
