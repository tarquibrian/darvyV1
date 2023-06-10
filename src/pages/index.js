import {
  Layout,
  Hero,
  About,
  Experience,
  Projects,
  Contact,
  LeftSide,
  RightSide,
} from "@components";

export default function Home() {
  return (
    <Layout updateBG={true}>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </Layout>
  );
}
