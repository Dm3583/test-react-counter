import { combineReducers } from 'redux';
// import actionTypes from './counter-types';
import { createReducer } from '@reduxjs/toolkit';
import * as actions from './counter-actions';

const value = createReducer(0, {
  [actions.increment]: (state, { payload }) => state + payload,
  [actions.decrement]: (state, { payload }) => state - payload,
});

const step = (state = 1, _) => state;

export default combineReducers({
  value,
  step,
});

// const valueReducer = (state = 0, { type, payload }) => {
//   switch (type) {
//     case actionTypes.INCREMENT:
//       return state + payload;

//     case actionTypes.DECREMENT:
//       return state - payload;

//     default:
//       return state;
//   }
// };

// const stepReducer = (state = 1, action) => state;

// const counterReducer = combineReducers({
//   value: valueReducer,
//   step: stepReducer,
// });

// export default counterReducer;
