import { style } from '@vanilla-extract/css'

import { responsiveStyle } from '@/shared/helpers/responsive'
import { flexColumn, fullWidth } from '@/shared/styles/shared.css'
import { vars } from '@/shared/theme/theme.css'

export const table = style(
  [
    flexColumn,
    fullWidth,
    {
      justifyContent: 'space-between',
      columnGap: vars.spaces.sm,

      minWidth: '300px',

      ...responsiveStyle({
        tablet: {
          maxWidth: '500px',
        },
      }),
    },
  ],
  'table',
)

export const tableStyles = {
  table,
}
