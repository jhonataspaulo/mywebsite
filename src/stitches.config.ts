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
      text500: '#A5A4A4',
      background: '#0C0C0C',
      primary: 'rgba(86, 255, 154, 1)',
      primaryOpacity: 'rgba(86, 255, 154, .1)',
      orange: 'rgba(246, 177, 0, 1)',
      orangeOpacity: 'rgba(246, 177, 0, .1)',
      blue: 'rgba(0, 170, 224, 1)',
      blueOpacity: 'rgba(0, 170, 224, .1)'
    }
  },
  media: {
    bp0: '(max-width: 300px)',
    bp1: '(max-width: 640px)',
    bp2: '(max-width: 768px)',
    bp3: '(max-width: 1024px)'
  }
});
