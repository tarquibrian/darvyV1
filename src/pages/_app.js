import { Loader } from "@components";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { AppProvider } from "src/context/app.context";

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(true), 3000);
  }, []);

  return (
    <AnimatePresence mode="sync">
      {loading ? (
        <AppProvider>
          <Component {...pageProps} />
        </AppProvider>
      ) : (
        <motion.div
          key="loading"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ y: -1000 }}
          // transition={{ duration: 1 }}
          // style={{ background: "#404040" }}
        >
          <Loader />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
