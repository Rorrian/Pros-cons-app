import { globalStyle, style } from "@vanilla-extract/css"

import { flexRow, responsiveStyle } from "@/styles/shared.css"

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
globalStyle(`${button} svg path`, {
	fill: "#f67364",
})

export const tablesStyles = {
	tableWrapper,
	button,
}
