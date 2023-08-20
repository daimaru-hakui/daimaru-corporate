import React, { ReactNode } from 'react';
import Footer from './common/footer/Footer';
import Header from './common/header/Header';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
