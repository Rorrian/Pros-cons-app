import { style } from "@vanilla-extract/css"

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
