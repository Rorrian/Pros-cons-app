'use client'

import { m, Variants } from 'framer-motion'

import { defaultTransition } from '@/shared/helpers/constants'

const containerVariants: Variants = {
  visible: { transition: { staggerChildren: 0.1 } },
}

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const fadeOutVariants: Variants = {
  initial: { opacity: 1 },
  exit: { opacity: 0 },
}

interface AnimatedTextProps {
  textElements: string[]
}

export const AnimatedText = ({ textElements }: AnimatedTextProps) => (
  <m.div
    key={textElements.join('-')}
    variants={fadeOutVariants}
    initial="initial"
    animate="initial"
    exit="exit"
    transition={defaultTransition}
  >
    <m.div variants={containerVariants} initial="hidden" animate="visible">
      {textElements.map((el, i) => (
        <m.span
          key={`${el}-${i}`}
          variants={wordVariants}
          transition={defaultTransition}
        >
          <span dangerouslySetInnerHTML={{ __html: el }} />
        </m.span>
      ))}
    </m.div>
  </m.div>
)
