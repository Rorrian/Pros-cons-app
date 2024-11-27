import { globalStyle, style } from '@vanilla-extract/css'

import { flexRow } from '@/styles/shared.css'
import { vars } from '@/theme/theme.css'

const wrapper = style(
  {
    color: vars.themeVariables.content.primary,

    transition: `color ${vars.transition}`,
  },
  'wrapper',
)

const inner = style(
  [
    flexRow,
    {
      alignItems: 'end',

      whiteSpace: 'nowrap',
    },
  ],
  'inner',
)
globalStyle(`${inner} svg`, {
  marginRight: vars.spaces.xs,
  outline: 'none',
})

const label = style(
  {
    marginBottom: '2px',
  },
  'label',
)

const checkbox = style(
  {
    width: 0,
    height: 0,

    appearance: 'none',
  },
  'checkbox',
)

export const checkboxStyles = {
  wrapper,
  inner,
  label,
  checkbox,
}
