import React, { Dispatch, SetStateAction, useEffect } from 'react';

import { usePresence } from 'framer-motion';

import { SHOW_SECRET_ANIMATION } from './animations';
import { AnimatedContainer } from './styles';

export interface BalanceSecretProps {
  setIsValueVisible: Dispatch<SetStateAction<boolean>>;
}

const BalanceSecret: React.FC<BalanceSecretProps> = ({ setIsValueVisible }) => {
  const [isPresent] = usePresence();

  useEffect(() => {
    setTimeout(() => setIsValueVisible(!isPresent), isPresent ? 120 : 0);
  }, [isPresent, setIsValueVisible]);

  return (
    <AnimatedContainer
      key="balance-secret"
      layout
      variants={SHOW_SECRET_ANIMATION}
      initial={false}
      animate="visible"
      exit="hidden"
      transition={{ duration: 0.35, ease: 'easeInOut' }}
    />
  );
};

export default BalanceSecret;
