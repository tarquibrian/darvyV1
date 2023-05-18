import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { heroData } from "@data";
import { useAppContext } from "src/context/app.context";
import Image from "next/image";

import imgHero11 from "../../images/hero11.png";
import imgHero12 from "../../images/hero12.png";
import imgHero13 from "../../images/hero13.png";
import imgHero14 from "../../images/hero14.png";

import imgHero21 from "../../images/hero21.png";
import imgHero22 from "../../images/hero22.png";
import imgHero23 from "../../images/hero23.png";

import imgHero31 from "../../images/hero31.png";
import imgHero32 from "../../images/hero32.png";
import imgHero33 from "../../images/hero33.png";
import imgHero34 from "../../images/hero34.png";

import imgHero41 from "../../images/hero41.png";
import imgHero42 from "../../images/hero42.png";

const HeroStyled = styled(motion.section)`
  height: calc(100vh - 150px);
  /* height: 100%; */
  margin: auto;
  width: 80%;

  .hero__container {
    height: 100%;
    position: relative;
    display: grid;
    grid-template-columns: minmax(350px, 1fr) minmax(400px, 530px);
    align-items: center;
    max-width: 1300px;
    gap: 2rem;
    margin: auto;
    overflow: hidden;
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
    border: 2px solid rgba(255, 255, 255, 0.4);

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
      color: var(--c-dark);
    }

    h1 {
      font-family: var(--ff-oswald);
      font-size: var(--fz-title);
      font-weight: 400;
      color: #eae2b7;
      text-shadow: 0 0 6px rgba(0, 0, 0, 0.5);
    }

    h2 {
      font-family: var(--ff-oswald);
      font-size: clamp(30px, 8vw, 78px);
      font-size: var(--fz-title);
      font-weight: 200;
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
        /* background-image: radial-gradient(
          circle farthest-corner at 83.7% 4.3%,
          rgba(173, 0, 171, 1) 0%,
          rgba(15, 51, 92, 1) 90%
        ); */

        color: var(--c-dark);
        transition: 0.3s ease;
        &:hover {
          filter: drop-shadow(0 0 3px rgba(255 255 255 / 0.8));
          border: 2px solid rgba(255, 255, 255, 0.7);
          text-shadow: 0 0 5px rgba(255 255 255 / 0.5);
        }
      }

      .button__contact,
      .button__resume {
        display: flex;
        gap: 5px;
        &:hover {
          .symbol {
            transform: scale(1.3);
          }
        }
      }
    }

    .symbolF {
      display: inline-block;
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
      border-color: rgba(255, 255, 255, 0.2);
      .symbolF {
        transform: scale(1.3);
      }
    }
  }

  .hero__container-carousel {
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    min-width: 200px;
    background: var(--bg-color);
    border: 2px solid var(--border-light);
    height: 100%;
    max-height: 700px;
    /* min-height: 200px; */

    border-radius: var(--border-radius);
    overflow: hidden;
    img {
      width: 250px;
      height: auto;
      margin-bottom: 0.5rem;
      box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
        rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    }

    .carousel-card {
      height: 100%;
      width: 100%;
      /* transform: rotate(20deg) translate(-23%, -12%); */
      transform: rotate(20deg) translateY(-12%);
    }

    .wrapper-carousel {
      display: flex;
      justify-content: center;
      gap: 0.5rem;
    }
  }

  @media screen and (max-width: 1024px) {
    padding: 2rem 0;
    .hero__container {
      grid-template-columns: 1fr;

      .hero__container-carousel {
        .wrapper-carousel {
          img {
            width: 300px;
            vertical-align: middle;
          }
        }
      }
    }
  }

  @media screen and (max-width: 640px) {
    width: 90%;
    .hero__container {
      .hero__container-carousel {
        .wrapper-carousel {
          img {
            width: 200px;
          }
        }
      }
    }
  }
`;

const ColumnCarousel = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
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
      transform: translateY(0%);
    }
  }
`;

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
        variants={{
          visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.6, delay: 0.6, ease: "easeInOut" },
          },
          hidden: { opacity: 0, scale: 0.95 },
        }}
      >
        <div className="hero__container-card">
          <span className="type" translate="no">
            {currentLanguage.lenguage[1]}
          </span>
          <div className="main-title">
            <h1>Brian Tarqui Rojas.</h1>
            <h2>
              {currentLanguage.lenguage[3]}
              {/* <span className="symbolF">⁕◎◌º✿</span> */}
            </h2>
          </div>
          <p>{currentLanguage.lenguage[4]}</p>
          <div className="hero__container-buttons">
            <a
              className="button__resume"
              href="./resumeV1.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              {currentLanguage.lenguage[5]} <span className="symbol">✹</span>
            </a>
            <a href="mailto:tarquibrian@gmail.com" className="button__contact">
              {currentLanguage.lenguage[6]} <span className="symbol">✉</span>
            </a>
          </div>
        </div>

        <div className="hero__container-carousel">
          <div className="carousel-card">
            <div className="wrapper-carousel">
              <ColumnCarousel
                className="column"
                animationTime={"15s"}
                animationDirection={"up"}
              >
                <Image src={imgHero12} alt="img from hero" placeholder="blur" />
                <Image src={imgHero22} alt="img from hero" placeholder="blur" />
                <Image src={imgHero32} alt="img from hero" placeholder="blur" />
                <Image src={imgHero42} alt="img from hero" placeholder="blur" />

                <Image src={imgHero12} alt="img from hero" placeholder="blur" />
                <Image src={imgHero22} alt="img from hero" placeholder="blur" />
                <Image src={imgHero32} alt="img from hero" placeholder="blur" />
                <Image src={imgHero42} alt="img from hero" placeholder="blur" />
              </ColumnCarousel>
              <ColumnCarousel
                className="column"
                animationTime={"18s"}
                animationDirection={"down"}
              >
                <Image src={imgHero34} alt="img from hero" placeholder="blur" />
                <Image src={imgHero21} alt="img from hero" placeholder="blur" />
                <Image src={imgHero41} alt="img from hero" placeholder="blur" />
                <Image src={imgHero31} alt="img from hero" placeholder="blur" />

                <Image src={imgHero34} alt="img from hero" placeholder="blur" />
                <Image src={imgHero21} alt="img from hero" placeholder="blur" />
                <Image src={imgHero41} alt="img from hero" placeholder="blur" />
                <Image src={imgHero31} alt="img from hero" placeholder="blur" />
              </ColumnCarousel>
              <ColumnCarousel
                className="column"
                animationTime={"18s"}
                animationDirection={"up"}
              >
                <Image src={imgHero23} alt="img from hero" placeholder="blur" />
                <Image src={imgHero14} alt="img from hero" placeholder="blur" />
                <Image src={imgHero33} alt="img from hero" placeholder="blur" />
                <Image src={imgHero11} alt="img from hero" placeholder="blur" />
                <Image src={imgHero13} alt="img from hero" placeholder="blur" />

                <Image src={imgHero23} alt="img from hero" placeholder="blur" />
                <Image src={imgHero14} alt="img from hero" placeholder="blur" />
                <Image src={imgHero33} alt="img from hero" placeholder="blur" />
                <Image src={imgHero11} alt="img from hero" placeholder="blur" />
                <Image src={imgHero13} alt="img from hero" placeholder="blur" />
              </ColumnCarousel>
            </div>
          </div>
        </div>
      </motion.div>
    </HeroStyled>
  );
};

export default Hero;
