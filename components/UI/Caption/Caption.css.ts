import { style } from '@vanilla-extract/css'

import { vars } from '@/theme/theme.css'
import typographyCss from '@/theme/typography.css'

const text = style(
  [
    typographyCss.paragraph.medium,
    {
      fontStyle: 'italic',
      color: vars.themeVariables.content.primary,
    },
  ],
  'text',
)

export const captionStyles = {
  text,
}
