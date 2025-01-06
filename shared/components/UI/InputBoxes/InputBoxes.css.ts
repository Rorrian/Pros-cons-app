import { style } from '@vanilla-extract/css'

import { responsiveStyle } from '@/shared/helpers/responsive'
import { flexCentered, flexRow } from '@/shared/styles/shared.css'
import { vars } from '@/shared/theme/theme.css'

export const textfield = style(
  {
    textAlign: 'center',
  },
  'textfield',
)

export const textarea = style(
  {
    resize: 'none',
    paddingRight: vars.spaces.lg,

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
      top: vars.spaces.xs,
      right: vars.spaces.xs,
      zIndex: 1,

      width: '16px',
      height: '16px',
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
