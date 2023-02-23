import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import { Layout, Hero, About, Experience, Projects } from "@components";
import styled from "styled-components";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <Experience />
      <Projects />
    </Layout>
  );
}
