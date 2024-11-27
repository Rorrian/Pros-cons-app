import { style } from '@vanilla-extract/css'

import { responsiveStyle } from '@/helpers/responsive'
import { flexColumn, fullWidth } from '@/styles/shared.css'

export const table = style(
  [
    flexColumn,
    fullWidth,
    {
      minWidth: '503px',

      ...responsiveStyle({
        tablet: {
          minWidth: '45vw',
        },
      }),
    },
  ],
  'table',
)

export const tableStyles = {
  table,
}
