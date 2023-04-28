import * as THREE from "three";

import fragment from "./shaders/fragment.glsl";
import vertex from "./shaders/vertex.glsl";

import { DotScreenShader } from "./customShader";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js";

export default class Sketch {
  constructor(options) {
    this.scene = new THREE.Scene();

    this.container = options.dom;
    this.width = this.container?.offsetWidth;
    this.height = this.container?.offsetHeight;
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setSize(this.width, this.height);
    this.renderer.setClearColor(0xeeeeee, 1);
    this.renderer.physicallyCorrectLights = true;
    this.renderer.outputEncoding = THREE.sRGBEncoding;

    this.container?.appendChild(this.renderer.domElement);

    this.camera = new THREE.PerspectiveCamera(
      70,
      window.innerWidth / window.innerHeight,
      0.001,
      1000
    );

    this.camera.position.set(0, 0, 1.4);
    this.time = 0;

    this.isPlaying = true;

    this.addObjects();
    this.initPost();
    this.resize();
    this.render();
    this.setupResize();
  }

  initPost() {
    this.composer = new EffectComposer(this.renderer);
    this.composer.addPass(new RenderPass(this.scene, this.camera));

    const effect1 = new ShaderPass(DotScreenShader);
    effect1.uniforms["scale"].value = 4;
    this.composer.addPass(effect1);
  }

  setupResize() {
    window.addEventListener("resize", this.resize.bind(this));
  }

  resize() {
    this.width = this.container?.offsetWidth;
    this.height = this.container?.offsetHeight;
    this.renderer.setSize(this.width, this.height);
    this.composer.setSize(this.width, this.height);
    this.camera.aspect = this.width / this.height;

    // image cover
    this.imageAspect = 853 / 1280;
    let a1;
    let a2;
    if (this.height / this.width > this.imageAspect) {
      a1 = (this.width / this.height) * this.imageAspect;
      a2 = 1;
    } else {
      a1 = 1;
      a2 = this.height / this.width / this.imageAspect;
    }

    this.camera.updateProjectionMatrix();
  }

  addObjects() {
    this.cubeRenderTarget = new THREE.WebGLCubeRenderTarget(256, {
      format: THREE.RGBAFormat,
      generateMipmaps: true,
      minFilter: THREE.LinearMipMapLinearFilter,
      encoding: THREE.sRGBEncoding,
    });

    this.cubeCamera = new THREE.CubeCamera(0.1, 10, this.cubeRenderTarget);

    let that = this;
    this.material = new THREE.ShaderMaterial({
      extensions: {
        derivatives: "#extension GL_OES_standard_derivatives : enable",
      },
      side: THREE.DoubleSide,
      uniforms: {
        time: { value: 0 },
        resolution: { value: new THREE.Vector4() },
      },
      // wireframe: true,
      // transparent: true,
      vertexShader: vertex,
      fragmentShader: fragment,
    });

    this.geometry = new THREE.SphereBufferGeometry(1.5, 32, 32);

    this.plane = new THREE.Mesh(this.geometry, this.material);
    this.scene.add(this.plane);
  }

  stop() {
    this.isPlaying = false;
  }

  play() {
    if (!this.isPlaying) {
      this.isPlaying = true;
      this.render();
    }
  }

  render() {
    this.scene.rotateZ(0.004);
    if (!this.isPlaying) return;
    this.time += 0.007;
    this.cubeCamera.update(this.renderer, this.scene);
    this.material.uniforms.time.value = this.time;
    requestAnimationFrame(this.render.bind(this));
    this.composer.render(this.scene, this.camera);
  }
}
