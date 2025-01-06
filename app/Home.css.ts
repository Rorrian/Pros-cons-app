import { style } from '@vanilla-extract/css'

import { responsiveStyle } from '@/shared/helpers/responsive'
import {
  flexColumn,
  flexRow,
  fullHeight,
  fullWidth,
} from '@/shared/styles/shared.css'
import { vars } from '@/shared/theme/theme.css'

const main = style(
  [
    flexColumn,
    {
      backgroundColor: vars.themeVariables.background.primary,
      color: vars.themeVariables.content.primary,
      transition: `background-color ${vars.transition} color ${vars.transition}`,
    },
  ],
  'main',
)

const outerWrapper = style(
  [
    flexRow,
    fullHeight,
    {
      position: 'relative',

      minHeight: 'calc(100vh - 60px)',
      selectors: {
        '&&:before': {
          content: '',
          position: 'absolute',
          inset: 0,
          zIndex: 0,

          backgroundImage: vars.themeVariables.pageBackground,
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          transition: `background-image ${vars.transition}`,
        },
      },
    },

    responsiveStyle({
      tablet: {
        paddingTop: '49px',
      },
    }),
  ],
  'outerWrapper',
)

const wrapper = style(
  [
    flexColumn,
    fullHeight,
    fullWidth,
    {
      alignItems: 'center',
      rowGap: vars.spaces.xxl,

      position: 'relative',

      minHeight: '100%',
      padding: `${vars.spaces.xl} ${vars.spaces.xxl} ${vars.spaces.xl}`,
    },
    responsiveStyle({
      tablet: {
        rowGap: vars.spaces.xl,

        backgroundAttachment: 'unset',
        padding: `${vars.spaces.xl} 40px ${vars.spaces.xl}`,
      },
      mobile: {
        rowGap: vars.spaces.lg,

        padding: vars.spaces.lg,
      },
    }),
  ],
  'wrapper',
)

const inner = style(
  [
    flexColumn,
    {
      flex: '1 0 auto',
      alignItems: 'center',
      rowGap: vars.spaces.xl,

      zIndex: 0,
    },
    responsiveStyle({
      tablet: {
        rowGap: vars.spaces.lg,
      },
      mobile: {
        rowGap: vars.spaces.md,
      },
    }),
  ],
  'inner',
)

const caption = style(
  {
    marginTop: 'auto',

    textAlign: 'center',
  },
  'caption',
)

export const homeStyles = {
  main,
  outerWrapper,
  wrapper,
  inner,
  caption,
}
