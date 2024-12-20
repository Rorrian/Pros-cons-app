import { HTMLMotionProps } from 'framer-motion'
import { ComponentPropsWithoutRef, JSX } from 'react'

import { Justify, Kind, Size } from './enums'

export type ButtonProps = {
  className?: string
  icon?: JSX.Element
  iconClassName?: string
  justify?: Justify
  kind?: Kind
  showHoverAnimation?: boolean
  size?: Size
  title?: string
  titleClassName?: string
} & ComponentPropsWithoutRef<'button'> &
  HTMLMotionProps<'button'> &
  React.RefAttributes<HTMLButtonElement>
