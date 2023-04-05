import React, { useEffect, useRef, useState } from "react";
import { Main__Section } from "@styles";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAppContext } from "src/context/app.context";
import { experienceData } from "@data";

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
  max-width: 850px;
  border-radius: 4px;
  font-family: "DM Sans", sans-serif;
  font-weight: normal;
  padding: 40px;
  background: rgba(255, 255, 255, 0.1);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
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
    /* background: rgba(255, 255, 255, 0.05)
        linear-gradient(
          to top right,
          rgba(255, 255, 255, 0),
          rgba(255, 235, 0, 0.15)
        ); */

    background: rgba(255, 225, 142, 0.1);
  }
  @media screen and (max-width: 768px) {
    min-width: fit-content;
  }
`;

const CardContent = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 2rem;
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
  @media screen and (max-width: 768px) {
    overflow-x: scroll;
    flex-direction: row;
  }
`;

const TabList = styled.div`
  min-width: 200px;
  height: 45px;
  display: grid;
  grid-template-columns: 50px 150px;
  align-items: center;
  gap: 2rem;
  border-radius: 2px;
  position: relative;
  background: ${({ isActive }) =>
    isActive ? "rgba(234,226,176,.3)" : "transparent"};
  /* background-color: rgba(0 0 0 / 0.3); */
  /* transition: cubic-bezier(0.445, 0.05, 0.55, 0.95) */
  transition: 0.3s ease;

  h2,
  h3 {
    font-weight: normal;
    color: ${({ isActive }) => (isActive ? "#fff" : "#e5e5e5")};
    text-shadow: ${({ isActive }) =>
      isActive ? "0 0 5px rgba(255 255 255 / 0.5)" : "initial"};
    font-size: clamp(12px, 2vw, 16px);
  }
  h2 {
    justify-self: end;
  }
  h3 {
    justify-self: start;
  }

  &:first-of-type {
    &::after {
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
    }
  }
  &:last-of-type {
    &::after {
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
    }
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 33%;
    width: 5px;
    height: 100%;
    border-radius: ${({ isActive }) => (isActive ? "10px" : "0px")};
    background-color: ${({ isActive }) =>
      isActive ? "rgba(234,226,176,1)" : "rgba(234,226,176,.3)"};
  }

  &:hover {
    cursor: pointer;
    background-color: ${({ isActive }) =>
      isActive ? "rgba(234,226,176,.3)" : "rgba(234,226,176,.1)"};
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
      a {
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
      font-size: clamp(14px, 2vw, 18px);
      margin-bottom: 1.4rem;
    }
    ul {
      li {
        position: relative;
        font-size: clamp(14px, 2vw, 18px);
        padding-left: 30px;
        margin-bottom: 10px;
        margin-bottom: 5px;
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

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    window.addEventListener("mousemove", handleOnMouseMove);
  }, [controls, inView]);
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
          </ContentList>
          <ContentBody>
            {currentLanguage.lenguage.items.map(({ id, body, title }, i) => {
              const { header, description, features, path, type } = body;
              const { name } = title;
              if (id === activeId) {
                return (
                  <div key={id} className="contentbody__container">
                    <span className={`type ${id !== 0 ? "skeleton" : ""}`}>
                      <span className="entity">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          // class="icon icon-tabler icon-tabler-at"
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
                    </ul>
                  </div>
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
