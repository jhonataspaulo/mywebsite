import {IconProps} from './TypesIcons';

export function MenuOpen({config: {onclick}}: IconProps) {
  return (
    <svg
      onClick={onclick}
      width="31"
      height="31"
      viewBox="0 0 31 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.558838 18.1316H30.5588V13.1316H0.558838V18.1316ZM0.558838 30.6316H30.5588V25.6316H0.558838V30.6316ZM0.558838 0.631592V5.63159H30.5588V0.631592H0.558838Z"
        fill="white"
      />
    </svg>
  );
}
