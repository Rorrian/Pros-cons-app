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
