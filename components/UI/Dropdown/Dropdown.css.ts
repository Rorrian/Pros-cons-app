import { style } from '@vanilla-extract/css'

import { responsiveStyle } from '@/helpers/responsive'
import { flexColumn, fullWidth } from '@/styles/shared.css'
import { vars } from '@/theme/theme.css'

const wrapper = style(
  {
    position: 'relative',
  },
  'wrapper',
)

const button = style(
  {
    marginBottom: vars.spaces.md,

    ...responsiveStyle({
      mobile: {
        marginBottom: vars.spaces.sm,
      },
    }),
  },
  'button',
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
  button,
  list,
  option,
}
