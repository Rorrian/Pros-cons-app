import { style } from '@vanilla-extract/css'

import { flexColumn } from '@/styles/shared.css'
import { vars } from '@/theme/theme.css'

const button = style(
  {
    marginBottom: '6px',
  },
  'button',
)

const list = style(
  [
    flexColumn,
    {
      position: 'relative',
      zIndex: 1,

      gap: '6px',

      padding: '4px',
      backgroundColor: vars.background.transparent,
      borderRadius: vars.borderRadius.small,
      overflow: 'hidden',
    },
  ],
  'list',
)

const option = style(
  {
    justifyContent: 'flex-start',

    width: '100%',
  },
  'option',
)

export const dropdownStyles = {
  button,
  list,
  option,
}
