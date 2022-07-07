import {styled} from '../stitches.config';
import {Section} from './Shared/Section';
import {useColor} from '../hooks/useColor';
import backgroundImage from '../assets/background.png';
import {
  Facebook,
  Github,
  Instagram,
  LinkedIn,
  MenuOpen,
  Twitter
} from './Shared/Icons';
import {useState} from 'react';

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
    padding: '1rem',
    cursor: 'pointer',
    letterSpacing: '.3rem'
  },

  '@bp2': {
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

const BoxIcon = styled('div', {
  display: 'none',

  '@bp2': {
    display: 'block',
    position: 'absolute',
    top: '3rem',
    right: '3rem',
    cursor: 'pointer'
  }
});

const MenuMobile = styled('div', {
  display: 'none',
  position: 'fixed',
  zIndex: 10,

  '@bp2': {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',

    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.9)',

    '& a': {
      padding: '1rem',
      fontSize: '2rem',
      fontWeight: 600
    },

    '& a:last-child': {
      color: 'tomato'
    }
  }
});

export function Header() {
  const {colorTheme, setTheme} = useColor();
  const [isActive, setIsActive] = useState(false);

  const goTo = (elem: any) => {
    window.scroll({
      top: document.querySelector(elem).offsetTop,
      left: 0,
      behavior: 'smooth'
    });
    setIsActive(false);
  };

  function navigateTo(url: string) {
    window.open(url, '_blank');
  }

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
          <a onClick={() => goTo('#home')}>HOME</a>
          <a onClick={() => goTo('#about')}>SOBRE MIM</a>
          <a onClick={() => goTo('#skills')}>HABILIDADES</a>
          <a onClick={() => goTo('#contact')}>CONTATO</a>
        </Navigation>
        <Colors>
          <div className="color" onClick={() => setTheme({color: 'primary'})} />
          <div className="color" onClick={() => setTheme({color: 'orange'})} />
          <div className="color" onClick={() => setTheme({color: 'blue'})} />
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
                cpointer: true,
                onclick: () => navigateTo('https://github.com/jhonataspaulo')
              }}
            />
            <Facebook
              config={{
                scale: true,
                hover: colorTheme.color,
                cpointer: true,
                onclick: () =>
                  navigateTo('https://www.facebook.com/jhonataspaullo/')
              }}
            />
            <Twitter
              config={{
                scale: true,
                hover: colorTheme.color,
                cpointer: true,
                onclick: () => navigateTo('https://twitter.com/JhonatasPaulo')
              }}
            />
            <LinkedIn
              config={{
                scale: true,
                hover: colorTheme.color,
                cpointer: true,
                onclick: () =>
                  navigateTo('https://www.linkedin.com/in/jhonataspaulo/')
              }}
            />
            <Instagram
              config={{
                scale: true,
                hover: colorTheme.color,
                cpointer: true,
                onclick: () =>
                  navigateTo('https://www.instagram.com/jhonataspaullo/')
              }}
            />
          </SocialLinks>
        </div>
      </Section>
      <BoxIcon onClick={() => setIsActive(true)}>
        <MenuOpen config={{}} />
      </BoxIcon>
      {isActive && (
        <MenuMobile
          onClick={() => setIsActive(false)}
          css={{
            '& a:nth-child(-n+4):hover': {
              color: `$${colorTheme.color}`
            }
          }}
        >
          <a onClick={() => goTo('#home')}>HOME</a>
          <a onClick={() => goTo('#about')}>SOBRE MIM</a>
          <a onClick={() => goTo('#skills')}>HABILIDADES</a>
          <a onClick={() => goTo('#contact')}>CONTATO</a>
          <a onClick={() => setIsActive(false)}>FECHAR</a>
        </MenuMobile>
      )}
    </Wrapper>
  );
}
