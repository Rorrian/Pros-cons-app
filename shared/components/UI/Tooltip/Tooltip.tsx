'use client'

import clsx from 'clsx'
import React, { useState } from 'react'

import InfoIcon from '@/public/icons/info.svg'

import { tooltipStyles } from './Tooltip.css'

export const enum Position {
  Top = 'top',
  Bottom = 'bottom',
}

interface TooltipProps {
  children?: string | React.ReactNode
  className?: string
  position?: Position
  text: string
  textClassName?: string
  withIcon?: boolean
}

export const Tooltip = ({
  children,
  className,
  position = Position.Bottom,
  text,
  textClassName,
  withIcon = true,
}: TooltipProps) => {
  const [IsVisible, setIsVisible] = useState(false)

  const handleMouseEnter = () => {
    setIsVisible(true)
  }

  const handleMouseLeave = () => {
    setIsVisible(false)
  }

  return (
    <div
      className={clsx(tooltipStyles.wrapper, className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {withIcon ? (
        <InfoIcon />
      ) : (
        <span className={tooltipStyles.questionMark}>?</span>
      )}

      {IsVisible && (
        <div className={tooltipStyles.inner({ position })}>
          {children}

          <p className={clsx(tooltipStyles.text, textClassName)}>{text}</p>
        </div>
      )}
    </div>
  )
}
