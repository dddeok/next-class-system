import { createAction } from '@reduxjs/toolkit';
import { Class } from '../../class/uitls/class.interface';
import { Payment } from './payment.interface';
export const addPaymentPriceStart = createAction(
  'payment/addPaymentPriceStart',
  (result: Class) => {
    return {
      payload: result,
    };
  },
);

export const addPaymentPriceSuccess = createAction(
  'payment/addPaymentPriceSuccess',
  (payment: Payment) => {
    return {
      payload: payment,
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

export const changePaymentCountStart = createAction(
  'payment/changePaymentCountStart',
  (id: string, count: number) => {
    return {
      payload: { id, count },
    };
  },
);
