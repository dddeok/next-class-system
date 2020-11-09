import { createReducer, createEntityAdapter } from '@reduxjs/toolkit';
import { Payment } from './payment.interface';

import {
  addPaymentPriceSuccess,
  deletePaymentPriceStart,
  changePaymentCountStart,
  changePaymentCouponStart,
  changePaymentCouponSuccess,
} from './payment.action';
import { RootState } from '../../../app/rootReducer';
const paymentAdapter = createEntityAdapter<Payment>({
  selectId: item => item.id,
});

const initialState = paymentAdapter.getInitialState({
  totalPrice: 0,
  salePrice: 0,
  selectedCoupon: null,
});

const reducer = createReducer(initialState, {
  [addPaymentPriceSuccess.type]: (
    state,
    action: ReturnType<typeof addPaymentPriceSuccess>,
  ) => {
    const payment = action.payload;
    paymentAdapter.addOne(state, payment);
    state.totalPrice += payment.price * payment.count;
  },
  [deletePaymentPriceStart.type]: (
    state,
    action: ReturnType<typeof deletePaymentPriceStart>,
  ) => {
    const id = action.payload;
    state.totalPrice -= state.entities[id].price * state.entities[id].count;
    paymentAdapter.removeOne(state, id);
  },
  [changePaymentCountStart.type]: (
    state,
    action: ReturnType<typeof changePaymentCountStart>,
  ) => {
    const { id, count } = action.payload;

    if (state.entities[id].count > count)
      state.totalPrice -= state.entities[id].price * (state.entities[id].count - count);
    else
      state.totalPrice += state.entities[id].price * (count - state.entities[id].count);
    if (count)
      paymentAdapter.updateOne(state, {
        id: id,
        changes: {
          count: count,
        },
      });
  },
  [changePaymentCouponStart.type]: (
    state,
    action: ReturnType<typeof changePaymentCouponStart>,
  ) => {
    const coupon = action.payload;
    state.selectedCoupon = coupon;
  },
  [changePaymentCouponSuccess.type]: (
    state,
    action: ReturnType<typeof changePaymentCouponSuccess>,
  ) => {
    const price = action.payload;
    state.salePrice = price;
  },
});

export default reducer;

export const selectPaymentTotalPrice = (state: RootState) => state.payment.totalPrice;
export const selectPaymentSalePrice = (state: RootState) => state.payment.salePrice;
export const selectPaymentCoupon = (state: RootState) => state.payment.selectedCoupon;
export const paymentSelector = paymentAdapter.getSelectors<RootState>(
  (state: RootState) => state.payment,
);
