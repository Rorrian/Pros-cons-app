import { globalStyle, style } from '@vanilla-extract/css'

import { responsiveStyle } from '@/shared/helpers/responsive'
import { flexCentered, flexRow } from '@/shared/styles/shared.css'
import { vars } from '@/shared/theme/theme.css'

const wrapper = style(
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
  'wrapper',
)
globalStyle(`${wrapper} button`, {
  flex: '50%',

  whiteSpace: 'nowrap',
})

const button = style([flexRow], 'button')
globalStyle(`${button}:nth-last-child(2) svg path`, {
  fill: '#f67364',
})
globalStyle(`${button}:last-child svg path`, {
  fill: '#ffe082',
})

export const actionButtonsStyles = {
  wrapper,
  button,
}
