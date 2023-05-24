import { Canvas } from "@react-three/fiber";
import React from "react";
import Sphere from "./Sphere";
import Effect from "./effect";

const ThreeCanvas = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 1.5] }}
      style={{
        position: "fixed",
        inset: "0",
        width: "100vw",
        height: "100vh",
        zIndex: "-9",
      }}
    >
      <Sphere />
      <Effect />
    </Canvas>
  );
};

export default ThreeCanvas;
