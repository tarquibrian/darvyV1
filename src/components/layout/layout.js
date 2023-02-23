import { GlobalStyle } from "@styles";
import React from "react";
import SEO from "./seo";
import { Footer, Header } from "@components";

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <SEO title="Brian Tarqui Rojas" />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
