import React, { memo } from 'react';

import { Container, Wrapper, LeftNav, RightNav } from './styles';
import AccountDropdown from './AccountDropdown';
import { User } from './Header';
import Gradient from './Gradient';
import Button from '../Button';

import { BancoInter } from '~/assets/images';
import { DEFAULT_TRANSITION } from '~/constants';

const containerAnimation = {
  unMounted: {},
  mounted: {
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.8,
    },
  },
};

const navsAnimation = {
  unMounted: { y: -20, opacity: 0 },
  mounted: {
    y: 0,
    opacity: 1,
    transition: {
      ...DEFAULT_TRANSITION,
    },
  },
};

const Header: React.FC = () => {
  const user: User = { name: 'Luke Morales' };

  return (
    <Container>
      <Wrapper
        variants={containerAnimation}
        initial="unMounted"
        animate="mounted"
      >
        <LeftNav variants={navsAnimation}>
          <BancoInter />
          Internet Banking
        </LeftNav>
        <RightNav variants={navsAnimation}>
          <Button variant="secondary">Simulador Renda Fixa</Button>
          <AccountDropdown user={user} />
        </RightNav>
      </Wrapper>
      <Gradient />
    </Container>
  );
};

export default memo(Header);
