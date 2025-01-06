import { ComplexStyleRule, createVar, style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

import {
  alignItemsCentered,
  flexRow,
  justifyContentCenter,
  justifyContentStart,
} from '@/shared/styles/shared.css'
import { vars } from '@/shared/theme/theme.css'
import typographyCss from '@/shared/theme/typography.css'
import { Justify, Kind, Size } from '@/shared/types/button/enums'

const background = createVar('background')
const titleColor = createVar('titleColor')

type ButtonVariantsType = {
  disabled: Record<'true' | 'false', ComplexStyleRule | string>
  size: Record<Size, ComplexStyleRule | string>
  kind: Record<Kind, ComplexStyleRule | string>
  justify: Record<Justify, ComplexStyleRule | string>
}

type ButtonTitleVariantsType = {
  size: Record<Size, ComplexStyleRule | string>
}

const buttonVariants: ButtonVariantsType = {
  size: {
    big: {
      padding: `${vars.spaces.sm} ${vars.spaces.md}`,
      borderRadius: vars.borderRadius.small,
    },
    small: {
      padding: vars.spaces.sm,
      borderRadius: vars.borderRadius.big,
    },
  },
  justify: {
    [Justify.Center]: justifyContentCenter,
    [Justify.Start]: justifyContentStart,
  },
  kind: {
    [Kind.Primary]: {
      vars: {
        [background]: vars.themeVariables.background.primary,
        [titleColor]: vars.themeVariables.content.primary,
      },
    },
    [Kind.Secondary]: {
      vars: {
        [background]: vars.background.secondary,
        [titleColor]: vars.content.darkGrey,
      },
    },
    [Kind.Positive]: {
      vars: {
        [background]: vars.background.green,
        [titleColor]: vars.content.white,
      },
    },
    [Kind.Negative]: {
      vars: {
        [background]: vars.background.red,
        [titleColor]: vars.content.white,
      },
    },
    [Kind.Transparent]: {
      vars: {
        [background]: vars.background.transparent,
        [titleColor]: vars.content.white,
      },
    },
  },
  disabled: {
    true: {
      cursor: 'default',
      vars: {
        [background]: vars.background.disabled,
        [titleColor]: vars.content.disabled,
      },
    },
    false: '',
  },
}

const button = recipe(
  {
    base: [
      flexRow,
      alignItemsCentered,
      {
        backgroundColor: background,
        cursor: 'pointer',
        transition: `background-color ${vars.transition}`,
      },
    ],
    variants: buttonVariants,
    defaultVariants: {
      disabled: false,
      size: Size.Big,
      kind: Kind.Primary,
      justify: Justify.Center,
    },
  },
  'button',
)

const icon = style(
  {
    display: 'flex',
  },
  'icon',
)

const title = recipe<ButtonTitleVariantsType>(
  {
    base: {
      padding: `0px ${vars.spaces.sm}`,
      color: titleColor,
    },
    variants: {
      size: {
        big: [typographyCss.button.big],
        small: [typographyCss.button.small],
      },
    },
    defaultVariants: {
      size: Size.Big,
    },
  },
  'title',
)

export const buttonStyles = {
  icon,
  button,
  title,
}
