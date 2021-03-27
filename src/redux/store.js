import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import counterReducer from './counter/counter-reducers';
// import { createStore, combineReducers, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';

// const rootReducer = combineReducers({
//   counter: counterReducer,
// });

// const store = createStore(rootReducer, composeWithDevTools());

const middleware = [...getDefaultMiddleware(), logger];

const store = configureStore({
  // reducer:rootReducer,
  reducer: { counter: counterReducer },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
