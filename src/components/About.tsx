import Image from 'next/image';
import {styled} from '../stitches.config';
import {Section} from './Shared/Section';

import imageProfile from '../assets/profile.png';
import {Download} from './Shared/Icons';
import {Button} from './Shared/Button';
import {useColor} from '../hooks/useColor';

const Wrapper = styled('div', {
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

const HeaderSection = styled('div', {
  '& h1': {
    fontSize: '6rem'
  },
  '& h4': {
    fontSize: '3rem',
    fontWeight: 200
  }
});

const Content = styled('div', {
  display: 'grid',
  gap: '4rem',
  gridTemplateColumns: '30rem 1fr',
  marginTop: '10rem',

  '& .reveal': {
    position: 'relative',
    transform: 'translateY(150px)',
    opacity: 0,
    transition: '1s all ease',

    '&.active': {
      transform: 'translateY(0)',
      opacity: 1
    }
  },

  '@bp2': {
    gridTemplateColumns: '20rem 1fr'
  },

  '@bp1': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
});

const BoxImage = styled('div', {
  width: '80%',
  aspectRatio: '1/1',
  borderRadius: '50%',
  overflow: 'hidden',
  border: '.4rem solid #fff',

  '@bp1': {
    width: '80%'
  }
});

const Text = styled('div', {
  '& p': {
    fontSize: '2.5rem',
    fontWeight: 200,
    lineHeight: '4rem',
    marginBottom: '2.5rem',
    marginTop: '2.5rem',
    color: '$text500'
  }
});

export function About() {
  const {colorTheme} = useColor();

  return (
    <Wrapper id="about">
      <Section pt={10} ptm={4} className="reveal">
        <HeaderSection
          css={{
            '& h1': {
              color: `$${colorTheme.color}`
            }
          }}
        >
          <h1>Sobre mim</h1>
          <h4>um pouco sobre mim</h4>
        </HeaderSection>
        <Content>
          <BoxImage
            css={{
              backgroundColor: `$${colorTheme.color}`
            }}
          >
            <Image src={imageProfile} alt="imagem de perfil" />
          </BoxImage>
          <Text>
            <p>
              Ol??, meu nome ?? <strong>Jhonatas Paulo</strong>, Tenho 26 anos, e
              sou amante do design e apaixonado por tecnologia. Trabalho com
              desenvolvimento web h?? mais de 4 anos, e h?? 2 anos como UI
              Designer, desenvolvendo apps mobile e desktop. Sou adepto da
              ideologia do clean design, clean code, boas pr??ticas e todos os
              dias com trabalhos melhores que outros, espero que possamos nos
              conhecer melhor, bater um papo legal, e quem sabe n??o fazemos um
              site incr??vel pra voc??.
            </p>
            <a
              href="curriculum.pdf"
              download="Curriculum de Jhonatas Paulo (Desenvolvedor Web Fullstack)"
            >
              <Button color={colorTheme.color} variant="secondary">
                <span>Download CV</span>
                <Download variant="secondary" color={colorTheme.color} />
              </Button>
            </a>
          </Text>
        </Content>
      </Section>
    </Wrapper>
  );
}
