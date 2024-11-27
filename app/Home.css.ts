import { style } from '@vanilla-extract/css'

import { responsiveStyle } from '@/helpers/responsive'
import { flexColumn, fullHeight, fullWidth } from '@/styles/shared.css'
import { vars } from '@/theme/theme.css'

const wrapper = style(
  [
    flexColumn,
    fullHeight,
    fullWidth,
    {
      alignItems: 'center',
      rowGap: vars.spaces.xxl,

      position: 'relative',

      minHeight: '100vh',
      padding: `${vars.spaces.xl} ${vars.spaces.xxl} ${vars.spaces.xl}`,

      selectors: {
        '&&:before': {
          content: '',
          position: 'absolute',
          inset: 0,
          zIndex: '-1',

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

export const homeStyles = {
  wrapper,
  inner,
}
