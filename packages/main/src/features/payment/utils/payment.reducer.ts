import { createReducer, createEntityAdapter } from '@reduxjs/toolkit';
import { Class } from '../../class/uitls/class.interface';
import { addPaymentPriceStart, deletePaymentPriceStart } from './payment.action';
import { RootState } from '../../../app/rootReducer';
const paymentAdapter = createEntityAdapter<Class>({
  selectId: item => item.id,
});

const initialState = paymentAdapter.getInitialState({
  totalPrice: 0,
});

const reducer = createReducer(initialState, {
  [addPaymentPriceStart.type]: (
    state,
    action: ReturnType<typeof addPaymentPriceStart>,
  ) => {
    const result = action.payload;
    paymentAdapter.addOne(state, result);
    state.totalPrice += result.price;
  },
  [deletePaymentPriceStart.type]: (
    state,
    action: ReturnType<typeof deletePaymentPriceStart>,
  ) => {
    const id = action.payload;
    state.totalPrice -= state.entities[id].price;
    paymentAdapter.removeOne(state, id);
  },
});

export default reducer;

export const selectPaymentTotalPrice = (state: RootState) => state.payment.totalPrice;
export const paymentSelector = paymentAdapter.getSelectors<RootState>(
  (state: RootState) => state.payment,
);
