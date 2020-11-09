import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import Carts from '../container/Carts';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 0 30px;
  overflow: scroll;
`;

const Cart = () => {
  return (
    <Container>
      <Carts />
    </Container>
  );
};

export default Cart;
