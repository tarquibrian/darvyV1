import { GlobalStyle } from "@styles";
import React from "react";
import SEO from "./seo";
import { Footer, Header, LeftSide, RightSide } from "@components";
import styled from "styled-components";
import Image from "next/image";
import noiseIMG from "../../images/layer-min.png";
import { motion } from "framer-motion";

const BGImage = styled.div`
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  z-index: -9;
  overflow: hidden;
  transform-style: preserve-3d;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* transform: translate3d(0, 0, -1px) scale(2); */
  }
`;

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <SEO title="Brian Tarqui Rojas" />
      <Header />
      <>
        <motion.main
          initial={{ x: 300, opacity: 1 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 300, opacity: 1 }}
        >
          {children}
        </motion.main>
      </>

      <RightSide />
      <LeftSide />

      <BGImage>
        <Image
          priority
          src={noiseIMG}
          alt="background image"
          placeholder="blur"
        />
      </BGImage>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
