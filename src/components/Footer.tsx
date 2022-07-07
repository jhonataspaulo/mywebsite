import {useColor} from '../hooks/useColor';
import {styled} from '../stitches.config';
import {Button} from './Shared/Button';
import {
  Facebook,
  Github,
  Instagram,
  LinkedIn,
  Twitter,
  WhatsApp
} from './Shared/Icons';
import {Section} from './Shared/Section';

const Wrapper = styled('div', {
  '& .section': {
    display: 'flex',
    justifyContent: 'space-between',

    '@bp1': {
      flexDirection: 'column'
    }
  },

  '& .reveal': {
    position: 'relative',
    transform: 'translateY(150px)',
    opacity: 0,
    transition: '1s all ease',

    '&.active': {
      transform: 'translateY(0)',
      opacity: 1
    }
  }
});

const Left = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  '& strong': {
    fontSize: '4rem',
    maxWidth: '50%',

    '@bp1': {
      maxWidth: '100%'
    }
  },

  '& > span': {
    fontSize: '2rem',
    textAlign: 'center'
  },

  '@bp1': {
    alignItems: 'center'
  }
});

const Links = styled('div', {
  display: 'flex',
  gap: '1rem',
  marginTop: '2rem',

  '& a': {
    fontSize: '1.5rem',
    cursor: 'pointer',
    userSelect: 'none'
  }
});

const Right = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',

  '& p': {
    marginTop: '1rem',
    fontSize: '1.6rem',
    textAlign: 'center'
  },

  '@bp1': {
    alignItems: 'center',
    gap: '2rem'
  }
});

const SocialLinks = styled('div', {
  display: 'flex',
  gap: '1.5rem',
  marginTop: '2rem',
  marginBottom: '1rem',

  '@bp1': {
    gap: '2rem',
    marginTop: '4rem'
  }
});

export function Footer() {
  const {colorTheme} = useColor();

  const goTo = (elem: any) => {
    window.scroll({
      top: document.querySelector(elem).offsetTop,
      left: 0,
      behavior: 'smooth'
    });
  };

  return (
    <Wrapper id="contact">
      <Section pt={10} ptm={10} className="section reveal" pb={6}>
        <Left
          css={{
            '& strong span': {
              color: `$${colorTheme.color}`
            }
          }}
        >
          <strong>
            Jhonatas <span>Paulo</span>
          </strong>
          <span>UI Designer e Desenvolvedor Web FullStack</span>
          <Links
            css={{
              '& a:hover': {
                color: `$${colorTheme.color}`
              }
            }}
          >
            <a onClick={() => goTo('#home')}>HOME</a>
            <a onClick={() => goTo('#about')}>SOBRE MIM</a>
            <a onClick={() => goTo('#skills')}>HABILIDADES</a>
          </Links>
        </Left>
        <Right>
          <SocialLinks>
            <Github
              config={{
                scale: true,
                hover: colorTheme.color,
                cpointer: true,
                size: 30
              }}
            />
            <Facebook
              config={{
                scale: true,
                hover: colorTheme.color,
                cpointer: true,
                size: 30
              }}
            />
            <Twitter
              config={{
                scale: true,
                hover: colorTheme.color,
                cpointer: true,
                size: 30
              }}
            />
            <LinkedIn
              config={{
                scale: true,
                hover: colorTheme.color,
                cpointer: true,
                size: 30
              }}
            />
            <Instagram
              config={{
                scale: true,
                hover: colorTheme.color,
                cpointer: true,
                size: 30
              }}
            />
          </SocialLinks>
          <Button color={colorTheme.color} variant="primary">
            <WhatsApp variant="primary" size={25} />
            WhatsApp
          </Button>
          <p>
            Copyright 2022 © <strong>Jhonataspaulo</strong> todos os direitos
            reservados
          </p>
        </Right>
      </Section>
    </Wrapper>
  );
}
