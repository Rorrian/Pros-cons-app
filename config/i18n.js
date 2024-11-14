import i18next from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'

import enTranslation from '../public/locales/en/translation.json'
import ruTranslation from '../public/locales/ru/translation.json'

i18next
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    ns: ['translation'],
    defaultNS: 'translation',
    resources: {
      en: {
        translation: enTranslation,
      },
      ru: {
        translation: ruTranslation,
      },
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    react: {
      useSuspense: false,
    },
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'sessionStorage'],
      caches: ['localStorage', 'cookie'],
    },
    returnEmptyString: false,
  })

export default i18next
