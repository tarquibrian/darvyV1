import {
  Layout,
  Hero,
  About,
  Experience,
  Projects,
  Contact,
} from "@components";
import ThreeCanvas from "src/components/canvas";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      {/* <ThreeCanvas /> */}
    </Layout>
  );
}
