import React from 'react';
import styled from 'styled-components';
import Router from 'next/router';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 220px;
  height: 100%;
  background: #f4f4f4;
  border-right: 1px solid #f4f4f4;
  padding: 30px 0px;
`;

const Menu = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 36px;
  font-size: 16px;
  color: #535562;
  text-decoration: none;
`;

const menuMap = [
  { title: '상품목록', route: '/products' },
  { title: '장바구니', route: '/cart' },
];
const Navigation = () => {
  function pushRoute(route: string) {
    Router.push(route, route, { shallow: true });
  }
  return (
    <Container>
      {menuMap.map(menu => {
        const { title, route } = menu;
        return (
          <Menu key={route} onClick={() => pushRoute(route)}>
            {title}
          </Menu>
        );
      })}
    </Container>
  );
};

export default Navigation;
