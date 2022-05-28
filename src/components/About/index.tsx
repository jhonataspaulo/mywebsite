import {
  Container,
  ContainerAbout,
  HeaderAbout,
  Header,
  Title,
  Subtitle,
  TextAbout
} from './styles';

export function About() {
  return (
    <Container>
      <ContainerAbout id="about">
        <HeaderAbout>
          <Header>
            <Title>Quem Sou</Title>
            <Subtitle>Um pouco sobre mim</Subtitle>
          </Header>
          <svg
            width="70"
            height="67"
            viewBox="0 0 90 87"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.5">
              <rect
                x="0.5"
                y="26.9"
                width="59"
                height="59"
                stroke="white"
                strokeOpacity="0.3"
              />
              <rect x="30.5" y="0.5" width="59" height="59" stroke="#56FF9A" />
            </g>
          </svg>
        </HeaderAbout>
        <TextAbout>
          Amante do design e apaixonado por tecnologia. Trabalhei em algumas
          áreas do design, como em marketing para redes sociais, mas sempre tive
          mais foco em UI Design e Desenvolvimento Web, estou aprendendo e me
          especializando também em UI Design para dispositivos mobile. Espero
          que possamos nos aproximar e crescer juntos.
        </TextAbout>
      </ContainerAbout>
    </Container>
  );
}
