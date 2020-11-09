import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import Classes from '../container/Classes';
import { fetchClassStart } from '../uitls/class.action';
import { classSelector } from '../uitls/class.reducer';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 0 30px;
  overflow: scroll;
`;

const Class = () => {
  const dispatch = useDispatch();
  const classes = useSelector(classSelector.selectAll);

  useEffect(() => {
    dispatch(fetchClassStart());
  }, []);

  return classes ? (
    <Container>
      <Classes />
    </Container>
  ) : null;
};

export default Class;
