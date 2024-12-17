import { nanoid } from 'nanoid'
import { persist } from 'zustand/middleware'

import { mockProsConsData, mockProsConsLists } from '@/mocks/example'
import { Item, ItemType, List } from '@/types/item'

import { createStore } from './createStore'

export enum SortField {
  Name = 'name',
  Weight = 'weight',
}

export interface PropsConsStore {
  lists: List[]
  currentListId: string | null

  // List Actions
  createList: () => void
  selectList: (id: string) => void
  updateList: (id: string, name: string) => void
  deleteList: (id: string) => void

  // List Setters
  setExampleLists: () => void
  setExampleItemsToCurrentList: () => void
  setItemsToCurrentList: (newItems: Item[], type: ItemType) => void
  setAiItemsToCurrentList: (newItems: Item[], isReset: boolean) => void

  // Item Actions
  addItemToCurrentList: (name: string, weight: number, type: ItemType) => void
  updateItemInCurrentList: (id: string, name: string, weight: number) => void
  removeItemFromCurrentList: (id: string) => void
  removeAllItemsFromCurrentList: () => void

  // Sort Actions
  sortField: SortField | null
  sortOrder: 'asc' | 'desc' | null
  toggleSort: (type: SortField) => void

  // Shared Actions
  sharedItems: Item[]
  setSharedItems: (newItems: Item[]) => void
  saveSharedItems: () => void
  sharedItemsError: string | null
  setSharedItemsError: (error: string | null) => void
}

export const useProsConsStore = createStore<PropsConsStore>(
  persist(
    (set, get) => ({
      lists: [],
      currentListId: '1',

      createList: () => {
        const { lists } = get()

        const id = nanoid()
        const newList: List = {
          id,
          name: `New list`,
          items: [],
        }

        set({
          lists: [...lists, newList],
          currentListId: id,
        })
      },
      selectList: (id: string) => {
        const { lists } = get()
        const isListExists = lists.some((list: List) => list.id === id)

        if (isListExists) {
          set({
            currentListId: id,
          })
        }
      },
      updateList: (id: string, name: string) => {
        const { lists } = get()

        set({
          lists: lists.map(list => (list.id === id ? { ...list, name } : list)),
        })
      },
      deleteList: (id: string) => {
        const { lists, currentListId } = get()

        const filteredLists = lists.filter(list => list.id !== id)
        const lastListId =
          filteredLists.length > 0
            ? filteredLists[filteredLists.length - 1].id
            : null

        set({
          lists: filteredLists,
          currentListId: id === currentListId ? lastListId : currentListId,
        })
      },

      setExampleLists: () => {
        set({
          lists: mockProsConsLists,
        })
      },
      setExampleItemsToCurrentList: () => {
        const { lists, currentListId } = get()

        const updatedLists = lists.map(list =>
          list.id === currentListId
            ? {
                ...list,
                items: mockProsConsData,
              }
            : list,
        )

        set({
          lists: updatedLists,
        })
      },
      setItemsToCurrentList: (newItems: Item[], type: ItemType) => {
        const { lists, currentListId } = get()
        const currentListItems = lists.find(
          list => list.id === currentListId,
        )?.items

        if (!currentListItems?.length) return null

        const prosItems = currentListItems.filter(
          item => item.type === ItemType.Pros,
        )
        const consItems = currentListItems.filter(
          item => item.type === ItemType.Cons,
        )
        const updatedItems =
          type === ItemType.Pros
            ? [...newItems, ...consItems]
            : [...prosItems, ...newItems]

        const updatedLists = lists.map(list =>
          list.id === currentListId
            ? {
                ...list,
                items: updatedItems,
              }
            : list,
        )

        set({
          lists: updatedLists,
        })
      },
      setAiItemsToCurrentList: (newItems: Item[], isReset: boolean = false) => {
        const { lists, currentListId } = get()
        const currentListItems = lists.find(
          list => list.id === currentListId,
        )?.items

        if (!currentListItems?.length) return null

        const updatedLists = lists.map(list =>
          list.id === currentListId
            ? {
                ...list,
                items: isReset
                  ? [...newItems]
                  : [...currentListItems, ...newItems],
              }
            : list,
        )

        set({
          lists: updatedLists,
        })
      },

      addItemToCurrentList: (name: string, weight: number, type: ItemType) => {
        const { lists, currentListId } = get()
        if (!currentListId) return

        const newItem: Item = {
          id: nanoid(),
          name,
          weight,
          type,
        }
        const updatedLists = lists.map(list =>
          list.id === currentListId
            ? { ...list, items: [...list.items, newItem] }
            : list,
        )
        console.log('updatedLists', updatedLists)

        set({ lists: updatedLists })
      },
      updateItemInCurrentList: (id: string, name: string, weight: number) => {
        const { lists, currentListId } = get()
        if (!currentListId) return

        const updatedLists = lists.map(list =>
          list.id === currentListId
            ? {
                ...list,
                items: list.items.map(item =>
                  item.id === id ? { ...item, name, weight } : item,
                ),
              }
            : list,
        )

        set({ lists: updatedLists })
      },
      removeItemFromCurrentList: (id: string) => {
        const { lists, currentListId } = get()
        if (!currentListId) return

        const updatedLists = lists.map(list =>
          list.id === currentListId
            ? { ...list, items: list.items.filter(item => item.id !== id) }
            : list,
        )

        set({ lists: updatedLists })
      },
      removeAllItemsFromCurrentList: () => {
        const { lists, currentListId } = get()
        if (!currentListId) return

        const updatedLists = lists.map(list =>
          list.id === currentListId ? { ...list, items: [] } : list,
        )

        set({ lists: updatedLists })
        // false,
        // FIXME: Обертка для setState, кот. автоматически добавляет указание actionName в девтулзах для дева
        // "removeAllItemsFromCurrentList"
        // ),
      },

      sortField: null,
      sortOrder: null,
      toggleSort: (field: SortField) => {
        const { lists, currentListId, sortField, sortOrder } = get()

        const newOrder =
          sortField === field && sortOrder === 'asc' ? 'desc' : 'asc'

        const updatedLists = lists.map(list =>
          list.id === currentListId
            ? {
                ...list,
                items: [...list.items].sort((a, b) => {
                  if (field === SortField.Name) {
                    return newOrder === 'asc'
                      ? a.name.localeCompare(b.name)
                      : b.name.localeCompare(a.name)
                  } else {
                    return newOrder === 'asc'
                      ? a.weight - b.weight
                      : b.weight - a.weight
                  }
                }),
              }
            : list,
        )

        set({
          lists: updatedLists,
          sortField: field,
          sortOrder: newOrder,
        })
      },

      sharedItems: [],
      setSharedItems: (newItems: Item[]) => {
        set({
          sharedItems: newItems,
        })
      },
      saveSharedItems: () => {
        const { lists, sharedItems } = get()
        const id = nanoid()
        const newList: List = {
          id,
          name: `New list ${id}`,
          items: sharedItems,
        }

        set({
          lists: [...lists, newList],
          sharedItems: [],
          currentListId: id,
        })
      },
      sharedItemsError: '',
      setSharedItemsError: (error: string | null) => {
        set({
          sharedItemsError: error,
        })
      },
    }),
    {
      name: 'PropsCons',
      // FIXME: Проверить как реализовать с помощью onRehydrateStorage(persist)
      // FIXME: https://www.youtube.com/watch?v=SYk6F7tWCa0&t=220s
      // onRehydrateStorage: state => {
      // 	if (state) {
      // 		if (typeof window !== undefined && state.items.length === 0) {
      // 			state.items = mockProsConsData
      // 		}
      // 	}
      // },
    },
  ),
  'PropsCons',
)
