import { takeEvery, all, put } from 'redux-saga/effects';
import { addPaymentPriceStart, addPaymentPriceSuccess } from './payment.action';

function* addPaymentPriceSaga(action: ReturnType<typeof addPaymentPriceStart>) {
  try {
    const result = action.payload;
    const payment = {
      ...result,
      count: 1,
    };
    yield put(addPaymentPriceSuccess(payment));
  } catch (err) {
    console.log(err.message);
  }
}

export function* watchPayment() {
  yield all([takeEvery(addPaymentPriceStart.type, addPaymentPriceSaga)]);
}
