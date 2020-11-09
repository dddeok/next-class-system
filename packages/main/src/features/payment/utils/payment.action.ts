import { createAction } from '@reduxjs/toolkit';
import { Class } from '../../class/uitls/class.interface';
import { Payment, Coupon } from './payment.interface';
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

export const changePaymentCouponStart = createAction(
  'payment/changePaymentCouponStart',
  (coupon: Coupon) => {
    return { payload: coupon };
  },
);

export const changePaymentCouponSuccess = createAction(
  'payment/changePaymentCouponSuccess',
  (price: number | null) => {
    return {
      payload: price,
    };
  },
);
