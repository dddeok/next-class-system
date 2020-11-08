import React from 'react';
import styled from 'styled-components';

import Navigation from '../container/Navigation';
const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  min-width: 1024px;
  min-height: 550px;
`;

const Content = styled.div`
  display: inline-flex;
  overflow: auto;
  flex: 1;
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
