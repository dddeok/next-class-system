import React from 'react';
import styled from 'styled-components';

import { useSelector } from 'react-redux';

import LabelCheckbox from '../components/checkbox/LabelCheckbox';
import { numberWithCommas } from '../../class/function/numberWithCommas';
import { cartSelector } from '../../cart/utils/cart.reducer';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const PaymentList = () => {
  const cartIds = useSelector(cartSelector.selectIds);
  const carts = useSelector(cartSelector.selectEntities);
  //   function onCheck(checked: boolean) {}
  return (
    <Container>
      {cartIds.map(id => {
        const { title, price } = carts[id];
        return (
          <LabelCheckbox
            key={id}
            checked={true}
            title={title}
            option={`${numberWithCommas(price)} 원`}
          />
        );
      })}
    </Container>
  );
};

export default PaymentList;
