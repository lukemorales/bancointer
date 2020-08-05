import React from 'react';

import Header from '../../components/Header';
import { Container, Wrapper } from './styles';
import SideBar from './SideBar';

const Dashboard: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Wrapper>
          <SideBar />
        </Wrapper>
      </Container>
    </>
  );
};

export default Dashboard;
