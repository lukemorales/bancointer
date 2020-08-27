import React from 'react';

import Header from '../../components/Header';
import { Container, Wrapper } from './styles';
import SideBar from './SideBar';
import MainContent from './MainContent';
import Footer from '../../components/Footer';

const animation = {
  unMounted: { opacity: 0 },
  mounted: {
    opacity: 1,
    // transition: {
    //   when: 'beforeChildren',
    //   staggerChildren: 0.2,
    // },
  },
};

const Dashboard: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Wrapper
          variants={animation}
          initial="unMounted"
          animate="mounted"
          transition={{ duration: 1.5 }}
        >
          <SideBar />
          <MainContent />
        </Wrapper>
      </Container>
      <Footer />
    </>
  );
};

export default Dashboard;
