import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

import { createListSlice, createSharedSlice, createSortSlice } from './slices'
import { ProsConsStore } from './types'

export const useProsConsStore = create<ProsConsStore>()(
  devtools(
    persist(
      immer((...a) => ({
        ...createListSlice(...a),
        ...createSortSlice(...a),
        ...createSharedSlice(...a),
      })),
      { name: 'PropsCons' },
    ),
  ),
)
