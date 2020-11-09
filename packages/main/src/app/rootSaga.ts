import { fork } from 'redux-saga/effects';

import { watchClass } from '../features/class/uitls/class.saga';
import { watchCart } from '../features/cart/utils/cart.saga';
export default function* rootSaga() {
  yield fork(watchClass);
  yield fork(watchCart);
}
