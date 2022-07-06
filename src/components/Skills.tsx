import {useColor} from '../hooks/useColor';
import {styled} from '../stitches.config';
import {Section} from './Shared/Section';
import {SkillDetail} from './Shared/SkillDetail';
import {SkillGroup} from './Shared/SkillGroup';

const Wrapper = styled('div', {});

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
      <Section pt={15} ptm={15}>
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
            <SkillDetail title="CSS" percent={85} />
            <SkillDetail title="JavaScript" percent={70} />
            <SkillDetail title="React Js" percent={80} />
          </SkillGroup>

          <SkillGroup title="Backend" description="">
            <SkillDetail title="React Native" percent={85} />
            <SkillDetail title="Google Play Store" percent={85} />
            <SkillDetail title="Apple Store" percent={70} />
          </SkillGroup>

          <SkillGroup title="UI Design" description="">
            <SkillDetail title="C#" percent={60} />
            <SkillDetail title="NodeJs" percent={85} />
            <SkillDetail title="MySQL" percent={80} />
            <SkillDetail title="Python" percent={70} />
          </SkillGroup>
        </Content>
      </Section>
    </Wrapper>
  );
}
