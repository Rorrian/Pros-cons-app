import { create } from "zustand"

interface ThemeStore {
	isDarkMode: boolean
	toggleTheme: () => void
}

export const useThemeStore = create<ThemeStore>((set, get) => ({
	isDarkMode: false,
	toggleTheme: () => {
		const { isDarkMode } = get()

		set({
			isDarkMode: !isDarkMode,
		})
	},
}))
