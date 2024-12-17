import { AIRequestForm, ListTitle, Tables } from '@/components'

import { homeStyles } from './Home.css'

// TODO: ошибка Hydration failed

// TODO: Анимировать смену темы как в доке Framer motion

export default function Home() {
  return (
    <div className={homeStyles.inner}>
      <ListTitle />
      <AIRequestForm />
      <Tables />
    </div>
  )
}
