import styled, { css } from 'styled-components';
import { transparentize } from 'polished';
import { motion } from 'framer-motion';

export const Wrapper = styled.div`
  max-width: 26.4rem;
  display: flex;
  flex: 1 100%;
  flex-direction: column;
`;

export const AnimatedContainer = styled(motion.section)`
  ${({ theme }) => css`
    background: ${theme.colors.background};

    max-height: 60rem;
    width: 100%;
    height: 100%;
    border-radius: ${theme.radii.default};
    box-shadow: ${theme.shadows.default};
    padding: 2.4rem;
  `}
`;

export const AnimatedAmountInvested = styled(motion.button)`
  && {
    ${({ theme }) => css`
      display: flex;
      justify-content: space-between;
      color: ${theme.colors.label};
      font-size: ${theme.fontSizes.small};
      width: 100%;
      margin: 0.8rem 0;
      padding: 0.8rem 2.4rem;
      border-radius: ${theme.radii.small};
      transition: box-shadow 300ms ease-out;
      background: ${`linear-gradient(90deg, ${theme.colors.secondary} 0%, ${theme.colors.primary} 100%);`};

      :hover {
        box-shadow: 0 0.4rem 0.4rem
          ${transparentize(0.72, theme.colors.secondary)};
      }
    `}
  }
`;
