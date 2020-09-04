import React from 'react';

import { FiBarChart2 } from 'react-icons/fi';

import { Wrapper, Container, AmountInvested } from './styles';
import Dropdown from './Dropdown';
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

const SideBar: React.FC = () => {
  return (
    <Wrapper>
      <Container variants={animation}>
        <AccountBalance />
        <AmountInvested
          whileHover={{ y: -4, transition: DEFAULT_TRANSITION }}
          whileTap={{ y: 2, transition: DEFAULT_TRANSITION }}
        >
          Ver Total Investido <FiBarChart2 size="1.6rem" />
        </AmountInvested>
        {Object.entries(SIDE_BAR_NAVIGATION).map(([key, value]) => (
          <Dropdown key={key} icon={value.icon} sectionName={key} />
        ))}
      </Container>
      <HelpDesk />
    </Wrapper>
  );
};

export default SideBar;
