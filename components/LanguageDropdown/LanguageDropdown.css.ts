import { style } from '@vanilla-extract/css'

import { responsiveStyle } from '@/helpers/responsive'
import { flexCentered } from '@/styles/shared.css'
import { vars } from '@/theme/theme.css'

const dropdownWrapper = style(
  {
    position: 'absolute',
    top: vars.spaces.md,
    left: vars.spaces.md,
  },
  'dropdownWrapper',
)

const dropdownBtn = style(
  {
    ...responsiveStyle({
      tablet: {
        padding: vars.spaces.xs,
      },
    }),
  },
  'dropdownBtn',
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
  dropdownWrapper,
  dropdownBtn,
  icon,
}
