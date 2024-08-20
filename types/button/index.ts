import { HTMLMotionProps } from "framer-motion"
import { ComponentPropsWithoutRef } from "react"

import { Justify, Kind, Size } from "./enums"

export type ButtonProps = {
	title?: string
	titleStyle?: string
	icon?: JSX.Element
	iconStyle?: string
	size?: Size
	kind?: Kind
	justify?: Justify
} & ComponentPropsWithoutRef<"button"> &
	HTMLMotionProps<"button">
