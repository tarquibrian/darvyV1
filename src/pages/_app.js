import { Header, LeftSide, Loader, RightSide } from "@components";
import { AnimatePresence } from "framer-motion";
import { AppProvider, useAppContext } from "src/context/app.context";
import { useRouter } from "next/router";
import Head from "next/head";
import { GlobalStyle } from "@styles";
import ThreeCanvas from "src/components/canvas";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <AppProvider>
        <Head>
          <title>Darvy Portfolio</title>
          <meta name="robots" content="all" />
        </Head>

        <AnimatePresence
          mode="sync"
          // onExitComplete={() => window.scrollTo(0, 0)}
        >
          <GlobalStyle />
          <Component {...pageProps} key={router.asPath} />
        </AnimatePresence>

        <Header />
        {/* <LeftSide /> */}
        {/* <RightSide /> */}
        <ThreeCanvas />
      </AppProvider>
    </>
  );
}
