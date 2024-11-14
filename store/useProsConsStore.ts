import { nanoid } from 'nanoid'
import { persist } from 'zustand/middleware'

import { mockProsConsData } from '@/mocks/example'
import { Item, ItemType } from '@/types/item'

import { createStore } from './createStore'

export interface PropsConsStore {
  items: Item[]
  setItems: (newItems: Item[], type: ItemType) => void
  setAiItems: (newItems: Item[], isReset: boolean) => void
  setInitialItems: () => void
  createItem: (name: string, weight: number, type: ItemType) => void
  updateItem: (id: string, name: string, weight: number) => void
  removeItem: (id: string) => void
  removeAllItems: () => void
  sortField: 'name' | 'weight' | null
  sortOrder: 'asc' | 'desc' | null
  toggleSort: (type: 'name' | 'weight') => void
}

export const useProsConsStore = createStore<PropsConsStore>(
  persist(
    (set, get) => ({
      items: [],
      sortField: null,
      sortOrder: null,
      setItems: (newItems: Item[], type: ItemType) => {
        const { items } = get()

        const prosItems = items.filter(item => item.type === ItemType.Pros)
        const consItems = items.filter(item => item.type === ItemType.Cons)

        const updatedItems =
          type === ItemType.Pros
            ? [...newItems, ...consItems]
            : [...prosItems, ...newItems]

        set({
          items: updatedItems,
        })
      },
      setAiItems: (newItems: Item[], isReset: boolean = false) => {
        const { items } = get()

        if (isReset) {
          set({
            items: [...newItems],
          })
        } else {
          set({
            items: [...items, ...newItems],
          })
        }
      },
      setInitialItems: () => {
        set({ items: mockProsConsData })
      },
      createItem: (name: string, weight: number, type: ItemType) => {
        const { items } = get()
        const newItem: Item = {
          id: nanoid(),
          name,
          weight,
          type,
        }

        set({
          items: [...items, newItem],
        })
      },
      updateItem: (id: string, name: string, weight: number) => {
        const { items } = get()

        set({
          items: items.map(item =>
            item.id === id ? { ...item, name, weight } : item,
          ),
        })
      },
      removeItem: (id: string) => {
        const { items } = get()

        set({
          items: items.filter(item => item.id !== id),
        })
      },
      removeAllItems: () => {
        set(
          { items: [] },
          false,
          // TODO: Обертка для setState, кот. автоматически добавляет указание actionName в девтулзах для дева
          // "removeAllItems"
        )
      },
      toggleSort: (field: 'name' | 'weight') => {
        const { items, sortField, sortOrder } = get()

        const newOrder =
          sortField === field && sortOrder === 'asc' ? 'desc' : 'asc'

        const sortedItems = [...items].sort((a, b) => {
          if (field === 'name') {
            return newOrder === 'asc'
              ? a.name.localeCompare(b.name)
              : b.name.localeCompare(a.name)
          } else {
            return newOrder === 'asc'
              ? a.weight - b.weight
              : b.weight - a.weight
          }
        })

        set({
          items: sortedItems,
          sortField: field,
          sortOrder: newOrder,
        })
      },
    }),
    {
      name: 'PropsCons',
      // TODO: Проверить как реализовать с помощью onRehydrateStorage(persist)
      // TODO: https://www.youtube.com/watch?v=SYk6F7tWCa0&t=220s
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
