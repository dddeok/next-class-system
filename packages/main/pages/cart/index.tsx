import React from 'react';

import { NextPage } from 'next';

import Layout from '../../src/features/layout/template/Layout';
import Cart from '../../src/features/cart/template/Cart';

const Index: NextPage = () => (
  <Layout>
    <Cart />
  </Layout>
);

export default Index;
