"use client";
import * as THREE from "three";
import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import { MathUtils } from "three";
// import "./scene.css";

import vertexShader from "./vertexShader";
import fragmentShader from "./fragmentShader";

import { DotScreenShader } from "./customShader";

// import { EffectComposer } from "@react-three/postprocessing";

// import fragmentShader from "./fragmentShader";
// import fragment from "./shader/fragment.glsl";
// import vertex from "./shader/vertex.glsl";

const fragment = `
uniform float time;
uniform float progress;
uniform sampler2D texture1;
uniform vec4 resolution;
uniform float nColor;
varying vec2 vUv;
varying vec3 vPosition;
float PI = 3.141592653589793238;

// NOISE
float mod289(float x) {
	return x - floor(x * (1.0 / 289.0)) * 289.0;
}
vec4 mod289(vec4 x) {
	return x - floor(x * (1.0 / 289.0)) * 289.0;
}
vec4 perm(vec4 x) {
	return mod289(((x * 34.0) + 1.0) * x);
}

float noise(vec3 p) {
	vec3 a = floor(p);
	vec3 d = p - a;
	d = d * d * (3.0 - 2.0 * d);

	vec4 b = a.xxyy + vec4(0.0, 1.0, 0.0, 1.0);
	vec4 k1 = perm(b.xyxy);
	vec4 k2 = perm(k1.xyxy + b.zzww);

	vec4 c = k2 + a.zzzz;
	vec4 k3 = perm(c);
	vec4 k4 = perm(c + 1.0);

	vec4 o1 = fract(k3 * (1.0 / 41.0));
	vec4 o2 = fract(k4 * (1.0 / 41.0));

	vec4 o3 = o2 * d.z + o1 * (1.0 - d.z);
	vec2 o4 = o3.yw * d.x + o3.xz * (1.0 - d.x);

	return o4.y * d.y + o4.x * (1.0 - d.y);
}

float lines(vec2 uv, float offset) {
	return smoothstep(0., 0.5 + offset * 0.5, 0.5 * abs((sin(uv.x * 35.) + offset * 2.)));
}

mat2 rotate2D(float angle) {
	return mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
}

// void main() {

// 	vec3 baseFirst = vec3(0.38, 0.09, 0.57);
// 	vec3 accent = vec3(0.80, 0.95, 0.94);
// 	// vec3 accent = vec3(1.00, 0.78, 0.87);
// 	// vec3 accent = vec3(1.00, 0.69, 0.80);

// 	vec3 baseSecond = vec3(1.00, 0.1, 0.00);
// 	vec3 baseThird = vec3(232. / 255., 201. / 255., 73. / 255.);
// 	float n = noise(vPosition + time);

// 	vec2 baseUV = rotate2D(n) * vPosition.xy * .01;
// 	float basePattern = lines(baseUV, 0.5);
// 	float secondPattern = lines(baseUV, 0.1);

// 	vec3 baseColor = mix(baseSecond, baseFirst, basePattern);
// 	vec3 secondBaseColor = mix(baseColor, accent, secondPattern);

// 	gl_FragColor = vec4(vec3(secondBaseColor), 3.);
// }

void main() {

	vec3 baseFirst = vec3(0.38, 0.09, 0.57);
	vec3 accent = vec3(0.8, 0.95, 0.94);
	// vec3 accent = vec3(1.00, 0.78, 0.87);
	// vec3 accent = vec3(1.00, 0.69, 0.80);

	//black
	// vec3 baseSecond = vec3(1.00, 0.1, 0.00);
	vec3 baseSecond = vec3(0.00, 0.00, 0.00);

	// vec3 baseThird = vec3(232. / 255., 201. / 255., 73. / 255.);

	float n = noise(vPosition + time);

	//0.01
	vec2 baseUV = rotate2D(n) * vPosition.xy * .005;
	float basePattern = lines(baseUV, 0.1);
	float secondPattern = lines(baseUV, 0.1);

	vec3 baseColor = mix(baseSecond, baseFirst, basePattern);
	vec3 secondBaseColor = mix(baseColor, accent, secondPattern);

	gl_FragColor = vec4(vec3(secondBaseColor), 3.);
}
`;

const vertex = `uniform float time;
varying vec2 vUv;
varying vec3 vPosition;
uniform vec2 pixels;
float PI = 3.141592653589793238;
void main() {
  vUv = uv;
  vPosition = position;
  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`;

const Blob = () => {
  // This reference will give us direct access to the mesh
  const mesh = useRef();
  const hover = useRef(false);

  const uniforms = useMemo(
    () => ({
      u_intensity: {
        value: 0.3,
      },
      u_time: {
        value: 0.0,
      },
    }),
    []
  );

  useFrame((state) => {
    const { clock } = state;
    mesh.current.material.uniforms.u_time.value = 0.4 * clock.getElapsedTime();

    mesh.current.material.uniforms.u_intensity.value = MathUtils.lerp(
      mesh.current.material.uniforms.u_intensity.value,
      hover.current ? 0.85 : 0.15,
      0.02
    );
  });

  return (
    <mesh
      ref={mesh}
      position={[0, 0, 0]}
      scale={1.5}
      onPointerOver={() => (hover.current = true)}
      onPointerOut={() => (hover.current = false)}
    >
      <icosahedronGeometry args={[2, 20]} />
      <shaderMaterial
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms}
        wireframe={false}
      />
    </mesh>
  );
};

const Effect = () => {
  const mesh = useRef();
  // const {scene, }
  return (
    <mesh ref={mesh} position={[0, 0, 1.4]}>
      {/* <sphereBufferGeometry attach="geometry" /> */}
      {/* <shaderMaterial
        fragmentShader={DotScreenShader.fragmentShader}
        vertexShader={DotScreenShader.vertexShader}
        uniforms={DotScreenShader.uniforms}
      /> */}
    </mesh>
  );
};

const Blob2 = () => {
  const { gl } = useThree();

  const mesh = useRef();
  const uniforms = useMemo(
    () => ({
      u_color: {
        value: 0.0,
      },
      u_time: {
        value: 0.0,
      },
      resolution: { value: new THREE.Vector4() },
    }),
    []
  );

  useEffect(() => {
    // gl === WebGLRenderer
    // gl.info.calls
    // console.log(gl.info);
  });

  useFrame(() => {
    // const { clock } = state;
    // console.log(clock);
    // mesh.current.material.uniforms.u_time.value += 0.007;
    // mesh.current.rotateZ(0.004);
    mesh.current.rotation.z += 0.004;
  });

  return (
    <mesh ref={mesh} position={[0, 0, 1.4]}>
      <sphereBufferGeometry args={[1.5, 32, 32]} attach="geometry" />
      {/* <shaderMaterial
        fragmentShader={DotScreenShader.fragmentShader}
        vertexShader={DotScreenShader.vertexShader}
        uniforms={DotScreenShader.uniforms}
      /> */}
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

const Scene = () => {
  // const { gl } = useThree();
  // console.log(gl.info);
  const mesh = useRef();

  return (
    <Canvas camera={{ position: [0.0, 0.0, 8] }}>
      <Blob2 />
      <axesHelper />
      <OrbitControls />
      <Effect />
    </Canvas>
  );
};

export default Scene;
