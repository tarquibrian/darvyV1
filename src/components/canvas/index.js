import { Canvas } from "@react-three/fiber";
import React from "react";
import Sphere from "./Sphere";

const ThreeCanvas = () => {
  return (
    <Canvas camera={{ position: [0, 0, 1.5] }}>
      <Sphere />
    </Canvas>
  );
};

export default ThreeCanvas;
