import { GlobalStyle } from "@styles";
import React, { useEffect, useState } from "react";
import SEO from "./seo";
import { Footer, Header, LeftSide, Loader, RightSide } from "@components";
import styled from "styled-components";
import Image from "next/image";
import noiseIMG from "../../images/layer-min.png";
import { motion } from "framer-motion";
import { useAppContext } from "src/context/app.context";
import { useRouter } from "next/router";
import Head from "next/head";

const BGImage = styled.div`
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  z-index: -9;
  overflow: hidden;
  transform-style: preserve-3d;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Layout = ({ children }) => {
  const { state, loadingComplete } = useAppContext();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // if (router.asPath === "/") {
    //   setTimeout(() => setLoading(true), 3000);
    // } else {
    //   setLoading(true);
    // }
  }, [router, loading]);
  return (
    <>
      <GlobalStyle />

      {/* <SEO title="Brian Tarqui Rojas" /> */}
      <Head>
        <title>Portfolio Brian Tarqui | Darvy</title>
        {/* 
          name="description"
          content="Hi🤘, My name is Brian but they usually call me by my last name (Tarqui), I am a person who is very passionate about the world of technology and I recently obtained my degree in Systems Engineering."
          key="desc"
        />
        <meta
          property="og:title"
          content="Brian Tarqui Rojas | Web Developer"
        />
        <meta
          property="og:description"
          content="Hi🤘, My name is Brian but they usually call me by my last name (Tarqui), I am a person who is very passionate about the world of technology and I recently obtained my degree in Systems Engineering."
        />
        <meta property="og:image" content="https://tarquibrian.com/og.png" /> */}

        <meta
          name="description"
          content="Hi🤘, My name is Brian but they usually call me by my last name (Tarqui), I am a person who is very passionate about the world of technology and I recently obtained my degree in Systems Engineering."
        />

        <meta property="og:url" content="https://www.tarquibrian.com/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Brian Tarqui Rojas | Web Developer"
        />
        <meta
          property="og:description"
          content="Hi🤘, My name is Brian but they usually call me by my last name (Tarqui), I am a person who is very passionate about the world of technology and I recently obtained my degree in Systems Engineering."
        />
        <meta property="og:image" content="https://tarquibrian.com/og.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="tarquibrian.com" />
        <meta property="twitter:url" content="https://www.tarquibrian.com/" />
        <meta
          name="twitter:title"
          content="Brian Tarqui Rojas | Web Developer"
        />
        <meta
          name="twitter:description"
          content="Brian Tarqui Rojas | Web Developer"
        />
        <meta
          name="twitter:image"
          content="https://tarquibrian.com/og.png"
        ></meta>
      </Head>

      <Header />
      <>
        <motion.main
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {children}
        </motion.main>
      </>

      <RightSide />
      <LeftSide />

      <BGImage>
        <Image
          priority
          src={noiseIMG}
          alt="background image"
          placeholder="blur"
          onLoadingComplete={() => {
            setLoading(true);
          }}
        />
      </BGImage>
    </>
  );
};

export default Layout;
