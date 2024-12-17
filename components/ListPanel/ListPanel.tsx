'use client'

import { AnimatePresence, m, MotionProps } from 'framer-motion'
import { BaseHTMLAttributes, useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { defaultTransition } from '@/helpers/constants'
import useIsMobile from '@/hooks/useIsMobile'
import CancelIcon from '@/public/icons/cancel.svg'
import DeleteIcon from '@/public/icons/delete.svg'
import EditIcon from '@/public/icons/edit.svg'
import PlusIcon from '@/public/icons/plus.svg'
import SuccessIcon from '@/public/icons/success.svg'
import { useProsConsStore, useSidebarStore } from '@/store'
import { Kind, Size } from '@/types/button/enums'

import { listStyles } from './ListPanel.css'
import { Button } from '../UI'

type ListPanelProps = BaseHTMLAttributes<HTMLElement> & MotionProps

const itemAnimation = {
  initial: { y: 20, height: 0, opacity: 0 },
  animate: { y: 0, height: 'auto', opacity: 1 },
  exit: { y: -20, opacity: 0, height: 0, transition: defaultTransition },
}

export const ListPanel = (props: ListPanelProps) => {
  const { t } = useTranslation()
  const { isMobile } = useIsMobile(999)
  const [lists, currentListId, createList, updateList, selectList, deleteList] =
    useProsConsStore(state => [
      state.lists,
      state.currentListId,
      state.createList,
      state.updateList,
      state.selectList,
      state.deleteList,
    ])
  const [isCollapsed, toggleSidebar] = useSidebarStore(state => [
    state.isCollapsed,
    state.toggleSidebar,
  ])

  const [newListName, setNewListName] = useState('')
  const [editingListId, setEditingListId] = useState<string | null>(null)
  const inputRef = useRef<HTMLInputElement | null>(null)

  const handleCreateList = () => {
    createList()
    if (!isCollapsed && isMobile) toggleSidebar()
  }

  const handleStartEditing = (listId: string, currentName: string) => {
    setEditingListId(listId)
    setNewListName(currentName)
  }
  const handleRenameList = () => {
    if (editingListId) {
      const trimmedName =
        newListName.trim() || t('main.sidebar.defaultListName')
      updateList(editingListId, trimmedName)
      setEditingListId(null)
    }
  }
  const handleCancelEditing = () => {
    setEditingListId(null)
    setNewListName('')
  }

  useEffect(() => {
    const handleClickOutsideInput = (event: MouseEvent) => {
      if (
        editingListId &&
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        handleCancelEditing()
      }
    }

    document.addEventListener('mousedown', handleClickOutsideInput)

    return () => {
      document.removeEventListener('mousedown', handleClickOutsideInput)
    }
  }, [editingListId])

  // TODO: Рефакторинг - упростить или выделить
  return (
    <m.div
      className={listStyles.wrapper}
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={defaultTransition}
      {...props}
    >
      <Button
        aria-label="Create new list"
        icon={<PlusIcon />}
        kind={Kind.Secondary}
        title={!isCollapsed ? 'Create new list' : ''}
        size={Size.Big}
        onClick={() => handleCreateList()}
      />

      <m.ul
        className={listStyles.list}
        animate={{ marginTop: isCollapsed ? 38 : 0 }}
        transition={defaultTransition}
        {...props}
      >
        <AnimatePresence initial={false}>
          {lists?.map(item => {
            const isSelected = currentListId === item.id
            const isEditing = editingListId === item.id

            return (
              <m.li
                key={item.id}
                className={listStyles.item({ isSelected, isEditing })}
                {...itemAnimation}
                {...(props as BaseHTMLAttributes<HTMLElement> & MotionProps)}
              >
                {isEditing ? (
                  <>
                    <input
                      ref={inputRef}
                      placeholder={t('main.sidebar.listNamePlaceholder')}
                      className={listStyles.listItem}
                      value={newListName}
                      onChange={e => setNewListName(e.target.value)}
                      onKeyDown={e => {
                        if (e.key === 'Enter') handleRenameList()
                        if (e.key === 'Escape') handleCancelEditing()
                      }}
                      autoFocus
                    />
                    {isSelected && (
                      <div className={listStyles.actionButtons({ isSelected })}>
                        <Button
                          className={listStyles.actionButton}
                          aria-label="Save new list's title"
                          icon={<SuccessIcon />}
                          kind={Kind.Transparent}
                          size={Size.Small}
                          onClick={handleRenameList}
                        />
                        <Button
                          className={listStyles.actionButton}
                          aria-label="Cancel editing"
                          icon={<CancelIcon />}
                          kind={Kind.Transparent}
                          size={Size.Small}
                          onClick={handleCancelEditing}
                        />
                      </div>
                    )}
                  </>
                ) : (
                  <>
                    <button
                      className={listStyles.listItem}
                      onClick={() => {
                        if (!isSelected) {
                          selectList(item.id)
                          if (!isCollapsed && isMobile) toggleSidebar()
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
                          onClick={() => handleStartEditing(item.id, item.name)}
                        />
                        {lists?.length > 1 && (
                          <Button
                            className={listStyles.actionButton}
                            aria-label="Delete list"
                            icon={<DeleteIcon />}
                            kind={Kind.Transparent}
                            size={Size.Small}
                            onClick={() => deleteList(item.id)}
                          />
                        )}
                      </div>
                    )}
                  </>
                )}
              </m.li>
            )
          })}
        </AnimatePresence>
      </m.ul>
    </m.div>
  )
}
