import clsx from 'clsx'
import { AnimatePresence, m } from 'framer-motion'

import { opacityAnimation } from '@/shared/helpers/constants'
import { MotionElementProps } from '@/shared/types/common'

import { dropdownStyles } from './Dropdown.css'
import { DropdownIcon } from './DropdownIcon'
import { DropdownProps } from './types'
import { useDropdown } from './useDropdown'
import { Kind } from '../Button'
import { Button } from '../Button/Button'

const MotionUl = m.ul as React.FC<MotionElementProps>

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
  const { isOpen, toggle, close } = useDropdown()

  const handleOptionClick = (value: string) => {
    onSelect(value)
    close()
  }

  if (!title && !icon) return null

  return (
    <div className={clsx(dropdownStyles.wrapper, wrapperClassName)}>
      <Button
        aria-label="Open drop-down list"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className={buttonClassName}
        icon={icon}
        iconClassName={iconClassName}
        kind={Kind.Transparent}
        title={title}
        titleClassName={titleClassName}
        onClick={toggle}
      />

      <AnimatePresence initial={false}>
        {isOpen && (
          <MotionUl
            className={clsx(dropdownStyles.list, listClassName)}
            {...opacityAnimation}
          >
            {options.map(option => (
              <li
                key={option.value}
                className={clsx(dropdownStyles.option, optionClassName)}
              >
                <Button
                  disabled={selectedOptionValue === option.value}
                  icon={
                    option.icon ? (
                      <DropdownIcon src={option.icon} alt={option?.alt} />
                    ) : undefined
                  }
                  kind={Kind.Secondary}
                  showHoverAnimation={false}
                  title={option.label}
                  onClick={() => handleOptionClick(option.value)}
                />
              </li>
            ))}
          </MotionUl>
        )}
      </AnimatePresence>
    </div>
  )
}
