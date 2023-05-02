import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Main__Section } from "@styles";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { heroData } from "@data";
import { useAppContext } from "src/context/app.context";
import imghero from "../../images/hero1.jpg";
import Image from "next/image";

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
    height: 100%;
    position: relative;
    display: grid;
    grid-template-columns: max-content 1fr;
    /* justify-content: space-between; */
    align-items: center;
    max-width: 1300px;
    gap: 2rem;
    margin: auto;
  }

  .hero__container-card {
    display: flex;
    flex-direction: column;
    gap: 1.3rem;
    border-radius: var(--border-radius);
    /* border-radius: 8px; */
    font-family: var(--ff-sofia);
    max-width: 920px;
    /* width: fit-content; */
    padding: 40px;
    background: var(--bg-color);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);

    .type {
      /* font-family: "Sofia Sans Condensed"; */
      color: #fff;
      font-size: var(--fz-smm);
      /* border: 1px solid white; */
      width: fit-content;
      padding: 0.3rem 1rem;
      border-radius: 5rem;
      background-color: #ffe2c4;
      background-image: radial-gradient(
        circle farthest-corner at 10% 20%,
        rgba(255, 229, 168, 1) 0%,
        rgba(251, 174, 222, 1) 100.7%
      );
      letter-spacing: 3px;
      color: #f77f00;
    }

    h1 {
      font-family: var(--ff-oswald);
      font-size: var(--fz-title);
      font-weight: 400;
      color: #eae2b7;
      text-shadow: 0 0 6px rgba(0, 0, 0, 0.5);
      /* margin-left: -4px; */
    }

    h2 {
      font-family: var(--ff-oswald);
      white-space: nowrap;
      font-size: clamp(30px, 8vw, 78px);
      font-size: var(--fz-title);
      font-weight: 200;
      /* color: #dfdfdf; */
      /* margin-left: -4px; */
      color: transparent;
      text-shadow: 0 0 5px rgba(255 255 255 / 1);
      -webkit-text-stroke: 1px white;
    }

    p {
      margin-bottom: 1rem;
      font-size: var(--fz-md);
      max-width: 640px;
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
        border: 2px solid var(--border-light);
        border-radius: var(--br-buttns);

        &:hover {
          border: 2px solid var(--border-light);
          cursor: pointer;
          filter: drop-shadow(0 0 3px rgba(255 255 255 / 0.8));
        }
      }

      .button__resume {
        /* border: 2px solid transparent; */
        /* background: var(--bg-orange); */

        background-image: radial-gradient(
          circle farthest-corner at 10% 20%,
          rgba(255, 229, 168, 1) 0%,
          rgba(251, 174, 222, 1) 100.7%
        );

        color: black;
        &:hover {
          text-shadow: 0 0 5px rgba(255 255 255 / 0.5);
          background-image: radial-gradient(
            circle farthest-corner at 10% 20%,
            rgba(255, 229, 168, 1) 0%,
            rgba(251, 174, 222, 1) 100.7%
          );
        }
      }
      .button__contact {
        border: 2px solid transparent;
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
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    min-width: 300px;
    background: var(--bg-color);
    height: 100%;

    border-radius: var(--border-radius);
    overflow: hidden;
    img {
      width: 250px;
      height: auto;
      margin-bottom: 0.5rem;
    }

    .wrapper-carousel {
      display: flex;
      gap: 0.5rem;
      transform: rotate(20deg) translateX(-65%);
    }
  }

  @media screen and (max-width: 400px) {
    width: 90%;
  }
`;

const ColumnCarousel = styled.div`
  display: flex;
  flex-direction: column;
  animation: ${({ animationDirection }) =>
      animationDirection === "up" ? "upAnimation" : "downAnimation"}
    ${({ animationTime }) => (animationTime ? animationTime : "5s")} linear
    infinite;

  @keyframes upAnimation {
    0% {
      transform: translateY(0);
    }

    100% {
      transform: translateY(-50%);
    }
  }

  @keyframes downAnimation {
    0% {
      transform: translateY(-50%);
    }

    100% {
      transform: translateY(-0%);
    }
  }
`;

const variants = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, delay: 0.3 },
  },
  hidden: { opacity: 0, scale: 1 },
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
      <motion.div
        className="hero__container"
        id="hero-container"
        ref={heroref}
        animate={controls}
        initial="hidden"
        variants={variants}
      >
        <motion.div className="hero__container-card" id="hero-card">
          <span className="type" translate="no">
            {currentLanguage.lenguage[1]}
          </span>
          <div className="main-title">
            <h1>Brian Tarqui Rojas.</h1>
            <h2>{currentLanguage.lenguage[3]}✿</h2>
          </div>
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
        <div className="hero__container-carousel">
          <div className="wrapper-carousel">
            <ColumnCarousel
              className="column"
              animationTime={"15s"}
              animationDirection={"up"}
            >
              <Image src={imghero} alt="img from hero" />
              <Image src={imghero} alt="img from hero" />
              <Image src={imghero} alt="img from hero" />

              <Image src={imghero} alt="img from hero" />
              <Image src={imghero} alt="img from hero" />
              <Image src={imghero} alt="img from hero" />
            </ColumnCarousel>
            <ColumnCarousel
              className="column"
              animationTime={"18s"}
              animationDirection={"down"}
            >
              <Image src={imghero} alt="img from hero" />
              <Image src={imghero} alt="img from hero" />
              <Image src={imghero} alt="img from hero" />

              <Image src={imghero} alt="img from hero" />
              <Image src={imghero} alt="img from hero" />
              <Image src={imghero} alt="img from hero" />
            </ColumnCarousel>
            <ColumnCarousel
              className="column"
              animationTime={"18s"}
              animationDirection={"up"}
            >
              <Image src={imghero} alt="img from hero" />
              <Image src={imghero} alt="img from hero" />
              <Image src={imghero} alt="img from hero" />

              <Image src={imghero} alt="img from hero" />
              <Image src={imghero} alt="img from hero" />
              <Image src={imghero} alt="img from hero" />
            </ColumnCarousel>
          </div>
        </div>
      </motion.div>
    </HeroStyled>
  );
};

export default Hero;
