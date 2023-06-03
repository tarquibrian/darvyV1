import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import React, { useEffect, useMemo, useRef, useState } from "react";

import { vertex } from "./shaders/vertex";
import { fragment } from "./shaders/fragment";
import { useAppContext } from "src/context/app.context";

const Sphere = () => {
  const { state, updateColor } = useAppContext();
  const mesh = useRef();
  const { color, colorBase, colorDeep } = state.threeColors;

  const [flagColor, setFlagColor] = useState({
    flagOne: null,
    flagTwo: null,
    flagThree: null,
  });

  const [flagBase, setFlagBase] = useState({
    flagOne: null,
    flagTwo: null,
    flagThree: null,
  });

  const [flagDeep, setFlagDeep] = useState({
    flagOne: null,
    flagTwo: null,
    flagThree: null,
  });

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
      // color: { value: new THREE.Color(0, 0.95, 0.94) },
      // colorBase: {
      //   value: new THREE.Color(0.38, 0.09, 0.57),
      // },
      // colorDeep: {
      //   value: new THREE.Color(0, 0, 0),
      // },
      color: {
        value: [0.8, 0.95, 0.94],
      },
      colorBase: {
        value: [0.38, 0.09, 0.57],
      },
      colorDeep: {
        value: [0, 0, 0],
      },
      resolution: { value: new THREE.Vector4() },
    }),
    []
  );

  // color: [0, 0.95, 0.94],
  // colorBase: [0.38, 0.09, 0.57],
  // colorDeep: [0, 0, 0],

  const updateUColor = () => {
    if (flagColor.flagOne !== null) {
      if (flagColor.flagOne[0] < flagColor.flagOne[1]) {
        if (uniforms.color.value[0] < color[0]) {
          uniforms.color.value[0] = Number(
            (uniforms.color.value[0] + 0.02).toFixed(2)
          );
        }
      } else {
        if (uniforms.color.value[0] > color[0]) {
          uniforms.color.value[0] = Number(
            (uniforms.color.value[0] - 0.02).toFixed(2)
          );
        }
      }
    }

    if (flagColor.flagTwo !== null) {
      if (flagColor.flagTwo[0] < flagColor.flagTwo[1]) {
        if (uniforms.color.value[1] < color[1]) {
          uniforms.color.value[1] = Number(
            (uniforms.color.value[1] + 0.02).toFixed(2)
          );
        }
      } else {
        if (uniforms.color.value[1] > color[1]) {
          uniforms.color.value[1] = Number(
            (uniforms.color.value[1] - 0.02).toFixed(2)
          );
        }
      }
    }

    if (flagColor.flagThree !== null) {
      if (flagColor.flagThree[0] < flagColor.flagThree[1]) {
        if (uniforms.color.value[2] < color[2]) {
          uniforms.color.value[2] = Number(
            (uniforms.color.value[2] + 0.02).toFixed(2)
          );
        }
      } else {
        if (uniforms.color.value[2] > color[2]) {
          uniforms.color.value[2] = Number(
            (uniforms.color.value[2] - 0.02).toFixed(2)
          );
        }
      }
    }
  };

  const updateUColorBase = () => {
    if (flagBase.flagOne[0] < flagBase.flagOne[1]) {
      if (uniforms.colorBase.value[0] < colorBase[0]) {
        uniforms.colorBase.value[0] = Number(
          (uniforms.colorBase.value[0] + 0.02).toFixed(2)
        );
      }
    } else {
      if (uniforms.colorBase.value[0] > colorBase[0]) {
        uniforms.colorBase.value[0] = Number(
          (uniforms.colorBase.value[0] - 0.02).toFixed(2)
        );
      }
    }
  };

  const updateUColorDeep = () => {
    if (flagDeep.flagOne[0] < flagDeep.flagOne[1]) {
      if (uniforms.colorDeep.value[0] < colorDeep[0]) {
        uniforms.colorDeep.value[0] = Number(
          (uniforms.colorDeep.value[0] + 0.02).toFixed(2)
        );
      }
    } else {
      if (uniforms.colorDeep.value[0] > colorDeep[0]) {
        uniforms.colorDeep.value[0] = Number(
          (uniforms.colorDeep.value[0] - 0.02).toFixed(2)
        );
      }
    }
  };

  const myShader = new THREE.ShaderMaterial({
    uniforms: uniforms,
    fragmentShader: fragment,
    vertexShader: vertex,
    side: THREE.DoubleSide,
    extensions: {
      derivatives: "#extension GL_OES_standard_derivatives : enable",
    },
  });

  const setFlagOne = () => {
    if (uniforms.color.value[0] === color[0]) {
      setFlagColor((prev) => ({ ...prev, flagOne: null }));
    } else {
      if (uniforms.color.value[0] < color[0]) {
        setFlagColor((prev) => ({ ...prev, flagOne: [0, 1] }));
      } else {
        setFlagColor((prev) => ({ ...prev, flagOne: [1, 0] }));
      }
    }

    if (uniforms.color.value[1] === color[1]) {
      setFlagColor((prev) => ({ ...prev, flagTwo: null }));
      console.log(true);
    } else {
      if (uniforms.color.value[1] < color[1]) {
        setFlagColor((prev) => ({ ...prev, flagTwo: [0, 1] }));
      } else {
        setFlagColor((prev) => ({ ...prev, flagTwo: [1, 0] }));
      }
    }

    if (uniforms.color.value[2] === color[2]) {
      setFlagColor((prev) => ({ ...prev, flagThree: null }));
    } else {
      if (uniforms.color.value[2] < color[2]) {
        setFlagColor((prev) => ({ ...prev, flagThree: [0, 1] }));
      } else {
        setFlagColor((prev) => ({ ...prev, flagThree: [1, 0] }));
      }
    }
  };

  const setFlagTwo = () => {
    if (uniforms.color.value[0] < color[0]) {
      setFlagColor((prev) => ({ ...prev, flagOne: [0, 1] }));
    } else {
      setFlagColor((prev) => ({ ...prev, flagOne: [1, 0] }));
    }
    if (uniforms.color.value[1] < color[1]) {
      setFlagColor((prev) => ({ ...prev, flagTwo: [0, 1] }));
    } else {
      setFlagColor((prev) => ({ ...prev, flagTwo: [1, 0] }));
    }
    if (uniforms.color.value[2] < color[2]) {
      setFlagColor((prev) => ({ ...prev, flagThree: [0, 1] }));
    } else {
      setFlagColor((prev) => ({ ...prev, flagThree: [1, 0] }));
    }
  };

  const setFlagThree = () => {
    if (uniforms.color.value[0] < color[0]) {
      setFlagColor((prev) => ({ ...prev, flagOne: [0, 1] }));
    } else {
      setFlagColor((prev) => ({ ...prev, flagOne: [1, 0] }));
    }
    if (uniforms.color.value[1] < color[1]) {
      setFlagColor((prev) => ({ ...prev, flagTwo: [0, 1] }));
    } else {
      setFlagColor((prev) => ({ ...prev, flagTwo: [1, 0] }));
    }
    if (uniforms.color.value[2] < color[2]) {
      setFlagColor((prev) => ({ ...prev, flagThree: [0, 1] }));
    } else {
      setFlagColor((prev) => ({ ...prev, flagThree: [1, 0] }));
    }
  };

  useEffect(() => {
    setFlagOne();
  }, [color]);

  // useEffect(() => {
  //   setFlagTwo();
  // }, [colorBase]);

  // useEffect(() => {
  //   setFlagThree();
  // }, [colorDeep]);

  useFrame(({ clock }, delta) => {
    mesh.current.material.uniforms.time.value += 0.007;
    mesh.current.rotation.z += 0.009;

    updateUColor();
    // console.log(uniforms.color, color);
    // console.log(uniforms.color);
  });

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
