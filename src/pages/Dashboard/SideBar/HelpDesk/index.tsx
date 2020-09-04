import React from 'react';

import { FiArrowRight } from 'react-icons/fi';

import { AnimatedContainer, HelpButton } from './styles';
import { HELPDESK_ANIMATION } from './animations';

import BabiHelpDesk from '~/assets/images/illustrations/babi.png';
import useAuth from '~/contexts/auth';

const HelpDesk: React.FC = () => {
  const { user } = useAuth().account;

  return (
    <AnimatedContainer variants={HELPDESK_ANIMATION}>
      <img src={BabiHelpDesk} alt="Eu sou a Babi do Banco Inter" />
      <span>
        {`Olá, ${user.name}.`} <br /> Posso Ajudar?
      </span>
      <HelpButton>
        <FiArrowRight size={24} />
      </HelpButton>
    </AnimatedContainer>
  );
};

export default HelpDesk;
