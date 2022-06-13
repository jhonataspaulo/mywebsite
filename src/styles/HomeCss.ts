import {css} from '../stitches.config';

export const homeStyles = css({
  '.reveal': {
    position: 'relative',
    transform: 'translateY(150px)',
    opacity: 0,
    transition: '1s all ease'
  },

  '.reveal.active': {
    transform: 'translateY(0)',
    opacity: 1
  }
});
