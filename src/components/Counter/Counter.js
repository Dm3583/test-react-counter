import React, { Component } from 'react';
import { connect } from 'react-redux';
import Controls from '../Controls';
import * as actions from '../../redux/actions';

const Counter = ({ value, onIncrement, onDecrement }) => {
  return (
    <>
      <h1>Counter body</h1>

      <p>{value}</p>
      <Controls handleIncrement={onIncrement} handleDecrement={onDecrement} />
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    value: state.counterValue,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onIncrement: () => dispatch(actions.increment(1)),
    onDecrement: () => dispatch(actions.decrement(1)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
