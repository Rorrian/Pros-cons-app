import type { Metadata } from "next"
import { Inter } from "next/font/google"

import "../styles/index.scss"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: "Pros-cons-app",
	description: "App for keeping track of pros and cons",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<head>
				{/* Для предзагрузки второго фона и более плавного отображения при переключении темы */}
				<link rel="preload" href="/background/bgDay.webp" as="image" />
				<link rel="preload" href="/background/bgNight.webp" as="image" />
			</head>
			<body className={inter.className}>{children}</body>
		</html>
	)
}
