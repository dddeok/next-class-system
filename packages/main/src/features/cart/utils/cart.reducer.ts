import { createReducer, createEntityAdapter } from '@reduxjs/toolkit';
import { RootState } from '../../../app/rootReducer';
import { Class } from '../../class/uitls/class.interface';
import { addCartStart, deleteCartStart, addCartSuccess } from './cart.action';

const cartAdapter = createEntityAdapter<Class>({
  selectId: item => item.id,
});

const initialState = cartAdapter.getInitialState({
  totalcount: 0,
});

const reducer = createReducer(initialState, {
  [addCartSuccess.type]: (state, action: ReturnType<typeof addCartStart>) => {
    const cart = action.payload;
    cartAdapter.addOne(state, cart);
  },
  [deleteCartStart.type]: (state, action: ReturnType<typeof deleteCartStart>) => {
    const id = action.payload;
    cartAdapter.removeOne(state, id);
  },
});

export default reducer;

export const cartSelector = cartAdapter.getSelectors<RootState>(
  (state: RootState) => state.cart,
);
