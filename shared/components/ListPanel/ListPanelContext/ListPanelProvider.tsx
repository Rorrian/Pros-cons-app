'use client'

import { PropsWithChildren, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { useProsConsStore } from '@/shared/store'

import { ListPanelContext } from './ListPanelContext'

export const ListPanelProvider = ({ children }: PropsWithChildren) => {
  const { t } = useTranslation()
  const [lists, currentListId, createList, updateList, selectList, deleteList] =
    useProsConsStore(state => [
      Object.values(state.lists),
      state.currentListId,
      state.createList,
      state.updateList,
      state.selectList,
      state.deleteList,
    ])

  const [newListName, setNewListName] = useState<string>('')
  const [editingListId, setEditingListId] = useState<string | null>(null)
  const inputRef = useRef<HTMLInputElement | null>(null)

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
    <ListPanelContext.Provider
      value={{
        lists,
        currentListId,
        createList,
        selectList,
        updateList,
        deleteList,
        inputRef,
        newListName,
        setNewListName,
        editingListId,
        setEditingListId,
        startEditing,
        submitEditing,
        cancelEditing,
      }}
    >
      {children}
    </ListPanelContext.Provider>
  )
}
