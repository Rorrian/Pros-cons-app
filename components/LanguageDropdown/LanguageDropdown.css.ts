import { style } from '@vanilla-extract/css'

import { responsiveStyle } from '@/helpers/responsive'
import { flexCentered } from '@/styles/shared.css'
import { vars } from '@/theme/theme.css'

const toggleButton = style(
  {
    ...responsiveStyle({
      tablet: {
        padding: vars.spaces.xs,
      },
    }),
  },
  'toggleButton',
)

const icon = style(
  [
    flexCentered,
    {
      width: vars.iconSizes.lg,
      height: vars.iconSizes.lg,
    },
    responsiveStyle({
      tablet: {
        width: vars.iconSizes.md,
        height: vars.iconSizes.md,
      },
    }),
  ],
  'icon',
)

export const languageDropdownStyles = {
  toggleButton,
  icon,
}
