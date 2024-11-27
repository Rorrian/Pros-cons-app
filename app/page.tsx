import { AIRequestForm, Tables } from '@/components'
import { Footer, Header } from '@/components/UI'

import { homeStyles } from './Home.css'

// TODO: Постараться по максимуму сделать компоненты серверными и выделить клиентский функционал в отдельные компоненты

// TODO: ошибка Hydration failed

// TODO: Анимировать смену темы как в доке Framer motion

export default function Home() {
  return (
    <div className={homeStyles.wrapper}>
      <Header />

      <div className={homeStyles.inner}>
        <AIRequestForm />
        <Tables />
      </div>

      <Footer />
    </div>
  )
}
