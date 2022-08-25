import React, { ReactNode } from "react";
import Footer from "./footer/Footer";
import Header from "./header/Header";

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
