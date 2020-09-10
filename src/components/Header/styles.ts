import styled from 'styled-components';
import { motion } from 'framer-motion';

export const AnimatedContainer = styled(motion.header)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: ${({ theme }) => theme.colors.background};
  position: relative;
`;

export const Wrapper = styled.div`
  max-width: 116.2rem;
  padding: 0 1.6rem;
  width: 100%;
  height: 10.4rem;
  display: flex;
  justify-content: space-between;
`;

export const AnimatedLeftNav = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  > svg {
    max-width: 11.2rem;
    height: auto;
    margin: 0 2.4rem 0.4rem -0.4rem;
  }

  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: 700;
`;

export const AnimatedRightNav = styled(motion.div)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 1;

  @media (max-width: 470px) {
    > button {
      display: none;
    }
  }
`;
