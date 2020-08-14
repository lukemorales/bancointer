import React from 'react';

import { Container } from './styles';
import NavigationCards from './NavigationCards';
import AccountSummary from './AccountSummary';

const MainContent: React.FC = () => {
  return (
    <Container>
      <NavigationCards />
      <AccountSummary />
    </Container>
  );
};

export default MainContent;
