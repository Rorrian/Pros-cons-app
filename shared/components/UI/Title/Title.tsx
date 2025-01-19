'use client'

import clsx from 'clsx'
import React from 'react'

import { titleStyles } from './Title.css'

export type TitleHeadingType = 'h1' | 'h2' | 'h3' | 'h4'

interface TitleProps {
  children: string | React.ReactNode
  headingType?: TitleHeadingType
  titleClassName?: string
}

const levels: Record<TitleHeadingType, number> = {
  h1: 1,
  h2: 2,
  h3: 3,
  h4: 4,
}

export const Title = ({
  children,
  headingType = 'h3',
  titleClassName,
}: TitleProps) => {
  const TitleComponent = headingType
  const level = levels[headingType]

  return (
    <TitleComponent
      aria-level={level}
      className={clsx(titleStyles.title({ type: headingType }), titleClassName)}
    >
      {children}
    </TitleComponent>
  )
}
