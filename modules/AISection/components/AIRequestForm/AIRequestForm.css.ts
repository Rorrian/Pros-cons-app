import { globalStyle, style } from '@vanilla-extract/css'

import { responsiveStyle } from '@/shared/helpers/responsive'
import { flexRow, fullWidth } from '@/shared/styles/shared.css'
import { vars } from '@/shared/theme/theme.css'
import typographyCss from '@/shared/theme/typography.css'

const form = style(
  [
    flexRow,
    fullWidth,
    {
      columnGap: vars.spaces.sm,

      position: 'relative',

      marginBottom: vars.spaces.xl,
    },
  ],
  'form',
)

const input = style(
  [
    typographyCss.paragraph.regular,
    fullWidth,
    {
      border: vars.border.grey,
      borderRadius: vars.borderRadius.small,
      backgroundColor: vars.themeVariables.background.primary,

      color: vars.themeVariables.content.primary,

      transition: `color ${vars.transition} background-color  ${vars.transition}`,
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

    { position: 'absolute', bottom: '-28px', left: 0 },

    responsiveStyle({
      mobile: {
        color: `${vars.content.white} !important`,
      },
    }),
  ],
  'checkbox',
)

const icon = style(
  {
    width: vars.iconSizes.md,
    height: vars.iconSizes.md,

    ...responsiveStyle({
      tablet: {
        width: vars.iconSizes.sm,
        height: vars.iconSizes.sm,
      },
    }),
  },
  'icon',
)
globalStyle(`${icon} svg`, {
  width: '100%',
  height: '100%',
})

const error = style(
  {
    left: vars.spaces.xs,
    bottom: '-42px',
  },
  'error',
)

export const aiRequestFormStyles = {
  form,
  input,
  checkbox,
  icon,
  error,
}
