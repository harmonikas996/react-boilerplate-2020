import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../components/Counter/counterSlice';
import { createLogger } from 'redux-logger';

const middlewares = [];

if (process.env.NODE_ENV !== 'production') {
  middlewares.push(createLogger());
}

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware: middlewares,
});
