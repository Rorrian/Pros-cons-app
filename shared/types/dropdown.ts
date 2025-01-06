import { HTMLMotionProps } from 'framer-motion'
import { ComponentPropsWithoutRef, JSX, SyntheticEvent } from 'react'

type Option = {
  alt?: string
  icon?: string
  label: string
  value: string
}

export type DropdownProps = {
  buttonClassName?: string
  icon?: JSX.Element
  iconClassName?: string
  listClassName?: string
  options: Option[]
  optionClassName?: string
  selectedOptionValue?: string
  title?: string
  titleClassName?: string
  wrapperClassName?: string
  onSelect: (value: string | SyntheticEvent<HTMLDivElement, Event>) => void
} & ComponentPropsWithoutRef<'div'> &
  HTMLMotionProps<'div'>
