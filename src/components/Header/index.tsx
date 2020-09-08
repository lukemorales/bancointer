import React, { memo } from 'react';

import { Link } from 'react-router-dom';

import {
  AnimatedContainer,
  Wrapper,
  AnimatedLeftNav,
  AnimatedRightNav,
} from './styles';
import AccountDropdown from './AccountDropdown';
import Gradient from './Gradient';
import Button from '../Button';
import { CONTAINER_ANIMATION, NAVS_ANIMATION } from './animations';

import { BancoInter } from '~/assets/images';

const Header: React.FC = () => {
  return (
    <AnimatedContainer
      variants={CONTAINER_ANIMATION}
      initial="unMounted"
      animate="mounted"
      exit="unMounted"
    >
      <Wrapper>
        <AnimatedLeftNav variants={NAVS_ANIMATION}>
          <Link to="/">
            <BancoInter />
          </Link>
          Internet Banking
        </AnimatedLeftNav>
        <AnimatedRightNav variants={NAVS_ANIMATION}>
          <Button variant="secondary">Simulador Renda Fixa</Button>
          <AccountDropdown />
        </AnimatedRightNav>
      </Wrapper>
      <Gradient />
    </AnimatedContainer>
  );
};

export default memo(Header);
