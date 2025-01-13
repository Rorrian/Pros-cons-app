'use client'

import { m, MotionProps } from 'framer-motion'
import { BaseHTMLAttributes, Ref } from 'react'

import CancelIcon from '@/public/icons/cancel.svg'
import DeleteIcon from '@/public/icons/delete.svg'
import EditIcon from '@/public/icons/edit.svg'
import SuccessIcon from '@/public/icons/success.svg'
import { defaultTransition } from '@/shared/helpers/constants'
import { Kind, Size } from '@/shared/types/button/enums'

import { Button } from '../UI'
import { listStyles } from './ListPanel.css'

type ListItemProps = {
  item: { id: string; name: string }
  listState: {
    isSelected: boolean
    isEditing: boolean
    newListName: string
  }
  inputRef: Ref<HTMLInputElement> | undefined
  actions: {
    setNewListName: (newName: string) => void
    startEditing: (listId: string, currentName: string) => void
    submitEditing: () => void
    cancelEditing: () => void
    deleteList: (id: string) => void
    selectList: (id: string) => void
  }
} & BaseHTMLAttributes<HTMLElement> &
  MotionProps

export const animation = {
  initial: { y: 20, height: 0, opacity: 0 },
  animate: { y: 0, height: 'auto', opacity: 1 },
  exit: { y: -20, opacity: 0, height: 0 },
  transition: defaultTransition,
}

export const ListItem = ({
  item,
  listState: { isSelected, isEditing, newListName },
  inputRef,
  actions: {
    setNewListName,
    startEditing,
    submitEditing,
    cancelEditing,
    deleteList,
    selectList,
  },
  ...props
}: ListItemProps) => (
  <m.li
    key={item.id}
    className={listStyles.item({ isSelected, isEditing })}
    {...animation}
    {...props}
  >
    {isEditing ? (
      <>
        <input
          ref={inputRef}
          placeholder="Enter list name"
          className={listStyles.listItem}
          value={newListName}
          onBlur={submitEditing}
          onChange={e => setNewListName(e.target.value)}
          onKeyDown={e => {
            if (e.key === 'Enter') submitEditing()
            if (e.key === 'Escape') cancelEditing()
          }}
        />
        <div className={listStyles.actionButtons({ isSelected })}>
          <Button
            className={listStyles.actionButton}
            aria-label="Save new list's title"
            icon={<SuccessIcon />}
            kind={Kind.Transparent}
            size={Size.Small}
            onClick={submitEditing}
          />
          <Button
            className={listStyles.actionButton}
            aria-label="Cancel editing"
            icon={<CancelIcon />}
            kind={Kind.Transparent}
            size={Size.Small}
            onClick={cancelEditing}
          />
        </div>
      </>
    ) : (
      <>
        <button
          className={listStyles.listItem}
          onClick={() => {
            if (!isSelected) {
              selectList(item.id)
            }
          }}
        >
          {item.name}
        </button>

        {isSelected && (
          <div className={listStyles.actionButtons({ isSelected })}>
            <Button
              className={listStyles.actionButton}
              aria-label="Edit list's title"
              icon={<EditIcon />}
              kind={Kind.Transparent}
              size={Size.Small}
              onClick={() => startEditing(item.id, item.name)}
            />
            <Button
              className={listStyles.actionButton}
              aria-label="Delete list"
              icon={<DeleteIcon />}
              kind={Kind.Transparent}
              size={Size.Small}
              onClick={() => deleteList(item.id)}
            />
          </div>
        )}
      </>
    )}
  </m.li>
)
