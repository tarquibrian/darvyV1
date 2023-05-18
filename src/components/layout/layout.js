import { GlobalStyle } from "@styles";
import React, { useEffect, useState } from "react";
import { Header, LeftSide, Loader, RightSide } from "@components";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { useAppContext } from "src/context/app.context";
import { useRouter } from "next/router";
import Sketch from "src/threejs/main";
import Image from "next/image";
import noiseIMG from "../../images/layer-min.png";

const BGImage = styled(motion.div)`
  position: fixed;
  inset: 0;
  z-index: -9;
  overflow: hidden;
  transform-style: preserve-3d;

  .bg {
    display: block;
    width: 100%;
    height: 100%;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
  }
`;

const Layout = ({ children }) => {
  const { state, loadingComplete } = useAppContext();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const renderBG = () => {
    const Element = document.getElementById("threejsBG");
    new Sketch({
      dom: Element,
    });
  };

  useEffect(() => {
    renderBG();
  }, []);
  return (
    <>
      <GlobalStyle />

      {/* <SEO title="Brian Tarqui Rojas" /> */}

      <Header />
      {/* <AnimatePresence mode="wait"> */}
        <main
        // exit={{ opacity: 0 }}
        // initial={{ opacity: 0 }}
        // animate={{ opacity: 1 }}
        >
          {children}
        </main>
      {/* </AnimatePresence> */}

      <RightSide />
      <LeftSide />

      <BGImage
        id="threejsBG"
        // initial={{ opacity: 0 }}
        // animate={{ opacity: 1 }}
        // transition={{ duration: 0.3, ease: "easeIn" }}
      />
      {/* <Image
          priority
          src={noiseIMG}
          alt="background image"
          placeholder="blur"
          className="bg"
          onLoadingComplete={() => {
            setLoading(true);
          }}
        /> */}
    </>
  );
};

export default Layout;
