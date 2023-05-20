import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import React, { useEffect, useMemo, useRef, useState } from "react";

import { vertex } from "./shaders/vertex";
import { fragment } from "./shaders/fragment";
import { useAppContext } from "src/context/app.context";
import { useControls } from "leva";
import { LayerMaterial, Depth, Fresnel, Base, Noise } from "lamina";

const Sphere = ({ color, setColor, base, colorA, colorB }) => {
  const { state } = useAppContext();
  const mesh = useRef();
  const uniforms = useMemo(
    () => ({
      time: { value: 0 },
      color: { value: state.color },
      resolution: { value: new THREE.Vector4() },
    }),
    [state.color]
  );

  const myShader = new THREE.ShaderMaterial({
    uniforms: uniforms,
    fragmentShader: fragment,
    vertexShader: vertex,
    side: THREE.DoubleSide,
    extensions: {
      derivatives: "#extension GL_OES_standard_derivatives : enable",
    },
  });
  // useFrame(() => {
  //   // const { clock } = state;
  //   // console.log(clock);
  //   // mesh.current.material.uniforms.time.value += 0.007;
  //   // mesh.current.rotation.z += 0.004;

  // });
  useFrame(() => {
    mesh.current.material.uniforms.time.value += 0.007;
    mesh.current.rotation.z += 0.009;
  });
  useEffect(() => {}, []);

  return (
    <mesh ref={mesh}>
      <sphereBufferGeometry args={[1.5, 32, 32]} attach="geometry" />
      {/* <sphereBufferGeometry args={[1, 64, 64]} attach="geometry" /> */}
      <primitive object={myShader} attach="material" />

      {/* <shaderMaterial
        // ref={materialRef}
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
