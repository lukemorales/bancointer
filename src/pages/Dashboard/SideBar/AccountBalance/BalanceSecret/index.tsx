import React, { Dispatch, SetStateAction, useEffect } from 'react';

import styled, { css } from 'styled-components';
import { motion, usePresence } from 'framer-motion';

type BalanceSecretProps = {
  setIsValueVisible: Dispatch<SetStateAction<boolean>>;
};

const showSecret = {
  visible: { width: '100%' },
  hidden: { width: '0%' },
};

const BalanceSecret: React.FC<BalanceSecretProps> = ({ setIsValueVisible }) => {
  const [isPresent] = usePresence();

  useEffect(() => {
    setTimeout(() => setIsValueVisible(!isPresent), isPresent ? 120 : 0);
  }, [isPresent, setIsValueVisible]);

  return (
    <AnimatedContainer
      key="balance-secret"
      layout
      variants={showSecret}
      initial={false}
      animate="visible"
      exit="hidden"
      transition={{ duration: 0.35, ease: 'easeInOut' }}
    />
  );
};

export default BalanceSecret;

const AnimatedContainer = styled(motion.span)`
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
