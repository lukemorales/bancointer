import { DEFAULT_TRANSITION } from '~/constants';

export const DROP_DOWN_ANIMATION = {
  visible: {
    y: 0,
    opacity: 1,
    transition: DEFAULT_TRANSITION,
  },
  hidden: {
    y: -20,
    opacity: 0,
    transition: DEFAULT_TRANSITION,
  },
};
