import React, { Component } from 'react';
import { connect } from 'react-redux';
import Controls from '../Controls';
import * as actions from '../../redux/counter/counter-actions';

const Counter = ({ value, step, onIncrement, onDecrement }) => {
  return (
    <>
      <h1>Counter</h1>
      <p>{value}</p>
      <Controls
        step={step}
        handleIncrement={() => onIncrement(step)}
        handleDecrement={() => onDecrement(step)}
      />
    </>
  );
};

const mapStateToProps = (state, ownProps) => ({
  value: state.counter.value,
  step: state.counter.step,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onIncrement: value => dispatch(actions.increment(value)),
  onDecrement: value => dispatch(actions.decrement(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
