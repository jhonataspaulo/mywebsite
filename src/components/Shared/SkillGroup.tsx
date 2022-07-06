import {useColor} from '../../hooks/useColor';
import {styled} from '../../stitches.config';

const Wrapper = styled('div', {
  width: 'min(40rem, 90%)',
  padding: '3rem 2rem',
  backgroundColor: '#111111',
  borderRadius: '1rem',
  border: '.1rem solid #111111',

  '& .titleGroup': {
    fontSize: '2rem',
    fontWeight: 700,
    display: 'block'
  },

  '& .description': {
    fontSize: '1.4rem',
    display: 'block'
  },

  '& .skillsList': {
    padding: '1rem 0',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    marginTop: '1rem'
  }
});

type SkillGroupProps = {
  title: string;
  description: string;
  children: React.ReactNode;
};

export function SkillGroup(props: SkillGroupProps) {
  const {colorTheme} = useColor();

  const color =
    colorTheme.color === 'primary'
      ? '#56FF9A;'
      : colorTheme.color === 'orange'
      ? 'rgba(246, 177, 0, 1)'
      : 'rgba(0, 170, 224, 1)';

  return (
    <Wrapper
      css={{
        transition: 'all 500ms ease',

        '&:hover': {
          border: `.1rem solid $${colorTheme.color}`,
          transform: 'scale(1.01)',
          boxShadow: `.1rem .1rem .8rem -.1rem ${color}`
        }
      }}
    >
      <strong className="titleGroup">{props.title}</strong>
      <span className="description">{props.description}</span>
      <div className="skillsList">{props.children}</div>
    </Wrapper>
  );
}
