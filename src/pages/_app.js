import { Header, LeftSide, Loader, RightSide } from "@components";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { AppProvider } from "src/context/app.context";
import { useRouter } from "next/router";
import Head from "next/head";
import { GlobalStyle } from "@styles";
import ThreeCanvas from "src/components/canvas";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

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
        {/* <GlobalStyle /> */}
        <ThreeCanvas />
        <Header />
        <LeftSide />
        <RightSide />
        <AnimatePresence mode="sync">
          <Component {...pageProps} key={router.asPath} />
        </AnimatePresence>
      </AppProvider>
    </>
  );
}
