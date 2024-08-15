"use client"

import clsx from "clsx"
import localFont from "next/font/local"

import Tables from "@/components/Tables/Tables"
import { Title } from "@/components/UI/Title/Title"
import MoonIcon from "@/public/icons/moon.svg"
import SunIcon from "@/public/icons/sun.svg"
import { useThemeStore } from "@/store/useThemeStore"
import { darkTheme, lightTheme } from "@/theme/theme.css"

import { homeStyles } from "./Home.css"

const playwriteHR = localFont({ src: "../fonts/PlaywriteHR-Regular.ttf" })

export default function Home() {
	const { isDarkMode, toggleTheme } = useThemeStore()
	return (
		<main
			className={clsx(homeStyles.main, isDarkMode ? darkTheme : lightTheme)}
		>
			<header className={homeStyles.header}>
				<Title
					headingType="h1"
					titleClassName={clsx(playwriteHR.className, homeStyles.title)}
				>
					Let's think about the <span>Pros</span> and <span>Cons</span>
				</Title>

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
