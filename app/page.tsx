"use client"

import clsx from "clsx"
import { motion } from "framer-motion"
import localFont from "next/font/local"

import { Tables } from "@/components/Tables/Tables"
import { MTitle } from "@/components/UI/Title/Title"
import MoonIcon from "@/public/icons/moon.svg"
import SunIcon from "@/public/icons/sun.svg"
import { useThemeStore } from "@/store/useThemeStore"
import { darkTheme, lightTheme } from "@/theme/theme.css"

import { homeStyles } from "./Home.css"

const playwriteHR = localFont({ src: "../fonts/PlaywriteHR-Regular.ttf" })

export default function Home() {
	const { isDarkMode, toggleTheme } = useThemeStore()

	const textElements = [
		"Let's ",
		"think ",
		"about ",
		"the ",
		<b>Pros</b>,
		" and ",
		<b>Cons</b>,
	]

	return (
		<main
			className={clsx(homeStyles.main, isDarkMode ? darkTheme : lightTheme)}
		>
			<header className={homeStyles.header}>
				<MTitle
					headingType="h1"
					titleClassName={clsx(playwriteHR.className, homeStyles.title)}
				>
					{textElements.map((el, i) => (
						<motion.span
							key={i}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{
								delay: i * 0.1,
							}}
						>
							{el}
						</motion.span>
					))}
				</MTitle>

				<button
					aria-label="Toggle theme"
					className={homeStyles.button}
					onClick={toggleTheme}
				>
					<MoonIcon className={homeStyles.icon({ isShow: isDarkMode })} />
					<SunIcon className={homeStyles.icon({ isShow: !isDarkMode })} />
				</button>
			</header>

			<Tables />
		</main>
	)
}
