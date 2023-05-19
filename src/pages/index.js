import {
  Layout,
  Hero,
  About,
  Experience,
  Projects,
  Contact,
} from "@components";
import Scene from "src/components/test";
import styled from "styled-components";

const Wrapper = styled.div`
  /* background-color: lightblue; */
  height: 900px;
`;
export default function Home() {
  return (
    <Layout>
      <Wrapper className="test">
        <Scene />
      </Wrapper>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </Layout>
  );
}
