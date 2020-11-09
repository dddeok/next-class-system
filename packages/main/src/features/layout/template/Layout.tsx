import React from 'react';
import styled from 'styled-components';

import Navigation from '../container/Navigation';
const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  min-width: 1024px;
  min-height: 550px;
  overflow: hidden;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const Layout = ({ children }) => {
  return (
    <Container>
      <Navigation />
      <Content>{children}</Content>
    </Container>
  );
};

export default Layout;
