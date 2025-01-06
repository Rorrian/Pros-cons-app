import { style } from '@vanilla-extract/css'

import { responsiveStyle } from '@/shared/helpers/responsive'
import {
  alignItemsCentered,
  flexColumn,
  flexRow,
} from '@/shared/styles/shared.css'
import { vars } from '@/shared/theme/theme.css'
import typographyCss from '@/shared/theme/typography.css'

const form = style(
  [
    flexColumn,
    {
      gap: vars.spaces.md,
      alignItems: 'center',

      position: 'relative',
    },
  ],
  'form',
)

const inner = style(
  [
    flexRow,
    alignItemsCentered,
    {
      gap: vars.spaces.sm,
    },
  ],
  'inner',
)

const checkbox = style(
  [
    typographyCss.paragraph.regular,

    {
      marginLeft: vars.spaces.xs,
    },

    responsiveStyle({
      mobile: {
        color: `${vars.content.white} !important`,
      },
    }),
  ],
  'checkbox',
)

export const saveListFormStyles = {
  form,
  inner,
  checkbox,
}
