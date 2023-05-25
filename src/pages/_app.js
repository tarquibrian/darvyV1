import { Header, LeftSide, Loader, RightSide } from "@components";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { AppProvider, useAppContext } from "src/context/app.context";
import { useRouter } from "next/router";
import Head from "next/head";
import { GlobalStyle } from "@styles";
import ThreeCanvas from "src/components/canvas";
import { darkTheme, lightTheme } from "src/styles/theme";
import { ThemeProvider } from "styled-components";

// const themesMap = {
//   light: lightTheme,
//   dark: darkTheme,
// };
const themesMap = {
  light: lightTheme,
  dark: darkTheme,
};
export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { state, updateColor, changeTheme } = useAppContext();

  const theme = { colors: themesMap["dark"] };

  useEffect(() => {
    if (router.asPath === "/") {
      setTimeout(() => setLoading(true), 2300);
    } else {
      setLoading(true);
    }
  }, [router]);

  return (
    <>
      <AppProvider>
        <Head>
          <title>Darvy Portfolio</title>
          <meta name="robots" content="all" />
        </Head>
        {/* <ThemeProvider theme={theme}> */}
        <ThreeCanvas />
        <Header />
        <LeftSide />
        <RightSide />
        <AnimatePresence
          mode="sync"
          // onExitComplete={() => window.scrollTo(0, 0)}
        >
          <GlobalStyle />
          <Component {...pageProps} key={router.asPath} />
        </AnimatePresence>
        {/* </ThemeProvider> */}
      </AppProvider>
    </>
  );
}
