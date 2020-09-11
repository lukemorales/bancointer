import React, { memo } from 'react';

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
import useAuth from '~/contexts/auth';

const Header = () => {
  const { signOut } = useAuth();

  return (
    <AnimatedContainer
      variants={CONTAINER_ANIMATION}
      initial="unMounted"
      animate="mounted"
      exit="unMounted"
    >
      <Wrapper>
        <AnimatedLeftNav variants={NAVS_ANIMATION}>
          <BancoInter onClick={signOut} />
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
