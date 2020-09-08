import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const AnimatedContainer = styled(motion.span)`
  ${({ theme }) => css`
    margin: 0.2rem 0;
    max-width: 10rem;
    height: 2rem;
    background: ${theme.colors.greyLowerOpacity};
    border-radius: ${theme.radius.tiny};
    position: absolute;
    z-index: 2;
  `}
`;
