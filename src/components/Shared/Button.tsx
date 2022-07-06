import {styled} from '../../stitches.config';

type ButtonProps = {
  children: React.ReactNode;
  color: string;
};

const Wrapper = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1rem',
  padding: '.8rem 3rem',
  fontSize: '2rem',
  fontWeight: 600,
  borderRadius: '.4rem'
});

export function Button({children, color}: ButtonProps) {
  return (
    <Wrapper
      css={{
        backgroundColor: `$${color}`
      }}
    >
      {children}
    </Wrapper>
  );
}
