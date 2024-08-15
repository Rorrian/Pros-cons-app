import { ComplexStyleRule, style } from "@vanilla-extract/css"
import { recipe } from "@vanilla-extract/recipes"

import { flexCentered, flexRow, responsiveStyle } from "@/styles/shared.css"
import { vars } from "@/theme/theme.css"
import typographyCss from "@/theme/typography.css"

import { table } from "../Tables/Table/Table.css"

type ColVariantsType = {
	isTitle: Record<"true" | "false", ComplexStyleRule | string>
	isInversion: Record<"true" | "false", ComplexStyleRule | string>
	isTotal: Record<"true" | "false", ComplexStyleRule | string>
}

const colVariants: ColVariantsType = {
	isTitle: {
		true: {
			fontWeight: "700",
			color: vars.themeVariables.content.tertiary,
			border: "none",

			selectors: {
				[`${table}:first-child &:first-child`]: {
					backgroundColor: vars.background.green,
				},
				[`${table}:first-child &:nth-child(2)`]: {
					backgroundColor: vars.background.lightGreen,
				},
				[`${table}:last-child &:first-child`]: {
					backgroundColor: vars.background.red,
				},
				[`${table}:last-child &:nth-child(2)`]: {
					backgroundColor: vars.background.lightOrange,
				},
			},
		},
		false: {},
	},
	isInversion: {
		true: {
			selectors: {
				"&:first-of-type": {
					order: 1,

					...responsiveStyle({
						mobile: {
							order: "inherit",
						},
					}),
				},
				"&:last-of-type": {
					order: 0,

					...responsiveStyle({
						mobile: {
							order: "inherit",
						},
					}),
				},
			},
		},
		false: {},
	},
	isTotal: {
		true: {
			backgroundColor: vars.background.secondary,
			fontWeight: "700",
			border: "none",
		},
		false: {},
	},
}

const row = recipe(
	{
		base: [
			typographyCss.paragraph.regular,
			{
				position: "relative",

				display: "grid",
				columnGap: "8px",
				padding: "8px",

				selectors: {
					"&&:last-child": {
						marginTop: "auto",
					},
				},
			},
		],
		variants: {
			isInversion: {
				true: {
					gridTemplateColumns: "30% 1fr",

					...responsiveStyle({
						mobile: {
							gridTemplateColumns: "1fr 40%",
						},
					}),
				},
				false: {
					gridTemplateColumns: "1fr 30%",

					...responsiveStyle({
						mobile: {
							gridTemplateColumns: "1fr 40%",
						},
					}),
				},
			},
		},
		defaultVariants: {
			isInversion: false,
		},
	},
	"row"
)

const col = recipe(
	{
		base: [
			flexRow,
			flexCentered,
			{
				position: "relative",

				width: "100%",
				minHeight: "35.6px",
				border: vars.border.grey,
				padding: "3px",
				backgroundColor: vars.themeVariables.background.primary,
				borderRadius: vars.borderRadius.small,
				textAlign: "center",
				transition:
					"border 0.3s ease-in-out, color 0.3s ease-in-out, background-color 0.3s ease-in-out",

				...responsiveStyle({
					tablet: {
						minHeight: "30px",
					},
					mobile: {
						minHeight: "25px",
					},
				}),
			},
		],
		variants: colVariants,
		defaultVariants: {
			isInversion: false,
			isTotal: false,
			isTitle: false,
		},
		compoundVariants: [
			{
				variants: {
					isTotal: false,
					isTitle: false,
				},
				style: {
					color: vars.themeVariables.content.primary,

					selectors: {
						"&&:hover": {
							border: vars.border.yellow,
						},
					},
				},
			},
		],
	},
	"col"
)

const input = style(
	{
		position: "relative",

		width: "100%",
		height: "100%",
		backgroundColor: "inherit",

		color: "inherit",
		textAlign: "center",

		selectors: {
			"&::-webkit-outer-spin-button": {
				...{ "-webkit-appearance": "none" },
				margin: 0,
			},
			"&::-webkit-inner-spin-button": {
				...{ "-webkit-appearance": "none" },
				margin: 0,
			},
			/* Для Firefox */
			"&[type='number']": {
				...({
					"-moz-appearance": "textfield",
				} as React.CSSProperties),
			},
			/* Для Edge и IE */
			"&::-ms-clear, &::-ms-reveal": {
				display: "none",
				width: 0,
				height: 0,
			},
		},
	},
	"input"
)

const button = recipe(
	{
		base: [
			flexRow,
			flexCentered,
			{
				position: "absolute",
				top: "9px",

				width: "20px",
				height: "20px",
				padding: "0px",
				borderRadius: vars.borderRadius.round,

				opacity: "0.5",
				transition: "opacity 0.3s ease-in-out",

				selectors: {
					"&&:hover": {
						opacity: "1",
					},

					"&:first-of-type": {
						...responsiveStyle({
							mobile: {
								right: "-20px",
								left: "unset",
							},
						}),
					},
					"&:last-of-type": {
						...responsiveStyle({
							mobile: {
								right: "-20px",
								left: "unset",
							},
						}),
					},
				},

				...responsiveStyle({
					mobile: {
						opacity: "0.8",
					},
				}),
			},
		],
		variants: {
			isInversion: {
				true: {
					right: "-20px",
				},
				false: {
					left: "-20px",
				},
			},
		},
		defaultVariants: {
			isInversion: true,
		},
	},
	"button"
)

export const rowStyles = {
	row,
	col,
	input,
	button,
}
