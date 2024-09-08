import { style } from "@vanilla-extract/css"

import { responsiveStyle } from "@/helpers/responsive"
import { flexCentered } from "@/styles/shared.css"

const themeBtn = style(
	[
		{
			position: "absolute",
			top: "10px",
			right: "10px",
		},
		responsiveStyle({
			tablet: {
				padding: "4px",
			},
		}),
	],
	"themeBtn"
)

const icon = style(
	[
		flexCentered,
		{
			width: "2rem",
			height: "2rem",
		},
		responsiveStyle({
			tablet: {
				width: "1.5rem",
				height: "1.5rem",
			},
		}),
	],
	"icon"
)

export const toggleThemeBtnStyles = {
	themeBtn,
	icon,
}
