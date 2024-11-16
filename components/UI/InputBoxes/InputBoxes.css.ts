import { style } from '@vanilla-extract/css'

import { responsiveStyle } from '@/helpers/responsive'
import { flexCentered, flexRow } from '@/styles/shared.css'
import { vars } from '@/theme/theme.css'

export const textfield = style(
  {
    textAlign: 'center',
  },
  'textfield',
)

export const textarea = style(
  {
    resize: 'none',
    paddingRight: '20px',

    textAlign: 'center',

    ...responsiveStyle({
      mobile: {
        gridTemplateColumns: '1fr 40%',

        textAlign: 'left',
      },
    }),
  },
  'textarea',
)

export const clearButton = style(
  [
    flexRow,
    flexCentered,
    {
      position: 'absolute',
      top: '5px',
      right: '5px',
      zIndex: 1,

      width: '15px',
      height: '15px',
      cursor: 'pointer',
      backgroundColor: vars.background.secondary,
      borderRadius: vars.borderRadius.round,
      opacity: 0,
      transition: `opacity  ${vars.transition}`,

      selectors: {
        [`${textarea}:focus+&&`]: {
          opacity: 1,
        },
      },
    },
  ],
  'clearButton',
)

export const inputBoxesStyles = { textfield, textarea, clearButton }
