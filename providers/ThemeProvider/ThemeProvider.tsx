"use client"

import clsx from "clsx"

import { useThemeStore } from "@/store"
import { darkTheme, lightTheme } from "@/theme/theme.css"

export default function ThemeProvider({
	className,
	children,
}: {
	className: string
	children: React.ReactNode
}) {
	const isDarkMode = useThemeStore(state => state.isDarkMode)

	return (
		<div className={clsx(className, isDarkMode ? darkTheme : lightTheme)}>
			{children}
		</div>
	)
}
