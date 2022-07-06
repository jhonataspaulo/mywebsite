import Image from 'next/image';
import {styled} from '../stitches.config';
import {Section} from './Shared/Section';

import imageProfile from '../assets/profile.png';
import {Download} from './Shared/Icons';
import {Button} from './Shared/Button';
import {useColor} from '../hooks/useColor';

export const Wrapper = styled('div', {});

export const HeaderSection = styled('div', {
  '& h1': {
    fontSize: '6rem'
  },
  '& h4': {
    fontSize: '3rem',
    fontWeight: 200
  }
});

export const Content = styled('div', {
  display: 'grid',
  gap: '4rem',
  gridTemplateColumns: '30rem 1fr',
  marginTop: '4rem',

  '@bp2': {
    gridTemplateColumns: '20rem 1fr'
  },

  '@bp1': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
});

export const BoxImage = styled('div', {
  width: '80%',
  aspectRatio: '1/1',
  borderRadius: '50%',
  overflow: 'hidden',
  border: '.4rem solid #fff',

  '@bp1': {
    width: '80%'
  }
});

export const Text = styled('div', {
  '& p': {
    fontSize: '2.5rem',
    fontWeight: 200,
    lineHeight: '4rem',
    marginBottom: '2.5rem'
  }
});

export function About() {
  const {colorTheme, setColor} = useColor();

  return (
    <Wrapper id="about">
      <Section pt={4} ptm={5}>
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
              Olá, meu nome é Jhonatas Paulo, Tenho 26 anos, e sou amante do
              design e apaixonado por tecnologia. Trabalho com desenvolvimento
              web há mais de 4 anos, e há 2 anos como UI Designer, desenvolvendo
              apps mobile e desktop. Sou adepto da ideologia do clean design,
              clean code, boas práticas e todos os dias com trabalhos melhores
              que outros, espero que possamos nos conhecer melhor, bater um papo
              legal, e quem sabe não fazemos um site incrível pra você.
            </p>
            <Button color={colorTheme.color}>
              <span>Download CV</span>
              <Download />
            </Button>
          </Text>
        </Content>
      </Section>
    </Wrapper>
  );
}
