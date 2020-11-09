import React from 'react';
import styled from 'styled-components';

import { useDispatch, useSelector } from 'react-redux';
import { InputNumber } from '../components/input/InputNumber';
import LabelCheckbox from '../components/checkbox/LabelCheckbox';
import { numberWithCommas } from '../../class/function/numberWithCommas';
import { cartSelector } from '../../cart/utils/cart.reducer';
import { paymentSelector } from '../utils/payment.reducer';
import {
  addPaymentPriceStart,
  deletePaymentPriceStart,
  changePaymentCountStart,
} from '../utils/payment.action';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .payment-item {
    display: flex;
    align-items: center;
    width: 100%;
  }
`;

const PaymentList = () => {
  const dispatch = useDispatch();
  const cartIds = useSelector(cartSelector.selectIds);
  const carts = useSelector(cartSelector.selectEntities);
  const payments = useSelector(paymentSelector.selectEntities);

  function onCheck(id: string, checked: boolean) {
    if (checked) dispatch(addPaymentPriceStart(carts[id]));
    else dispatch(deletePaymentPriceStart(id));
  }

  function onCount(id: string, count: string) {
    const number = parseInt(count);
    if (number > 0) dispatch(changePaymentCountStart(id, number));
    else alert('최소 1개이상의 상품을 선택해야합니다.');
  }

  return (
    <Container>
      {cartIds.map(id => {
        const { title, price } = carts[id];
        const checked = payments[id] ? true : false;
        return (
          <div key={id} className="payment-item">
            {payments[id] && (
              <InputNumber
                value={payments[id].count}
                onChange={e => onCount(id, e.target.value)}
              />
            )}
            <LabelCheckbox
              checked={checked}
              title={title}
              option={`${numberWithCommas(price)} 원`}
              onChange={(checked: boolean) => onCheck(id, checked)}
            />
          </div>
        );
      })}
    </Container>
  );
};

export default PaymentList;
