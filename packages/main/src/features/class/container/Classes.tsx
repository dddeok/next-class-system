import React from 'react';
import styled from 'styled-components';

import { useSelector } from 'react-redux';
import { classSelector } from '../uitls/class.reducer';
import ClassCardItem from '../component/item/ClassCardItem';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

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
  const ids = useSelector(classSelector.selectIds);
  const entities = useSelector(classSelector.selectEntities);
  return (
    <Container>
      <h2 className="classes-title">클래스 목록</h2>
      <div className="classes-content">
        {ids.map(id => {
          const { coverImage, title, price } = entities[id];
          return (
            <ClassCardItem key={id} imageURL={coverImage} title={title} price={price} />
          );
        })}
      </div>
    </Container>
  );
};

export default Classes;
