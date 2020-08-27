import React, { useState } from 'react';

import { AnimatePresence } from 'framer-motion';
import { FiEye, FiEyeOff } from 'react-icons/fi';

import { Container, Balance } from './styles';
import Button from '../../../../components/Button';
import BalanceSecret from './BalanceSecret';

const AccountBalance: React.FC = () => {
  const [isHidden, setIsHidden] = useState(true);
  const [isValueVisible, setIsValueVisible] = useState(false);

  return (
    <Container>
      <Balance>
        <span>Saldo em Conta:</span>
        <AnimatePresence>
          {isHidden && <BalanceSecret setIsValueVisible={setIsValueVisible} />}
        </AnimatePresence>
        <div>
          R$<strong>{isValueVisible ? '765,59' : '---'}</strong>
        </div>
      </Balance>

      <Button
        variant="transparent"
        onClick={() => setIsHidden((prevState) => !prevState)}
      >
        {isHidden ? <FiEyeOff /> : <FiEye />}
      </Button>
    </Container>
  );
};

export default AccountBalance;
