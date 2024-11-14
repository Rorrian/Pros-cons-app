import { globalStyle, style } from '@vanilla-extract/css'

import { responsiveStyle } from '@/helpers/responsive'
import { flexCentered, flexRow } from '@/styles/shared.css'
import { vars } from '@/theme/theme.css'
import typographyCss from '@/theme/typography.css'

const header = style([flexRow, flexCentered], 'header')

const dropdownWrapper = style(
  {
    position: 'absolute',
    top: '10px',
    left: '10px',
  },
  'dropdownWrapper',
)

const dropdownBtn = style(
  {
    ...responsiveStyle({
      tablet: {
        padding: '4px',
      },
    }),
  },
  'dropdownBtn',
)

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
globalStyle(`${title} span:last-of-type b`, {
  color: vars.content.red,
})

const icon = style(
  [
    flexCentered,
    {
      width: '2rem',
      height: '2rem',
    },
    responsiveStyle({
      tablet: {
        width: '1.5rem',
        height: '1.5rem',
      },
    }),
  ],
  'icon',
)

const themeBtn = style(
  [
    dropdownBtn,
    {
      position: 'absolute',
      top: '10px',
      right: '10px',
    },
  ],
  'themeBtn',
)

export const headerStyles = {
  header,
  dropdownWrapper,
  dropdownBtn,
  icon,
  title,
  themeBtn,
}
