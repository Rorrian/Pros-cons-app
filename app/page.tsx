import { AIRequestForm, ProsConsList, ShareSaveSection } from '@/modules'
import { HeaderTitle } from '@/shared/components'

import { homeStyles } from './Home.css'

// TODO: ошибка Hydration failed при загрузке с русским языком
// TODO: Анимировать смену темы как в доке Framer motion

export default function Home() {
  return (
    <div className={homeStyles.inner}>
      <HeaderTitle />
      <AIRequestForm />
      <ProsConsList />
      <ShareSaveSection />
    </div>
  )
}
