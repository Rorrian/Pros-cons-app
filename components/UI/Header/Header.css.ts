import { globalStyle, style } from "@vanilla-extract/css"
import { recipe } from "@vanilla-extract/recipes"

import { flexCentered, flexRow } from "@/styles/shared.css"
import { vars } from "@/theme/theme.css"
import typographyCss from "@/theme/typography.css"

const title = style(
	[
		typographyCss.title.h1,
		{
			textAlign: "center",
			color: vars.content.white,
		},
	],
	"title"
)
globalStyle(`${title} span b`, {
	color: vars.content.green,
})
globalStyle(`${title} span:last-of-type b`, {
	color: vars.content.red,
})

const header = style([flexRow, flexCentered], "header")

const button = style(
	{
		background: "transparent",
		cursor: "pointer",
	},
	"button"
)

const icon = recipe(
	{
		base: {
			position: "absolute",
			top: "10px",
			right: "10px",

			opacity: 0,
			transition: "opacity 0.3s ease-in-out",
		},
		variants: {
			isShow: {
				true: {
					opacity: 1,
				},
			},
		},
		defaultVariants: {
			isShow: true,
		},
	},
	"icon"
)

export const headerStyles = {
	header,
	title,
	button,
	icon,
}
