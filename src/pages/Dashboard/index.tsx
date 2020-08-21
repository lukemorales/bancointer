import React from 'react';

import Header from '../../components/Header';
import { Container, Wrapper } from './styles';
import SideBar from './SideBar';
import MainContent from './MainContent';
import Footer from '../../components/Footer';

const Dashboard: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Wrapper>
          <SideBar />
          <MainContent />
        </Wrapper>
      </Container>
      <Footer />
    </>
  );
};

export default Dashboard;
