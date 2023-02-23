import { GlobalStyle } from "@styles";
import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <main>{children}</main>
    </>
  );
};

export default Layout;
