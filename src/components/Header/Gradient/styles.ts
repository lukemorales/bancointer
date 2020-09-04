import styled from 'styled-components';
import { motion } from 'framer-motion';

export const AnimatedContainer = styled(motion.aside)`
  width: 100%;
  height: 6.4rem;
  align-self: flex-start;
  position: absolute;
  top: 100%;
  background: ${({ theme }) =>
    `linear-gradient(90deg, ${theme.colors.secondary} 0%, ${theme.colors.primary} 100%);`};
`;
