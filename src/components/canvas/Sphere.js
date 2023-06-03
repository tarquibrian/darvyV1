import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import React, { useEffect, useMemo, useRef, useState } from "react";

import { vertex } from "./shaders/vertex";
import { fragment } from "./shaders/fragment";
import { useAppContext } from "src/context/app.context";

const Sphere = () => {
  const { state, updateColor } = useAppContext();
  const mesh = useRef();
  const [colorI, setColorI] = useState(0);
  const { color, colorBase, colorDeep } = state.threeColors;
  // color: [0.8, 0.95, 0.94],
  // colorBase: [0.38, 0.09, 0.57],
  // colorDeep: [0, 0, 0]
  // const uniforms = useMemo(
  //   () => ({
  //     time: { value: 0 },
  //     color: { value: new THREE.Color(color[0], color[1], color[2]) },
  //     colorBase: {
  //       value: new THREE.Color(colorBase[0], colorBase[1], colorBase[2]),
  //     },
  //     colorDeep: {
  //       value: new THREE.Color(colorDeep[0], colorDeep[1], colorDeep[2]),
  //     },
  //     resolution: { value: new THREE.Vector4() },
  //   }),
  //   [color, colorBase, colorDeep]
  // );

  // const uniforms = useMemo(()=>( {

  // },}),
  const uniforms = useMemo(
    () => ({
      time: { value: 0 },
      color: { value: new THREE.Color(0, 0.95, 0.94) },
      colorBase: {
        value: new THREE.Color(0.38, 0.09, 0.57),
      },
      colorDeep: {
        value: new THREE.Color(0, 0, 0),
      },
      resolution: { value: new THREE.Vector4() },
    }),
    []
  );

  // color: [0, 0.95, 0.94],
  // colorBase: [0.38, 0.09, 0.57],
  // colorDeep: [0, 0, 0],

  const myShader = new THREE.ShaderMaterial({
    uniforms: uniforms,
    fragmentShader: fragment,
    vertexShader: vertex,
    side: THREE.DoubleSide,
    extensions: {
      derivatives: "#extension GL_OES_standard_derivatives : enable",
    },
  });

  useFrame(({ clock }, delta) => {
    mesh.current.material.uniforms.time.value += 0.007;
    mesh.current.rotation.z += 0.009;
    // uniforms.color.value.r += clock.elapsedTime * -0.08;

    // uniforms.color.value[0] = clock.elapsedTime * 0.5;
    // console.log(uniforms.color.value[0]);
    // console.log(state.threeColors.color[0]);

    if (uniforms.color.value.r < color[0]) {
      // mesh.current.material.uniforms.color.value.r =
      //   mesh.current.material.uniforms.time.value.toFixed(2);
      mesh.current.material.uniforms.color.value.r += clock.elapsedTime * 0.009;
      console.log("test", uniforms.color.value.r);
    }
    // console.log(mesh.current.material.uniforms.time);
  });
  console.log(uniforms.color.value.r);

  return (
    <mesh ref={mesh}>
      <sphereGeometry args={[1.5, 32, 32]} attach="geometry" />
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
