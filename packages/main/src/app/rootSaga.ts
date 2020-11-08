import { fork } from 'redux-saga/effects';
import { watchEmailAuth } from '../features/emailAuth/utils/emailAuth.saga';

export default function* rootSaga() {
  yield fork(watchEmailAuth);
}
