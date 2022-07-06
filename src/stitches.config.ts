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
      text: '#f2f2f2',
      background: '#0C0C0C',
      primary: '#56FF9A',
      orange: '#F6B100',
      blue: '#00AAE0'
    }
  },
  media: {
    bp0: '(max-width: 300px)',
    bp1: '(max-width: 640px)',
    bp2: '(max-width: 768px)',
    bp3: '(max-width: 1024px)'
  }
});
