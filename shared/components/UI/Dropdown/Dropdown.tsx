'use client'

import clsx from 'clsx'
import { AnimatePresence, m, MotionProps } from 'framer-motion'
import { useState } from 'react'

import { ICON_SIZE, opacityAnimation } from '@/shared/helpers/constants'
import { Kind, Size } from '@/shared/types/button/enums'
import { DropdownProps } from '@/shared/types/dropdown'

import { dropdownStyles } from './Dropdown.css'
import { Button } from '../Button/Button'

const Icon = ({ src, alt }: { src: string; alt?: string }) => (
  <img
    src={src}
    alt={alt}
    style={{ width: ICON_SIZE, height: ICON_SIZE, maxWidth: 'unset' }}
  />
)

export const Dropdown = ({
  buttonClassName,
  icon,
  iconClassName,
  listClassName,
  options,
  optionClassName,
  selectedOptionValue,
  title,
  titleClassName,
  wrapperClassName,
  onSelect,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleButtonClick = () => {
    setIsOpen(!isOpen)
  }

  const handleOptionClick = (value: string) => {
    onSelect(value)
    setIsOpen(false)
  }

  if (!title && !icon) return null

  return (
    <div className={clsx(dropdownStyles.wrapper, wrapperClassName)}>
      <Button
        aria-label="Open drop-down list to select language"
        className={buttonClassName}
        icon={icon}
        iconClassName={iconClassName}
        kind={Kind.Transparent}
        size={Size.Small}
        title={title}
        titleClassName={titleClassName}
        onClick={handleButtonClick}
      />

      <AnimatePresence initial={false}>
        {isOpen && (
          <m.ul
            className={clsx(dropdownStyles.list, listClassName)}
            {...(opacityAnimation as React.HTMLAttributes<HTMLUListElement> &
              MotionProps)}
          >
            {options.map(option => {
              const isSelected = selectedOptionValue === option.value

              return (
                <m.li key={option.value}>
                  <Button
                    aria-label="Toggle language"
                    className={clsx(dropdownStyles.option, optionClassName)}
                    disabled={isSelected!}
                    icon={
                      option.icon ? (
                        <Icon src={option.icon} alt={option?.alt} />
                      ) : undefined
                    }
                    kind={Kind.Secondary}
                    size={Size.Small}
                    showHoverAnimation={false}
                    title={option.label}
                    type="submit"
                    onClick={() => handleOptionClick(option.value)}
                  />
                </m.li>
              )
            })}
          </m.ul>
        )}
      </AnimatePresence>
    </div>
  )
}
