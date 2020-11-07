import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './sagas';
import counterReducer from '../components/Counter/counterSlice';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV !== 'production') {
  middlewares.push(createLogger()); // logs state transitions in your browser
}

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware: middlewares,
});

sagaMiddleware.run(rootSaga); // always after 'store' definition!

export default store;
