import { style } from "@vanilla-extract/css"

type ResponsiveStyle = {
	tablet?: Record<string, string | number>
	mobile?: Record<string, string | number>
}

export const responsiveStyle = ({ tablet, mobile }: ResponsiveStyle) => ({
	"@media": {
		...(tablet && { "screen and (max-width: 1023.99px)": tablet }),
		...(mobile && { "screen and (max-width: 767.99px)": mobile }),
	},
})

export const flexRow = style(
	{
		display: "flex",
		flexDirection: "row",
	},
	"flexColumn"
)

export const flexColumn = style(
	{
		display: "flex",
		flexDirection: "column",
	},
	"flexColumn"
)

export const flexCentered = style(
	{
		justifyContent: "center",
		alignItems: "center",
	},
	"flexCentered"
)

export const justifyContentCenter = style(
	{
		justifyContent: "center",
	},
	"justifyContentCenter"
)

export const justifyContentStart = style(
	{
		justifyContent: "start",
	},
	"justifyContentStart"
)

export const alignItemsCentered = style(
	{
		alignItems: "center",
	},
	"alignItemsCentered"
)
