import { globalStyle, style } from '@vanilla-extract/css'

import { vars } from '@/theme/theme.css'
import typographyCss from '@/theme/typography.css'

const title = style(
  [
    typographyCss.title.h1,
    {
      textAlign: 'center',
      textShadow: vars.themeVariables.textShadow,
    },
  ],
  'title',
)
globalStyle(`${title} span b`, {
  color: vars.content.green,
})
globalStyle(`${title} span:last-of-type span b`, {
  color: vars.content.red,
})

export const headerTitleStyles = {
  title,
}
