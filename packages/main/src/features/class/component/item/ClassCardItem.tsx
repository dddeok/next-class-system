import React from 'react';
import styled from 'styled-components';
import { numberWithCommas } from '../../function/numberWithCommas';

import { HeartTwoTone } from '@ant-design/icons';
interface ThumbanilProps {
  imageURL: string;
}
const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 230px;
  padding: 0 10px;
  padding-bottom: 16px;

  .class-card-item-title {
    font-size: 14px;
    letter-spacing: -0.15px;
    color: rgb(27, 28, 29);
    padding: 8px 0ex;
    height: 50px;
  }
  .class-card-item-price {
    font-size: 14px;
    letter-spacing: -0.15px;
    color: rgb(27, 28, 29);
    font-weight: bold;
  }
  .class-card-item-detail {
    display: flex;
    width: 100%;

    cursor: pointer;
  }
`;

const Thumbnail = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 230px;
  height: 170px;
  border-radius: 11px;
  background-image: ${(props: ThumbanilProps) => `url(${props.imageURL})`};
  background-size: cover;
`;

const HeartIcon = styled(HeartTwoTone)`
  font-size: 14px;

  margin-left: auto;
  outline: 0;
`;

interface Props {
  imageURL: string;
  title: string;
  price: number;
  isInCart?: boolean;
  onInCart: () => void;
}

const ClassCardItem = ({ imageURL, title, price, isInCart, onInCart }: Props) => {
  return (
    <Container>
      <Thumbnail imageURL={imageURL} />
      <span className="class-card-item-title">{title}</span>
      <div className="class-card-item-detail">
        <span className="class-card-item-price">{`${numberWithCommas(price)} 원`}</span>
        <HeartIcon twoToneColor={isInCart ? '#ff4d4f' : '#535562'} onClick={onInCart} />
      </div>
    </Container>
  );
};

export default ClassCardItem;
