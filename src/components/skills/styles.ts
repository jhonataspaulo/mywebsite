import {styled, theme} from '../../stitches.config';

export const Container = styled('div', {
  backgroundColor: theme.colors.background2
});
export const ContainerAbout = styled('div', {
  maxWidth: 'min(1000px, 90%)',
  margin: '0 auto',
  padding: '10rem 0 0 0'
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

export const SkillsBox = styled('div', {
  marginTop: '5rem',
  '@bp2': {
    display: 'flex',
    gap: '2rem'
  }
});
export const SkillContainer = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
});
export const HeaderSkill = styled('div', {
  display: 'flex',
  gap: '2rem',
  marginTop: '5rem'
});
export const InfoSkill = styled('div', {
  '& h1': {
    fontSize: '2.3rem'
  },

  '& h2': {
    fontSize: '2rem',
    fontWeight: 300
  }
});
export const LogosContainer = styled('div', {
  width: 'min(30rem, 100%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  margin: '2rem 0',
  backgrounColor: theme.colors.background1,
  border: `.1rem solid ${theme.colors.primary}`,
  padding: '2rem',
  borderRadius: '1.5rem'
});
