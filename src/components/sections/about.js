import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import img1 from "../../images/darvy-icon.png";
import imgWhite from "../../images/pf-white.jpg";
import imgBlur from "../../images/pf-blur.jpg";
import imgTransparent from "../../images/pf-transparent.png";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAppContext } from "src/context/app.context";
import { aboutData } from "@data";
import { CardEffect } from "../layout";

const AboutStyled = styled(motion.section)`
  width: 80%;
  margin: auto;
  padding: initial;
  /* padding-bottom: 100px; */
  padding-top: 150px;
  display: grid;
  grid-template-columns: minmax(100px, 300px) auto;
  gap: 1rem;
  justify-content: center;
  max-width: 920px;
  @media screen and (max-width: 750px) {
    grid-template-columns: repeat(1, auto);
  }
  @media screen and (max-width: 400px) {
    width: 90%;
  }
`;

const AboutCard = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 700px;
  border-radius: var(--border-radius);
  padding: 40px;
  background: var(--bg-light);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  z-index: 9;

  h1 {
    font-family: "Oswald", sans-serif;
    font-size: var(--fz-header);
    font-weight: 400;
    color: #eae2b7;
    text-shadow: 0 0 6px rgba(0, 0, 0, 0.5);
    margin: 0 0 15px -4px;
    display: grid;
    grid-template-columns: max-content auto;
    gap: 0.2rem;
    &::after {
      content: "";
      display: block;
      align-self: end;
      margin-bottom: 12px;
      width: auto;
      height: 3px;
      background: #eae2b7;
    }
  }

  p {
    font-family: "Sofia Sans Condensed", sans-serif;
    font-size: var(--fz-md);
  }

  &:hover::before {
    opacity: 1;
  }

  &::before {
    background: radial-gradient(
      800px circle at var(--mouse1-x) var(--mouse1-y),
      rgba(255, 255, 255, 0.15),
      transparent 40%
    );
    border-radius: inherit;
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0%;
    left: 0%;
    opacity: 0;
    transition: opacity 500ms;
    z-index: -1;
  }

  &:hover {
    background: var(--bg-light-hover);
  }
`;

const ImgProfile = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  z-index: 9;
  height: 100%;

  .image {
    img {
      display: block;
      border-radius: 5px;
      border: calc(1px + var(--border-size)) solid var(--border-light);
      width: 100%;
      max-width: 400px;
      height: auto;
      background: var(--bg-orange);
    }
    &:hover {
      img {
        opacity: 1;
        border: calc(1px + var(--border-size)) solid var(--border-light);
        filter: drop-shadow(0 0 3px rgba(255 255 255 / 0.8));
      }
    }
  }

  .content {
    color: #eae2b7;
    font-size: var(--fz-md);
    background-color: var(--bg-light);
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 1rem 2rem;
    border-radius: var(--border-radius);
    span {
      z-index: 999;
    }
  }
  @media screen and (max-width: 750px) {
    flex-direction: row;
  }
`;

const variants = {
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6 },
  },
  hidden: { y: 500, opacity: 0, scale: 1 },
};

const languages = {
  es: aboutData.es,
  en: aboutData.en,
};

const About = () => {
  const controls = useAnimation();
  const [refView, inView] = useInView();
  const aboutref = useRef(null);
  const { state, toggleLanguage } = useAppContext();

  const currentLanguage = {
    lenguage: languages[state.currentLanguage],
  };

  const handleOnMouseMove = (e) => {
    const rect = aboutref?.current?.getBoundingClientRect(),
      x = e?.clientX - rect?.left,
      y = e?.clientY - rect?.top || "";

    aboutref?.current?.style?.setProperty("--mouse1-x", `${x}px`);
    aboutref?.current?.style?.setProperty("--mouse1-y", `${y}px`);
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    window.addEventListener("mousemove", handleOnMouseMove);
  }, [controls, inView]);

  return (
    <AboutStyled
      id="about"
      ref={refView}
      animate={controls}
      initial="hidden"
      variants={{
        visible: {
          y: 0,
          opacity: 1,
          scale: 1,
          transition: { duration: 0.6, delay: 0.3 },
        },
        hidden: { y: 200, opacity: 0, scale: 1 },
      }}
    >
      <ImgProfile>
        <div className="image">
          <Image
            src={imgTransparent}
            alt={`profile picture`}
            width={200}
            height={`auto`}
          />
        </div>
        <CardEffect>
          <span>⏤⏤ Web Developer✧</span>
          <span>⏤⏤ UX/UI Designer✦</span>
          <span>⏤⏤ System Engineer✷</span>
        </CardEffect>
      </ImgProfile>
      <AboutCard ref={aboutref} id="about-card">
        <h1>{currentLanguage.lenguage[1]}</h1>

        {currentLanguage.lenguage[2].map((item, i) => {
          return <p key={i}>✦ {item}</p>;
        })}
      </AboutCard>
    </AboutStyled>
  );
};

export default About;
