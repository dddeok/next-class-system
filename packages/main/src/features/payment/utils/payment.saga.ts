import { select } from 'typed-redux-saga';
import { takeEvery, all, put } from 'redux-saga/effects';
import {
  addPaymentPriceStart,
  addPaymentPriceSuccess,
  changePaymentCouponStart,
  changePaymentCouponSuccess,
} from './payment.action';
import { selectPaymentTotalPrice, paymentSelector } from './payment.reducer';

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
function* changePaymentCouponSaga(action: ReturnType<typeof changePaymentCouponStart>) {
  try {
    const coupon = action.payload;
    const totalPrice = yield* select(selectPaymentTotalPrice);
    const payments = yield* select(paymentSelector.selectAll);
    if (coupon && totalPrice) {
      if (coupon.type == 'amount') {
        const newPrice = totalPrice - coupon.discountAmount;
        yield put(changePaymentCouponSuccess(newPrice));
      } else {
        let newPrice = totalPrice;
        payments.map(payment => {
          const { price, availableCoupon, count } = payment;
          if (availableCoupon === false) return;
          else {
            newPrice -= price * count * (coupon.discountRate / 100);
          }
        });

        yield put(changePaymentCouponSuccess(newPrice));
      }
    } else yield put(changePaymentCouponSuccess(null));
  } catch (err) {
    console.log(err.message);
  }
}

export function* watchPayment() {
  yield all([
    takeEvery(addPaymentPriceStart.type, addPaymentPriceSaga),
    takeEvery(changePaymentCouponStart.type, changePaymentCouponSaga),
  ]);
}
