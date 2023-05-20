import { Canvas } from "@react-three/fiber";
import React from "react";
import Sphere from "./Sphere";

const ThreeCanvas = ({ color, setColor }) => {
  return (
    <Canvas camera={{ position: [0, 0, 1.5] }}>
      <Sphere color={color} setColor={setColor}/>
    </Canvas>
  );
};

export default ThreeCanvas;
