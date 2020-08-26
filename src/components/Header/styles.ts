import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: ${({ theme }) => theme.colors.background};
  position: relative;
`;

export const Wrapper = styled(motion.div)`
  max-width: 113rem;
  height: 10.4rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const LeftNav = styled(motion.div)`
  display: flex;
  align-items: center;

  > svg {
    max-width: 11.2rem;
    height: auto;
    margin: 0 2.4rem 1.1rem 0;
  }

  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: 700;
`;

export const RightNav = styled(motion.div)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
`;
