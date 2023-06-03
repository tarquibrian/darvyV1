import React, { useEffect, useRef, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { motion } from "framer-motion";
import { useAppContext } from "src/context/app.context";
import { useRouter } from "next/router";
import Sketch from "src/threejs/main";
import { darkTheme, lightTheme } from "src/styles/theme";
import Header from "./header";
import { GlobalStyle } from "@styles";

// const ThreeCanvas = dynamic(() => import("../canvas"), {
//   loading: () => <p>loading..</p>,
//   ssr: true,
// });

const themesMap = {
  light: lightTheme,
  dark: darkTheme,
};

const WrapperMain = styled(motion.main)``;

const Layout = ({ children, updateBG }) => {
  const { state, updateColor, changeTheme } = useAppContext();
  const router = useRouter();

  const theme = { colors: themesMap[state.currentTheme] };

  useEffect(() => {
    if (updateBG) {
      // if (router.asPath === "/") {
      updateColor({
        color: [0.8, 0.95, 0.94],
        colorBase: [0.38, 0.09, 0.57],
        colorDeep: [0, 0, 0],
      });
      changeTheme("dark");
      // }
    }
    // setTimeout(() => {
    //   window.scroll({ top: 0, left: 0});
    // }, 100);
  }, [router.asPath, updateBG]);

    // const Element = document.getElementById("threejsBG");
    // new Sketch({
    //   dom: Element,
    //   color: color,
    // });

  return (
    <ThemeProvider theme={theme}>
      {/* <GlobalStyle /> */}
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
    </ThemeProvider>
  );
};

export default Layout;
