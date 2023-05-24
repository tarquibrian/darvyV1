import { GlobalStyle } from "@styles";
import React, { useEffect, useRef, useState } from "react";
import { Header, LeftSide, Loader, RightSide } from "@components";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useAppContext } from "src/context/app.context";
import { useRouter } from "next/router";
import Sketch from "src/threejs/main";
import Image from "next/image";
import noiseIMG from "../../images/layer-min.png";
import dynamic from "next/dynamic";
import ThreeCanvas from "../canvas";

// const ThreeCanvas = dynamic(() => import("../canvas"), {
//   loading: () => <p>loading..</p>,
//   ssr: true,
// });

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

const WrapperMain = styled(motion.main)`
  /* display: none; */
  /* opacity: ${({ opacity }) => opacity}; */
`;

const Layout = ({ children }) => {
  const { state, loadingComplete, updateColor } = useAppContext();
  const router = useRouter();
  const ref = useRef();

  useEffect(() => {
    if (router.asPath === "/") {
      updateColor([0.8, 0.95, 0.94]);
    }
    console.log(router);
  }, []);

  // useEffect(() => {
  //   // console.log(state.loadingComplete);
  //   // if (state.loadingComplete === false) {
  //   //   setTimeout(() => {
  //   //     // setLoading(true);
  //   //     loadingComplete(true);
  //   //   }, 4000);
  //   // } else {
  //   //   return;
  //   // }
  //   // const Element = document.getElementById("threejsBG");
  //   // new Sketch({
  //   //   dom: Element,
  //   //   color: color,
  //   // });
  //   // const updateBG = () => {
  //   // setColor(0);
  //   // BG.changeColor(color);
  //   // };
  //   // const renderBG = () => {
  //   //   const Element = document.getElementById("threejsBG");
  //   //   const BG = new Sketch({
  //   //     dom: Element,
  //   //     color: color,
  //   //   });
  //   // };
  //   // renderBG();
  // }, [state.loadingComplete, loadingComplete]);
  // console.log(state.loadingComplete);

  return (
    <>
      {/* {!state.loadingComplete && <Loader />} */}
      <WrapperMain
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ x: 100, opacity: 0 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        {children}
      </WrapperMain>
      {/* <BGImage
        id="threejsBG"
        ref={ref}
        // initial={{ opacity: 0 }}
        // animate={{ opacity: 1 }}
        // transition={{ duration: 0.3, ease: "easeIn" }}
      >
      </BGImage> */}
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
