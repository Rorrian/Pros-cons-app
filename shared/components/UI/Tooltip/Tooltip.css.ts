import { ComplexStyleRule, globalStyle, style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

import { responsiveStyle } from '@/shared/helpers/responsive'
import {
  alignItemsCentered,
  flexRow,
  justifyContentCenter,
} from '@/shared/styles/shared.css'
import { vars } from '@/shared/theme/theme.css'
import typographyCss from '@/shared/theme/typography.css'

type TooltipPositionVariantsType = {
  position: Record<'top' | 'bottom', ComplexStyleRule | string>
}

const wrapper = style(
  [
    flexRow,
    alignItemsCentered,
    justifyContentCenter,
    {
      alignSelf: 'center',

      position: 'relative',

      width: vars.iconSizes.sm,
      height: vars.iconSizes.sm,
    },
  ],
  'wrapper',
)
globalStyle(`${wrapper} svg`, {
  color: vars.content.darkGrey,
})

const questionMark = style(
  {
    opacity: 0.7,
  },
  'questionMark',
)

const inner = recipe<TooltipPositionVariantsType>(
  {
    base: [
      typographyCss.caption.regular,
      {
        position: 'absolute',
        left: '50%',
        zIndex: 2,
        transform: 'translateX(-50%)',

        padding: vars.spaces.sm,
        backgroundColor: vars.themeVariables.background.primaryTransparent,
        border: `1px solid ${vars.themeVariables.content.primary}`,
        borderRadius: vars.borderRadius.small,

        color: vars.themeVariables.content.primary,

        transition: `color ${vars.transition} border ${vars.transition} background-color ${vars.transition}`,

        ...responsiveStyle({
          tablet: {
            right: 0,
            left: 'unset',
            transform: 'unset',
          },
        }),
      },
    ],
    variants: {
      position: {
        top: {
          bottom: vars.spaces.xl,

          ...responsiveStyle({
            mobile: {
              bottom: vars.spaces.lg,
            },
          }),
        },
        bottom: {
          top: vars.spaces.xl,

          ...responsiveStyle({
            mobile: {
              top: vars.spaces.lg,
            },
          }),
        },
      },
    },
    defaultVariants: {
      position: 'bottom',
    },
  },
  'inner',
)

const text = style(
  {
    minWidth: '200px',
  },
  'text',
)

export const tooltipStyles = {
  wrapper,
  questionMark,
  inner,
  text,
}
