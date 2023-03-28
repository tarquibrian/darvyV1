import { Loader } from "@components";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(true), 3500);
  }, []);

  return (
    <AnimatePresence mode="wait" initial={false}>
      {loading ? <Component {...pageProps} /> : <Loader />}
    </AnimatePresence>
  );
}
