import { Loader } from "@components";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { AppProvider } from "src/context/app.context";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (router.asPath === "/") {
      setTimeout(() => setLoading(true), 300000000);
    } else {
      setLoading(true);
    }
  }, [router]);

  return (
    <AnimatePresence mode="sync">
      {!loading ? (
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
      )}
    </AnimatePresence>
  );
}
