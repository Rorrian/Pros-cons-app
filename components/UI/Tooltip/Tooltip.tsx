'use client'

import clsx from 'clsx'
import { Info } from 'lucide-react'
import React, { useState } from 'react'

import { tooltipStyles } from './Tooltip.css'

interface TooltipProps {
  children?: string | React.ReactNode
  className?: string
  text: string
  textClassName?: string
}

export const Tooltip = ({
  children,
  className,
  text,
  textClassName,
}: TooltipProps) => {
  const [IsVisible, setIsVisible] = useState(true)

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
      <Info
        // color={vars.themeVariables.content.primary}
        size={18}
      />

      {IsVisible && (
        <div className={tooltipStyles.inner}>
          {children}

          <p className={textClassName}>{text}</p>
        </div>
      )}
    </div>
  )
}
