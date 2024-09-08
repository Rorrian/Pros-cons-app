"use client"

import clsx from "clsx"
import { motion } from "framer-motion"
import { forwardRef, LegacyRef } from "react"

import { ButtonProps } from "@/types/button"
import { Justify, Kind, Size } from "@/types/button/enums"

import { buttonStyles } from "./Button.css"

export const Button = forwardRef(
	(
		{
			children,
			className,
			disabled = false,
			icon,
			iconClassName,
			justify = Justify.Center,
			kind = Kind.Primary,
			title = "",
			titleClassName,
			size = Size.Big,
			showHoverAnimation = true,
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
				scale: !disabled && showHoverAnimation ? 1.05 : undefined,
			}}
		>
			{icon && (
				<span className={clsx(buttonStyles.icon, iconClassName)}>{icon}</span>
			)}
			{title && (
				<span className={clsx(buttonStyles.title({ size }), titleClassName)}>
					{title}
				</span>
			)}
			{children}
		</motion.button>
	)
)

export const MButton = motion(Button)
