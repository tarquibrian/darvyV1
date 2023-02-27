import Image from "next/image";
import {
  Layout,
  Hero,
  About,
  Experience,
  Projects,
  Contact,
} from "@components";
import styled from "styled-components";

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
