export const variants = {
  hidden: { opacity: 0, y: 0 },
  show: {
    opacity: 1,
    y: -20,
    transition: {
      delay: 0,
      when: 'beforeChildren',
      staggerChildren: 0.2,
    },
  },
};

export const listItem = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};
