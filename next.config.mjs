import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin"

const withVanillaExtract = createVanillaExtractPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: false,
	webpack(config, options) {
		config.module.rules.push({
			test: /\.svg$/,
			use: ["@svgr/webpack"],
		})

		return config
	},
}

export default withVanillaExtract(nextConfig)
