import {styled} from '../../stitches.config';

type ButtonProps = {
  children: React.ReactNode;
  color: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
};

const Wrapper = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1rem',
  padding: '.8rem 3rem',
  fontSize: '1.8rem',
  fontWeight: 600,
  borderRadius: '.4rem',
  cursor: 'pointer'
});

export function Button({
  children,
  color,
  onClick,
  variant = 'primary'
}: ButtonProps) {
  if (variant === 'primary') {
    return (
      <Wrapper
        onClick={onClick}
        css={{
          backgroundColor: `$${color}`,

          transition: 'all 500ms ease',

          '&:hover': {
            transform: 'scale(1.05)'
          }
        }}
      >
        {children}
      </Wrapper>
    );
  } else {
    return (
      <Wrapper
        onClick={onClick}
        css={{
          color: `$${color}`,
          backgroundColor: 'transparent',
          border: `.1rem solid $${color}`,
          transition: 'all 500ms ease',

          '&:hover': {
            backgroundColor: `$${color}`,
            color: '$background'
          },

          '&:hover svg path': {
            fill: '$background'
          }
        }}
      >
        {children}
      </Wrapper>
    );
  }
}
