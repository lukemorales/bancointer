import React from 'react';

import { FiArrowRight } from 'react-icons/fi';

import { AnimatedContainer, AnimatedCard, Navigation } from './styles';
import { CONTAINER_ANIMATION, CARDS_ANIMATION } from './animation';

import Button from '~/components/Button';
import { DEFAULT_TRANSITION, CARDS_NAVIGATION } from '~/constants';

const NavigationCards: React.FC = () => {
  return (
    <AnimatedContainer variants={CONTAINER_ANIMATION}>
      <Navigation>
        {Object.entries(CARDS_NAVIGATION).map(([key, value]) => (
          <AnimatedCard
            layout
            key={`card-${key}`}
            variants={CARDS_ANIMATION}
            transition={DEFAULT_TRANSITION}
            whileHover={{ y: -2, transition: DEFAULT_TRANSITION }}
            whileTap={{ y: 2, transition: DEFAULT_TRANSITION }}
          >
            <div>{value.icon}</div>
            {key}
          </AnimatedCard>
        ))}
      </Navigation>
      <Button>
        <FiArrowRight />
      </Button>
    </AnimatedContainer>
  );
};

export default NavigationCards;
