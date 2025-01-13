import { AIRequestForm } from '@/modules/AISection'
import { ShareSaveSection } from '@/modules/Share'
import { Tables } from '@/modules/Tables'
import { HeaderTitle } from '@/shared/components'

import { homeStyles } from './Home.css'

// TODO: ошибка Hydration failed при загрузке с русским языком

// TODO: Анимировать смену темы как в доке Framer motion

export default function Home() {
  return (
    <div className={homeStyles.inner}>
      <HeaderTitle />

      <AIRequestForm />
      <Tables />
      <ShareSaveSection />
    </div>
  )
}
