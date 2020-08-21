import styled, { css } from 'styled-components';
import { transparentize } from 'polished';

import { Wrapper as HeaderWrapper } from '../Header/styles';

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 3.2rem;
`;

export const Wrapper = styled(HeaderWrapper)`
  ${({ theme }) => css`
    height: auto;
    padding: 1.6rem 0;
    align-items: center;

    h4 {
      color: ${theme.colors.secondary};
      font-size: ${theme.fontSizes.default};
    }

    span {
      display: block;
      font-size: ${theme.fontSizes.small};

      :first-of-type {
        margin-bottom: 0.8rem;
      }
    }

    > img {
      margin-top: 1.6rem;
    }
  `}
`;

export const FooterSection = styled(Container)<{ background?: string }>`
  ${({ theme, background }) => css`
    background: ${background || transparentize(0.92, theme.colors.grey)};
    margin-top: 0;

    :last-of-type {
      ${Wrapper} {
        padding: 2.4rem 0;
      }
    }
  `}
`;
