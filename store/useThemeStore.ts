import { persist } from 'zustand/middleware'

import { createStore } from './createStore'

export interface ThemeStore {
  isDarkMode: boolean
  toggleTheme: () => void
}

export const useThemeStore = createStore<ThemeStore>(
  persist(
    (set, get) => ({
      isDarkMode: false,
      toggleTheme: () => {
        const { isDarkMode } = get()

        set({
          isDarkMode: !isDarkMode,
        })
      },
    }),
    {
      name: 'Theme',
    },
  ),
  'Theme',
)
