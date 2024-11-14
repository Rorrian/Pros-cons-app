import {
  createGlobalTheme,
  createTheme,
  createThemeContract,
} from '@vanilla-extract/css'

const root = createGlobalTheme(':root', {
  content: {
    darkGrey: '#222222',
    white: '#ffffff',
    lightGrey: '#b3b3b3',

    green: '#60cc78',
    red: '#ea4f4a',

    disabled: '#b5b0b0',
    error: '#ff0700',
  },

  background: {
    secondary: '#eaeaea',

    green: '#60cc78',
    lightGreen: '#9fedb0',
    red: '#ea4f4a',
    lightOrange: '#ffae71',

    disabled: '#efedeb',
    transparent: 'rgba(255, 255, 255, 0.14)',
  },

  border: {
    red: '2px solid #ff0700',
    grey: '2px solid #b5b0b0',
    yellow: '2px solid #f606',
  },

  borderRadius: {
    big: '12px',
    small: '8px',
    round: '50%',
  },

  transition: '0.3s ease-in-out',
})

const themeVariables = createThemeContract({
  content: {
    primary: null,
    tertiary: null,
  },

  background: {
    primary: null,
  },
  pageBackground: null,
  textShadow: null,
})

export const lightTheme = createTheme(themeVariables, {
  content: {
    primary: '#222222',
    tertiary: '#ffffff',
  },

  background: {
    primary: '#ffffff',
  },
  pageBackground: 'url(/background/bgDay.webp)',
  textShadow: '1px 1px #fff, 2px 2px #777',
})

export const darkTheme = createTheme(themeVariables, {
  content: {
    primary: '#ffffff',
    tertiary: '#222222',
  },

  background: {
    primary: '#222222',
  },
  pageBackground: 'url(/background/bgNight.webp)',
  textShadow: '1px 1px #fff, 2px 2px #222',
})

export const vars = { ...root, themeVariables }
