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

const BGImage = styled.div`
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
  const [color, setColor] = useState(0.8);

  const renderBG = () => {
    const Element = document.getElementById("threejsBG");
    new Sketch({
      dom: Element,
      // color: color,
    });
  };
  const updateBG = () => {
    setColor(0.8);
  };

  useEffect(() => {
    renderBG();
  }, []);
  // console.log(color);

  return (
    <>
      <GlobalStyle />

      {/* <SEO title="Brian Tarqui Rojas" /> */}

      <Header />

      <motion.main
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 300, opacity: 0 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        <button className="button" onClick={() => updateBG()}>
          ccolorr
        </button>
        {children}
      </motion.main>

      <RightSide />
      <LeftSide />

      <BGImage
        id="threejsBG"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeIn" }}
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
