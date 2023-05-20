import { Canvas } from "@react-three/fiber";
import React, { useRef } from "react";
import Sphere from "./Sphere";
import { useControls } from "leva";
import { OrbitControls } from "@react-three/drei";
import Effect from "./effect";
import styled from "styled-components";

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

const ThreeCanvas = () => {
  const ref = useRef();
  return (
    <BGImage
      id="threejsBG"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeIn" }}
    >
      <Canvas camera={{ position: [0, 0, 1.5] }} style={{}}>
        <Sphere />
        {/* <OrbitControls /> */}
        <Effect />
      </Canvas>
    </BGImage>
  );
};

export default ThreeCanvas;
