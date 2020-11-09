import { createAction } from '@reduxjs/toolkit';
import { Class } from '../../class/uitls/class.interface';

export const addPaymentPriceStart = createAction(
  'payment/addPaymentPriceStart',
  (result: Class) => {
    return {
      payload: result,
    };
  },
);

export const deletePaymentPriceStart = createAction(
  'payment/deletePaymentPriceStart',
  (id: string) => {
    return {
      payload: id,
    };
  },
);
