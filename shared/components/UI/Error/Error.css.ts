import { style } from '@vanilla-extract/css'

import { vars } from '@/shared/theme/theme.css'
import typographyCss from '@/shared/theme/typography.css'

const text = style(
  [
    typographyCss.paragraph.medium,
    {
      fontWeight: 700,
      color: vars.content.error,
      textShadow: '#fff 0px 0px 3px',
    },
  ],
  'text',
)

export const errorStyles = {
  text,
}
