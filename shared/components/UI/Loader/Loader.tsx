import { m } from 'framer-motion'
import { LoaderCircle } from 'lucide-react'

import { MotionElementProps } from '@/shared/types/common'

interface LoaderProps extends MotionElementProps {
  size?: number
  duration?: number
}

export const Loader = ({
  size = 24,
  duration = 0.5,
  ...props
}: LoaderProps) => (
  <m.div
    aria-label="Loading"
    animate={{ rotate: 360 }}
    role="status"
    transition={{
      duration,
      repeat: Infinity,
      ease: 'linear',
    }}
    {...props}
  >
    <LoaderCircle size={size} />
  </m.div>
)
