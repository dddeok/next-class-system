import React from 'react';
import styled from 'styled-components';

import { useDispatch, useSelector } from 'react-redux';
import { classSelector } from '../uitls/class.reducer';
import { cartSelector } from '../../cart/utils/cart.reducer';
import { addCartStart, deleteCartStart } from '../../cart/utils/cart.action';
import ClassCardItem from '../component/item/ClassCardItem';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 30px 0px;
  .classes-title {
    font-size: 18px;
    font-weight: bold;
    color: rgba(27, 28, 29);
    letter-spacing: -0.45px;
    margin: 0px;
  }

  .classes-content {
    display: flex;
    padding: 16px 0px;
    width: 100%;
    flex-wrap: wrap;
  }
`;

const Classes = () => {
  const dispatch = useDispatch();
  const classIds = useSelector(classSelector.selectIds);
  const classEntities = useSelector(classSelector.selectEntities);
  const cartEntiteis = useSelector(cartSelector.selectEntities);

  function onInCart(cart, isInCart) {
    if (isInCart) dispatch(deleteCartStart(cart.id));
    else dispatch(addCartStart(cart));
  }
  return (
    <Container>
      <h2 className="classes-title">클래스 목록</h2>
      <div className="classes-content">
        {classIds.map(id => {
          const { coverImage, title, price } = classEntities[id];
          const isInCart = cartEntiteis[id] ? true : false;
          return (
            <ClassCardItem
              key={id}
              imageURL={coverImage}
              title={title}
              price={price}
              isInCart={isInCart}
              onInCart={() => onInCart(classEntities[id], isInCart)}
            />
          );
        })}
      </div>
    </Container>
  );
};

export default Classes;
