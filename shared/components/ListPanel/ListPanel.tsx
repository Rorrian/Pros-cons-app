'use client'

import { AnimatePresence, m, MotionProps } from 'framer-motion'
import { BaseHTMLAttributes, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

import PlusIcon from '@/public/icons/plus.svg'
import { defaultTransition } from '@/shared/helpers/constants'
import useIsMobile from '@/shared/hooks/useIsMobile'
import { useProsConsStore, useSidebarStore } from '@/shared/store'
import { Kind, Size } from '@/shared/types/button/enums'

import { Button } from '../UI'
import { ListItem } from './ListItem'
import { listStyles } from './ListPanel.css'

const wrapperAnimation = {
  initial: { height: 0, opacity: 0 },
  animate: { height: 'auto', opacity: 1 },
  exit: { height: 0, opacity: 0 },
  transition: defaultTransition,
}

type ListPanelProps = BaseHTMLAttributes<HTMLElement> & MotionProps

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

  const [newListName, setNewListName] = useState<string>('')
  const [editingListId, setEditingListId] = useState<string | null>(null)
  const inputRef = useRef<HTMLInputElement | null>(null)

  const listsData = Object.values(lists)

  const startEditing = (listId: string, currentName: string) => {
    setEditingListId(listId)
    setNewListName(currentName)
    setTimeout(() => inputRef.current?.focus(), 0)
  }

  const submitEditing = () => {
    if (editingListId) {
      const trimmedName =
        newListName.trim() || t('main.sidebar.defaultListName')
      updateList(editingListId, trimmedName)
      cancelEditing()
    }
  }

  const cancelEditing = () => {
    setEditingListId(null)
    setNewListName('')
  }

  return (
    <m.div className={listStyles.wrapper} {...wrapperAnimation} {...props}>
      <Button
        aria-label="Create new list"
        icon={<PlusIcon />}
        kind={Kind.Secondary}
        title={!isCollapsed ? 'Create new list' : ''}
        size={Size.Big}
        onClick={() => {
          createList()
          if (!isCollapsed && isMobile) toggleSidebar()
        }}
      />

      <m.ul
        className={listStyles.list}
        animate={{ marginTop: isCollapsed ? '38px' : '0px' }}
        transition={defaultTransition}
        {...props}
      >
        <AnimatePresence initial={false}>
          {listsData.map(
            item =>
              item && (
                <ListItem
                  key={item.id}
                  item={item}
                  listState={{
                    isSelected: currentListId === item.id,
                    isEditing: editingListId === item.id,
                    newListName,
                  }}
                  inputRef={inputRef}
                  actions={{
                    setNewListName: setNewListName,
                    startEditing: startEditing,
                    submitEditing: submitEditing,
                    cancelEditing: cancelEditing,
                    deleteList: deleteList,
                    selectList: selectList,
                  }}
                />
              ),
          )}
        </AnimatePresence>
      </m.ul>
    </m.div>
  )
}
