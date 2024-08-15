import { responsiveStyle } from "@/styles/shared.css"
import { styleVariants } from "@vanilla-extract/css"

export const typographyObject = {
	title: {
		h1: {
			fontFamily: "Playwrite HR",
			fontWeight: "600",
			lineHeight: "50px",
			fontSize: "48px",
			letterSpacing: "-0.02em",
			textDecoration: "none",

			...responsiveStyle({
				tablet: {
					lineHeight: "38px",
					fontSize: "36px",
				},
				mobile: {
					fontWeight: "500",
					lineHeight: "28px",
					fontSize: "24px",
				},
			}),
		},
		h2: {
			fontFamily: "Playwrite HR",
			fontWeight: "400",
			lineHeight: "28px",
			fontSize: "26px",
			letterSpacing: "-0.02em",
			textDecoration: "none",
		},
		h3: {
			fontFamily: "Playwrite HR",
			fontWeight: "400",
			lineHeight: "24px",
			fontSize: "20px",
			letterSpacing: "-0.03em",
			textDecoration: "none",
		},
		h4: {
			fontFamily: "Playwrite HR",
			fontWeight: "400",
			lineHeight: "24px",
			fontSize: "20px",
			letterSpacing: "-0.03em",
			textDecoration: "none",
		},
	},
	button: {
		big: {
			fontFamily: "Inter",
			fontWeight: "500",
			lineHeight: "24px",
			fontSize: "18px",
			letterSpacing: "-0.03em",
			textDecoration: "none",

			...responsiveStyle({
				tablet: {
					lineHeight: "18px",
					fontSize: "16px",
				},
				mobile: {
					lineHeight: "16px",
					fontSize: "14px",
				},
			}),
		},
		small: {
			fontFamily: "Inter",
			fontWeight: "500",
			lineHeight: "16px",
			fontSize: "13px",
			letterSpacing: "-0.02em",
			textDecoration: "none",

			...responsiveStyle({
				tablet: {
					lineHeight: "14px",
					fontSize: "12px",
				},
				mobile: {
					lineHeight: "12px",
					fontSize: "10px",
				},
			}),
		},
	},
	paragraph: {
		regular: {
			fontFamily: "Inter",
			fontWeight: "400",
			lineHeight: "24px",
			fontSize: "16px",
			letterSpacing: "-0.012em",
			textDecoration: "none",

			...responsiveStyle({
				tablet: {
					lineHeight: "18px",
					fontSize: "14px",
				},
				mobile: {
					lineHeight: "16px",
					fontSize: "12px",
				},
			}),
		},
		medium: {
			fontFamily: "Inter",
			fontWeight: "500",
			lineHeight: "24px",
			fontSize: "16px",
			letterSpacing: "-0.012em",
			textDecoration: "none",
		},
	},
	caption: {
		regular: {
			fontFamily: "Inter",
			fontWeight: "400",
			lineHeight: "16px",
			fontSize: "13px",
			letterSpacing: "-0.02em",
			textDecoration: "none",
		},
		medium: {
			fontFamily: "Inter",
			fontWeight: "500",
			lineHeight: "16px",
			fontSize: "13px",
			letterSpacing: "-0.02em",
			textDecoration: "none",
		},
		small: {
			fontFamily: "Inter",
			fontWeight: "500",
			lineHeight: "13px",
			fontSize: "10px",
			letterSpacing: "-0.02em",
			textDecoration: "none",
		},
	},
} as const

export default {
	title: styleVariants(typographyObject.title),
	button: styleVariants(typographyObject.button),
	paragraph: styleVariants(typographyObject.paragraph),
	caption: styleVariants(typographyObject.caption),
} as const
