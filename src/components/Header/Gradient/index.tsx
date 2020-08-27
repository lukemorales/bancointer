import React, { memo } from 'react';

import { Container } from './styles';

const animation = {
  unMounted: { width: '0%' },
  mounted: {
    width: '100%',
    transition: {
      delay: 0.5,
      duration: 1.8,
      ease: 'easeInOut',
    },
  },
};

const Gradient: React.FC = () => (
  <Container
    layout
    variants={animation}
    initial="unMounted"
    animate="mounted"
  />
);
export default memo(Gradient);
