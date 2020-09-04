import { DEFAULT_TRANSITION } from '~/constants';

export const CONTAINER_ANIMATION = {
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

export const NAVS_ANIMATION = {
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
