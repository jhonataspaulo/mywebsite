import {createStitches} from '@stitches/react';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config
} = createStitches({
  theme: {
    colors: {
      text: 'black',
      background: 'white',
      primary: '#3d3d3d',
      background1: '#c2c2c2',
      background2: '#f2f2f2'
    }
  },
  media: {
    bp1: '(min-width: 640px)',
    bp2: '(min-width: 768px)',
    bp3: '(min-width: 1024px)'
  }
});

export const dark = createTheme({
  colors: {
    text: 'white',
    background: 'black',
    primary: 'hsla(144, 100%, 67%, 1)',
    background1: 'hsla(249, 35%, 7%, 1)',
    background2: 'hsla(249, 24%, 11%, 1)'
  },
  space: {},
  fonts: {}
});
