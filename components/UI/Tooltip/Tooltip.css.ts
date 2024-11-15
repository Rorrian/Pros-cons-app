import { globalStyle, style } from '@vanilla-extract/css'

import { vars } from '@/theme/theme.css'
import typographyCss from '@/theme/typography.css'

const wrapper = style(
  {
    position: 'relative',

    alignSelf: 'center',

    width: '18px',
    height: '18px',
  },
  'wrapper',
)
globalStyle(`${wrapper} svg`, {
  color: vars.themeVariables.content.primary,
  transition: `color ${vars.transition}`,
})

const inner = style(
  [
    typographyCss.caption.regular,
    {
      position: 'absolute',
      top: '35px',
      left: '50%',
      zIndex: 10,
      transform: 'translateX(-50%)',

      minWidth: '150px',
      padding: '8px',
      backgroundColor: vars.themeVariables.background.primaryTransparent,
      border: `1px solid ${vars.themeVariables.content.primary}`,
      borderRadius: vars.borderRadius.small,

      color: vars.themeVariables.content.primary,

      transition: `color ${vars.transition}, border ${vars.transition}, background-color ${vars.transition}`,
    },
  ],
  'inner',
)

export const tooltipStyles = {
  wrapper,
  inner,
}
