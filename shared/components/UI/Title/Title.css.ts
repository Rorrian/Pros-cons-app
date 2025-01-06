import { ComplexStyleRule } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

import { vars } from '@/shared/theme/theme.css'
import { typographyObject } from '@/shared/theme/typography.css'

import { TitleHeadingType } from './Title'

type TitleVariantsType = {
  type: Record<TitleHeadingType, ComplexStyleRule | string>
}

const title = recipe<TitleVariantsType>(
  {
    base: {
      color: vars.themeVariables.content.primary,
      transition: `color  ${vars.transition}`,
    },
    variants: {
      type: {
        h1: typographyObject.title.h1,
        h2: typographyObject.title.h2,
        h3: typographyObject.title.h3,
        h4: typographyObject.title.h4,
      },
    },
    defaultVariants: {
      type: 'h3',
    },
  },
  'title',
)

export const titleStyles = {
  title,
}
