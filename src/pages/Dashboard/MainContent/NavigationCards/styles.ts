import styled, { css } from 'styled-components';
import { transparentize } from 'polished';

import Button from '../../../../components/Button';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    max-height: 12rem;
    display: flex;

    > button:last-child {
      margin: 0 0 2.4rem 2.4rem;
      align-self: flex-end;
      background: ${transparentize(0.92, theme.colors.grey)};
      border-radius: 50%;
      max-width: 4rem;
      max-height: 4rem;
      width: 100%;
      height: 100%;
      padding: 0;

      svg {
        width: auto;
        height: 2.4rem;
      }
    }
  `}
`;

export const Navigation = styled.nav`
  display: grid;
  grid-template-columns: repeat(6, minmax(10.4rem, 1fr));
  column-gap: 0.8rem;
`;

export const Card = styled(Button)`
  ${({ theme }) => css`
    max-width: 12rem;
    max-height: 12rem;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${theme.colors.background};
    color: ${theme.colors.grey};
    border-radius: ${theme.radius.default};
    padding: 1.6rem;
    box-shadow: ${theme.shadows.default};
    font-size: ${theme.fontSizes.default};

    div {
      background: ${theme.colors.lightGrey};
      max-width: 6.4rem;
      max-height: 6.4rem;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
    }

    svg {
      stroke: ${theme.colors.primary};
      stroke-width: 1.5;
      max-height: 2.4rem;
      height: 100%;
      width: auto;
    }

    :nth-child(2) {
      svg {
        stroke: none;
      }
    }
  `}
`;
