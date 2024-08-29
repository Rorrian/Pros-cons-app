import i18next from "i18next"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Suspense } from "react"

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
		// FIXME: При выборе русского языка и перезагрузке страницы появляются ошибки с гидратацией из-за конфликта fallbackLng из i18n.js и ранее выбранного сохраненного юзером языка
		<html lang={i18next.resolvedLanguage}>
			<head>
				{/* Для предзагрузки второго фона и более плавного отображения при переключении темы */}
				<link rel="preload" href="/background/bgDay.webp" as="image" />
				<link rel="preload" href="/background/bgNight.webp" as="image" />
			</head>
			<body className={inter.className}>
				<Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
			</body>
		</html>
	)
}
