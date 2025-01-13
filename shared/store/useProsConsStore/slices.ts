import { nanoid } from 'nanoid'

import { mockProsConsData, mockProsConsLists } from '@/shared/mocks/example'

import {
  ListSlice,
  SharedSlice,
  SliceCreator,
  SortField,
  SortOrder,
  SortSlice,
} from './types'
import { Item, ItemType, List } from '../../types/item'

export const createListSlice: SliceCreator<keyof ListSlice> = (set, get) => {
  return {
    lists: {} as Record<string, List | undefined>,
    currentListId: '1',

    createList: (name?: string) => {
      const id = nanoid()
      const newList: List = {
        id,
        name: name || 'New list',
        items: [],
      }

      set(state => {
        state.lists[id] = newList
        state.currentListId = id
      })
    },
    selectList: (id: string) => {
      const { lists } = get()

      if (lists[id]) {
        set(state => {
          state.currentListId = id
        })
      }
    },
    updateList: (id: string, name: string) => {
      const { lists } = get()

      if (id && lists[id]) {
        set(state => {
          if (state.lists[id]) {
            state.lists[id] = { ...state.lists[id], name }
          }
        })
      }
    },
    deleteList: (id: string) => {
      const { lists, currentListId } = get()
      if (!currentListId) return

      if (lists[id]) {
        set(state => {
          delete state.lists[id]

          if (id === currentListId) {
            const remainingListIds = Object.keys(state.lists)
            state.currentListId =
              remainingListIds.length > 0
                ? remainingListIds[remainingListIds.length - 1]
                : '1'
          }
        })
      }
    },

    setExampleLists: () => {
      set(state => {
        state.lists = mockProsConsLists
      })
    },
    setExampleItemsToCurrentList: () => {
      const { currentListId } = get()
      if (!currentListId) return

      set(state => {
        const currentList = state.lists[currentListId]
        if (currentList) {
          currentList.items = mockProsConsData
        }
      })
    },
    setItemsToCurrentList: (newItems: Item[], type: ItemType) => {
      const { currentListId } = get()
      if (!currentListId) return

      set(state => {
        const currentList = state.lists[currentListId]
        if (currentList) {
          const prosItems = currentList.items.filter(
            item => item.type === ItemType.Pros,
          )
          const consItems = currentList.items.filter(
            item => item.type === ItemType.Cons,
          )
          const updatedItems =
            type === ItemType.Pros
              ? [...newItems, ...consItems]
              : [...prosItems, ...newItems]

          currentList.items = updatedItems
        }
      })
    },
    setAiItemsToCurrentList: (newItems: Item[], isReset: boolean = false) => {
      const { currentListId } = get()
      if (!currentListId) return

      set(state => {
        const currentList = state.lists[currentListId]
        if (currentList) {
          state.lists[currentListId]!.items = isReset
            ? [...newItems]
            : [...currentList.items, ...newItems]
        }
      })
    },

    addItemToCurrentList: (name: string, weight: number, type: ItemType) => {
      const { currentListId } = get()
      if (!currentListId) return

      const newItem: Item = {
        id: nanoid(),
        name,
        weight,
        type,
      }
      set(state => {
        if (state.lists[currentListId]) {
          state.lists[currentListId]?.items.push(newItem)
        }
      })
    },
    updateItemInCurrentList: (id: string, name: string, weight: number) => {
      const { currentListId } = get()
      if (!currentListId) return

      set(state => {
        const currentList = state.lists[currentListId]
        if (currentList) {
          const currentListItem = currentList?.items.find(
            item => item.id === id,
          )
          if (currentListItem) {
            currentListItem.name = name
            currentListItem.weight = weight
          }
        }
      })
    },
    removeItemFromCurrentList: (id: string) => {
      const { currentListId } = get()
      if (!currentListId) return

      set(state => {
        if (state.lists[currentListId]?.items.length) {
          state.lists[currentListId].items = state.lists[
            currentListId
          ]?.items.filter(item => item.id !== id)
        }
      })
    },
    removeAllItemsFromCurrentList: () => {
      const { currentListId } = get()
      if (!currentListId) return

      set(state => {
        if (state.lists[currentListId]) {
          state.lists[currentListId].items = []
        }
      })
    },
  }
}

export const createSortSlice: SliceCreator<keyof SortSlice> = (set, get) => {
  return {
    sortField: null,
    sortOrder: null,
    toggleSort: (field: SortField) => {
      const { currentListId, sortField, sortOrder } = get()
      if (!currentListId) return

      const newOrder: SortOrder | undefined =
        sortField === field && sortOrder === 'asc' ? 'desc' : 'asc'

      set(state => {
        const currentList = state.lists[currentListId]
        if (currentList?.items) {
          const sortedItems = currentList?.items.sort((a, b) => {
            if (field === SortField.Name) {
              return newOrder === 'asc'
                ? a.name.localeCompare(b.name)
                : b.name.localeCompare(a.name)
            } else {
              return newOrder === 'asc'
                ? a.weight - b.weight
                : b.weight - a.weight
            }
          })
          state.lists[currentListId]!.items = sortedItems
          state.sortField = field
          state.sortOrder = newOrder
        }
      })
    },
  }
}

export const createSharedSlice: SliceCreator<keyof SharedSlice> = (
  set,
  get,
) => {
  return {
    sharedItems: [],
    setSharedItems: (newItems: Item[]) => {
      set(state => {
        state.sharedItems = newItems
      })
    },
    saveSharedItems: () => {
      const { sharedItems } = get()

      const id = nanoid()
      const newList: List = {
        id,
        name: 'Shared list',
        items: sharedItems,
      }

      set(state => {
        state.lists[id] = newList
        state.currentListId = id
      })
    },
    sharedItemsError: '',
    setSharedItemsError: (error: string | null) => {
      set(state => {
        state.sharedItemsError = error
      })
    },
  }
}
