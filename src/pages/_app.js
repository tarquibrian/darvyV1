import { Loader } from "@components";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(true), 6000);
  }, []);

  return <>{loading ? <Component {...pageProps} /> : <Loader />}</>;
}
