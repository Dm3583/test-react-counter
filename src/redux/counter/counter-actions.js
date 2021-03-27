import actionTypes from './counter-types';

import { createAction } from '@reduxjs/toolkit';

export const increment = createAction(actionTypes.INCREMENT);
export const decrement = createAction(actionTypes.DECREMENT);

// export const increment = value => {
//   return {
//     type: actionTypes.INCREMENT,
//     payload: value,
//   };
// };

// export const decrement = value => {
//   return {
//     type: actionTypes.DECREMENT,
//     payload: value,
//   };
// };
