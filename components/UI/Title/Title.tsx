'use client'

import clsx from 'clsx'
import { m } from 'framer-motion'
import React, { forwardRef } from 'react'

import { titleStyles } from './Title.css'

export type TitleHeadingType = 'h1' | 'h2' | 'h3' | 'h4'

interface TitleProps {
  children: string | React.ReactNode
  headingType?: TitleHeadingType
  style?: React.CSSProperties
  titleClassName?: string
}

export const Title = forwardRef(
  (
    { children, headingType = 'h3', titleClassName, ...props }: TitleProps,
    ref: React.Ref<HTMLHeadingElement> | undefined,
  ) => {
    const TitleComponent = headingType

    return (
      <TitleComponent
        ref={ref}
        className={clsx(
          titleStyles.title({ type: headingType }),
          titleClassName,
        )}
        {...props}
      >
        {children}
      </TitleComponent>
    )
  },
)

Title.displayName = 'Title'

export const MTitle = m.create(Title)
