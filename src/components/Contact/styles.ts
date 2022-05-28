import {styled, theme} from '../../stitches.config';

export const Container = styled('div', {
  backgroundColor: theme.colors.background2
});
export const ContainerAbout = styled('div', {
  maxWidth: 'min(1000px, 90%)',
  margin: '0 auto',
  padding: '10rem 0 10rem 0'
});

export const HeaderAbout = styled('div', {
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

export const BoxContacts = styled('div', {
  marginTop: '10rem',
  width: '100%',
  '@bp2': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around'
  }
});
export const ContactDetails = styled('div', {
  margin: '5rem 0 5rem 0',
  display: 'flex',
  alignItems: 'center',
  gap: '2rem'
});
export const InfoContact = styled('div', {});
export const TitleContact = styled('h1', {
  fontSize: '2rem'
});
export const SubTitleContact = styled('h2', {
  fontSize: '2rem',
  fontWeight: 300
});
