import {styled} from '../../../stitches.config';
import {IconProps} from './TypesIcons';

const Container = styled('div', {});

export const Twitter = ({
  config: {
    color = '$text',
    hover = 'primary',
    cpointer = false,
    onclick,
    size = 32,
    scale = false
  }
}: IconProps) => (
  <Container
    css={{
      '& svg path': {
        fill: `${color}`
      },

      '& svg:hover path': {
        fill: `$${hover}`
      },

      '& svg': {
        width: size * 1.3,
        height: size * 1.3,
        transition: 'all 500ms',

        '&:hover': {
          transform: scale ? 'scale(1.1)' : 'scale(1)'
        },
        '@bp0': {
          width: size * 1.1,
          height: size * 1.1
        }
      },
      cursor: cpointer ? 'pointer' : ''
    }}
    onClick={onclick}
  >
    <svg
      width={size}
      height={size}
      viewBox="0 0 42 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.3877 0.543591C24.4202 0.53802 28.3637 1.7289 31.7194 3.96554C35.075 6.20218 37.6918 9.38407 39.2389 13.1086C40.7859 16.8332 41.1936 20.933 40.4103 24.8893C39.627 28.8456 37.688 32.4807 34.8385 35.3345C31.9891 38.1883 28.3573 40.1327 24.4027 40.9216C20.4481 41.7105 16.3484 41.3084 12.6223 39.7663C8.89619 38.2241 5.71119 35.6113 3.47027 32.2582C1.22935 28.9052 0.033214 24.9626 0.0332101 20.9295C0.0309911 18.2541 0.555756 15.6045 1.57753 13.132C2.59931 10.6595 4.09808 8.41257 5.98825 6.51949C7.87841 4.62641 10.1229 3.12429 12.5936 2.09894C15.0643 1.07358 17.7128 0.545069 20.3877 0.543591V0.543591ZM32.3048 13.5297C31.4097 13.9243 30.4609 14.1834 29.4895 14.2984C30.5114 13.6866 31.2743 12.7222 31.6348 11.5869C30.6791 12.1594 29.6312 12.5614 28.5379 12.7751C27.866 12.0618 26.9953 11.5666 26.0387 11.3539C25.0821 11.1411 24.0837 11.2206 23.1727 11.5819C22.2618 11.9433 21.4804 12.5698 20.9296 13.3805C20.3788 14.1912 20.0841 15.1486 20.0837 16.1287C20.0798 16.508 20.1233 16.8864 20.2132 17.255C18.2656 17.1554 16.3608 16.6473 14.6225 15.7634C12.8842 14.8795 11.3512 13.6398 10.1232 12.1247C9.50022 13.204 9.31011 14.4797 9.59126 15.6938C9.8724 16.9079 10.6038 17.9701 11.6378 18.6656C10.8622 18.6402 10.1038 18.4308 9.42499 18.0546V18.1109C9.42348 19.2416 9.81279 20.338 10.527 21.2145C11.2412 22.091 12.2363 22.6936 13.3439 22.9202C12.9264 23.0336 12.4955 23.0905 12.0629 23.0892C11.753 23.0882 11.4438 23.058 11.1395 22.9991C11.45 23.9728 12.0577 24.8249 12.8772 25.4355C13.6967 26.046 14.6869 26.3845 15.7087 26.4033C13.9765 27.7645 11.8363 28.5025 9.63332 28.4982C9.24761 28.5001 8.86214 28.4785 8.47906 28.4334C10.7159 29.8719 13.3197 30.6353 15.979 30.6325C24.9879 30.6325 29.8977 23.168 29.8977 16.7003C29.8977 16.4834 29.8977 16.2751 29.8977 16.0667C30.853 15.3727 31.6775 14.5147 32.333 13.5326L32.3048 13.5297Z"
      />
    </svg>
  </Container>
);
