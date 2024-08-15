import {
	createGlobalTheme,
	createTheme,
	createThemeContract,
} from "@vanilla-extract/css"

const root = createGlobalTheme(":root", {
	content: {
		white: "#ffffff",
		lightGrey: "#b3b3b3",
		disabled: "#b5b0b0",

		green: "#60cc78",
		red: "#ea4f4a",
	},

	background: {
		secondary: "#eaeaea",

		green: "#60cc78",
		lightGreen: "#9fedb0",
		red: "#ea4f4a",
		lightOrange: "#ffae71",

		disabled: "#efedeb",
		buttonTransparent: "rgba(255, 255, 255, 0.14)",
	},

	border: {
		grey: "2px solid #b5b0b0",
		yellow: "2px solid #f606",
	},

	borderRadius: {
		big: "12px",
		small: "8px",
		round: "50%",
	},
})

const themeVariables = createThemeContract({
	content: {
		primary: null,
		tertiary: null,
	},

	background: {
		primary: null,
	},
	pageBackground: null,
})

export const lightTheme = createTheme(themeVariables, {
	content: {
		primary: "#222222",
		tertiary: "#ffffff",
	},

	background: {
		primary: "#ffffff",
	},
	pageBackground: "url(/background/bgDay.webp)",
})

export const darkTheme = createTheme(themeVariables, {
	content: {
		primary: "#ffffff",
		tertiary: "#222222",
	},

	background: {
		primary: "#222222",
	},
	pageBackground: "url(/background/bgNight.webp)",
})

export const vars = { ...root, themeVariables }
