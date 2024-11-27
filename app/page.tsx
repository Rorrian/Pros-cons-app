import { AIRequestForm, Footer, Header, Tables } from '@/components'

import { homeStyles } from './Home.css'

// TODO: ошибка Hydration failed

// TODO: Анимировать смену темы как в доке Framer motion

// TODO: !!! Добавить возможность сохранять несколько списков

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
