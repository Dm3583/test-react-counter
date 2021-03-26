import React, { Component } from 'react';
import Controls from '../Controls';

class Counter extends Component {
  state = {
    step: 1,
    value: 0,
  };

  increment = () => {
    this.setState(({ step, value }) => ({ value: value + step }));
  };

  decrement = () => {
    this.setState(({ step, value }) => ({ value: value - step }));
  };

  handleIncrement = () => {
    this.increment();
  };

  handleDecrement = () => {
    this.decrement();
  };

  render() {
    const { step, value } = this.state;
    const { handleIncrement, handleDecrement } = this;
    return (
      <>
        <h1>Counter body</h1>
        <p>{value}</p>
        <Controls
          step={step}
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
        />
      </>
    );
  }
}

export default Counter;
