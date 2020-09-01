import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

import { Theme } from '~/styles/styled';

export const Container = styled(motion.section)`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  column-gap: 2.4rem;
  margin: 2.4rem 0;
  max-height: 17.6rem;
  height: 100%;
`;

export const Card = styled(motion.article)`
  ${({ theme }) => css`
    background: ${theme.colors.background};
    max-width: 26.4rem;
    width: 100%;
    height: 100%;
    border-radius: ${theme.radius.default};
    padding: 1.6rem 2.4rem;
    box-shadow: ${theme.shadows.flat};
    display: flex;
    flex-direction: column;
  `}
`;

export const Header = styled.div<{ iconStroke?: boolean }>`
  ${({ theme, iconStroke }) => css`
    display: flex;
    justify-content: flex-start;

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
  ${({ theme }) => css`
    margin-right: 0.8rem;
    max-width: 55%;
    max-height: 11.2rem;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    > img {
      height: 8.4rem;
      width: auto;
    }

    svg {
      g rect {
        stroke-width: 1.5;
      }

      text {
        font-family: inherit !important;
        font-size: ${theme.fontSizes.tiny} !important;
        fill: ${theme.colors.grey} !important;
      }
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

type CustomTooltipProps = {
  rightArrow?: boolean;
  leftArrow?: boolean;
};

export const CustomTooltip = styled.div<CustomTooltipProps>`
  ${({ theme, rightArrow, leftArrow }) => css`
    background: ${theme.colors.lightGrey};
    padding: 0.4rem 0.8rem;
    border-radius: ${theme.radius.small};
    font-size: ${theme.fontSizes.tiny};
    text-align: center;
    box-shadow: 0 -0.1rem 0.2rem rgba(0, 0, 0, 0.28);

    :before {
      content: '';
      display: block;
      height: 0;
      left: ${rightArrow ? `100%` : (leftArrow && `2%`) || `50%`};
      bottom: -50%;
      position: absolute;
      transform: ${rightArrow
        ? `translate3d(0, -175%, 0)`
        : (leftArrow && `translate3d(-100%, -175%, 0)`) ||
          `translate3d(-50%, 25%, 0)`};
      border-color: ${rightArrow
        ? `transparent transparent transparent ${theme.colors.lightGrey}`
        : (leftArrow &&
            `transparent ${theme.colors.lightGrey} transparent transparent`) ||
          `${theme.colors.lightGrey} transparent transparent
        transparent`};
      border-style: solid;
      border-width: 0.8rem;
    }

    :after {
      content: '';
      display: block;
    }
  `}
`;
