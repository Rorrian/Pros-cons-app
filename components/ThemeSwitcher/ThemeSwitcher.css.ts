import { style } from '@vanilla-extract/css'

import { responsiveStyle } from '@/helpers/responsive'
import { flexCentered } from '@/styles/shared.css'
import { vars } from '@/theme/theme.css'

const themeBtn = style(
  {
    position: 'absolute',
    top: vars.spaces.md,
    right: vars.spaces.md,

    ...responsiveStyle({
      tablet: {
        padding: vars.spaces.xs,
      },
    }),
  },
  'themeBtn',
)

const icon = style(
  [
    flexCentered,
    {
      width: vars.iconSizes.lg,
      height: vars.iconSizes.lg,

      ...responsiveStyle({
        tablet: {
          width: vars.iconSizes.md,
          height: vars.iconSizes.md,
        },
      }),
    },
  ],
  'icon',
)

export const themeSwitcherStyles = {
  themeBtn,
  icon,
}
