import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './redux/store';
import { increment, decrement } from './redux/actions';
import App from './components/App';

console.log(store.getState());
store.dispatch(increment(5));
store.dispatch(increment(10));
store.dispatch(decrement());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
