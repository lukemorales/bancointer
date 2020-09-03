import React, { useState, useMemo } from 'react';

import { AnimatePresence } from 'framer-motion';
import { FiEye, FiEyeOff } from 'react-icons/fi';

import { Container, Balance } from './styles';
import BalanceSecret from './BalanceSecret';

import Button from '~/components/Button';
import useAuth from '~/contexts/auth';
import { formatCurrency } from '~/utils';

const AccountBalance: React.FC = () => {
  const { statements } = useAuth().account;

  const [isHidden, setIsHidden] = useState(true);
  const [isValueVisible, setIsValueVisible] = useState(false);

  const [currency, accountBalance] = useMemo(() => {
    const balance = statements?.reduce(
      (acc, { income, outcome }) => income + outcome + acc,
      0,
    );

    return formatCurrency(balance).split(' ');
  }, [statements]);

  return (
    <Container>
      <Balance>
        <span>Saldo em Conta:</span>
        <AnimatePresence>
          {isHidden && <BalanceSecret setIsValueVisible={setIsValueVisible} />}
        </AnimatePresence>
        <div>
          {currency}
          <strong>{isValueVisible ? accountBalance : '---'}</strong>
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
