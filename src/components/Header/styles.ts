import {styled, theme} from '../../stitches.config';
import imageUrl from '../../assets/background.png';

export const Container = styled('div', {
  minHeight: '100vh',
  background: 'radial-gradient(50% 50% at 50% 50%, #181724 0%, #060310 100%)',

  '@bp2': {
    backgroundImage: `url(${imageUrl.src})`,
    backgroundPosition: '60% 0',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed'
  }
});

export const ContainerHeader = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  maxWidth: 'min(1000px, 90%)',
  minHeight: '100vh',
  margin: '0 auto',
  color: theme.colors.text
});

export const Navigation = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '3rem 0'
});

export const Links = styled('ul', {
  listStyle: 'none',
  display: 'none',
  gap: '5rem',
  '@bp2': {
    display: 'flex'
  }
});

export const Anchor = styled('li', {
  '& a': {
    fontSize: '1.8rem',
    color: theme.colors.text
  },

  '&:hover a': {
    color: theme.colors.primary
  }
});

export const Presentation = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  flex: 1,
  textAlign: 'center',
  '@bp2': {
    textAlign: 'start',
    alignItems: 'flex-start'
  }
});

export const Info = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginTop: '5rem',
  gap: '4rem',
  alignItems: 'center',
  width: '100%',

  '@bp2': {
    gap: '1rem',
    alignItems: 'flex-start'
  },

  '& span': {
    fontSize: '3rem',
    '@bp2': {
      fontSize: '4rem'
    }
  },

  '& h1': {
    fontSize: '7rem',
    color: theme.colors.primary,
    whiteSpace: 'wrap',
    fontWeight: 700
  },

  '& p': {
    fontSize: '2.5rem',
    fontWeight: 300,
    lineHeight: '3.5rem'
  }
});
export const WhatsAppButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  padding: '1.5rem 4rem',
  fontSize: '2rem',
  borderRadius: '2.5rem',
  border: `.1rem solid ${theme.colors.primary}`,
  margin: '4rem 0',
  color: theme.colors.text,
  backgroundColor: 'transparent',
  transition: 'all 500ms',
  '&:hover': {
    transform: 'scale(1.05)'
  }
});

export const MouseBox = styled('div', {
  marginBottom: '4rem',
  height: '8rem'
});

export const Mouse = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  fontSize: '1.5rem'
});

export const Line = styled('div', {
  width: '.1rem',
  height: '100%',
  backgroundColor: theme.colors.primary,
  marginLeft: '1.5rem',
  marginTop: '.5rem'
});

export const ToogleMenuMobile = styled('div', {
  '@bp2': {
    display: 'none'
  }
});

export const NavigationMobile = styled('div', {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  minHeight: '100vh',
  backgroundColor: theme.colors.background1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center'
});

export const LinksBoxMobile = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '8rem'
});
export const LinkMobile = styled('div', {
  '& a': {
    fontSize: '4rem',
    color: theme.colors.text
  }
});
export const ActiveButton = styled('div', {
  position: 'absolute',
  right: 20,
  top: 20
});
