import { style } from '@vanilla-extract/css'

import { responsiveStyle } from '@/shared/helpers/responsive'
import { alignItemsCentered, flexRow } from '@/shared/styles/shared.css'
import { vars } from '@/shared/theme/theme.css'
import typographyCss from '@/shared/theme/typography.css'

const wrapper = style(
  [
    flexRow,
    alignItemsCentered,
    {
      justifyContent: 'space-between',

      padding: `${vars.spaces.sm} ${vars.spaces.md}`,
      borderBottom: vars.border.grey,
    },

    responsiveStyle({
      tablet: {
        position: 'fixed',
        zIndex: 2,

        width: '100%',
        backgroundColor: vars.themeVariables.background.primary,
        padding: `${vars.spaces.xs} ${vars.spaces.sm}`,
      },
      mobile: {
        padding: vars.spaces.xs,
      },
    }),
  ],
  'wrapper',
)

const titleWrapper = style(
  [
    flexRow,
    alignItemsCentered,
    {
      justifyContent: 'space-between',
      columnGap: vars.spaces.md,
    },
    responsiveStyle({
      tablet: {
        columnGap: vars.spaces.sm,
      },
    }),
  ],
  'titleWrapper',
)

const title = style(
  [
    typographyCss.title.h3,
    {
      marginBottom: '-20px',
    },

    responsiveStyle({
      tablet: {
        marginBottom: '-16px',
      },
    }),
  ],
  'title',
)

const buttons = style(
  [
    flexRow,
    alignItemsCentered,
    {
      // justifyContent: 'space-between',
      columnGap: vars.spaces.sm,
    },
  ],
  'buttons',
)
const dropdown = style(
  [
    {
      // position: 'absolute',
      // top: vars.spaces.md,
      // right: '64px',
      // height: '40px',
      // height: 'auto',
    },
    // responsiveStyle({
    //   tablet: {
    //     height: '32px',
    //   },
    // }),
  ],
  'dropdown',
)

const themeSwitcher = style(
  {
    //   position: 'absolute',
    //   top: vars.spaces.md,
    //   right: vars.spaces.md,
  },
  'themeSwitcher',
)

export const headerStyles = {
  wrapper,
  titleWrapper,
  title,
  buttons,
  dropdown,
  themeSwitcher,
}
