import { style } from "@vanilla-extract/css"

import { flexCentered, flexRow } from "@/styles/shared.css"
import { vars } from "@/theme/theme.css"
import typographyCss from "@/theme/typography.css"

export const textarea = style(
	{
		resize: "none",
		paddingRight: "20px",
	},
	"textarea"
)

export const error = style(
	[
		typographyCss.caption.small,
		{
			position: "absolute",
			bottom: "-15px",
			left: "0px",
			right: "0px",
			whiteSpace: "nowrap",

			color: vars.content.red,
		},
	],
	"error"
)
export const clearButton = style(
	[
		flexRow,
		flexCentered,
		{
			position: "absolute",
			top: "5px",
			right: "5px",
			zIndex: 1,

			width: "15px",
			height: "15px",
			cursor: "pointer",
			backgroundColor: vars.background.secondary,
			borderRadius: vars.borderRadius.round,
			opacity: 0,
			transition: "opacity 0.3s ease-in-out",

			selectors: {
				[`${textarea}:focus+&&`]: {
					opacity: 1,
				},
			},
		},
	],
	"clearButton"
)

export const inputBoxesStyles = { textarea, error, clearButton }
