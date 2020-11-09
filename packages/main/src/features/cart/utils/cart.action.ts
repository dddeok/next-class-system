import { createAction } from '@reduxjs/toolkit';
import { Class } from '../../class/uitls/class.interface';

export const addCartStart = createAction('cart/addCartStart', (cart: Class) => {
  return {
    payload: cart,
  };
});

export const addCartSuccess = createAction('cart/addCartSuccess', (cart: Class) => {
  return {
    payload: cart,
  };
});

export const deleteCartStart = createAction('cart/deleteCartStart', (id: string) => {
  return {
    payload: id,
  };
});
