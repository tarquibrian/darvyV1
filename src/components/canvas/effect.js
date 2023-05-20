import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo } from "react";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js";
import { DotScreenShader } from "./shaders/customShader";

const Effect = () => {
  const { gl, scene, camera, size } = useThree();

  const [bloom, final] = useMemo(() => {
    // const renderScene = new RenderPass(scene, camera);

    gl.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    gl.setSize(size.width, size.height);
    gl.setClearColor(0xeeeeee, 1);
    gl.physicallyCorrectLights = true;
    gl.outputEncoding = THREE.sRGBEncoding;

    const comp = new EffectComposer(gl);
    comp.addPass(new RenderPass(scene, camera));

    const effect1 = new ShaderPass(DotScreenShader);
    effect1.uniforms["scale"].value = 4;
    comp.addPass(effect1);
    // comp.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    // comp.setSize(size.width, size.width);

    // comp.renderToScreen = false;
    // comp.addPass(renderScene);
    // // comp.addPass(new UnrealBloomPass(new THREE.Vector2(512, 512), 1.5, 1, 0));

    // const finalComposer = new EffectComposer(gl);
    // finalComposer.addPass(renderScene);
    // const material = new THREE.ShaderMaterial({
    //   uniforms: {
    //     baseTexture: { value: null },
    //     bloomTexture: { value: comp.renderTarget2.texture },
    //   },
    //   vertexShader:
    //     "varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 ); }",
    //   fragmentShader:
    //     "uniform sampler2D baseTexture; uniform sampler2D bloomTexture; varying vec2 vUv; vec4 getTexture( sampler2D texelToLinearTexture ) { return mapTexelToLinear( texture2D( texelToLinearTexture , vUv ) ); } void main() { gl_FragColor = ( getTexture( baseTexture ) + vec4( 1.0 ) * getTexture( bloomTexture ) ); }",
    // });
    // material.map = true;
    // const finalPass = new ShaderPass(material, "baseTexture");
    // finalPass.needsSwap = true;
    // finalComposer.addPass(finalPass);
    // const fxaa = new ShaderPass(FXAAShader);
    // fxaa.material.uniforms["resolution"].value.x = 1 / size.width;
    // fxaa.material.uniforms["resolution"].value.y = 1 / size.height;
    // finalComposer.addPass(fxaa);
    return [comp, effect1];
  }, [gl, scene, size, camera]);

  useEffect(() => {
    bloom.setSize(size.width, size.height);
    // final.setSize(size.width, size.height);
  }, [bloom, final, size]);

  useFrame(() => {
    // https://github.com/mrdoob/three.js/blob/master/examples/webgl_postprocessing_unreal_bloom_selective.html
    // this seems kinda dirty, it mutates the scene and overwrites materials
    // scene.traverse(darkenNonBloomed);
    bloom.render();
    // scene.traverse(restoreMaterial);
    // then writes the normal scene on top
    // final.render();
  }, 1);
  return null;
};

export default Effect;
