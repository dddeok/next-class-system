import React from 'react';
import styled from 'styled-components';

import Carts from '../container/Carts';
import Payment from '../../payment/template/Payment';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 0 30px;
`;

const Cart = () => {
  return (
    <Container>
      <Carts />
      <Payment />
    </Container>
  );
};

export default Cart;
