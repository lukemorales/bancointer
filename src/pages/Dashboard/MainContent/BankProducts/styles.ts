import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

import { Navigation, AnimatedCard } from '../NavigationCards/styles';

import { Container as ButtonContainer } from '~/components/Button/styles';
import ButtonBackground from '~/assets/images/illustrations/button-background.svg';

export const AnimatedContainer = styled(motion.section)`
  ${({ theme }) => css`
    background: ${theme.colors.background};
    border-radius: ${theme.radius.default};
    box-shadow: ${theme.shadows.flat};
    padding: 2.4rem;
    max-height: 34.2rem;
    height: 100%;
    width: 100%;

    > div {
      display: flex;
      justify-content: space-between;

      + div {
        margin-top: 2.4rem;
        height: 100%;
      }
    }
  `}
`;

export const ShoppingButton = styled(ButtonContainer)`
  ${({ theme }) => css`
    padding: 1.6rem 2.4rem;
    justify-content: space-between;
    max-width: 35.2rem;
    width: 100%;
    border-radius: ${theme.radius.default};
    flex: 1 0 100%;

    svg:first-of-type {
      margin-left: 1.6rem;
    }

    > div {
      color: ${theme.colors.grey};
      font-size: ${theme.fontSizes.small};
      text-align: left;
      max-width: 12rem;
      width: 100%;
      margin-left: -4rem;

      > h3 {
        color: ${theme.colors.darkGrey};
        font-size: ${theme.fontSizes.large};
      }
    }
  `}
`;

export const Products = styled(Navigation)`
  flex-grow: 0;
  grid-template-columns: repeat(5, minmax(6.4rem, 1fr));
  margin: 0 -0.8rem 0 0.8rem;
`;

export const ProductCard = styled(AnimatedCard)`
  ${({ theme }) => css`
    box-shadow: none;
    background: none;
    font-size: ${theme.fontSizes.small};
    padding: 0;

    > div {
      margin-bottom: auto;

      svg {
        stroke: none;
      }
    }

    :nth-child(3) {
      > div {
        svg {
          margin: -0.4rem 0 0 -0.5rem;
        }
      }
    }
  `}
`;

export const EquitySection = styled.section`
  ${({ theme }) => css`
    padding: 1.6rem 2.4rem;
    max-width: 38.4rem;
    width: 100%;
    max-height: 18.4rem;
    height: 100%;
    color: ${theme.colors.yellow};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    border-radius: ${theme.radius.default};
    background: url(${ButtonBackground}), ${theme.colors.primaryDark};

    > h3 {
      font-size: ${theme.fontSizes.large};
    }

    > div {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      width: 100%;

      > ul {
        color: ${theme.colors.background};

        li {
          display: flex;
          align-items: center;

          svg {
            stroke-width: 1.5;
            margin-right: 0.8rem;
            flex-grow: 0;
          }
        }
      }

      > button {
        font-size: ${theme.fontSizes.small};
        font-weight: 700;
        padding: 0.8rem 1.6rem;
      }
    }
  `}
`;

export const LoanSection = styled(EquitySection)`
  ${({ theme }) => css`
    background: ${theme.colors.secondary};

    > h3 {
      text-align: left;

      > span {
        display: block;
        font-weight: 300;
        color: ${theme.colors.background};
      }
    }

    > div {
      > ul {
        li {
          align-items: flex-start;

          svg {
            margin-top: 0.3rem;
          }

          span {
            max-width: 12rem;
          }
        }
      }
    }
  `}
`;
