import { style } from '@vanilla-extract/css'

import { flexCentered, flexRow } from '@/styles/shared.css'
import { vars } from '@/theme/theme.css'

const wrapper = style(
  [
    flexRow,
    flexCentered,
    {
      zIndex: 0,
    },
  ],
  'wrapper',
)

const dropdown = style(
  {
    position: 'absolute',
    top: vars.spaces.md,
    right: '64px',
  },
  'dropdown',
)

const themeSwitcher = style(
  {
    position: 'absolute',
    top: vars.spaces.md,
    right: vars.spaces.md,
  },
  'themeSwitcher',
)

export const headerStyles = {
  wrapper,
  dropdown,
  themeSwitcher,
}
