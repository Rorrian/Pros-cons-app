import { persist } from 'zustand/middleware'

import { createStore } from './createStore'

export interface SidebarStore {
  isCollapsed: boolean
  toggleSidebar: () => void
}

export const useSidebarStore = createStore<SidebarStore>(
  persist(
    (set, get) => ({
      isCollapsed: true,

      toggleSidebar: () => {
        const { isCollapsed } = get()

        set({
          isCollapsed: !isCollapsed,
        })
      },
    }),
    {
      name: 'Sidebar',
    },
  ),
  'Sidebar',
)
