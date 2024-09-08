"use client"

import clsx from "clsx"
import { motion } from "framer-motion"
import i18next from "i18next"
import localFont from "next/font/local"
import { useTranslation } from "react-i18next"

import { ToggleThemeBtn } from "@/components/ToggleThemeBtn/ToggleThemeBtn"
import { MTitle } from "@/components/UI/Title/Title"
import LanguageIcon from "@/public/icons/language.svg"

import { locales } from "../../../helpers/constants"
import { Dropdown } from "../Dropdown/Dropdown"
import { headerStyles } from "./Header.css"

import "../../../config/i18n"

const AlayaRoza = localFont({ src: "../../../fonts/AlayaRozaDemo.woff2" })

export const Header = () => {
	const { t, i18n } = useTranslation()

	const textElements = t("main.title", { returnObjects: true }) as string[]

	console.log(`i18next.resolvedLanguage = `)
	console.log(i18next.resolvedLanguage)

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

			<ToggleThemeBtn />
		</header>
	)
}
