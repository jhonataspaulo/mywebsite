import {useColor} from '../../hooks/useColor';
import {styled} from '../../stitches.config';

const Wrapper = styled('div', {
  '& .header': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    '& .titleSkill': {
      fontSize: '1.4rem',
      fontWeight: 600
    }
  },

  '& .underBar': {
    width: '100%',
    height: '1.5rem',
    marginTop: '.2rem',
    borderRadius: '1.5rem',

    '& .mainBar': {
      height: '1.5rem',
      borderRadius: '1.5rem'
    }
  }
});

type SkillDetailProps = {
  percent: number;
  title: string;
};

export function SkillDetail(props: SkillDetailProps) {
  const {colorTheme} = useColor();

  return (
    <Wrapper
      css={{
        '& .underBar': {
          backgroundColor: `$${colorTheme.color}Opacity`
        },

        '& .underBar .mainBar': {
          backgroundColor: `$${colorTheme.color}`
        }
      }}
    >
      <div className="header">
        <span className="titleSkill">{props.title}</span>
        <span className="percent">{props.percent}%</span>
      </div>
      <div className="underBar">
        <div className="mainBar" style={{width: `${props.percent}%`}} />
      </div>
    </Wrapper>
  );
}
