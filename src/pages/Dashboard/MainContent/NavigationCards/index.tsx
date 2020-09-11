import React from 'react';

import { AnimatedContainer, AnimatedCard, Navigation } from './styles';
import { CONTAINER_ANIMATION, CARDS_ANIMATION } from './animation';

import { DEFAULT_TRANSITION, CARDS_NAVIGATION } from '~/constants';

const NavigationCards = () => {
  return (
    <AnimatedContainer variants={CONTAINER_ANIMATION}>
      <Navigation>
        {Object.entries(CARDS_NAVIGATION).map(([key, value]) => (
          <AnimatedCard
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
    </AnimatedContainer>
  );
};

export default NavigationCards;
