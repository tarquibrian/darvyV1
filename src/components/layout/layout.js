import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useAppContext } from "src/context/app.context";
import { useRouter } from "next/router";
import Sketch from "src/threejs/main";

// const ThreeCanvas = dynamic(() => import("../canvas"), {
//   loading: () => <p>loading..</p>,
//   ssr: true,
// });

const WrapperMain = styled(motion.main)``;

const Layout = ({ children }) => {
  const { updateColor } = useAppContext();
  const router = useRouter();

  useEffect(() => {
    if (router.asPath === "/") {
      updateColor([0.8, 0.95, 0.94]);
    }
  }, [router.asPath]);

  //   // const Element = document.getElementById("threejsBG");
  //   // new Sketch({
  //   //   dom: Element,
  //   //   color: color,
  //   // });

  return (
    <>
      <WrapperMain
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ x: 100, opacity: 0 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        {children}
      </WrapperMain>
    </>
  );
};

export default Layout;
