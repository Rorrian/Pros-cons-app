import { createContext, RefObject, useContext } from 'react'

import { ProsConsList } from '@/shared/types/item'

const ERR_CONTEXT = 'Context must be used within Provider'

type ListPanelContextType = {
  // FIXME: type
  lists: (ProsConsList | undefined)[]
  currentListId: string
  createList: (name?: string) => void
  selectList: (id: string) => void
  updateList: (id: string, name: string) => void
  deleteList: (id: string) => void

  inputRef: RefObject<HTMLInputElement | null>
  newListName: string
  setNewListName: (newName: string) => void
  editingListId: string | null
  setEditingListId: (newId: string | null) => void
  startEditing: (listId: string, currentName: string) => void
  submitEditing: () => void
  cancelEditing: () => void
}

export const ListPanelContext = createContext<ListPanelContextType | undefined>(
  undefined,
)

export const useListPanelContext = () => {
  const context = useContext(ListPanelContext)

  if (!context) throw new Error(ERR_CONTEXT)

  return context
}
