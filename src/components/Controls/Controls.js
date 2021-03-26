import React from 'react';
import Button from '../Button';

const Controls = ({ step, handleIncrement, handleDecrement }) => (
  <>
    <Button type="button" onClick={handleIncrement}>
      increment by {step}
    </Button>
    <Button type="button" onClick={handleDecrement}>
      decrement by {step}
    </Button>
  </>
);

export default Controls;
