import React from 'react';

import { Container, AnimatedWrapper } from './styles';
import SideBar from './SideBar';
import MainContent from './MainContent';
import DefaultLayout from '../_layouts/default';

const animation = {
  unMounted: { opacity: 0 },
  mounted: {
    opacity: 1,
  },
};

const Dashboard: React.FC = () => {
  return (
    <DefaultLayout>
      <Container>
        <AnimatedWrapper
          variants={animation}
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
