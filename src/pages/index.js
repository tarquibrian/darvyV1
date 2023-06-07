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
      <LeftSide />
      <RightSide />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </Layout>
  );
}
