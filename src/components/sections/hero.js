import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Main__Section } from "@styles";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { heroData } from "@data";
import { useAppContext } from "src/context/app.context";

const HeroStyled = styled(motion.section)`
  height: calc(100vh - 150px);
  /* width: 80%; */
  margin: auto;
  /* svg {
    overflow: hidden;
    width: 1200px;
    height: 600px;
    position: absolute;
    bottom: 0;
    right: 0;
    transform: translate(50%, 0%);
  } */

  .hero__container {
    height: 110%;
    position: relative;
    display: grid;
    grid-template-columns: max-content 1fr;
    /* justify-content: space-between; */
    align-items: center;
    max-width: 1200px;
    gap: 2rem;
    margin: auto;
  }

  .hero__container-card {
    display: flex;
    flex-direction: column;
    border-radius: var(--border-radius);
    font-family: var(--ff-sofia);
    max-width: 920px;
    /* width: fit-content; */
    padding: 40px;
    background: var(--bg-dark);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);

    span {
      color: #fff;
      font-size: var(--fz-md);
    }

    h1 {
      font-family: var(--ff-oswald);
      font-size: var(--fz-title);
      font-weight: 400;
      color: #eae2b7;
      text-shadow: 0 0 6px rgba(0, 0, 0, 0.5);
      margin-left: -4px;
    }

    h2 {
      font-family: var(--ff-oswald);
      white-space: nowrap;
      font-size: clamp(30px, 8vw, 78px);
      font-size: var(--fz-title);
      font-weight: 200;
      margin-bottom: 20px;
      /* color: #dfdfdf; */
      margin-left: -4px;
      color: transparent;
      text-shadow: 0 0 5px rgba(255 255 255 / 1);
      -webkit-text-stroke: 1px white;
    }

    p {
      line-height: 1.5;
      margin-bottom: 1rem;
      font-size: var(--fz-md);
      max-width: 720px;
    }

    .hero__container-buttons {
      display: flex;
      gap: 1rem;
      font-size: var(--fz-md);

      .button__resume,
      .button__contact {
        padding: 10px 18px;
        display: grid;
        place-content: center;
        border: var(--border-size) solid var(--border-light);
        border-radius: var(--border-radius);

        &:hover {
          border: var(--border-size) solid var(--border-light);
          cursor: pointer;
          filter: drop-shadow(0 0 3px rgba(255 255 255 / 0.8));
        }
      }

      .button__resume {
        border: var(--border-size) solid transparent;
        background: var(--bg-orange);
        &:hover {
          text-shadow: 0 0 5px rgba(255 255 255 / 0.5);
        }
      }
      .button__contact {
        border: var(--border-size) solid transparent;
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
      background: var(--bg-color-hover);
      /* background: rgba(0, 0, 0, 0.1); */
    }
  }

  .hero__container-carousel {
    min-width: 300px;
    /* width: 100%; */
    background-color: var(--bg-color);
    height: 100%;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
  }

  @media screen and (max-width: 400px) {
    width: 90%;
  }
`;

const variants = {
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, delay: 0.3 },
  },
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
    <HeroStyled id="hero" ref={ref}>
      <div className="hero__container">
        <motion.div
          className="hero__container-card"
          id="hero-card"
          ref={heroref}
          animate={controls}
          initial="hidden"
          variants={variants}
        >
          <span>{currentLanguage.lenguage[1]}</span>
          <h1>Brian Tarqui Rojas.</h1>
          <h2>{currentLanguage.lenguage[3]}✿</h2>
          <p>{currentLanguage.lenguage[4]}</p>
          <div className="hero__container-buttons">
            <a
              className="button__resume"
              href="./resumeV1.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              {currentLanguage.lenguage[5]} ✹
            </a>
            <a href="mailto:tarquibrian@gmail.com" className="button__contact">
              {currentLanguage.lenguage[6]} ✉
            </a>
          </div>
        </motion.div>
        <div className="hero__container-carousel">hola</div>
      </div>
    </HeroStyled>
  );
};

export default Hero;
