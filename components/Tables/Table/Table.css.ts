import { style } from '@vanilla-extract/css'

import { responsiveStyle } from '@/helpers/responsive'
import { flexColumn } from '@/styles/shared.css'

export const table = style(
  [
    flexColumn,
    {
      width: '100%',
      minWidth: '484px',
    },

    responsiveStyle({
      tablet: {
        minWidth: '45vw',
      },
    }),
  ],
  'table',
)

export const tableStyles = {
  table,
}
