import i18next from "i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import { initReactI18next } from "react-i18next"

i18next
	.use(initReactI18next)
	.use(LanguageDetector)
	.init({
		fallbackLng: "en",
		debug: true,
		resources: {
			en: {
				translation: require("../public/locales/en/translation.json"),
			},
			ru: {
				translation: require("../public/locales/ru/translation.json"),
			},
		},
		detection: {
			order: ["querystring", "cookie", "localStorage", "sessionStorage"],
			caches: ["localStorage", "cookie"],
		},
		returnEmptyString: false,
	})

export default i18next
