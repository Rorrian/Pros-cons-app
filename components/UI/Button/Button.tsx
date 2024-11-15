'use client'

import clsx from 'clsx'
import { m, MotionProps } from 'framer-motion'
import { forwardRef } from 'react'

import { ButtonProps } from '@/types/button'
import { Justify, Kind, Size } from '@/types/button/enums'

import { buttonStyles } from './Button.css'

export const Button = forwardRef<
  HTMLButtonElement & { className?: string },
  ButtonProps & MotionProps
>(
  (
    {
      children,
      className,
      disabled = false,
      icon,
      iconClassName,
      justify = Justify.Center,
      kind = Kind.Primary,
      title = '',
      titleClassName,
      size = Size.Big,
      showHoverAnimation = true,
      ...props
    }: ButtonProps,
    ref,
  ) => (
    <m.button
      ref={ref}
      // TODO: ошибка билда
      className={clsx(
        buttonStyles.button({
          size,
          kind,
          disabled,
          justify,
        }),
        className,
      )}
      disabled={disabled}
      {...props}
      whileTap={{
        scale: 0.95,
      }}
      whileHover={{
        scale: !disabled && showHoverAnimation ? 1.05 : undefined,
      }}
    >
      {icon && (
        <span className={clsx(buttonStyles.icon, iconClassName)}>{icon}</span>
      )}
      {title && (
        <span className={clsx(buttonStyles.title({ size }), titleClassName)}>
          {title}
        </span>
      )}
      {children}
    </m.button>
  ),
)

Button.displayName = 'Button'

export const MButton = m.create(Button)
