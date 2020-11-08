import React from 'react';
import styled from 'styled-components';
import { NextPage } from 'next';

import Layout from '../../src/features/layout/template/Layout';
import Class from '../../src/features/class/template/Class';

const Index: NextPage = () => (
  <Layout>
    <Class />
  </Layout>
);

export default Index;
