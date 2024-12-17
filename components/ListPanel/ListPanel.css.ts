import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

import { responsiveStyle } from '@/helpers/responsive'
import { flexColumn, flexRow, fullWidth } from '@/styles/shared.css'
import { vars } from '@/theme/theme.css'

const wrapper = style(
  [
    flexColumn,
    {
      rowGap: vars.spaces.lg,

      marginTop: vars.spaces.xl,
    },
  ],
  'wrapper',
)

const list = style(
  [
    flexColumn,
    {
      rowGap: vars.spaces.sm,

      marginTop: vars.spaces.lg,
    },
  ],
  'list',
)

const item = recipe(
  {
    base: [
      flexRow,
      {
        zIndex: 2,

        borderRadius: vars.borderRadius.small,
        border: '2px solid transparent',
        transition: `background-color ${vars.transition} color ${vars.transition} border ${vars.transition}`,

        color: vars.themeVariables.content.tertiary,

        selectors: {
          '&&:hover': {
            backgroundColor: vars.themeVariables.background.tertiary,
          },
        },
      },
    ],
    variants: {
      isSelected: {
        true: {
          backgroundColor: vars.themeVariables.background.tertiary,
        },
        false: {},
      },
      isEditing: {
        true: {
          border: vars.border.yellow,
        },
        false: {},
      },
    },
    defaultVariants: {
      isSelected: false,
      isEditing: false,
    },
  },
  'item',
)

const listItem = style(
  [
    fullWidth,
    {
      textAlign: 'start',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      color: vars.themeVariables.content.primary,
      transition: `color ${vars.transition}`,

      padding: vars.spaces.md,
      backgroundColor: 'transparent',
      cursor: 'pointer',
    },
  ],
  'listItem',
)

const actionButtons = recipe(
  {
    base: [
      flexRow,
      {
        transition: `opacity ${vars.transition}`,
      },
    ],
    variants: {
      isSelected: {
        true: {
          opacity: 0.7,

          selectors: {
            '&&:hover': {
              opacity: 1,
            },
          },

          ...responsiveStyle({
            tablet: {
              opacity: 1,
            },
          }),
        },
        false: {
          opacity: 0,
          pointerEvents: 'none',
        },
      },
    },
    defaultVariants: {
      isSelected: false,
    },
  },
  'actionButtons',
)

const actionButton = style(
  {
    backgroundColor: 'transparent !important',
  },
  'actionButton',
)

export const listStyles = {
  wrapper,
  list,
  item,
  listItem,
  actionButtons,
  actionButton,
}
