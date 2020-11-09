import { combineReducers } from '@reduxjs/toolkit';
import classReducer from '../features/class/uitls/class.reducer';
import cartReducer from '../features/cart/utils/cart.reducer';
import paymentReducer from '../features/payment/utils/payment.reducer';
const rootReducer = combineReducers({
  class: classReducer,
  cart: cartReducer,
  payment: paymentReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
