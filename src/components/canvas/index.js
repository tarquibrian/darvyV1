import { Canvas } from "@react-three/fiber";
import React from "react";
import Sphere from "./Sphere";
import { useControls } from "leva";
import { OrbitControls } from "@react-three/drei";
import Effect from "./effect";

const ThreeCanvas = ({ color, setColor }) => {
  const props = useControls({
    base: { value: "#000" },
    colorA: { value: "#000" },
    colorB: { value: "#fff" },
  });
  return (
    <Canvas camera={{ position: [0, 0, 1.5] }}>
      <Sphere color={color} setColor={setColor} {...props} />
      <OrbitControls />
      <Effect />
    </Canvas>
  );
};

export default ThreeCanvas;
