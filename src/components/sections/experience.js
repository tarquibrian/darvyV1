import React, { useEffect, useRef, useState } from "react";
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
  border-radius: var(--border-radius);
  font-family: var(--ff-sofia);
  font-weight: normal;
  z-index: 9;

  .headerTitle {
    font-family: var(--ff-oswald);
    font-size: var(--fz-header);
    font-weight: 400;
    color: #eae2b7;
    text-shadow: 0 0 6px rgba(0, 0, 0, 0.5);
    margin: 0 0 15px -4px;
    display: grid;
    grid-template-columns: max-content auto;
    gap: 0.2rem;
    margin-bottom: 3rem;
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

  @media screen and (max-width: 768px) {
    min-width: fit-content;
  }
`;

const CardContent = styled.div`
  display: grid;
  grid-template-columns: 250px auto;

  gap: 1rem;
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
  border-radius: 4px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border: var(--border-size) solid rgba(255, 255, 255, 0.2);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  position: relative;

  .dinamic-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    background: var(--bg-orange);
    z-index: 0;

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0%;
      width: 5px;
      height: 100%;
      background: rgba(234, 226, 176, 1);
    }
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0%;
    width: 5px;
    height: 100%;
    background-color: ${({ isActive }) =>
      isActive ? "rgba(234,226,176,1)" : "rgba(255, 255, 255, 0.2)"};
  }
  @media screen and (max-width: 768px) {
    overflow-x: scroll;
    flex-direction: row;
    border-radius: var(--border-radius);
    .dinamic-bg {
      display: none;
    }
  }
`;

const TabList = styled.div`
  min-width: 200px;
  height: 60px;
  display: grid;
  grid-template-columns: 80px auto;
  padding: 1rem 0;
  padding-left: 5px;
  position: relative;
  transition: 0.3s ease;
  z-index: 1;

  .year-list,
  .name-list {
    font-weight: normal;
    color: ${({ isActive }) => (isActive ? "#fff" : "#e5e5e5")};
    font-size: clamp(16px, 3vw, 18px);
  }
  .year-list {
    justify-self: center;
  }

  &:hover {
    cursor: pointer;
    background-color: ${({ isActive }) =>
      isActive ? "transparent" : "rgba(255, 255, 255, .1)"};

    .year-list,
    .name-list {
      text-shadow: ${({ isActive }) =>
        isActive
          ? "0 0 5px rgba(255, 255, 255 , 0.6)"
          : "0 0 5px rgba(255, 255, 255 , 0.8)"};
    }
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, auto);
    place-content: center;
    height: 50px;
    background: ${({ isActive }) =>
      isActive
        ? "linear-gradient(93.3deg,rgba(236, 80, 80, 1) 21.5%,rgba(255, 97, 29, 1) 93.9%)"
        : "rgba(255,255,255,0)"};
    .year-list {
      display: none;
    }
    &::after {
      display: none;
    }
  }
`;

const ContentBody = styled.div`
  .contentbody__container {
    z-index: 999;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border-radius: var(--border-radius);
    overflow: hidden;
    padding: 1.7rem 2rem;

    &-header {
      width: 100%;

      h3 {
        margin-top: 5px;
        font-family: var(--ff-oswald);
        font-size: var(--fz-lg);
        color: #eae2b7;
        text-shadow: 0 0 6px rgba(0, 0, 0, 0.5);
      }
      .link {
        font-size: var(--fz-sm);
        color: rgba(203, 192, 211, 1);
        &:hover {
          color: #fff;
          text-shadow: 0 0 5px rgba(255 255 255 / 0.5);
        }
      }
    }
    &-main {
      border-radius: var(--border-radius);
      width: 100%;
      font-size: var(--fz-md);

      ul {
        margin-top: 1rem;
        li {
          position: relative;
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
    .skeleton {
      width: 100%;
      h3,
      a,
      li {
        color: transparent;
        text-shadow: inherit;
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
  es: experienceData.es,
  en: experienceData.en,
};
const Experience = () => {
  const [activeId, setActiveId] = useState(0);
  const controls = useAnimation();
  const [refView, inView] = useInView();
  const { state } = useAppContext();
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

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    const bg = document.querySelector(".dinamic-bg");
    let h = activeId * 60;
    bg.style.top = h + "px";
    window.addEventListener("mousemove", handleOnMouseMove);
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
                  <span className="year-list">{year}</span>
                  <span className="name-list">✹ {name}</span>
                </TabList>
              );
            })}
            <span className="dinamic-bg"></span>
          </ContentList>
          <ContentBody>
            {currentLanguage.lenguage.items.map(({ id, body, title }, i) => {
              const { header, description, features, path } = body;
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
                        <a
                          href={path}
                          target="_blank"
                          rel="noreferrer"
                          className="link"
                        >
                          <span>@{name}</span>
                        </a>
                        <h3>{header}</h3>
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
