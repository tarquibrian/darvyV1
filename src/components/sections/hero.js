import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Main__Section } from "@styles";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { heroData } from "@data";
import { useAppContext } from "src/context/app.context";

const HeroStyled = styled(motion.section)`
  height: calc(100vh - 150px);
  width: 80%;
  margin: auto;
  svg {
    overflow: hidden;
    /* fill: #ff101f; */
    width: 1200px;
    height: 600px;
    position: absolute;
    bottom: 0;
    right: 0;
    transform: translate(50%, 0%);
  }

  .hero__container {
    height: 110%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .hero__container-card {
    display: flex;
    flex-direction: column;
    max-width: 920px;
    border-radius: 4px;
    font-family: "Sofia Sans Condensed", sans-serif;
    padding: 40px;
    background: rgba(255, 255, 255, 0.1);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);

    h1 {
      font-size: clamp(16px, 2vw, 20px);
    }

    h2 {
      font-family: "Oswald", sans-serif;
      font-size: clamp(30px, 8vw, 80px);
      font-weight: 400;
      color: #eae2b7;
      text-shadow: 0 0 6px rgba(0, 0, 0, 0.5);
      margin-left: -4px;
    }

    h3 {
      font-family: "Oswald", sans-serif;
      font-size: clamp(30px, 8vw, 78px);
      font-weight: 200;
      margin-bottom: 20px;
      /* color: #dfdfdf; */
      margin-left: -4px;
      color: transparent;
      text-shadow: 0 0 5px rgba(255 255 255 / 1);
      -webkit-text-stroke: 1px white;
    }

    p {
      /* font-weight: normal; */
      line-height: 1.5;
      margin-bottom: 1rem;
      font-size: clamp(16px, 2vw, 20px);
    }

    .hero__container-buttons {
      display: flex;
      gap: 1rem;
      font-size: clamp(14px, 2vw, 20px);

      .button__resume,
      .button__contact {
        padding: 10px 18px;
        display: grid;
        place-content: center;
        border: 1px solid rgba(255, 255, 255, 0.4);
        border-radius: 4px;

        &:hover {
          border: 1px solid rgba(255, 255, 255, 0.4);
          cursor: pointer;
          filter: drop-shadow(0 0 3px rgba(255 255 255 / 0.8));
        }
      }

      .button__resume {
        border: 1px solid transparent;
        background-image: linear-gradient(
          93.3deg,
          rgba(236, 80, 80, 1) 21.5%,
          rgba(255, 97, 29, 1) 93.9%
        );
        &:hover {
          text-shadow: 0 0 5px rgba(255 255 255 / 0.5);
        }
      }
      .button__contact {
        border: 1px solid transparent;
        background-color: rgba(255, 255, 255, 0.2);
      }
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
      background: rgba(255, 225, 142, 0.1);
    }
  }

  @media screen and (max-width: 400px) {
    width: 90%;
    .hero__container-card {
      /* padding: 30px; */
    }
  }
`;

const variants = {
  visible: { y: 0, opacity: 1, scale: 1, transition: { duration: 0.6 } },
  hidden: { y: 200, opacity: 0, scale: 1 },
};

const languages = {
  es: heroData.es,
  en: heroData.en,
};

const Hero = () => {
  const { state, toggleLanguage } = useAppContext();
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const heroref = useRef(null);

  const currentLanguage = {
    lenguage: languages[state.currentLanguage],
  };

  const handleOnMouseMove = (e) => {
    let rect = heroref?.current?.getBoundingClientRect(),
      x = e?.clientX - rect?.left,
      y = e?.clientY - rect?.top;

    heroref?.current?.style?.setProperty("--mouse1-x", `${x}px`);
    heroref?.current?.style?.setProperty("--mouse1-y", `${y}px`);
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    window.addEventListener("mousemove", handleOnMouseMove);
  }, [controls, inView]);

  return (
    <HeroStyled
      id="hero"
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={variants}
    >
      <div className="hero__container">
        <div className="hero__container-card" id="hero-card" ref={heroref}>
          <h1>{currentLanguage.lenguage[1]}</h1>
          <h2>Brian Tarqui Rojas.</h2>
          <h3>{currentLanguage.lenguage[3]}✿</h3>
          <p>{currentLanguage.lenguage[4]}</p>
          <div className="hero__container-buttons">
            <a
              className="button__resume"
              href="./resumeV1.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              {currentLanguage.lenguage[5]}
            </a>
            <a href="mailto:tarquibrian@gmail.com" className="button__contact">
              {currentLanguage.lenguage[6]}
            </a>
          </div>
        </div>
      </div>
    </HeroStyled>
  );
};

export default Hero;
