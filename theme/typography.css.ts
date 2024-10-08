import { responsiveStyle } from "@/helpers/responsive"
import { styleVariants } from "@vanilla-extract/css"

export const typographyObject = {
	title: {
		h1: {
			fontFamily: "Alaya Roza",
			fontWeight: "600",
			lineHeight: 1,
			fontSize: "86px",
			letterSpacing: "-0.02em",
			textDecoration: "none",

			...responsiveStyle({
				tablet: {
					fontSize: "60px",
				},
				mobile: {
					fontWeight: "500",
					fontSize: "45px",
				},
			}),
		},
		h2: {
			fontFamily: "Alaya Roza",
			fontWeight: "400",
			lineHeight: "28px",
			fontSize: "26px",
			letterSpacing: "-0.02em",
			textDecoration: "none",
		},
		h3: {
			fontFamily: "Alaya Roza",
			fontWeight: "400",
			lineHeight: "24px",
			fontSize: "20px",
			letterSpacing: "-0.03em",
			textDecoration: "none",
		},
		h4: {
			fontFamily: "Alaya Roza",
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
