import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import PaymentList from '../container/PaymentList';
import { Selector, Option } from '../components/select/Selector';
import {
  selectPaymentTotalPrice,
  selectPaymentSalePrice,
  selectPaymentCoupon,
  paymentSelector,
} from '../utils/payment.reducer';
import { numberWithCommas } from '../../class/function/numberWithCommas';
import { changePaymentCouponStart } from '../utils/payment.action';
import { coupons } from '../components/data/coupons';
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
  .payment-coupon {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;

const Payment = () => {
  const dispatch = useDispatch();
  const totlePrice = useSelector(selectPaymentTotalPrice);
  const salePrice = useSelector(selectPaymentSalePrice);
  const payments = useSelector(paymentSelector.selectEntities);
  const coupon = useSelector(selectPaymentCoupon);

  useEffect(() => {
    if (coupon) dispatch(changePaymentCouponStart(coupon));
  }, [dispatch, totlePrice]);

  function onClickCoupon(type: string) {
    const selected = coupons.find(coupon => coupon.type === type);
    dispatch(changePaymentCouponStart(selected));
  }

  return (
    <Container>
      <div className="payment-informations">
        <h2 className="payment-title">결제 정보</h2>
        <span className="payment-total-price">
          {salePrice
            ? `Total : ${numberWithCommas(salePrice)} 원 (-${numberWithCommas(
                totlePrice - salePrice,
              )} 원)`
            : `Total : ${numberWithCommas(totlePrice)} 원`}
        </span>
      </div>
      <div className="payment-coupon">
        <Selector value={coupon?.type} onChange={e => onClickCoupon(e.target.value)}>
          {coupons.map((coupon, index) => {
            const { type, title } = coupon;
            return (
              <Option key={index} value={type}>
                {title ? title : 'Null'}
              </Option>
            );
          })}
        </Selector>
      </div>
      <PaymentList />
    </Container>
  );
};

export default Payment;
