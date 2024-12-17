import { ComplexStyleRule, style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

import { responsiveStyle } from '@/helpers/responsive'
import {
  flexCentered,
  flexRow,
  fullHeight,
  fullWidth,
} from '@/styles/shared.css'
import { vars } from '@/theme/theme.css'
import typographyCss from '@/theme/typography.css'

import { table } from '../Tables/Table/Table.css'

type ColVariantsType = {
  isEditable: Record<'true' | 'false', ComplexStyleRule | string>
  isInversion: Record<'true' | 'false', ComplexStyleRule | string>
  isTitle: Record<'true' | 'false', ComplexStyleRule | string>
  isTotal: Record<'true' | 'false', ComplexStyleRule | string>
  isValid: Record<'true' | 'false', ComplexStyleRule | string>
}

const colVariants: ColVariantsType = {
  isTitle: {
    true: {
      border: 'none',

      fontWeight: 700,
      color: vars.themeVariables.content.tertiary,

      selectors: {
        [`${table}:first-child &:first-child`]: {
          backgroundColor: vars.background.green,
        },
        [`${table}:first-child &:nth-child(2)`]: {
          backgroundColor: vars.background.lightGreen,
        },
        [`${table}:last-child &:first-child`]: {
          backgroundColor: vars.background.red,
        },
        [`${table}:last-child &:nth-child(2)`]: {
          backgroundColor: vars.background.lightOrange,
        },
      },
    },
    false: {},
  },
  isInversion: {
    true: {
      selectors: {
        '&:first-of-type': {
          order: 1,

          ...responsiveStyle({
            mobile: {
              order: 'inherit',
            },
          }),
        },
        '&:last-of-type': {
          order: 0,

          ...responsiveStyle({
            mobile: {
              order: 'inherit',
            },
          }),
        },
      },
    },
    false: {},
  },
  isTotal: {
    true: {
      backgroundColor: vars.background.secondary,
      border: 'none',

      color: vars.content.darkGrey,
      fontWeight: 700,
    },
    false: {},
  },
  isValid: {
    true: {},
    false: {
      border: vars.border.red,
    },
  },
  isEditable: {
    true: {},
    false: {},
  },
}

const row = recipe(
  {
    base: [
      typographyCss.paragraph.regular,
      {
        position: 'relative',

        display: 'grid',
        columnGap: vars.spaces.sm,

        padding: vars.spaces.sm,

        selectors: {
          '&&:last-child': {
            marginTop: 'auto',
          },
        },

        ...responsiveStyle({
          mobile: {
            columnGap: vars.spaces.xs,

            paddingLeft: 0,
            marginRight: vars.spaces.md,
          },
        }),
      },
    ],
    variants: {
      isInversion: {
        true: {
          gridTemplateColumns: '22% 1fr',

          ...responsiveStyle({
            tablet: {
              gridTemplateColumns: '25% 1fr',
            },
            mobile: {
              gridTemplateColumns: '1fr 30%',
            },
          }),
        },
        false: {
          gridTemplateColumns: '1fr 22%',

          ...responsiveStyle({
            tablet: {
              gridTemplateColumns: '1fr 25%',
            },
            mobile: {
              gridTemplateColumns: '1fr 30%',
            },
          }),
        },
      },
    },
    defaultVariants: {
      isInversion: false,
    },
  },
  'row',
)

const col = recipe(
  {
    base: [
      flexRow,
      flexCentered,
      fullWidth,
      {
        position: 'relative',

        minHeight: '35.6px',
        border: vars.border.grey,
        padding: vars.spaces.xs,
        backgroundColor: vars.themeVariables.background.primary,
        borderRadius: vars.borderRadius.small,

        textAlign: 'center',

        transition: `border ${vars.transition} color  ${vars.transition} background-color ${vars.transition}`,

        ...responsiveStyle({
          tablet: {
            minHeight: '30px',
          },
          mobile: {
            minHeight: '25px',
          },
        }),
      },
    ],
    variants: colVariants,
    defaultVariants: {
      isEditable: true,
      isInversion: false,
      isTitle: false,
      isTotal: false,
      isValid: true,
    },
    compoundVariants: [
      {
        variants: {
          isEditable: true,
          isTitle: false,
          isTotal: false,
        },
        style: {
          color: vars.themeVariables.content.primary,

          selectors: {
            '&&:hover': {
              border: vars.border.yellow,
            },
          },
        },
      },
    ],
  },
  'col',
)

const input = style(
  [
    fullHeight,
    fullWidth,
    {
      position: 'relative',

      backgroundColor: 'inherit',

      color: 'inherit',

      selectors: {
        '&::-webkit-outer-spin-button': {
          ...{ '-webkit-appearance': 'none' },
          margin: 0,
        },
        '&::-webkit-inner-spin-button': {
          ...{ '-webkit-appearance': 'none' },
          margin: 0,
        },
        /* Для Firefox */
        "&[type='number']": {
          ...({
            '-moz-appearance': 'textfield',
          } as React.CSSProperties),
        },
        /* Для Edge и IE */
        '&::-ms-clear, &::-ms-reveal': {
          display: 'none',
          width: 0,
          height: 0,
        },
      },
    },
  ],
  'input',
)

const button = recipe(
  {
    base: [
      flexRow,
      flexCentered,
      {
        position: 'absolute',
        top: vars.spaces.sm,

        width: vars.iconSizes.sm,
        height: vars.iconSizes.sm,
        padding: 0,
        borderRadius: vars.borderRadius.round,

        opacity: '0.7',
        transition: `opacity ${vars.transition}`,

        selectors: {
          '&&:hover': {
            opacity: '1',
          },

          '&:first-of-type': {
            ...responsiveStyle({
              mobile: {
                right: '-20px',
                left: 'unset',
              },
            }),
          },
        },

        ...responsiveStyle({
          mobile: {
            opacity: '0.85',
          },
        }),
      },
    ],
    variants: {
      isInversion: {
        true: {
          right: '-20px',
        },
        false: {
          left: '-20px',
        },
      },
    },
    defaultVariants: {
      isInversion: true,
    },
  },
  'button',
)

const sortIcon = recipe(
  {
    base: {
      position: 'absolute',
      left: vars.spaces.xs,
      top: ' 50%',
      transform: 'translateY(-50%)',

      width: vars.iconSizes.md,
      height: vars.iconSizes.md,
      opacity: 0.5,

      ...responsiveStyle({
        tablet: {
          width: vars.iconSizes.sm,
          height: vars.iconSizes.sm,
        },
      }),
    },
    variants: {
      isSelected: {
        true: {
          opacity: 1,
        },
      },
    },
    defaultVariants: {
      isSelected: false,
    },
  },
  'sortIcon',
)

const tooltipWrapper = style(
  {
    position: 'absolute',
    right: vars.spaces.xs,
    top: ' 50%',
    transform: 'translateY(-50%)',
  },
  'tooltipWrapper',
)

const tooltipText = style(
  {
    minWidth: 'auto',
    whiteSpace: 'nowrap',
  },
  'tooltipText',
)

export const rowStyles = {
  row,
  col,
  input,
  button,
  sortIcon,
  tooltipWrapper,
  tooltipText,
}
