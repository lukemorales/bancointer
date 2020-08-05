import styled, { css } from 'styled-components';
import { transparentize } from 'polished';

import Button from '../../../components/Button';

export const Container = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.background};
    max-width: 26.4rem;
    max-height: 60rem;
    width: 100%;
    height: 100%;
    border-radius: ${theme.radius.default};
    box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.08);
    padding: 2.4rem;
  `}
`;

export const AmountInvested = styled(Button)`
  && {
    ${({ theme }) => css`
      display: flex;
      justify-content: space-between;
      color: ${theme.colors.lightGrey};
      font-size: ${theme.fontSizes.small};
      width: 100%;
      margin: 0.8rem 0;
      background: ${`linear-gradient(90deg, ${theme.colors.secondary} 0%, ${theme.colors.primary} 100%);`};

      :hover {
        transform: scale(1.005);
        box-shadow: 0 0.4rem 0.4rem
          ${transparentize(0.72, theme.colors.secondary)};
      }
    `}
  }
`;
