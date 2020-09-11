import React from 'react';

import { Container } from './styles';
import NavigationCards from './NavigationCards';
import AccountSummary from './AccountSummary';
import BankProducts from './BankProducts';

const MainContent = () => {
  return (
    <Container>
      <NavigationCards />
      <AccountSummary />
      <BankProducts />
    </Container>
  );
};

export default MainContent;
