import * as React from 'react';
import { NextPage } from 'next';

const Index: NextPage = () => <div></div>;

Index.getInitialProps = async () => {
  const title = 'welcome!';
  return { title };
};

export default Index;
