import { globalStyle, style } from '@vanilla-extract/css'
import { HeartIcon } from 'lucide-react'

import { responsiveStyle } from '@/helpers/responsive'
import { flexRow } from '@/styles/shared.css'
import { vars } from '@/theme/theme.css'
import typographyCss from '@/theme/typography.css'

const aiBlock = style(
  [
    flexRow,
    {
      position: 'relative',

      alignItems: 'stretch',
      columnGap: '8px',

      marginBottom: '30px',
    },
  ],
  'aiBlock',
)

const input = style(
  [
    typographyCss.paragraph.regular,
    {
      width: '70vw',
      border: vars.border.grey,
      borderRadius: vars.borderRadius.small,
      backgroundColor: vars.themeVariables.background.primary,

      textAlign: 'start',
      color: vars.themeVariables.content.primary,

      transition: `color ${vars.transition}, background-color  ${vars.transition}`,
    },
  ],
  'input',
)
globalStyle(`${input}::placeholder`, {
  color: vars.themeVariables.content.primary,
  fontStyle: 'italic',
  opacity: 0.5,
  transition: `color ${vars.transition}`,
})

const checkbox = style(
  [
    typographyCss.paragraph.regular,
    responsiveStyle({
      mobile: {
        color: `${vars.content.white} !important`,
      },
    }),
  ],
  'checkbox',
)

const icon = style(
  [
    {
      width: '24px',
      height: '24px',
    },
    responsiveStyle({
      tablet: {
        width: '20px',
        height: '20px',
      },
    }),
  ],
  'icon',
)

const error = style(
  {
    left: '4px',
    bottom: '-45px',
  },
  'error',
)

export const aiInputBlockStyles = {
  aiBlock,
  input,
  checkbox,
  icon,
  error,
}
