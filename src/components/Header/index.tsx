import React, { memo } from 'react';

import { Link } from 'react-router-dom';

import { Container, Wrapper, LeftNav, RightNav } from './styles';
import AccountDropdown from './AccountDropdown';
import Gradient from './Gradient';
import Button from '../Button';

import { BancoInter } from '~/assets/images';
import { DEFAULT_TRANSITION } from '~/constants';

const containerAnimation = {
  unMounted: { y: -50, opacity: 0 },
  mounted: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.2,
      when: 'beforeChildren',
      staggerChildren: 0.2,
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
      mass: 0.8,
    },
  },
};

const Header: React.FC = () => {
  return (
    <Container
      variants={containerAnimation}
      initial="unMounted"
      animate="mounted"
      exit="unMounted"
    >
      <Wrapper>
        <LeftNav variants={navsAnimation}>
          <Link to="/">
            <BancoInter />
          </Link>
          Internet Banking
        </LeftNav>
        <RightNav variants={navsAnimation}>
          <Button variant="secondary">Simulador Renda Fixa</Button>
          <AccountDropdown />
        </RightNav>
      </Wrapper>
      <Gradient />
    </Container>
  );
};

export default memo(Header);
