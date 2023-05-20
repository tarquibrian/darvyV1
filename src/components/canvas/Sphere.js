import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import React, { useEffect, useMemo, useRef, useState } from "react";

import { vertex } from "./shaders/vertex";
import { fragment } from "./shaders/fragment";

const Sphere = ({ color }) => {
  console.log(color / 100);
  const mesh = useRef();
  const uniforms = useMemo(
    () => ({
      // u_time: {
      //   value: 0.0,
      // },
      time: { value: 0 },
      color: { value: color },
      resolution: { value: new THREE.Vector4() },
    }),
    [color]
  );

  const updateColor = (valor) => {
    let meshcolor = mesh.current.material.uniforms.color.value * 100;

    if (meshcolor < valor) {
      while (meshcolor < valor) {
        meshcolor++;
        mesh.current.material.uniforms.color.value = meshcolor / 100;
      }
    }
    if (meshcolor > valor) {
      while (meshcolor > valor) {
        meshcolor--;
        mesh.current.material.uniforms.color.value = meshcolor / 100;
      }
    }

    console.log(meshcolor / 100);
  };

  useEffect(() => {
    // gl === WebGLRenderer
    // gl.info.calls
    // console.log(gl.info);
    
  }, [color]);

  useFrame(() => {
    // const { clock } = state;
    // console.log(clock);
    mesh.current.material.uniforms.time.value += 0.007;
    // mesh.current.rotateZ(0.004);
    mesh.current.rotation.z += 0.004;
    
  });

  const update = (valor) => {
    mesh.current.material.uniforms.color.value = valor;
  }

  setTimeout(() => {
    update(0.0)
  }, 2000);

  setTimeout(() => {
    update(0.4)
  }, 4000);

  return (
    <mesh ref={mesh}>
      <sphereBufferGeometry args={[1.5, 32, 32]} attach="geometry" />
      <shaderMaterial
        fragmentShader={fragment}
        vertexShader={vertex}
        side={THREE.DoubleSide}
        extensions={{
          derivatives: "#extension GL_OES_standard_derivatives : enable",
        }}
        uniforms={uniforms}
      />
    </mesh>
  );
};

export default Sphere;
