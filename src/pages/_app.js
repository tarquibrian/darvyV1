import { Loader } from "@components";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(true), 3000);
  }, []);

  return (
    <AnimatePresence mode="wait" initial={false}>
      {loading ? (
        <Component {...pageProps} />
      ) : (
        <motion.div
          key="loading"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Loader />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
