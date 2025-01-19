import { StateCreator, StoreMutatorIdentifier } from 'zustand'

import { ProsConsItem, ProsConsType, ProsConsList } from '@/shared/types/item'

export enum SortField {
  Name = 'name',
  Weight = 'weight',
}

export enum SortOrder {
  ASC = 'asc',
  DESC = 'desc',
}

export interface ListSlice {
  lists: Record<string, ProsConsList | undefined>
  currentListId: string

  createList: (name?: string) => void
  selectList: (id: string) => void
  updateList: (id: string, name: string) => void
  deleteList: (id: string) => void

  setExampleLists: () => void
  setExampleItemsToCurrentList: () => void
  setItemsToCurrentList: (newItems: ProsConsItem[], type: ProsConsType) => void
  setAiItemsToCurrentList: (newItems: ProsConsItem[], isReset: boolean) => void

  addItemToCurrentList: (
    name: string,
    weight: number,
    type: ProsConsType,
  ) => void
  updateItemInCurrentList: (id: string, name: string, weight: number) => void
  removeItemFromCurrentList: (id: string) => void
  removeAllItemsFromCurrentList: () => void
}

export interface SortSlice {
  sortField: SortField | null
  sortOrder: SortOrder | null
  toggleSort: (field: SortField) => void
}

export interface SharedSlice {
  sharedItems: ProsConsItem[]
  setSharedItems: (newItems: ProsConsItem[]) => void
  saveSharedItems: () => void
  sharedItemsError: string | null
  setSharedItemsError: (error: string | null) => void
}

export type ProsConsStore = ListSlice & SortSlice & SharedSlice

export type ImmerStateCreator<
  T,
  Mps extends [StoreMutatorIdentifier, unknown][] = [],
  Mcs extends [StoreMutatorIdentifier, unknown][] = [],
> = StateCreator<T, [...Mps, ['zustand/immer', never]], Mcs>

export type MyAppStateCreator = ImmerStateCreator<ProsConsStore>

export type SliceCreator<TSlice extends keyof ProsConsStore> = (
  ...params: Parameters<MyAppStateCreator>
) => Pick<ReturnType<MyAppStateCreator>, TSlice>
