import { createReducer, createEntityAdapter } from '@reduxjs/toolkit';
import { Payment } from './payment.interface';

import {
  addPaymentPriceSuccess,
  deletePaymentPriceStart,
  changePaymentCountStart,
} from './payment.action';
import { RootState } from '../../../app/rootReducer';
const paymentAdapter = createEntityAdapter<Payment>({
  selectId: item => item.id,
});

const initialState = paymentAdapter.getInitialState({
  totalPrice: 0,
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
    paymentAdapter.updateOne(state, {
      id: id,
      changes: {
        count: count,
      },
    });
  },
});

export default reducer;

export const selectPaymentTotalPrice = (state: RootState) => state.payment.totalPrice;
export const paymentSelector = paymentAdapter.getSelectors<RootState>(
  (state: RootState) => state.payment,
);
