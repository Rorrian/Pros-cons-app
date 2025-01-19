'use client'

import { m } from 'framer-motion'

import { defaultTransition } from '@/shared/helpers/constants'
import { MotionElementProps } from '@/shared/types/common'

import { ListItemDisplay } from './ListItem/ListItemDisplay'
import { ListItemEditor } from './ListItem/ListItemEditor'
import { listStyles } from './ListPanel.css'

interface ListItemProps extends MotionElementProps {
  item: { id: string; name: string }
  isEditing: boolean
  isSelected: boolean
}

const animation = {
  initial: { y: 20, height: 0, opacity: 0 },
  animate: { y: 0, height: 'auto', opacity: 1 },
  exit: { y: -20, opacity: 0, height: 0 },
  transition: defaultTransition,
}

export const ListItem = ({
  item,
  isSelected,
  isEditing,
  ...props
}: ListItemProps) => {
  return (
    <m.li
      className={listStyles.item({ isSelected, isEditing })}
      {...animation}
      {...props}
    >
      {isEditing ? (
        <ListItemEditor isSelected={isSelected} />
      ) : (
        <ListItemDisplay
          itemId={item.id}
          itemName={item.name}
          isSelected={isSelected}
        />
      )}
    </m.li>
  )
}
