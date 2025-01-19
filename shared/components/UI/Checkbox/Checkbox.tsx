'use client'

import clsx from 'clsx'
import React, { ComponentPropsWithoutRef, useEffect, useState } from 'react'

import { errorText } from '@/shared/styles/shared.css'
import { WithClassName } from '@/shared/types/common'

import { checkboxStyles } from './Checkbox.css'
import { CheckboxIcon } from './CheckboxIcon'

interface CheckboxProps
  extends WithClassName,
    ComponentPropsWithoutRef<'input'> {
  defaultChecked?: boolean
  errorMessage?: string | null
  isValid?: boolean
  label: string
}

export const Checkbox = ({
  className,
  defaultChecked,
  errorMessage,
  isValid = true,
  label,
  onChange,
  ...props
}: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState(false)

  useEffect(() => {
    if (defaultChecked !== undefined) {
      setIsChecked(defaultChecked)
    }
  }, [defaultChecked])

  const handleToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked)
    onChange?.(event)
  }

  return (
    <div className={clsx(checkboxStyles.wrapper, className)}>
      <label className={checkboxStyles.inner}>
        <CheckboxIcon
          isChecked={isChecked}
          onClick={() => setIsChecked(!isChecked)}
        />

        <span className={checkboxStyles.label}>{label}</span>

        <input
          className={checkboxStyles.checkbox}
          defaultChecked={defaultChecked}
          type="checkbox"
          onChange={handleToggle}
          {...props}
        />
      </label>

      {!isValid && errorMessage && <b className={errorText}>{errorMessage}</b>}
    </div>
  )
}
