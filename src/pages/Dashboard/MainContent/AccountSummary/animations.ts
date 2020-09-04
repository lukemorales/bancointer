export const CONTAINER_ANIMATION = {
  unMounted: { y: -50, opacity: 0 },
  mounted: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      when: 'beforeChildren',
      staggerChildren: 0.3,
    },
  },
};

export const CARDS_ANIMATION = {
  unMounted: { y: -25, opacity: 0 },
  mounted: { y: 0, opacity: 1 },
};
