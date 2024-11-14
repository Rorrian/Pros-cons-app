import { style } from '@vanilla-extract/css'

import { responsiveStyle } from '@/helpers/responsive'
import { flexColumn } from '@/styles/shared.css'
import { vars } from '@/theme/theme.css'

const main = style(
  [
    flexColumn,
    {
      alignItems: 'center',
      rowGap: '35px',

      position: 'relative',

      minHeight: '100vh',
      width: '100%',
      padding: '32px 48px 0px',

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
          // transition: 'background-image 0.3s ease-in-out',
          transition: `background-image ${vars.transition}`,
        },
      },
    },
    responsiveStyle({
      tablet: {
        rowGap: '20px',

        backgroundAttachment: 'unset',
        padding: '32px 40px 32px',
      },
      mobile: {
        rowGap: '16px',

        padding: '24px 40px 28px 24px',
      },
    }),
  ],
  'main',
)

export const homeStyles = {
  main,
}
