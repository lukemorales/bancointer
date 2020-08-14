import styled, { css } from 'styled-components';

import { Theme } from '../../../../styles/styled';

export const Container = styled.section`
  ${() => css`
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    column-gap: 2.4rem;
    margin: 2.4rem 0;
    max-height: 17.6rem;
    height: 100%;
  `}
`;

export const Card = styled.article`
  ${({ theme }) => css`
    background: ${theme.colors.background};
    max-width: 26.4rem;
    width: 100%;
    height: 100%;
    border-radius: ${theme.radius.default};
    padding: 1.6rem 2.4rem;
    box-shadow: ${theme.shadows.default};
    display: flex;
    flex-direction: column;
  `}
`;

export const Header = styled.div<{ iconStroke?: boolean }>`
  ${({ theme, iconStroke }) => css`
    display: flex;
    justify-content: flex-start;
    margin-bottom: 0.8rem;

    > svg {
      margin-right: 0.8rem;
      stroke: ${iconStroke && theme.colors.primary};
      width: auto;
      height: 1.6rem;
    }

    > h3 {
      font-weight: 500;
      color: ${theme.colors.darkGrey};
      font-size: ${theme.fontSizes.small};
    }

    > button {
      margin: -0.8rem -1.6rem 0 auto;
      padding: 0.8rem 1.6rem;

      svg {
        stroke: ${theme.colors.grey};
        stroke-width: 1.5;
      }
    }
  `}
`;

export const DataWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: auto;
  flex: 1;
`;

export const LeftData = styled.div`
  ${() => css`
    margin-right: 0.8rem;
    max-width: 55%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    > img {
      height: 8.4rem;
      width: auto;
    }
  `}
`;

export const RightData = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.small};

    > span:not(:only-child):last-of-type {
      margin-top: 0.8rem;
      display: block;
    }
  `}
`;

type DataValueType = {
  income?: boolean;
  outcome?: boolean;
};

const getDataColor = (
  colors: Theme['colors'],
  { income, outcome }: DataValueType,
): string => {
  if (income) {
    return colors.success;
  }
  if (outcome) {
    return colors.error;
  }
  return colors.darkGrey;
};

export const DataValue = styled.div<DataValueType>`
  ${({ theme, income, outcome }) => css`
    color: ${getDataColor(theme.colors, { income, outcome })};
  `}
`;
