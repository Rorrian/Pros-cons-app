import { Tables } from '@/components/Tables/Tables'
import { Header } from '@/components/UI/Header/Header'

import { homeStyles } from './Home.css'

// TODO: ошибка Hydration failed

export default function Home() {
  return (
    <div className={homeStyles.main}>
      <Header />
      <Tables />
    </div>
  )
}
