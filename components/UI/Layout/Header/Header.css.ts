import { globalStyle, style } from '@vanilla-extract/css'

import { responsiveStyle } from '@/helpers/responsive'
import { flexCentered, flexRow } from '@/styles/shared.css'
import { vars } from '@/theme/theme.css'
import typographyCss from '@/theme/typography.css'

const wrapper = style([flexRow, flexCentered], 'wrapper')

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

const title = style(
  [
    typographyCss.title.h1,
    {
      textAlign: 'center',
      textShadow: vars.themeVariables.textShadow,
    },
  ],
  'title',
)
globalStyle(`${title} span b`, {
  color: vars.content.green,
})
globalStyle(`${title} span:last-of-type span b`, {
  color: vars.content.red,
})

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

export const headerStyles = {
  wrapper,
  dropdownWrapper,
  dropdownBtn,
  title,
  icon,
}
