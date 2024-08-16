import {
	ComplexStyleRule,
	createVar,
	globalStyle,
	style,
} from "@vanilla-extract/css"
import { recipe } from "@vanilla-extract/recipes"

import {
	alignItemsCentered,
	flexRow,
	justifyContentCenter,
	justifyContentStart,
} from "@/styles/shared.css"
import { vars } from "@/theme/theme.css"
import typographyCss from "@/theme/typography.css"
import { Justify, Kind, Size } from "@/types/button/enums"

const background = createVar("background")
const titleColor = createVar("titleColor")
const iconColor = createVar("iconColor")

type ButtonVariantsType = {
	disabled: Record<"true" | "false", ComplexStyleRule | string>
	size: Record<Size, ComplexStyleRule | string>
	kind: Record<Kind, ComplexStyleRule | string>
	justify: Record<Justify, ComplexStyleRule | string>
}

type ButtonTitleVariantsType = {
	size: Record<Size, ComplexStyleRule | string>
}

const buttonVariants: ButtonVariantsType = {
	size: {
		big: {
			padding: "8px 16px",
			borderRadius: vars.borderRadius.small,
		},
		small: {
			padding: "8px",
			borderRadius: vars.borderRadius.big,
		},
	},
	justify: {
		[Justify.Center]: justifyContentCenter,
		[Justify.Start]: justifyContentStart,
	},
	kind: {
		[Kind.Primary]: {
			vars: {
				[background]: vars.themeVariables.content.primary,
				[iconColor]: vars.content.white,
				[titleColor]: vars.content.white,
			},
		},
		[Kind.Secondary]: {
			vars: {
				[background]: vars.background.secondary,
				[iconColor]: vars.content.white,
				[titleColor]: vars.content.darkGrey,
			},
		},
		[Kind.Positive]: {
			vars: {
				[background]: vars.background.green,
				[iconColor]: vars.content.white,
				[titleColor]: vars.content.white,
			},
		},
		[Kind.Negative]: {
			vars: {
				[background]: vars.background.red,
				[iconColor]: vars.content.white,
				[titleColor]: vars.content.white,
			},
		},
		[Kind.Transparent]: {
			vars: {
				[background]: vars.background.buttonTransparent,
				[iconColor]: "none",
				[titleColor]: vars.content.white,
			},
		},
	},
	disabled: {
		true: {
			cursor: "default",
			vars: {
				[background]: vars.background.disabled,
				[iconColor]: vars.content.disabled,
				[titleColor]: vars.content.disabled,
			},
		},
		false: "",
	},
}

const button = recipe(
	{
		base: [
			flexRow,
			alignItemsCentered,
			{
				backgroundColor: background,
				cursor: "pointer",
				transition: "background-color 0.3s ease-in-out",
			},
		],
		variants: buttonVariants,
		defaultVariants: {
			disabled: false,
			size: Size.Big,
			kind: Kind.Primary,
			justify: Justify.Center,
		},
	},
	"button"
)

const icon = style(
	{
		display: "flex",
	},
	"icon"
)
globalStyle(`${icon} svg path`, {
	fill: iconColor,
})

const title = recipe<ButtonTitleVariantsType>(
	{
		base: {
			padding: "0px 8px",
			color: titleColor,
		},

		variants: {
			size: {
				big: [typographyCss.button.big],
				small: [typographyCss.button.small],
			},
		},
		defaultVariants: {
			size: Size.Big,
		},
	},
	"title"
)

export const buttonStyles = {
	icon,
	button,
	title,
}
