import { style } from '@vanilla-extract/css'

import { vars } from '@/theme/theme.css'
import typographyCss from '@/theme/typography.css'

export const flexRow = style(
  {
    display: 'flex',
    flexDirection: 'row',
  },
  'flexColumn',
)

export const flexColumn = style(
  {
    display: 'flex',
    flexDirection: 'column',
  },
  'flexColumn',
)

export const flexCentered = style(
  {
    justifyContent: 'center',
    alignItems: 'center',
  },
  'flexCentered',
)

export const justifyContentCenter = style(
  {
    justifyContent: 'center',
  },
  'justifyContentCenter',
)

export const justifyContentStart = style(
  {
    justifyContent: 'start',
  },
  'justifyContentStart',
)

export const alignItemsCentered = style(
  {
    alignItems: 'center',
  },
  'alignItemsCentered',
)

export const errorText = style(
  [
    typographyCss.caption.small,
    {
      position: 'absolute',
      bottom: '-16px',
      left: 0,
      right: 0,

      fontWeight: 700,
      color: vars.content.error,
      textShadow: '#fff 0px 0px 3px',
      whiteSpace: 'nowrap',
    },
  ],
  'errorText',
)

export const fullHeight = style(
  {
    height: '100%',
  },
  'fullHeight',
)

export const fullWidth = style(
  {
    width: '100%',
  },
  'fullWidth',
)

export const overflowXHidden = style(
  {
    overflowX: 'hidden',
  },
  'overflowXHidden',
)
