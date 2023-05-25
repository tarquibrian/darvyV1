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
  padding: initial;
  padding-top: 150px;
  display: grid;
  grid-template-columns: minmax(100px, 300px) auto;
  gap: 1rem;
  justify-content: center;
  max-width: 920px;
  @media screen and (max-width: 750px) {
    grid-template-columns: repeat(1, auto);
    width: 90%;
  }
`;

const AboutCard = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 700px;
  border-radius: var(--border-radius);
  border: 2px solid var(--border-light);
  padding: 40px;
  background: var(--bg-color);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  z-index: 9;
  font-family: var(--ff-sofia);

  h1 {
    font-family: var(--ff-rubik);
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
    border-color: rgba(255, 255, 255, 0.2);
    background: var(--bg-color-hover);
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
    position: relative;

    img {
      display: block;
      border-radius: 8px;
      border: calc(1px + var(--border-size)) solid var(--border-light);
      width: 100%;
      max-width: 400px;
      height: auto;
      background-image: radial-gradient(
        circle farthest-corner at 10% 20%,
        rgba(255, 229, 168, 1) 0%,
        rgba(251, 174, 222, 1) 100.7%
      );
    }

    .name {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      height: 5rem;

      span {
        font-family: var(--ff-sofia);
        font-size: var(--fz-smm);
        font-weight: bold;
        position: relative;
        top: 4rem;
        padding: 0.4rem 1rem;
        color: var(--c-dark);
        border-radius: 5rem;
        background-image: radial-gradient(
          circle farthest-corner at 10% 20%,
          rgba(255, 229, 168, 1) 0%,
          rgba(251, 174, 222, 1) 100.7%
        );
      }
    }

    &:hover {
      img {
        opacity: 1;
        border: calc(1px + var(--border-size)) solid var(--border-light);
        filter: drop-shadow(0 0 3px rgba(255 255 255 / 0.8));
      }

      .name {
        span {
          top: 0rem;
        }
      }
    }
  }

  .content {
    font-size: var(--fz-md);
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 1rem 2rem;
    border-radius: var(--border-radius);
    border-radius: 8px;
    background-image: radial-gradient(
      circle farthest-corner at 10% 20%,
      rgba(255, 229, 168, 1) 0%,
      rgba(251, 174, 222, 1) 100.7%
    );

    border: 2px solid var(--border-light);
    color: var(--c-dark);
    .element {
      width: 100%;
      display: grid;
      gap: 0.5rem;
      z-index: 999;

      .wrapper-element {
        display: flex;
        gap: 0.4rem;
        align-items: center;
        white-space: nowrap;
      }
    }

    &:hover {
      filter: drop-shadow(0 0 3px rgba(255 255 255 / 0.8));
      border: 2px solid rgba(255, 255, 255, 0.7);
      text-shadow: 0 0 5px rgba(255 255 255 / 0.5);
      .element {
        .symbol {
          transform: scale(1.4);
        }
      }
    }
  }
  @media screen and (max-width: 750px) {
    flex-direction: row;
  }
`;

const languages = {
  es: aboutData.es,
  en: aboutData.en,
};

const About = () => {
  const controls = useAnimation();
  const [refView, inView] = useInView();
  const aboutref = useRef(null);
  const { state } = useAppContext();

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
      key={"about-section"}
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
            placeholder="blur"
          />
          <div className="name">
            <span className="">Darvy is my stage name</span>
          </div>
        </div>
        <CardEffect>
          <div className="element">
            <span className="wrapper-element">
              ⏤⏤ Web Developer <span className="symbol">✧</span>
            </span>
          </div>
          <div className="element">
            <span className="wrapper-element">
              ⏤⏤ UX/UI Designer <span className="symbol">✦</span>
            </span>
          </div>
          <div className="element">
            <span className="wrapper-element">
              ⏤⏤ System Engineer <span className="symbol">✷</span>
            </span>
          </div>
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
