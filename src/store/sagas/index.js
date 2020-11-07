import { all, takeLatest } from 'redux-saga/effects';

import { incrementByAmountAsync } from '../../components/Counter/counterSlice';
import { incrementByAmountAsyncSaga } from './counterSagas';

function* rootSaga() {
  yield all([
    yield takeLatest(incrementByAmountAsync, incrementByAmountAsyncSaga),
  ]);
}

export default rootSaga;
