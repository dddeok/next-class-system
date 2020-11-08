import { fork } from 'redux-saga/effects';

import { watchClass } from '../features/class/uitls/class.saga';
export default function* rootSaga() {
  yield fork(watchClass);
}
