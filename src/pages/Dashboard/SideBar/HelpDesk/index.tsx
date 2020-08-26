import React from 'react';

import { FiArrowRight } from 'react-icons/fi';

import { Container, HelpButton } from './styles';
import BabiHelpDesk from '../../../../assets/images/illustrations/babi.png';
import { DEFAULT_TRANSITION } from '../../../../constants';

const animation = {
  unMounted: { x: -50, opacity: 0 },
  mounted: {
    x: 0,
    opacity: 1,
    transition: { delay: 1, ...DEFAULT_TRANSITION },
  },
};

const HelpDesk: React.FC = () => {
  return (
    <Container variants={animation}>
      <img src={BabiHelpDesk} alt="Eu sou a Babi do Banco Inter" />
      <span>
        Olá, Luke. <br /> Posso Ajudar?
      </span>
      <HelpButton>
        <FiArrowRight size={24} />
      </HelpButton>
    </Container>
  );
};

export default HelpDesk;
