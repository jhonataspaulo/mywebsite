import {Color} from '../../context/ColorContext';
import {styled} from '../../stitches.config';

const Wrapper = styled('div', {});

type SquareProps = {
  theme: Color;
};

export function Square({theme}: SquareProps) {
  return (
    <Wrapper
      css={{
        '& svg rect:first-child': {
          stroke: `$${theme.color}`
        },

        '@bp1': {
          display: 'none'
        }
      }}
    >
      <svg
        width="85"
        height="162"
        viewBox="0 0 85 162"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="1.25712"
          y="-67.3474"
          width="204.03"
          height="204.03"
          stroke="#56FF9A"
          strokeWidth="1.40194"
        />
        <rect
          x="26.0611"
          y="-42.9514"
          width="204.03"
          height="204.03"
          stroke="#3F3F3F"
          strokeWidth="1.40194"
        />
      </svg>
    </Wrapper>
  );
}
