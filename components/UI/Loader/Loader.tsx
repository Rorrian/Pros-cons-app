import { m } from 'framer-motion'
import { LoaderCircle } from 'lucide-react'

interface LoaderProps {
  size?: number
  duration?: number
}

export const Loader = ({ size = 24, duration = 0.5 }: LoaderProps) => (
  <m.div
    aria-label="Loading"
    animate={{ rotate: 360 }}
    transition={{
      duration: duration,
      repeat: Infinity,
      ease: 'linear',
    }}
  >
    <LoaderCircle size={size} />
  </m.div>
)
