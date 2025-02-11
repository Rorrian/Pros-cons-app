export const MAX_LENGTH_CHARACTERS_IN_NAME = 100
export const ICON_SIZE = 18

export const ANIMATION_DURATION = 0.35

export const defaultTransition = {
  duration: ANIMATION_DURATION,
}

export const opacityAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: defaultTransition,
}

export const SIDEBAR_WIDTH = 50

export const locales = [
  {
    alt: 'English flag',
    icon: '/icons/flags/en.svg',
    label: 'English',
    value: 'en',
  },
  {
    alt: 'Russian flag',
    icon: '/icons/flags/ru.svg',
    label: 'Russian',
    value: 'ru',
  },
]
