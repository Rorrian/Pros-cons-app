export const MAX_LENGTH_CHARACTERS_IN_NAME = 100
export const ICON_SIZE = 18

export const ANIMATION_DURATION = 0.35

export const defaultTransition = {
  duration: ANIMATION_DURATION,
}

export const SIDEBAR_WIDTH = 50

export const AI_IDEA_MIN_LENGTH = 5
export const AI_IDEA_MAX_LENGTH = 1000
export const AI_IDEA_REGEXP = /^(?=.*[a-zA-Z])[a-zA-Z0-9.,-\s]+$/

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
