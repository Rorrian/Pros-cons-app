import { persist } from "zustand/middleware"

import { createStore } from "./createStore"

export interface ThemeStore {
	isDarkMode: boolean
	toggleTheme: () => void
}

export const useThemeStore = createStore<ThemeStore>(
	persist(
		(set, get) => ({
			// TODO: Добавить прелоадер для корректного первоначального отображения темы:
			// ФР: по умолчанию светлая тема => сохраненная тема
			// ОР: прелоадер => сохраненная тема
			isDarkMode: false,
			toggleTheme: () => {
				const { isDarkMode } = get()

				set({
					isDarkMode: !isDarkMode,
				})
			},
		}),
		{
			name: "Theme",
		}
	),
	"Theme"
)
