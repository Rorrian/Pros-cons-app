import { styleVariants } from '@vanilla-extract/css'

import { responsiveStyle } from '@/helpers/responsive'

export const typographyObject = {
  title: {
    h1: {
      fontFamily: 'AlayaRoza',
      fontWeight: '600',
      lineHeight: 1,
      fontSize: '86px',
      letterSpacing: '-0.02em',
      textDecoration: 'none',

      ...responsiveStyle({
        tablet: {
          fontSize: '60px',
        },
        mobile: {
          fontWeight: '500',
          fontSize: '45px',
        },
      }),
    },
    h2: {
      fontFamily: 'AlayaRoza',
      fontWeight: '400',
      lineHeight: 1,
      fontSize: '60px',
      letterSpacing: '-0.01em',
      textDecoration: 'none',

      ...responsiveStyle({
        tablet: {
          fontSize: '48px',
        },
        mobile: {
          fontSize: '36px',
        },
      }),
    },
    h3: {
      fontFamily: 'AlayaRoza',
      fontWeight: '400',
      lineHeight: '24px',
      fontSize: '20px',
      letterSpacing: '-0.03em',
      textDecoration: 'none',
    },
    h4: {
      fontFamily: 'AlayaRoza',
      fontWeight: '400',
      lineHeight: '24px',
      fontSize: '20px',
      letterSpacing: '-0.03em',
      textDecoration: 'none',
    },
  },
  button: {
    big: {
      fontFamily: 'Inter',
      fontWeight: '500',
      lineHeight: '24px',
      fontSize: '18px',
      letterSpacing: '-0.03em',
      textDecoration: 'none',

      ...responsiveStyle({
        tablet: {
          lineHeight: '18px',
          fontSize: '16px',
        },
        mobile: {
          lineHeight: '16px',
          fontSize: '14px',
        },
      }),
    },
    small: {
      fontFamily: 'Inter',
      fontWeight: '500',
      lineHeight: '16px',
      fontSize: '13px',
      letterSpacing: '-0.02em',
      textDecoration: 'none',

      ...responsiveStyle({
        tablet: {
          lineHeight: '14px',
          fontSize: '12px',
        },
        mobile: {
          lineHeight: '12px',
          fontSize: '10px',
        },
      }),
    },
  },
  paragraph: {
    regular: {
      fontFamily: 'Inter',
      fontWeight: '400',
      lineHeight: '24px',
      fontSize: '16px',
      letterSpacing: '-0.012em',
      textDecoration: 'none',

      ...responsiveStyle({
        tablet: {
          lineHeight: '18px',
          fontSize: '14px',
        },
        mobile: {
          lineHeight: '16px',
          fontSize: '12px',
        },
      }),
    },
    medium: {
      fontFamily: 'Inter',
      fontWeight: '500',
      lineHeight: '24px',
      fontSize: '16px',
      letterSpacing: '-0.012em',
      textDecoration: 'none',
    },
  },
  caption: {
    regular: {
      fontFamily: 'Inter',
      fontWeight: '400',
      lineHeight: '16px',
      fontSize: '13px',
      letterSpacing: '-0.02em',
      textDecoration: 'none',
    },
    medium: {
      fontFamily: 'Inter',
      fontWeight: '500',
      lineHeight: '16px',
      fontSize: '13px',
      letterSpacing: '-0.02em',
      textDecoration: 'none',
    },
    small: {
      fontFamily: 'Inter',
      fontWeight: '500',
      lineHeight: '13px',
      fontSize: '10px',
      letterSpacing: '-0.02em',
      textDecoration: 'none',
    },
  },
} as const

export default {
  title: styleVariants(typographyObject.title),
  button: styleVariants(typographyObject.button),
  paragraph: styleVariants(typographyObject.paragraph),
  caption: styleVariants(typographyObject.caption),
} as const
