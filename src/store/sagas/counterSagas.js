import { put, delay } from 'redux-saga/effects';

import { incrementByAmount } from '../../components/Counter/counterSlice';

export function* incrementByAmountAsyncSaga({ payload }) {
  try {
    yield delay(1000);
    yield put(incrementByAmount(payload));
  } catch (e) {}
}
