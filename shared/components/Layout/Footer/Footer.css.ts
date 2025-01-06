import { style } from '@vanilla-extract/css'

import { fullWidth } from '@/shared/styles/shared.css'

const wrapper = style(
  [
    fullWidth,
    {
      zIndex: 0,

      flex: '0 0 auto',

      marginTop: 'auto',
    },
  ],
  'wrapper',
)

export const footerStyles = {
  wrapper,
}
