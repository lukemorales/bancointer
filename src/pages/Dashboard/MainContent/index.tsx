import React from 'react';

import { Container } from './styles';
import NavigationCards from './NavigationCards';

const MainContent: React.FC = () => {
  return (
    <Container>
      <NavigationCards />
    </Container>
  );
};

export default MainContent;
