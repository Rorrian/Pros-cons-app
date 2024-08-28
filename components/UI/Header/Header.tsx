"use client"

import clsx from "clsx"
import { motion } from "framer-motion"
import localFont from "next/font/local"

import { MTitle } from "@/components/UI/Title/Title"
import MoonIcon from "@/public/icons/moon.svg"
import SunIcon from "@/public/icons/sun.svg"

import { headerStyles } from "./Header.css"

export type HeaderProps = {
	isDarkMode: boolean
	toggleTheme: () => void
}

const playwriteHR = localFont({ src: "../../../fonts/PlaywriteHR-Regular.ttf" })

export const Header = ({ isDarkMode, toggleTheme }: HeaderProps) => {
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
		<header className={headerStyles.header}>
			<MTitle
				headingType="h1"
				titleClassName={clsx(playwriteHR.className, headerStyles.title)}
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
				className={headerStyles.button}
				onClick={toggleTheme}
			>
				<MoonIcon className={headerStyles.icon({ isShow: isDarkMode })} />
				<SunIcon className={headerStyles.icon({ isShow: !isDarkMode })} />
			</button>
		</header>
	)
}
