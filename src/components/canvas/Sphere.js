import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import React, { useEffect, useMemo, useRef, useState } from "react";

import { vertex } from "./shaders/vertex";
import { fragment } from "./shaders/fragment";
import { useAppContext } from "src/context/app.context";
import { useControls } from "leva";
import { LayerMaterial, Depth, Fresnel } from "lamina";

const Sphere = ({ color, setColor, base, colorA, colorB }) => {
  const { state } = useAppContext();
  const newColor = state.color;
  const mesh = useRef();
  const depth = useRef();
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
      <LayerMaterial
        color="#000" //
        lighting="physical"
        transmission={1}
      >
        <Depth
          colorA="#810000" //
          colorB="#ffd0d0"
          alpha={0.5}
          mode="multiply"
          near={0}
          far={2}
          origin={[1, 1, 1]}
        />
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
