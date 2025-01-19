import { style } from '@vanilla-extract/css'

import { responsiveStyle } from '@/shared/helpers/responsive'
import { flexRow, fullWidth } from '@/shared/styles/shared.css'

const tableWrapper = style(
  [
    flexRow,
    fullWidth,

    responsiveStyle({
      mobile: {
        flexDirection: 'column',

        maxWidth: '500px',
      },
    }),
  ],
  'tableWrapper',
)

export const tablesStyles = {
  tableWrapper,
}
