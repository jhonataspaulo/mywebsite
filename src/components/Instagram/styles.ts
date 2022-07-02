import {styled, theme} from '../../stitches.config';

export const Container = styled('div', {
  backgroundColor: theme.colors.background2
});
export const Content = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  maxWidth: 'min(1000px, 90%)',
  margin: '0 auto',
  padding: '10rem 0 10rem 0',

  position: 'relative',
  transform: 'translateY(150px)',
  opacity: 0,
  transition: '1s all ease',

  '&.active': {
    transform: 'translateY(0)',
    opacity: 1
  }
});

export const HeaderInstagram = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
});
export const Header = styled('div', {
  width: '100%',
  textAlign: 'center'
});

export const Title = styled('h1', {
  fontSize: '4rem',
  color: theme.colors.primary,
  whiteSpace: 'wrap'
});
export const Subtitle = styled('h2', {
  fontSize: '2.5rem',
  fontWeight: 300,
  marginTop: '1rem',
  whiteSpace: 'wrap'
});

export const Feed = styled('div', {
  display: 'flex',
  width: '100%',
  overflowX: 'auto',
  gap: '.5rem',
  marginTop: '4rem',
  padding: '1rem 0',

  '@bp1': {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr'
  },

  '&::-webkit-scrollbar': {
    height: '.8rem'
  },
  '&::-webkit-scrollbar-track': {
    background: '$background1'
  },
  '&::-webkit-scrollbar-thumb': {
    background: '$primary'
  },
  '&::-webkit-scrollbar-thumb:hover': {
    background: '$primary'
  }
});

export const Box = styled('div', {
  aspectRatio: '1',
  minWidth: 'min(30rem, 100%)',
  display: 'flex',
  alignItems: 'center',
  overflow: 'hidden'
});

export const Post = styled('img', {
  width: '100%',
  height: 'auto'
});
