import { Canvas } from "@react-three/fiber";
import React from "react";
import Sphere from "./Sphere";
import { useControls } from "leva";

const ThreeCanvas = ({ color, setColor }) => {
  const props = useControls({
    base: { value: '#ff4eb8' },
    colorA: { value: '#00ffff' },
    colorB: { value: '#ff8f00' }
  })
  return (
    <Canvas camera={{ position: [0, 0, 1.5] }}>
      <Sphere color={color} setColor={setColor} {...props}/>
    </Canvas>
  );
};

export default ThreeCanvas;
