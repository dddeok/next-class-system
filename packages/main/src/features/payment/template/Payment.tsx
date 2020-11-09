import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import PaymentList from '../container/PaymentList';
import { selectPaymentTotalPrice } from '../utils/payment.reducer';
import { numberWithCommas } from '../../class/function/numberWithCommas';

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
  .payment-informations {
    display: flex;
    align-items: center;
    width: 100%;
  }
  .payment-total-price {
    font-size: 14px;
    color: #535562;
    margin-left: auto;
  }
`;

const Payment = () => {
  const totlePrice = useSelector(selectPaymentTotalPrice);
  return (
    <Container>
      <div className="payment-informations">
        <h2 className="payment-title">결제 정보</h2>
        <span className="payment-total-price">{`Total : ${numberWithCommas(
          totlePrice,
        )} 원`}</span>
      </div>
      <PaymentList />
    </Container>
  );
};

export default Payment;
