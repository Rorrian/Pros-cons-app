import { m, useMotionValue, useTransform } from 'framer-motion'

import { vars } from '@/shared/theme/theme.css'

type CheckboxIconProps = {
  isChecked: boolean
  onClick: () => void
}

const tickVariants = {
  pressed: (isChecked: boolean) => ({ pathLength: isChecked ? 0.85 : 0.2 }),
  checked: { pathLength: 1 },
  unchecked: { pathLength: 0 },
}

const boxVariants = {
  hover: { scale: 1.05, strokeWidth: 2.5 },
  pressed: { scale: 0.95, strokeWidth: 2.7 },
  checked: { stroke: vars.themeVariables.content.primary, strokeWidth: 2.5 },
  unchecked: { stroke: 'rgb(164 164 164)', strokeWidth: 2 },
}

export const CheckboxIcon = ({ isChecked, onClick }: CheckboxIconProps) => {
  const pathLength = useMotionValue(0)
  const opacity = useTransform(pathLength, [0.05, 0.15], [0, 1])

  return (
    <m.svg
      initial={false}
      animate={isChecked ? 'checked' : 'unchecked'}
      whileHover="hover"
      whileTap="pressed"
      width="24"
      height="24"
      onClick={onClick}
    >
      <m.path
        d="M 4.5 8.5 C 4.5 6.672 6.672 4.5 8.5 4.5 L 15.5 4.5 C 17.328 4.5 19.5 6.672 19.5 8.5 L 19.5 15.5 C 19.5 17.328 17.328 19.5 15.5 19.5 L 8.5 19.5 C 6.672 19.5 4.5 17.328 4.5 15.5 Z"
        fill="transparent"
        strokeWidth="2"
        stroke="rgb(164 164 164)"
        variants={boxVariants}
      />
      <m.path
        d="M 0 9.5 L 9.5 19 L 23 0"
        transform="translate(1.5 3.5) rotate(-4 12 12)"
        fill="transparent"
        strokeWidth="3"
        stroke={vars.content.white}
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={tickVariants}
        style={{ pathLength, opacity }}
        custom={isChecked}
      />
      <m.path
        d="M 0 9.5 L 9.5 19 L 23 0"
        transform="translate(1.5 2.5) rotate(-4 12 12)"
        fill="transparent"
        strokeWidth="4"
        stroke={vars.content.red}
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={tickVariants}
        style={{ pathLength, opacity }}
        custom={isChecked}
      />
    </m.svg>
  )
}
