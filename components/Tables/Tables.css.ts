import { globalStyle, style } from '@vanilla-extract/css'

import { responsiveStyle } from '@/helpers/responsive'
import { flexCentered, flexRow } from '@/styles/shared.css'
import { vars } from '@/theme/theme.css'

const aiBlock = style(
  [
    flexRow,
    {
      alignItems: 'stretch',
      columnGap: '8px',
    },
  ],
  'aiBlock',
)
const input = style(
  {
    width: '70vw',
    border: vars.border.grey,
    borderRadius: vars.borderRadius.small,
    backgroundColor: vars.themeVariables.background.primary,

    textAlign: 'start',
    color: vars.themeVariables.content.primary,

    transition: `color ${vars.transition}, background-color  ${vars.transition}`,
  },
  'input',
)
globalStyle(`${input}::placeholder`, {
  color: vars.themeVariables.content.primary,
  fontStyle: 'italic',
  opacity: 0.5,
  transition: `color ${vars.transition}`,
})

const tableWrapper = style(
  [
    flexRow,

    responsiveStyle({
      mobile: {
        flexDirection: 'column',

        width: '100%',
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
      gap: '30px',
    },

    responsiveStyle({
      mobile: {
        flexDirection: 'column',
        gap: '10px',
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
  aiBlock,
  input,
  tableWrapper,
  button,
  buttons,
}
