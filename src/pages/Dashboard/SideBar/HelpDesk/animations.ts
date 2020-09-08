import { DEFAULT_TRANSITION } from '~/constants';

export const HELPDESK_ANIMATION = {
  unMounted: { x: -50, opacity: 0 },
  mounted: {
    x: 0,
    opacity: 1,
    transition: { delay: 1, ...DEFAULT_TRANSITION },
  },
};
