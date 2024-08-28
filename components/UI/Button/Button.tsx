import clsx from "clsx"
import { motion } from "framer-motion"
import { forwardRef, LegacyRef } from "react"

import { ButtonProps } from "@/types/button"
import { Justify, Kind, Size } from "@/types/button/enums"

import { buttonStyles } from "./Button.css"

export const Button = forwardRef(
	(
		{
			disabled = false,
			className,
			title = "",
			titleStyle,
			icon,
			iconStyle,
			size = Size.Big,
			kind = Kind.Primary,
			justify = Justify.Center,
			children,
			...props
		}: ButtonProps,
		ref: LegacyRef<HTMLButtonElement> | undefined
	) => (
		<motion.button
			ref={ref}
			disabled={disabled}
			className={clsx(
				buttonStyles.button({
					size,
					kind,
					disabled: disabled,
					justify,
				}),
				className
			)}
			{...props}
			whileTap={{
				scale: 0.95,
			}}
			whileHover={{
				scale: 1.05,
			}}
		>
			{icon && (
				<span className={clsx(buttonStyles.icon, iconStyle)}>{icon}</span>
			)}
			{title && (
				<span className={clsx(buttonStyles.title({ size }), titleStyle)}>
					{title}
				</span>
			)}
			{children}
		</motion.button>
	)
)

export const MButton = motion(Button)
