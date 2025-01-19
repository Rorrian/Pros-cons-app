'use client'

import clsx from 'clsx'
import React, { useCallback, useState } from 'react'

import InfoIcon from '@/public/icons/info.svg'
import { WithClassName } from '@/shared/types'

import { tooltipStyles } from './Tooltip.css'

export const enum Position {
  Top = 'top',
  Bottom = 'bottom',
}

interface TooltipProps extends WithClassName {
  position?: Position
  text: string
  textClassName?: string
  withIcon?: boolean
}

export const Tooltip = ({
  className,
  position = Position.Bottom,
  text,
  textClassName,
  withIcon = true,
}: TooltipProps) => {
  const [isVisible, setIsVisible] = useState(false)

  const handleMouseEnter = useCallback(() => setIsVisible(true), [])
  const handleMouseLeave = useCallback(() => setIsVisible(false), [])

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

      {isVisible && (
        <div className={tooltipStyles.inner({ position })}>
          <p className={clsx(tooltipStyles.text, textClassName)}>{text}</p>
        </div>
      )}
    </div>
  )
}
