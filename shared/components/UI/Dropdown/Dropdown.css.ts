import { style } from '@vanilla-extract/css'

import { responsiveStyle } from '@/shared/helpers/responsive'
import { flexColumn, fullWidth } from '@/shared/styles/shared.css'
import { vars } from '@/shared/theme/theme.css'

const wrapper = style(
  {
    position: 'relative',
  },
  'wrapper',
)

const list = style(
  [
    flexColumn,
    {
      position: 'absolute',
      right: 0,
      zIndex: 1,

      gap: vars.spaces.sm,

      padding: vars.spaces.xs,
      backgroundColor: vars.background.transparent,
      borderRadius: vars.borderRadius.small,
      overflow: 'hidden',

      marginTop: vars.spaces.lg,
      ...responsiveStyle({
        mobile: {
          marginTop: vars.spaces.sm,
        },
      }),
    },
  ],
  'list',
)

const option = style(
  [
    fullWidth,
    {
      justifyContent: 'flex-start',
    },
  ],
  'option',
)

export const dropdownStyles = {
  wrapper,
  list,
  option,
}
