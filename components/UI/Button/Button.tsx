import clsx from "clsx"

import { ButtonProps } from "@/types/button"
import { Justify, Kind, Size } from "@/types/button/enums"

import { buttonStyles } from "./Button.css"

export const Button = ({
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
}: ButtonProps) => (
	<button
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
	>
		{icon && <div className={clsx(buttonStyles.icon, iconStyle)}>{icon}</div>}
		{title && (
			<span className={clsx(buttonStyles.title({ size }), titleStyle)}>
				{title}
			</span>
		)}
		{children}
	</button>
)
