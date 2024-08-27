import { globalStyle, style } from "@vanilla-extract/css"

import { flexCentered, flexRow, responsiveStyle } from "@/styles/shared.css"

const tableWrapper = style(
	[
		flexRow,

		responsiveStyle({
			mobile: {
				flexDirection: "column",
				width: "100%",
				maxWidth: "500px",
			},
		}),
	],
	"tableWrapper"
)
const button = style([flexRow], "button")
globalStyle(`${button}:nth-last-child(2) svg path`, {
	fill: "#f67364",
})
globalStyle(`${button}:last-child svg path`, {
	fill: "#ffe082",
})

const buttons = style(
	[
		flexRow,
		flexCentered,
		{
			gap: "30px",
		},

		responsiveStyle({
			mobile: {
				flexDirection: "column",
				gap: "10px",
			},
		}),
	],
	"buttons"
)
globalStyle(`${buttons} button`, {
	flex: "50%",
	whiteSpace: "nowrap",
})

export const tablesStyles = {
	tableWrapper,
	button,
	buttons,
}
