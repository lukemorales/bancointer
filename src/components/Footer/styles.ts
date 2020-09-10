import styled, { css } from 'styled-components';
import { transparentize } from 'polished';
import { motion } from 'framer-motion';

import { Wrapper as HeaderWrapper } from '../Header/styles';

export const AnimatedContainer = styled(motion.footer)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 3.2rem;
  transform-origin: bottom;
`;

export const Wrapper = styled(HeaderWrapper)`
  ${({ theme }) => css`
    height: auto;
    padding: 1.6rem;
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

    @media (max-width: 568px) {
      flex-direction: column;
      text-align: center;
    }
  `}
`;

export const FooterSection = styled(AnimatedContainer)<{ background?: string }>`
  ${({ theme, background }) => css`
    background: ${background || transparentize(0.92, theme.colors.grey)};
    margin-top: 0;

    :last-of-type {
      ${Wrapper} {
        padding: 2.4rem 1.6rem;
      }
    }
  `}
`;
