import clsx from "clsx"
import React from "react"

import { titleStyles } from "./Title.css"

export type TitleHeadingType = "h1" | "h2" | "h3" | "h4"

interface TitleProps {
	titleClassName?: string
	headingType?: TitleHeadingType
	style?: React.CSSProperties
	children: string | React.ReactNode
}

export const Title: React.FC<TitleProps> = ({
	children,
	titleClassName,
	headingType = "h3",
	...props
}) => {
	const TitleComponent = headingType

	return (
		<TitleComponent
			className={clsx(titleStyles.title({ type: headingType }), titleClassName)}
			{...props}
		>
			{children}
		</TitleComponent>
	)
}
