import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.div`
  margin-top: 2.8rem;
  width: 100%;
  height: 100%;
  display: flex;
  flex: 1;
  justify-content: center;
  z-index: 2;
  padding: 0 1.6rem;
`;

export const AnimatedWrapper = styled(motion.div)`
  max-width: 113rem;
  width: 100%;
  display: flex;

  @media (max-width: 670px) {
    flex-direction: column;
  }
`;
