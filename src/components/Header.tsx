import {styled} from '../stitches.config';
import {Section} from './Shared/Section';
import {useColor} from '../hooks/useColor';
import backgroundImage from '../assets/background.png';
import {Facebook, Github, Instagram, LinkedIn, Twitter} from './Shared/Icons';

const Wrapper = styled('div', {
  background: `url(${backgroundImage.src})`,
  backgroundPosition: '68% 0',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'fixed',
  minHeight: '100vh',

  '& .sectAbs': {
    position: 'relative'
  },

  '& .bio': {
    minHeight: 'calc(100vh - 5.5rem)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  }
});

const Navigation = styled('div', {
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-around',
  top: 0,
  bottom: 0,
  right: 0,
  gap: '1rem',

  '& a': {
    transform: 'rotate(-90deg)',
    fontWeight: 600,
    fontSize: '1.1rem',
    padding: '1rem'
  },

  '@bp1': {
    display: 'none'
  }
});

const Colors = styled('div', {
  display: 'flex',
  gap: '1.5rem',

  '& .color': {
    width: '2.5rem',
    height: '2.5rem',
    borderRadius: '50%',
    cursor: 'pointer'
  },

  '& .color:first-child': {
    backgroundColor: '$primary'
  },

  '& .color:nth-child(2)': {
    backgroundColor: '$orange'
  },

  '& .color:last-child': {
    backgroundColor: '$blue'
  }
});

const InfoProfile = styled('div', {
  marginTop: '-6rem',

  '& h1': {
    fontWeight: 700,
    fontSize: '8rem',

    '& span': {
      fontWeight: 200
    }
  },

  '& > span': {
    display: 'block',
    fontSize: '2.5rem',

    '@bp1': {
      marginTop: '3rem'
    }
  }
});

const SocialLinks = styled('div', {
  display: 'flex',
  gap: '1.5rem',
  marginTop: '3rem',

  '@bp1': {
    gap: '2rem'
  }
});

export function Header() {
  const {colorTheme, setColor} = useColor();

  return (
    <Wrapper id="home">
      <Section pt={3} ptm={3} className="sectAbs">
        <Navigation
          css={{
            '& a:hover': {
              color: `$${colorTheme.color}`
            }
          }}
        >
          <a href="">HOME</a>
          <a href="">SOBRE MIM</a>
          <a href="">HABILIDADES</a>
          <a href="">TRABALHOS</a>
          <a href="">CONTATO</a>
        </Navigation>
        <Colors>
          <div className="color" onClick={() => setColor({color: 'primary'})} />
          <div className="color" onClick={() => setColor({color: 'orange'})} />
          <div className="color" onClick={() => setColor({color: 'blue'})} />
        </Colors>
        <div className="bio">
          <InfoProfile
            css={{
              '& h1 span': {
                color: `$${colorTheme.color}`
              }
            }}
          >
            <h1>
              Jhonatas <span>Paulo</span>
            </h1>
            <span>UI Designer e Desenvolvedor Web FullStack</span>
          </InfoProfile>
          <SocialLinks>
            <Github
              config={{
                scale: true,
                hover: colorTheme.color,
                cpointer: true
              }}
            />
            <Facebook
              config={{
                scale: true,
                hover: colorTheme.color,
                cpointer: true
              }}
            />
            <Twitter
              config={{
                scale: true,
                hover: colorTheme.color,
                cpointer: true
              }}
            />
            <LinkedIn
              config={{
                scale: true,
                hover: colorTheme.color,
                cpointer: true
              }}
            />
            <Instagram
              config={{
                scale: true,
                hover: colorTheme.color,
                cpointer: true
              }}
            />
          </SocialLinks>
        </div>
      </Section>
    </Wrapper>
  );
}
