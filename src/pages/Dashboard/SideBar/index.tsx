import React from 'react';

import { FiBarChart2 } from 'react-icons/fi';

import { Wrapper, AnimatedContainer, AnimatedAmountInvested } from './styles';
import Accordion from './Accordion';
import AccountBalance from './AccountBalance';
import HelpDesk from './HelpDesk';

import { DEFAULT_TRANSITION, SIDE_BAR_NAVIGATION } from '~/constants';

const animation = {
  unMounted: { opacity: 0, y: -50 },
  mounted: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.5, ...DEFAULT_TRANSITION },
  },
};

const SideBar  = () => {
  return (
    <Wrapper>
      <AnimatedContainer variants={animation}>
        <AccountBalance />
        <AnimatedAmountInvested
          whileHover={{ y: -4, transition: DEFAULT_TRANSITION }}
          whileTap={{ y: 2, transition: DEFAULT_TRANSITION }}
        >
          Ver Total Investido <FiBarChart2 size="1.6rem" />
        </AnimatedAmountInvested>
        {Object.entries(SIDE_BAR_NAVIGATION).map(([key, value]) => (
          <Accordion key={key} icon={value.icon} sectionName={key} />
        ))}
      </AnimatedContainer>
      <HelpDesk />
    </Wrapper>
  );
};

export default SideBar;
