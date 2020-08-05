import styled, { css } from 'styled-components';

import { Container as Button } from '../../../../components/Button/styles';

export const Container = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.lightGrey};
    width: 100%;
    height: 7.2rem;
    padding: 1.6rem 0 1.6rem 2.4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: ${theme.radius.small};

    svg {
      stroke-width: 1.5;
    }

    ${Button} {
      &:hover {
        svg {
          transform: scale(1.02);
          stroke-width: 1.8;
        }
      }
    }
  `}
`;

export const Balance = styled.div`
  ${({ theme }) => css`
    flex: 1;
    > span {
      font-size: ${theme.fontSizes.small};
      display: block;

      :last-child {
        margin: 0.2rem 0;
        max-width: 10rem;
        height: 2rem;
        background: ${theme.colors.grey}b3;
        border-radius: ${theme.radius.tiny};
      }
    }

    > strong {
      color: ${theme.colors.darkGrey};
      margin-left: 0.4rem;
    }
  `}
`;
