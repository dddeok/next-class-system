import { takeEvery, all, put } from 'redux-saga/effects';
import { select } from 'typed-redux-saga';
import { addCartStart, addCartSuccess, deleteCartStart } from './cart.action';
import { cartSelector } from './cart.reducer';
import { deletePaymentPriceStart } from '../../payment/utils/payment.action';
function* addCartSaga(action: ReturnType<typeof addCartStart>) {
  try {
    const cart = action.payload;
    const ids = yield* select(cartSelector.selectIds);
    if (ids.length < 3) yield put(addCartSuccess(cart));
    else alert('3개 이상 장바구니에 담을 수 없습니다.');
  } catch (err) {
    console.log(err.message);
  }
}

function* deleteCartSaga(action: ReturnType<typeof deleteCartStart>) {
  try {
    const id = action.payload;
    yield put(deletePaymentPriceStart(id));
  } catch (err) {
    console.log(err.message);
  }
}

export function* watchCart() {
  yield all([
    takeEvery(addCartStart.type, addCartSaga),
    takeEvery(deleteCartStart.type, deleteCartSaga),
  ]);
}
