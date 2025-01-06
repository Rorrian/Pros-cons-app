import { style } from '@vanilla-extract/css'

import { responsiveStyle } from '@/shared/helpers/responsive'
import { flexCentered } from '@/shared/styles/shared.css'
import { vars } from '@/shared/theme/theme.css'

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
      width: vars.iconSizes.md,
      height: vars.iconSizes.md,
    },
    responsiveStyle({
      tablet: {
        width: vars.iconSizes.sm,
        height: vars.iconSizes.sm,
      },
    }),
  ],
  'icon',
)

export const languageDropdownStyles = {
  toggleButton,
  icon,
}
