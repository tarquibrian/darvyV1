import React, { useEffect, useRef, useState } from "react";
import { Main__Section } from "@styles";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAppContext } from "src/context/app.context";
import { experienceData } from "@data";
import { CardEffect } from "../layout";

const ExperienceStyled = styled(motion.section)`
  display: grid;
  place-content: center;
  width: 80%;
  margin: auto;
  @media screen and (max-width: 400px) {
    width: 90%;
  }
`;

const ExperienceCard = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 600px;
  max-width: 920px;
  border-radius: 4px;
  font-family: "Sofia Sans Condensed", sans-serif;
  font-weight: normal;
  z-index: 9;

  .headerTitle {
    font-family: "Oswald", sans-serif;
    font-size: clamp(40px, 8vw, 80px);
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
    font-size: clamp(14px, 2vw, 18px);
    font-weight: 400;
  }

  @media screen and (max-width: 768px) {
    min-width: fit-content;
  }
`;

const CardContent = styled.div`
  display: grid;
  grid-template-columns: 250px auto;

  gap: 1rem;
  margin-top: 1rem;
  line-height: 1.5;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, auto);
  }
`;

const ContentList = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  /* gap: 1rem; */
  border-radius: 4px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  overflow: hidden;
  outline: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;

  .dinamic-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    background: linear-gradient(
      93.3deg,
      rgba(236, 80, 80, 1) 21.5%,
      rgba(255, 97, 29, 1) 93.9%
    );
    z-index: 0;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0%;
      width: 5px;
      height: 100%;
      /* border-radius: ${({ isActive }) => (isActive ? "0px" : "0px")}; */
      background: rgba(234, 226, 176, 1);
    }
    /* z-index: 999; */
  }
  @media screen and (max-width: 768px) {
    overflow-x: scroll;
    flex-direction: row;
  }
`;

const TabList = styled.div`
  min-width: 200px;
  height: 60px;
  display: grid;
  grid-template-columns: 80px auto;
  /* align-items: center; */
  /* gap: 3rem; */
  padding: 1rem 0;
  padding-left: 5px;
  position: relative;
  /* outline: 1px solid
    ${({ isActive }) => (isActive ? "rgba(234,226,176,.5)" : "transparent")}; */
  /* background: ${({ isActive }) =>
    isActive
      ? "linear-gradient(93.3deg,rgba(236, 80, 80, 1) 21.5%,rgba(255, 97, 29, 1) 93.9%)"
      : "rgba(255,255,255,0)"}; */
  transition: 0.3s ease;
  z-index: 1;

  h2,
  h3 {
    font-weight: normal;
    color: ${({ isActive }) => (isActive ? "#fff" : "#e5e5e5")};
    text-shadow: ${({ isActive }) =>
      isActive ? "0 0 5px rgba(255 255 255 / 0.5)" : "initial"};
    font-size: clamp(16px, 3vw, 18px);
  }
  h2 {
    justify-self: center;
    /* background-color: red; */
  }
  h3 {
    /* justify-self: start; */
  }

  /* &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0%;
    width: 5px;
    height: 100%;
    border-radius: ${({ isActive }) => (isActive ? "0px" : "0px")};

    background-color: ${({ isActive }) =>
    isActive ? "rgba(234,226,176,1)" : "rgba(255, 255, 255, 0.2)"};
  } */

  &:hover {
    cursor: pointer;
    background-color: ${({ isActive }) =>
      isActive ? "rgba(234,226,176,0)" : "rgba(234,226,176,.1)"};
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, auto);
    place-content: center;
    h2 {
      display: none;
    }
    &::after {
      display: none;
    }
  }
`;

const ContentBody = styled.div`
  .contentbody__container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border-radius: 4px;
    /* background: rgba(255, 255, 255, 0.1); */
    padding: 1.7rem 2rem;

    &-header {
      display: flex;
      align-items: center;
      justify-content: space-between;

      /* padding: 1rem 1.5rem; */
      /* border: 1px solid rgba(255, 255, 255, 0.5); */
      /* background-color: rgba(255, 255, 255, 0.1); */

      border-radius: 4px;
      width: 100%;
      font-family: "Oswald", sans-serif;
      font-size: clamp(20px, 3vw, 28px);
      color: #eae2b7;
      text-shadow: 0 0 6px rgba(0, 0, 0, 0.5);
      .link {
        font-size: clamp(12px, 3vw, 16px);
      }
    }
    &-main {
      /* background: rgba(255, 255, 255, 0.1); */
      border-radius: 4px;
      width: 100%;
      p {
        font-size: clamp(16px, 3vw, 20px);
        /* padding: 1rem 1.5rem; */
        /* background: rgba(255, 255, 255, 0.1); */
        /* border: 1px solid rgba(255, 255, 255, 0.5); */
        border-radius: 4px;
      }

      ul {
        font-size: clamp(16px, 3vw, 20px);
        margin-top: 1rem;
        /* padding: 1rem 1.5rem; */
        /* background: rgba(255, 255, 255, 0.1); */
        /* border: 1px solid rgba(255, 255, 255, 0.5); */
        border-radius: 4px;
      }
    }
    .type {
      color: #cbc0d3;
      text-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
      display: flex;
      align-items: center;
      .entity {
        font-weight: bold;
        transition: 0.1s ease;
        display: flex;
        align-items: center;
        svg {
          margin-left: -2px;
        }

        &:hover {
          color: #fff;
          text-shadow: 0 0 5px rgba(255 255 255 / 0.5);
        }
      }
    }
    .skeleton {
      width: 100%;
      a,
      li {
        color: transparent;
      }
      svg {
        color: rgba(255, 255, 255, 0.1);
        filter: drop-shadow(0 0 3px rgba(255 255 255 / 0.5));
      }
      color: transparent;
      text-shadow: 0 0 8px rgba(255 255 255 / 0.7);
      border-radius: 4px;
      background: linear-gradient(
        90deg,
        rgba(229, 229, 229, 0.1) 20%,
        rgba(240, 240, 240, 0.5) 38%,
        rgba(240, 240, 240, 0.5) 40%,
        rgba(229, 229, 229, 0.1) 48%
      );
      background-size: 200% 100%;
      background-position: 100% 0;
      animation: load 2s infinite;

      @keyframes load {
        100% {
          background-position: -100% 0;
        }
      }
    }

    h1 {
      font-size: var(--fz-xxl);
      font-size: clamp(14px, 3vw, 22px);
      color: white;
      &:hover {
        text-shadow: 0 0 5px rgba(255 255 255 / 0.5);
      }
    }
    p {
      /* font-size: clamp(14px, 2vw, 18px); */
      /* margin-bottom: 1.4rem; */
    }
    ul {
      li {
        position: relative;
        /* font-size: clamp(14px, 2vw, 18px); */
        padding-left: 30px;
        margin-bottom: 10px;
        margin-bottom: 5px;
        color: #fff;
        &::before {
          content: "▹";
          position: absolute;
          left: 0;
          color: rgba(234, 226, 176, 1);
        }
      }
    }
  }
`;

const variants = {
  visible: { y: 0, opacity: 1, scale: 1, transition: { duration: 0.6 } },
  hidden: { y: 200, opacity: 0, scale: 1 },
};
const languages = {
  es: experienceData.es,
  en: experienceData.en,
};
const Experience = () => {
  const [activeId, setActiveId] = useState(0);
  const controls = useAnimation();
  const [refView, inView] = useInView();
  const { state, toggleLanguage } = useAppContext();
  const cardref = useRef(null);

  const currentLanguage = {
    lenguage: languages[state.currentLanguage],
  };

  const handleOnMouseMove = (e) => {
    const rect = cardref?.current?.getBoundingClientRect(),
      x = e?.clientX - rect?.left,
      y = e?.clientY - rect?.top;

    cardref?.current?.style?.setProperty("--mouse1-x", `${x}px`);
    cardref?.current?.style?.setProperty("--mouse1-y", `${y}px`);
  };

  const handleOnMouseEnter = (e) => {
    console.log(e);
  };

  const DinamicBG = () => {
    const bg = document.querySelector(".dinamic-bg");
    // bg.style.top = activeId * 60 + "px";
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
      // DinamicBG();
    }
    const bg = document.querySelector(".dinamic-bg");
    let h = activeId * 60;
    bg.style.top = h + "px";
    window.addEventListener("mousemove", handleOnMouseMove);
    // DinamicBG();
  }, [controls, inView, activeId]);

  return (
    <ExperienceStyled
      id="experience"
      ref={refView}
      animate={controls}
      initial="hidden"
      variants={variants}
    >
      <ExperienceCard ref={cardref} id="card">
        <h1 className="headerTitle">{currentLanguage.lenguage.title}</h1>
        <CardContent>
          <ContentList>
            {currentLanguage.lenguage.items.map((item, i) => {
              const { id, title } = item;
              const { name, year } = title;
              return (
                <TabList
                  onClick={() => setActiveId(id)}
                  isActive={activeId === i}
                  key={id}
                >
                  <h2>{year}</h2>
                  <h3>{name}</h3>
                </TabList>
              );
            })}
            <span className="dinamic-bg"></span>
          </ContentList>
          <ContentBody>
            {currentLanguage.lenguage.items.map(({ id, body, title }, i) => {
              const { header, description, features, path, type } = body;
              const { name } = title;
              if (id === activeId) {
                return (
                  <CardEffect key={id}>
                    <div className="contentbody__container">
                      <header
                        className={`${
                          id !== 0 ? "skeleton" : ""
                        } contentbody__container-header`}
                      >
                        {header} <span className="link">@{name}</span>
                      </header>
                      <div className="contentbody__container-main">
                        <p className={`${id !== 0 ? "skeleton" : ""}`}>
                          {description}
                        </p>

                        <ul className={`${id !== 0 ? "skeleton" : ""}`}>
                          {features.map((feature, i) => (
                            <li key={i}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                      {/* <span className={`type ${id !== 0 ? "skeleton" : ""}`}>
                      <span className="entity">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"
                          ></path>
                          <circle cx="12" cy="12" r="4"></circle>
                          <path d="M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28"></path>
                        </svg>
                        <a href={path} target="_blank" rel="noreferrer">
                          {name}
                        </a>
                      </span>
                    </span>
                    <h1 className={`${id !== 0 ? "skeleton" : ""}`}>
                      {header}
                    </h1>

                    <p className={`${id !== 0 ? "skeleton" : ""}`}>
                      {description}
                    </p>

                    <ul>
                      {features.map((feature, i) => (
                        <li key={i} className={`${id !== 0 ? "skeleton" : ""}`}>
                          {feature}
                        </li>
                      ))}
                    </ul> */}
                    </div>
                  </CardEffect>
                );
              }
            })}
          </ContentBody>
        </CardContent>
      </ExperienceCard>
    </ExperienceStyled>
  );
};

export default Experience;
