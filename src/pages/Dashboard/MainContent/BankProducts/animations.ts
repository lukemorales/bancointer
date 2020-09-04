import { DEFAULT_TRANSITION } from '~/constants';

export const BANK_PRODUCTS_ANIMATION = {
  unMounted: { opacity: 0, x: 50 },
  mounted: {
    opacity: 1,
    x: 0,
    transition: { delay: 1.2, ...DEFAULT_TRANSITION },
  },
};
