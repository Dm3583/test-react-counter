import React from 'react';
import Button from '../Button';

const Controls = ({ handleIncrement, handleDecrement }) => (
  <>
    <Button type="button" onClick={handleIncrement}>
      increment by 1
    </Button>
    <Button type="button" onClick={handleDecrement}>
      decrement by 1
    </Button>
  </>
);

export default Controls;
