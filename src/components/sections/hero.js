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
    align-items: center;
    max-width: 1300px;
    gap: 2rem;
    margin: auto;
  }

  .hero__container-card {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1.3rem;
    border-radius: var(--border-radius);
    font-family: var(--ff-sofia);
    max-width: 920px;
    padding: 40px;
    background: var(--bg-color);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    height: fit-content;

    .type {
      color: #fff;
      font-size: var(--fz-smm);
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

      .button__contact {
        padding: 10px 18px;
        display: grid;
        place-content: center;
        border-radius: var(--br-buttns);
        border: 2px solid var(--border-light);

        &:hover {
          border: 2px solid var(--border-light);
          cursor: pointer;
          filter: drop-shadow(0 0 3px rgba(255 255 255 / 0.8));
          background-color: rgba(255, 255, 255, 0.2);
        }
      }

      .button__resume {
        padding: 10px 18px;
        display: grid;
        place-content: center;
        border-radius: var(--br-buttns);
        border: 2px solid var(--border-light);
        background: radial-gradient(
          circle farthest-corner at 10% 20%,
          rgba(255, 229, 168, 1) 0%,
          rgba(251, 174, 222, 1) 100.7%
        );
        color: black;
        transition: 0.3s ease;
        &:hover {
          filter: drop-shadow(0 0 3px rgba(255 255 255 / 0.8));
          border: 2px solid rgba(255, 255, 255, 0.7);
          text-shadow: 0 0 5px rgba(255 255 255 / 0.5);
        }
      }
    }

    &:hover::before {
      opacity: 1;
    }

    &::before {
      background: radial-gradient(
        1000px circle at var(--mouse1-x) var(--mouse1-y),
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
  const { state } = useAppContext();
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const heroref = useRef(null);

  const currentLanguage = {
    lenguage: languages[state.currentLanguage],
  };

  const handleOnMouseMove = (e) => {
    let rect = heroref?.current?.getBoundingClientRect(),
      x = e?.clientX - rect?.left,
      y = e?.clientY - rect?.top - 110;

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
        <div className="hero__container-card">
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
        </div>

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
