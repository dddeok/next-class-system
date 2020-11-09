import React from 'react';
import styled from 'styled-components';

import { useDispatch, useSelector } from 'react-redux';

import LabelCheckbox from '../components/checkbox/LabelCheckbox';
import { numberWithCommas } from '../../class/function/numberWithCommas';
import { cartSelector } from '../../cart/utils/cart.reducer';
import { paymentSelector } from '../utils/payment.reducer';
import { addPaymentPriceStart, deletePaymentPriceStart } from '../utils/payment.action';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
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

  return (
    <Container>
      {cartIds.map(id => {
        const { title, price } = carts[id];
        const checked = payments[id] ? true : false;
        return (
          <LabelCheckbox
            key={id}
            checked={checked}
            title={title}
            option={`${numberWithCommas(price)} 원`}
            onChange={(checked: boolean) => onCheck(id, checked)}
          />
        );
      })}
    </Container>
  );
};

export default PaymentList;
