export const increment = value => {
  return {
    type: 'increment',
    payload: value,
  };
};

export const decrement = () => {
  return {
    type: 'decrement',
    payload: '-1',
  };
};
