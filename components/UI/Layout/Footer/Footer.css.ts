import { style } from '@vanilla-extract/css'

import typographyCss from '@/theme/typography.css'

const wrapper = style(
  {
    flex: '0 0 auto',

    marginTop: 'auto',
  },
  'wrapper',
)

const shareBtn = style(
  [
    typographyCss.button.small,
    {
      minWidth: '100px',
      margin: '0 auto',
      whiteSpace: 'nowrap',
    },
  ],
  'shareBtn',
)

export const footerStyles = {
  wrapper,
  shareBtn,
}
