import {
  Layout,
  Hero,
  About,
  Experience,
  Projects,
  Contact,
} from "@components";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </Layout>
  );
}
