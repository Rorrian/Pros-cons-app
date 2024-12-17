import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

import { SIDEBAR_WIDTH } from '@/helpers/constants'
import { responsiveStyle } from '@/helpers/responsive'
import {
  flexCentered,
  flexColumn,
  flexRow,
  fullHeight,
} from '@/styles/shared.css'
import { vars } from '@/theme/theme.css'

const wrapper = recipe(
  {
    base: [
      {
        // Вариант со "статичным меню"
        // position: 'relative',
        // backgroundColor: 'rgba(255, 255, 255, 0.05)',

        // Вариант с "летающим меню"
        position: 'fixed',
        zIndex: 1,

        height: '100vh',
        width: `${SIDEBAR_WIDTH}px`,
        borderRadius: `0px ${vars.borderRadius.small} ${vars.borderRadius.small} 0px`,
        padding: `${vars.spaces.sm} 0`,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        transition: `background-color ${vars.transition} boxShadow${vars.transition}`,
      },
      responsiveStyle({
        tablet: {
          borderRadius: 'unset',
          maxWidth: 'unset',
        },
      }),
    ],
    variants: {
      isCollapsed: {
        true: {},
        false: {
          backgroundColor: vars.themeVariables.background.primary,
          boxShadow:
            '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        },
      },
    },
    defaultVariants: {
      isCollapsed: true,
    },
  },
  'wrapper',
)

const inner = recipe(
  {
    base: [
      flexColumn,
      fullHeight,
      {
        position: 'relative',

        padding: vars.spaces.md,

        transition: `opacity ${vars.transition}`,
      },
    ],
    variants: {
      isCollapsed: {
        true: { opacity: 0 },
        false: {
          opacity: 1,
        },
      },
    },
    defaultVariants: {
      isCollapsed: true,
    },
  },
  'inner',
)

const toggleButton = style(
  [
    flexRow,
    flexCentered,
    {
      position: 'absolute',
      top: '1.5%',
      left: '23%',
      zIndex: 2,

      width: vars.iconSizes.lg,
      height: vars.iconSizes.lg,

      backgroundColor: 'unset',
      color: vars.themeVariables.content.primary,

      transition: `color ${vars.transition}`,

      cursor: 'pointer',
    },
    responsiveStyle({
      tablet: {
        top: vars.spaces.sm,
        left: 'unset',
        right: vars.spaces.sm,

        opacity: 1,
      },
    }),
  ],
  'toggleButton',
)

export const sidebarStyles = {
  wrapper,
  inner,
  toggleButton,
}
