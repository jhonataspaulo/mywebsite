import {styled, theme} from '../../stitches.config';

export const Container = styled('div', {
  backgroundColor: theme.colors.background1
});
export const ContainerAbout = styled('div', {
  maxWidth: 'min(1000px, 90%)',
  margin: '0 auto',
  padding: '5rem 0 5rem 0',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '3rem'
});

export const SocialLinks = styled('div', {
  display: 'flex',
  gap: '1.4rem',
  cursor: 'pointer',
  '& button': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.background1,
    padding: '.3rem',
    borderRadius: '50%'
  },

  '& svg:hover path': {
    fill: theme.colors.primary
  }
});
export const Links = styled('ul', {
  listStyle: 'none',
  display: 'flex',
  flexWrap: 'wrap',
  gap: '1.5rem'
});

export const Link = styled('li', {
  '& a': {
    color: theme.colors.text,
    fontSize: '1.8rem'
  },
  '& a:hover': {
    color: theme.colors.primary
  }
});
export const Copy = styled('p', {
  fontSize: '1.8rem',
  textAlign: 'center',
  fontWeight: 300
});
