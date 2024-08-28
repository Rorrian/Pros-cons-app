"use client"

import clsx from "clsx"

import { Tables } from "@/components/Tables/Tables"
import { Header } from "@/components/UI/Header/Header"
import { useThemeStore } from "@/store"
import { darkTheme, lightTheme } from "@/theme/theme.css"

import { homeStyles } from "./Home.css"

export default function Home() {
	const [isDarkMode, toggleTheme] = useThemeStore(state => [
		state.isDarkMode,
		state.toggleTheme,
	])

	return (
		<main
			className={clsx(homeStyles.main, isDarkMode ? darkTheme : lightTheme)}
		>
			<Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

			<Tables />
		</main>
	)
}
