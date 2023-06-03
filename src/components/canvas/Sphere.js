import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import React, { useEffect, useMemo, useRef, useState } from "react";

import { vertex } from "./shaders/vertex";
import { fragment } from "./shaders/fragment";
import { useAppContext } from "src/context/app.context";

const Sphere = () => {
  const { state } = useAppContext();
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

  const uniforms = useMemo(
    () => ({
      time: { value: 0 },
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
    if (flagBase.flagOne !== null) {
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
    }

    if (flagBase.flagTwo !== null) {
      if (flagBase.flagTwo[0] < flagBase.flagTwo[1]) {
        if (uniforms.colorBase.value[1] < colorBase[1]) {
          uniforms.colorBase.value[1] = Number(
            (uniforms.colorBase.value[1] + 0.02).toFixed(2)
          );
        }
      } else {
        if (uniforms.colorBase.value[1] > colorBase[1]) {
          uniforms.colorBase.value[1] = Number(
            (uniforms.colorBase.value[1] - 0.02).toFixed(2)
          );
        }
      }
    }

    if (flagBase.flagThree !== null) {
      if (flagBase.flagThree[0] < flagBase.flagThree[1]) {
        if (uniforms.colorBase.value[2] < colorBase[2]) {
          uniforms.colorBase.value[2] = Number(
            (uniforms.colorBase.value[2] + 0.02).toFixed(2)
          );
        }
      } else {
        if (uniforms.colorBase.value[2] > colorBase[2]) {
          uniforms.colorBase.value[2] = Number(
            (uniforms.colorBase.value[2] - 0.02).toFixed(2)
          );
        }
      }
    }
  };

  const updateUColorDeep = () => {
    if (flagDeep.flagOne !== null) {
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
    }

    if (flagDeep.flagTwo !== null) {
      if (flagDeep.flagTwo[0] < flagDeep.flagTwo[1]) {
        if (uniforms.colorDeep.value[1] < colorDeep[1]) {
          uniforms.colorDeep.value[1] = Number(
            (uniforms.colorDeep.value[1] + 0.02).toFixed(2)
          );
        }
      } else {
        if (uniforms.colorDeep.value[1] > colorDeep[1]) {
          uniforms.colorDeep.value[1] = Number(
            (uniforms.colorDeep.value[1] - 0.02).toFixed(2)
          );
        }
      }
    }

    if (flagDeep.flagThree !== null) {
      if (flagDeep.flagThree[0] < flagDeep.flagThree[1]) {
        if (uniforms.colorDeep.value[2] < colorDeep[2]) {
          uniforms.colorDeep.value[2] = Number(
            (uniforms.colorDeep.value[2] + 0.02).toFixed(2)
          );
        }
      } else {
        if (uniforms.colorDeep.value[2] > colorDeep[2]) {
          uniforms.colorDeep.value[2] = Number(
            (uniforms.colorDeep.value[2] - 0.02).toFixed(2)
          );
        }
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

  const setUniformColorFlags = () => {
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

  const setUniformColorBaseFlags = () => {
    if (uniforms.colorBase.value[0] === colorBase[0]) {
      setFlagBase((prev) => ({ ...prev, flagOne: null }));
    } else {
      if (uniforms.colorBase.value[0] < colorBase[0]) {
        setFlagBase((prev) => ({ ...prev, flagOne: [0, 1] }));
      } else {
        setFlagBase((prev) => ({ ...prev, flagOne: [1, 0] }));
      }
    }

    if (uniforms.colorBase.value[1] === colorBase[1]) {
      setFlagBase((prev) => ({ ...prev, flagTwo: null }));
    } else {
      if (uniforms.colorBase.value[1] < colorBase[1]) {
        setFlagBase((prev) => ({ ...prev, flagTwo: [0, 1] }));
      } else {
        setFlagBase((prev) => ({ ...prev, flagTwo: [1, 0] }));
      }
    }

    if (uniforms.colorBase.value[2] === colorBase[2]) {
      setFlagBase((prev) => ({ ...prev, flagThree: null }));
    } else {
      if (uniforms.colorBase.value[2] < colorBase[2]) {
        setFlagBase((prev) => ({ ...prev, flagThree: [0, 1] }));
      } else {
        setFlagBase((prev) => ({ ...prev, flagThree: [1, 0] }));
      }
    }
  };

  const setUniformColorDeep = () => {
    if (uniforms.colorDeep.value[0] === colorDeep[0]) {
      setFlagDeep((prev) => ({ ...prev, flagOne: null }));
    } else {
      if (uniforms.colorDeep.value[0] < colorDeep[0]) {
        setFlagDeep((prev) => ({ ...prev, flagOne: [0, 1] }));
      } else {
        setFlagDeep((prev) => ({ ...prev, flagOne: [1, 0] }));
      }
    }

    if (uniforms.colorDeep.value[1] === colorDeep[1]) {
      setFlagDeep((prev) => ({ ...prev, flagTwo: null }));
    } else {
      if (uniforms.colorDeep.value[1] < colorDeep[1]) {
        setFlagDeep((prev) => ({ ...prev, flagTwo: [0, 1] }));
      } else {
        setFlagDeep((prev) => ({ ...prev, flagTwo: [1, 0] }));
      }
    }

    if (uniforms.colorDeep.value[2] === colorDeep[2]) {
      setFlagDeep((prev) => ({ ...prev, flagThree: null }));
    } else {
      if (uniforms.colorDeep.value[2] < colorDeep[2]) {
        setFlagDeep((prev) => ({ ...prev, flagThree: [0, 1] }));
      } else {
        setFlagDeep((prev) => ({ ...prev, flagThree: [1, 0] }));
      }
    }
  };

  useEffect(() => {
    setUniformColorFlags();
  }, [color]);

  useEffect(() => {
    setUniformColorBaseFlags();
  }, [colorBase]);

  useEffect(() => {
    setUniformColorDeep();
  }, [colorDeep]);

  useFrame(() => {
    mesh.current.material.uniforms.time.value += 0.007;
    mesh.current.rotation.z += 0.009;
    updateUColor();
    updateUColorBase();
    updateUColorDeep();
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
