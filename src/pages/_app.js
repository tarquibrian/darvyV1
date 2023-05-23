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
  const pageKey = router.asPath;
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
      <Head>
        <title>Darvy Portfolio</title>
        <meta name="robots" content="all" />
      </Head>
      <GlobalStyle />
      <AppProvider>
        <ThreeCanvas />
        <Header />
        <LeftSide />
        <RightSide />
        <AnimatePresence mode="wait">
          {!loading ? (
            <motion.div
              // key="loading"
              // initial={{ opacity: 0 }}
              // animate={{ opacity: 1 }}
              // exit={{ y: -1000 }}
              // exit={{ y: -1000, transition: { delay: 1 } }}
            >
              <Loader />
            </motion.div>
          ) : (
            <>
              {/* <Header /> */}
              <Component key={pageKey} {...pageProps} />
              {/* <LeftSide /> */}
              {/* <RightSide /> */}
            </>
          )}
        </AnimatePresence>
      </AppProvider>
    </>
  );
}
