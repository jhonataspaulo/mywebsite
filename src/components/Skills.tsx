import {useColor} from '../hooks/useColor';
import {styled} from '../stitches.config';
import {Section} from './Shared/Section';
import {SkillDetail} from './Shared/SkillDetail';
import {SkillGroup} from './Shared/SkillGroup';

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
  paddingTop: '6rem',
  display: 'flex',
  gap: '4rem',
  justifyContent: 'center',

  '@bp1': {
    flexDirection: 'column',
    alignItems: 'center'
  }
});

export function Skills() {
  const {colorTheme, setColor} = useColor();

  return (
    <Wrapper id="skills">
      <Section pt={15} ptm={15} className="reveal">
        <HeaderSection
          css={{
            '& h1': {
              color: `$${colorTheme.color}`
            }
          }}
        >
          <h1>Habilidades</h1>
          <h4>Algumas ferramentas com que trabalho</h4>
        </HeaderSection>
        <Content>
          <SkillGroup title="Frontend" description="">
            <SkillDetail title="HTML" percent={90} />
            <SkillDetail title="CSS" percent={90} />
            <SkillDetail title="Sass" percent={80} />
            <SkillDetail title="JavaScript" percent={80} />
            <SkillDetail title="React Js" percent={80} />
          </SkillGroup>

          <SkillGroup title="Backend" description="">
            <SkillDetail title="Git" percent={80} />
            <SkillDetail title="REST API" percent={70} />
            <SkillDetail title="GraphQL" percent={80} />
            <SkillDetail title="NodeJs" percent={80} />
            <SkillDetail title="MongoDB" percent={70} />
            <SkillDetail title="MySQL" percent={70} />
            <SkillDetail title="TypeScript" percent={80} />
          </SkillGroup>

          <SkillGroup title="UI Design / Design Gráfico" description="">
            <SkillDetail title="Figma" percent={80} />
            <SkillDetail title="Photoshop" percent={65} />
            <SkillDetail title="Illustrator" percent={65} />
            <SkillDetail title="CorelDraw" percent={75} />
          </SkillGroup>
        </Content>
      </Section>
    </Wrapper>
  );
}
