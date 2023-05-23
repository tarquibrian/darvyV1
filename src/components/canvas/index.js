import { Canvas } from "@react-three/fiber";
import React, { useRef } from "react";
import Sphere from "./Sphere";
import Effect from "./effect";
import styled from "styled-components";
import { motion } from "framer-motion";

const BGImage = styled(motion.div)`
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  z-index: -9;
  overflow: hidden;
  transform-style: preserve-3d;
`;

const ThreeCanvas = () => {
  const ref = useRef();
  return (
    <BGImage
      id="threejsBG"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Canvas camera={{ position: [0, 0, 1.5] }} style={{}}>
        <Sphere />
        <Effect />
      </Canvas>
    </BGImage>
  );
};

export default ThreeCanvas;
