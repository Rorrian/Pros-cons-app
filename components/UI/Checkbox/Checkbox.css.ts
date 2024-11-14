import { style } from '@vanilla-extract/css'

import { alignItemsCentered, flexRow } from '@/styles/shared.css'
import { vars } from '@/theme/theme.css'

const wrapper = style(
  {
    position: 'absolute',
    bottom: '-30px',
    left: 0,

    color: vars.themeVariables.content.primary,

    transition: `color ${vars.transition}`,
  },
  'wrapper',
)
const label = style([flexRow, alignItemsCentered], 'label')

const checkbox = style(
  {
    marginRight: '6px',
  },
  'checkbox',
)

export const checkboxStyles = {
  wrapper,
  label,
  checkbox,
}
