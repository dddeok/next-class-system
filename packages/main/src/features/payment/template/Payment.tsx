import React from 'react';
import styled from 'styled-components';

import PaymentList from '../container/PaymentList';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 300px;

  border-top: 1px solid #e5e5e7;
  padding: 16px 0px;
  overflow: scroll;

  .payment-title {
    font-size: 18px;
    color: rgb(27, 28, 29);
    letter-spacing: -0.45px;
    margin: 0px;
  }
`;

const Payment = () => {
  return (
    <Container>
      <h2 className="payment-title">결제 정보</h2>
      <PaymentList />
    </Container>
  );
};

export default Payment;
