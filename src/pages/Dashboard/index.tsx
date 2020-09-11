import React from 'react';

import { Container, AnimatedWrapper } from './styles';
import SideBar from './SideBar';
import MainContent from './MainContent';
import DefaultLayout from '../_layouts/default';
import { DASHBOARD_ANIMATION } from './animations';

const Dashboard = () => {
  return (
    <DefaultLayout>
      <Container>
        <AnimatedWrapper
          variants={DASHBOARD_ANIMATION}
          initial="unMounted"
          animate="mounted"
          exit="unMounted"
          transition={{ duration: 1.5 }}
        >
          <SideBar />
          <MainContent />
        </AnimatedWrapper>
      </Container>
    </DefaultLayout>
  );
};

export default Dashboard;
