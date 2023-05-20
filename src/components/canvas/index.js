import { Canvas } from "@react-three/fiber";
import React from "react";
import Sphere from "./Sphere";
import { useControls } from "leva";
import { OrbitControls } from "@react-three/drei";
import Effect from "./effect";

const ThreeCanvas = ({ color, setColor }) => {
  return (
    <Canvas camera={{ position: [0, 0, 1.5] }} style={{}}>
      <Sphere />
      {/* <OrbitControls /> */}
      <Effect />
    </Canvas>
  );
};

export default ThreeCanvas;
