import {globalCss} from '../stitches.config';

export const globalStyles = globalCss({
  '*': {margin: 0, padding: 0},
  body: {
    boxSizing: 'border-box',
    overflowX: 'hidden',
    color: '$text',
    backgroundColor: '$background',
    fontWeight: 400
  },
  html: {
    fontSize: '62.5%',
    fontFamily: "'Outfit', system-ui, sans-serif"
  },
  a: {
    textDecoration: 'none',
    color: '$text'
  },
  button: {
    border: 'none'
  }
});
