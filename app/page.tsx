import { Tables } from "@/components/Tables/Tables"
import { Header } from "@/components/UI/Header/Header"
import ThemeProvider from "@/providers/ThemeProvider/ThemeProvider"

import { homeStyles } from "./Home.css"

export default function Home() {
	return (
		<ThemeProvider className={homeStyles.main}>
			<Header />
			<Tables />
		</ThemeProvider>
	)
}
