import { Loader } from "@components";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { AppProvider } from "src/context/app.context";
import { useRouter } from "next/router";
import Head from "next/head";
import { GlobalStyle } from "@styles";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const pageKey = router.asPath;
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   if (router.asPath === "/") {
  //     setTimeout(() => setLoading(true), 2300);
  //   } else {
  //     setLoading(true);
  //   }
  // }, [router]);

  return (
    <>
      <AnimatePresence mode="wait" initial='false'>
        {/* <GlobalStyle /> */}
        <Head>
          <title>Darvy Portfolio</title>
          <meta name="robots" content="all" />
        </Head>
        {/* {!loading ? (
        <motion.div
          key="loading"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1.5, y: 0 }}
          exit={{ y: -1000 }}
        >
          <Loader />
        </motion.div>
      ) : (
        <AppProvider>
          <Component {...pageProps} />
        </AppProvider>
      )} */}

        <AppProvider>
          <Component key={pageKey} {...pageProps} />
        </AppProvider>
      </AnimatePresence>
    </>
  );
}
