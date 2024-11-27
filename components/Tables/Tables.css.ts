import { globalStyle, style } from '@vanilla-extract/css'

import { responsiveStyle } from '@/helpers/responsive'
import { flexCentered, flexRow, fullWidth } from '@/styles/shared.css'
import { vars } from '@/theme/theme.css'

const tableWrapper = style(
  [
    flexRow,
    fullWidth,

    responsiveStyle({
      mobile: {
        flexDirection: 'column',

        maxWidth: '500px',
      },
    }),
  ],
  'tableWrapper',
)
const button = style([flexRow], 'button')
globalStyle(`${button}:nth-last-child(2) svg path`, {
  fill: '#f67364',
})
globalStyle(`${button}:last-child svg path`, {
  fill: '#ffe082',
})

const buttons = style(
  [
    flexRow,
    flexCentered,
    {
      gap: vars.spaces.lg,
    },

    responsiveStyle({
      mobile: {
        flexDirection: 'column',
        gap: vars.spaces.sm,
      },
    }),
  ],
  'buttons',
)
globalStyle(`${buttons} button`, {
  flex: '50%',

  whiteSpace: 'nowrap',
})

export const tablesStyles = {
  tableWrapper,
  button,
  buttons,
}
