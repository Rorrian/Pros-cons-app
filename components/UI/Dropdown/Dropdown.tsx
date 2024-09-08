"use client"

import clsx from "clsx"
import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"

import { ICON_SIZE } from "@/helpers/constants"
import { Kind, Size } from "@/types/button/enums"
import { DropdownProps } from "@/types/dropdown"

import { Button } from "../Button/Button"
import { dropdownStyles } from "./Dropdown.css"

const Icon = ({ src, alt }: { src: string; alt?: string }) => (
	<img src={src} alt={alt} style={{ width: ICON_SIZE, height: ICON_SIZE }} />
)

export const Dropdown = ({
	buttonClassName,
	icon,
	iconClassName,
	listClassName,
	options,
	optionClassName,
	selectedOptionValue,
	title,
	titleClassName,
	wrapperClassName,
	onSelect,
}: DropdownProps) => {
	const [isOpen, setIsOpen] = useState(false)

	const handleButtonClick = () => {
		setIsOpen(!isOpen)
	}

	const handleOptionClick = (value: string) => {
		onSelect(value)
		setIsOpen(false)
	}

	const listAnimation = {
		initial: {
			opacity: 0,
		},
		animate: {
			opacity: 1,
		},
		exit: {
			opacity: 0,
		},
	}

	if (!title && !icon) return null

	return (
		<div className={wrapperClassName}>
			<Button
				className={clsx(dropdownStyles.button, buttonClassName)}
				icon={icon}
				iconClassName={iconClassName}
				kind={Kind.Transparent}
				size={Size.Small}
				title={title}
				titleClassName={titleClassName}
				onClick={handleButtonClick}
			/>

			<AnimatePresence initial={false}>
				{isOpen && (
					<motion.ul
						className={clsx(dropdownStyles.list, listClassName)}
						{...listAnimation}
					>
						{options.map(option => {
							const isSelected = selectedOptionValue === option.value

							return (
								<motion.li key={option.value}>
									<Button
										className={clsx(dropdownStyles.option, optionClassName)}
										disabled={isSelected!}
										icon={
											option.icon ? (
												<Icon src={option.icon} alt={option?.alt} />
											) : undefined
										}
										kind={Kind.Secondary}
										size={Size.Small}
										showHoverAnimation={false}
										title={option.label}
										type="submit"
										onClick={() => handleOptionClick(option.value)}
									/>
								</motion.li>
							)
						})}
					</motion.ul>
				)}
			</AnimatePresence>
		</div>
	)
}
