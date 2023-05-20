import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import React, { useEffect, useMemo, useRef, useState } from "react";

import { vertex } from "./shaders/vertex";
import { fragment } from "./shaders/fragment";
import { useAppContext } from "src/context/app.context";
import { useControls } from "leva";
import { LayerMaterial, Base, Depth, Fresnel } from "lamina";

const Sphere = ({ color, setColor }) => {
  const { state } = useAppContext();
  const newColor = state.color;
  const mesh = useRef();
  const materialRef = useRef();
  const uniforms = useMemo(
    () => ({
      // u_time: {
      //   value: 0.0,
      // },
      time: { value: 0 },
      color: { value: state.color },
      resolution: { value: new THREE.Vector4() },
    }),
    [state.color]
  );

  useFrame(() => {
    // const { clock } = state;
    // console.log(clock);
    // mesh.current.material.uniforms.time.value += 0.007;
    // mesh.current.rotation.z += 0.004;
  });
  useEffect(() => {}, []);
  

  return (
    <mesh ref={mesh}>
      <sphereBufferGeometry args={[1.5, 32, 32]} attach="geometry" />
      <LayerMaterial>
        <Base color={base} alpha={1} mode="normal" />
        <Depth colorA={colorB} colorB={colorA} alpha={0.5} mode="normal" near={0} far={3} origin={[1, 1, 1]} />
        <Depth ref={depth} colorA={colorB} colorB="black" alpha={1} mode="lighten" near={0.25} far={2} origin={[1, 0, 0]} />
        <Fresnel mode="softlight" color="white" intensity={0.3} power={2} bias={0} />
      </LayerMaterial>
      {/* <shaderMaterial
        ref={materialRef}
        fragmentShader={fragment}
        vertexShader={vertex}
        side={THREE.DoubleSide}
        extensions={{
          derivatives: "#extension GL_OES_standard_derivatives : enable",
        }}
        uniforms={uniforms}
      /> */}
    </mesh>
  );
};

export default Sphere;
