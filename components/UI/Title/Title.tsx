"use client"

import clsx from "clsx"
import { motion } from "framer-motion"
import React, { forwardRef, LegacyRef } from "react"

import { titleStyles } from "./Title.css"

export type TitleHeadingType = "h1" | "h2" | "h3" | "h4"

interface TitleProps {
	titleClassName?: string
	headingType?: TitleHeadingType
	style?: React.CSSProperties
	children: string | React.ReactNode
}

export const Title = forwardRef(
	(
		{ children, titleClassName, headingType = "h3", ...props }: TitleProps,
		ref: LegacyRef<HTMLHeadingElement> | undefined
	) => {
		const TitleComponent = headingType

		return (
			<TitleComponent
				ref={ref}
				className={clsx(
					titleStyles.title({ type: headingType }),
					titleClassName
				)}
				{...props}
			>
				{children}
			</TitleComponent>
		)
	}
)

export const MTitle = motion(Title)
