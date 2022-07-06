import React from 'react';
import {styled} from '../../stitches.config';

export const Wrapper = styled('div', {
  width: 'min(120rem, 90%)',
  margin: '0 auto'
});

type LayoutProps = {
  /**
   * Any Component React Node
   * Insert into component Section
   * @example
   * <Section>
   *    <AnyComponentNode /> //this children
   * </Section>
   */
  children: React.ReactNode;
  /**
   * Padding Top in rem
   * @example 2, 3, 5, .5, .7
   */
  pt?: number;
  /**
   * Padding Bottom in rem
   * @example 2, 3, 5, .5, .7
   */
  pb?: number;
  /**
   * Padding Left in rem
   * @example 2, 3, 5, .5, .7
   */
  pl?: number;
  /**
   * Padding Right in rem
   * @example 2, 3, 5, .5, .7
   */
  pr?: number;
  /**
   * Padding Top mobile in rem
   * @example 2, 3, 5, .5, .7
   */
  ptm?: number;
  /**
   * Margin Top in rem
   * @example 2, 3, 5, .5, .7
   */
  mt?: number;
  /**
   * Margin Top mobile in rem
   * @example 2, 3, 5, .5, .7
   */
  mtm?: number;
  /**
   * Insert className in sectin
   * @example <Section className="any class"></Section>
   */
  className?: string;
};

export function Section({
  children,
  pt = 0,
  pb = 0,
  pl = 0,
  pr = 0,
  ptm = 0,
  mt = 0,
  mtm = 0,
  className = ''
}: LayoutProps) {
  return (
    <Wrapper
      className={className}
      css={{
        paddingTop: `${pt}rem`,
        paddingBottom: `${pb}rem`,
        paddingLeft: `${pl}rem`,
        paddingRight: `${pr}rem`,
        marginTop: `${mt}rem`,

        '@bp1': {
          paddingTop: `${ptm}rem`,
          marginTop: `${mtm}rem`
        }
      }}
    >
      {children}
    </Wrapper>
  );
}
