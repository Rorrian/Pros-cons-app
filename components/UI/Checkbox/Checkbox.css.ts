import { globalStyle, style } from '@vanilla-extract/css'

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

const icon = style(
  {
    outline: 'none',
  },
  'icon',
)

const label = style([flexRow, alignItemsCentered], 'label')
globalStyle(`${label} svg`, {
  outline: 'none',
})

const checkbox = style(
  {
    marginRight: '6px',

    appearance: 'none',
  },
  'checkbox',
)

export const checkboxStyles = {
  wrapper,
  icon,
  label,
  checkbox,
}
