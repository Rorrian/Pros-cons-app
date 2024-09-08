"use client"

import { motion } from "framer-motion"
import { forwardRef, LegacyRef } from "react"

import MoonIcon from "@/public/icons/moon.svg"
import SunIcon from "@/public/icons/sun.svg"
import { useThemeStore } from "@/store"
import { Kind, Size } from "@/types/button/enums"

import { Button } from "../UI/Button/Button"
import { headerStyles } from "../UI/Header/Header.css"

export const ToggleThemeBtn = forwardRef(
	({}, ref: LegacyRef<HTMLButtonElement> | undefined) => {
		const [isDarkMode, toggleTheme] = useThemeStore(state => [
			state.isDarkMode,
			state.toggleTheme,
		])

		return (
			<Button
				aria-label="Toggle theme"
				className={headerStyles.themeBtn}
				icon={isDarkMode ? <MoonIcon /> : <SunIcon />}
				iconClassName={headerStyles.icon}
				kind={Kind.Transparent}
				size={Size.Small}
				onClick={toggleTheme}
			/>
		)
	}
)

export const MToggleThemeBtn = motion(ToggleThemeBtn)
