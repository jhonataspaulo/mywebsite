import {styled, theme} from '../../stitches.config';

export const Container = styled('div', {
  backgroundColor: theme.colors.background2
});
export const ContainerAbout = styled('div', {
  maxWidth: 'min(1000px, 90%)',
  margin: '0 auto',
  padding: '5rem 0 0 0',
  // '& svg': {
  //   filter: 'brightness(.4)'
  // }
  position: 'relative',
  transform: 'translateY(150px)',
  opacity: 0,
  transition: '1s all ease',

  '&.active': {
    transform: 'translateY(0)',
    opacity: 1
  }
});

export const HeaderAbout = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
});
export const Header = styled('div', {});

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
export const TextAbout = styled('p', {
  padding: '4.6rem 0 0 0 ',
  fontSize: '2rem',
  lineHeight: '3rem',
  fontWeight: 300
});
