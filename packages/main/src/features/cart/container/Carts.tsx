import React from 'react';
import styled from 'styled-components';

import { useDispatch, useSelector } from 'react-redux';
import { cartSelector } from '../utils/cart.reducer';
import { deleteCartStart } from '../utils/cart.action';
import ClassCardItem from '../../class/component/item/ClassCardItem';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 30px 0px;
  overflow: scroll;
  .carts-title {
    font-size: 18px;
    font-weight: bold;
    color: rgb(27, 28, 29);
    letter-spacing: -0.45px;
    margin: 0px;
  }

  .carts-content {
    display: flex;
    padding: 16px 0px;
    width: 100%;
    flex-wrap: wrap;
  }
`;

const Carts = () => {
  const dispatch = useDispatch();
  const ids = useSelector(cartSelector.selectIds);
  const entities = useSelector(cartSelector.selectEntities);

  function onInCart(id: string) {
    dispatch(deleteCartStart(id));
  }
  return (
    <Container>
      <h2 className="carts-title">장바구니</h2>
      <div className="carts-content">
        {ids.map(id => {
          const { coverImage, title, price } = entities[id];
          const isInCart = entities[id] ? true : false;
          return (
            <ClassCardItem
              key={id}
              imageURL={coverImage}
              title={title}
              price={price}
              isInCart={isInCart}
              onInCart={() => onInCart(id)}
            />
          );
        })}
      </div>
    </Container>
  );
};

export default Carts;
