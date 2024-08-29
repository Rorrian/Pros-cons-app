"use client"

import clsx from "clsx"
import { motion } from "framer-motion"
import i18next from "i18next"
import localFont from "next/font/local"
import { useTranslation } from "react-i18next"

import { MTitle } from "@/components/UI/Title/Title"
import LanguageIcon from "@/public/icons/language.svg"
import MoonIcon from "@/public/icons/moon.svg"
import SunIcon from "@/public/icons/sun.svg"
import { Kind, Size } from "@/types/button/enums"

import { locales } from "../../../helpers/constants"
import { Button } from "../Button/Button"
import { Dropdown } from "../Dropdown/Dropdown"
import { headerStyles } from "./Header.css"

export type HeaderProps = {
	isDarkMode: boolean
	toggleTheme: () => void
}

const AlayaRoza = localFont({ src: "../../../fonts/AlayaRozaDemo.woff2" })

export const Header = ({ isDarkMode, toggleTheme }: HeaderProps) => {
	const { t, i18n } = useTranslation()

	const textElements = t("main.title", { returnObjects: true }) as string[]

	return (
		<header className={headerStyles.header}>
			<Dropdown
				buttonClassName={headerStyles.dropdownBtn}
				icon={<LanguageIcon />}
				iconClassName={headerStyles.icon}
				options={locales}
				selectedOptionValue={i18next.resolvedLanguage}
				wrapperClassName={headerStyles.dropdownWrapper}
				onSelect={i18n.changeLanguage}
			/>

			{!!textElements.length && (
				<MTitle
					headingType="h1"
					titleClassName={clsx(AlayaRoza.className, headerStyles.title)}
				>
					{textElements.map((el, i) => (
						<motion.span
							key={i}
							dangerouslySetInnerHTML={{ __html: el }}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{
								delay: i * 0.1,
							}}
						/>
					))}
				</MTitle>
			)}

			<Button
				aria-label="Toggle theme"
				className={headerStyles.themeBtn}
				icon={isDarkMode ? <MoonIcon /> : <SunIcon />}
				iconClassName={headerStyles.icon}
				kind={Kind.Transparent}
				size={Size.Small}
				onClick={toggleTheme}
			/>
		</header>
	)
}
