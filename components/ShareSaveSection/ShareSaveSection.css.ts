import { style } from '@vanilla-extract/css'

import typographyCss from '@/theme/typography.css'

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

export const shareSaveSectionStyles = {
  shareBtn,
}
