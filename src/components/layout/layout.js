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

const WrapperMain = styled.main`
  /* display: none; */
  opacity: ${({ opacity }) => opacity};
`;

const Layout = ({ children }) => {
  const { state, loadingComplete, updateColor } = useAppContext();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [color, setColor] = useState(0.8);
  const [opacity, setOpacity] = useState(1);
  const ref = useRef();
  // const BG = ;

  useEffect(() => {
    // const Element = document.getElementById("threejsBG");
    // new Sketch({
    //   dom: Element,
    //   color: color,
    // });
    // const updateBG = () => {
    // setColor(0);
    // BG.changeColor(color);
    // };
    // const renderBG = () => {
    //   const Element = document.getElementById("threejsBG");
    //   const BG = new Sketch({
    //     dom: Element,
    //     color: color,
    //   });
    // };
    // renderBG();
  }, [color]);
  // console.log(color);

  return (
    <>
      <GlobalStyle />
      {/* <SEO title="Brian Tarqui Rojas" /> */}
      <Header />
      {/* <ThreeCanvas /> */}
      <button
        className="button"
        onClick={() => setOpacity(opacity === 1 ? 0 : 1)}
      >
        CHANGE COLOR
      </button>
      <WrapperMain
        opacity={opacity}
        // initial={{ x: 300, opacity: 0 }}
        // animate={{ x: 0, opacity: 1 }}
        // exit={{ x: 300, opacity: 0 }}
        // transition={{
        //   type: "spring",
        //   stiffness: 260,
        //   damping: 20,
        // }}
      >
        {/* <input
          type="text"
          name="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        /> */}
        {children}
        {/* <ThreeCanvas color={color} setColor={setColor} /> */}
      </WrapperMain>
      <RightSide />
      <LeftSide />
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
