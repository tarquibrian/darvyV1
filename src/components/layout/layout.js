import { GlobalStyle } from "@styles";
import React, { useEffect, useState } from "react";
import SEO from "./seo";
import { Footer, Header, LeftSide, Loader, RightSide } from "@components";
import styled from "styled-components";
import Image from "next/image";
import noiseIMG from "../../images/layer-min.png";
import { motion } from "framer-motion";
import { useAppContext } from "src/context/app.context";
import { useRouter } from "next/router";
import Head from "next/head";
import Sketch from "src/threejs/main";

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
  }
`;

const Layout = ({ children }) => {
  const { state, loadingComplete } = useAppContext();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  new Sketch({
    dom: document.getElementById("container"),
  });

  useEffect(() => {
    // if (router.asPath === "/") {
    //   setTimeout(() => setLoading(true), 3000);
    // } else {
    //   setLoading(true);
    // }
  }, [router, loading]);
  return (
    <>
      <GlobalStyle />

      {/* <SEO title="Brian Tarqui Rojas" /> */}

      <Header />
      <>
        <motion.main
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {children}
        </motion.main>
      </>

      <RightSide />
      <LeftSide />

      <BGImage id="container">
        {/* <Image
          priority
          src={noiseIMG}
          alt="background image"
          placeholder="blur"
          onLoadingComplete={() => {
            setLoading(true);
          }}
        /> */}
      </BGImage>
    </>
  );
};

export default Layout;
