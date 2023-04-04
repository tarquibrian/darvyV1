import React, { useEffect, useRef } from "react";
import { IconExternal, IconFigma, IconGitHub } from "@components";
import styled from "styled-components";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAppContext } from "src/context/app.context";
import { projectsData } from "@data";

const ProjectsStyled = styled(motion.section)`
  width: 80%;
  margin: auto;
  display: grid;
  place-content: center;
  overflow: hidden;
  /* background: rgba(0 0 0 /0.2); */
  .headerTitle {
    font-size: clamp(40px, 8vw, 80px);
    font-weight: 400;
    color: #eae2b7;
    text-shadow: 0 0 6px rgba(0, 0, 0, 0.5);
    margin: 0 0 3rem -4px;
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
  h2 {
    margin: 3rem auto 0;
    font-size: clamp(10px, 3vw, 24px);
  }
  @media screen and (max-width: 400px) {
    width: 90%;
  }
`;

const ProjectsContainer = styled(motion.div)`
  min-width: 400px;
  max-width: 1100px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(6, 1fr);
  align-items: center;
  gap: 1rem;
  font-family: "DM Sans", sans-serif;
  line-height: 1.5;
  /* margin-bottom: 10rem; */
  @media screen and (max-width: 768px) {
    min-width: 200px;
  }
`;

const ProjectContent = styled.div`
  position: relative;
  grid-column: 1 / 7;
  grid-row: 1 / -1;
  z-index: 9;

  .label {
    font-size: clamp(14px, 2vw, 16px);
    margin-bottom: 0.5rem;
    color: #eae2b7;
  }

  h2 {
    margin-bottom: 1rem;
    font-size: clamp(20px, 3vw, 24px);
    text-shadow: 0 0 3px rgba(255 255 255 / 0.8);
  }

  p {
    padding: 1.5rem;
    font-size: clamp(14px, 2vw, 16px);
    /* background: #da2c38; */
    background: rgba(234, 226, 176, 0.1);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
    backdrop-filter: blur(100px);
    -webkit-backdrop-filter: blur(100px);
    border-radius: 4px;
    margin-bottom: 1rem;

    &:hover {
      /* background: rgba(255, 255, 255, 0.05)
        linear-gradient(
          to top right,
          rgba(255, 255, 255, 0),
          rgba(255, 235, 0, 0.15)
        ); */

      background: rgba(255, 225, 142, 0.14);
    }
  }
  ul {
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 1rem;
    margin-bottom: 0.5rem;
    font-size: clamp(14px, 2vw, 16px);
    .features {
      /* color: #cbc0d3; */
    }

    li {
      a {
        text-align: center;
        width: 100%;
        padding: 6px 0;
        svg {
          height: 24px;
          width: 24px;
          &:hover {
            filter: drop-shadow(0 0 3px rgba(255 255 255 / 0.8));
          }
        }
        .feather-external-link {
          height: 25px;
          width: 25px;
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    grid-column: 1/-1;
    padding: 2rem;
    display: grid;
    place-content: center;
    /* background-color: rgba(38, 70, 83, 0.9); */
    /* background-color: rgba(255, 48, 79, 0.9); */
    /* background-color: rgba(226, 67, 75, 0.9); */
    background-color: rgba(8, 40, 53, 0.9);

    backdrop-filter: blur(2px);
    height: 100%;
    overflow: hidden;
    border-radius: 4px;

    p {
      box-shadow: initial;
      backdrop-filter: initial;
      background: initial;
      padding: initial;
      &:hover {
        background: none;
      }
    }
  }
`;

const ProjectImg = styled.div`
  grid-column: 6 / -1;
  grid-row: 1 / -1;
  z-index: 1;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  img {
    width: 100%;
    /* max-width: 100%; */
    vertical-align: middle;
    border-radius: 4px;
    /* position: relative; */
    height: auto;
    object-fit: cover;
    &:hover {
      transform: scale(1.05);
    }
  }

  @media screen and (max-width: 768px) {
    grid-column: 1/-1;
  }
`;

const ProjectWraper = styled.div`
  display: grid;
  gap: 5rem;
`;

const variants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  hidden: { opacity: 0, scale: 1 },
};

const languages = {
  es: projectsData.es,
  en: projectsData.en,
};

const Projects = () => {
  const ref = useRef(null);
  const { state, toggleLanguage } = useAppContext();
  const controls = useAnimation();
  const [refView, inView] = useInView();

  const currentLanguage = {
    lenguage: languages[state.currentLanguage],
  };

  const handleOnMouseMove = (e) => {
    const rect = ref?.current?.getBoundingClientRect(),
      x = e?.clientX - rect?.left,
      y = e?.clientY - rect?.top;
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    window.addEventListener("mousemove", handleOnMouseMove);
  }, [controls, inView]);
  return (
    <ProjectsStyled
      id="projects"
      ref={refView}
      animate={controls}
      initial="hidden"
      variants={variants}
    >
      <h1 className="headerTitle">{currentLanguage.lenguage.title}</h1>
      <ProjectWraper>
        {currentLanguage.lenguage.items.map((project, i) => {
          const { id, label, title, desc, features, links, img } = project;
          return (
            <ProjectsContainer
              key={id}
              ref={refView}
              animate={controls}
              initial="hidden"
              variants={{
                visible: {
                  x: 0,
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.5 },
                },
                hidden: { x: 100, opacity: 0, scale: 1 },
              }}
            >
              <ProjectContent>
                <div className="label">{label}</div>
                <h2>{title}</h2>
                <p ref={ref}>{desc}</p>
                <ul>
                  {features.map((feature, i) => {
                    const { name } = feature;
                    return (
                      <li key={i} className="features">
                        {name}
                      </li>
                    );
                  })}
                </ul>
                <ul>
                  {links.map((linkname, i) => {
                    return (
                      <li key={i}>
                        <a
                          href={linkname.path}
                          target="_blank"
                          rel="noreferrer"
                          // key={linkname.id}
                        >
                          {linkname.svg === 1 && <IconExternal />}
                          {linkname.svg === 2 && <IconGitHub />}
                          {linkname.svg === 3 && <IconFigma />}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </ProjectContent>
              <ProjectImg>
                <Image
                  src={img}
                  alt="thumbnail of the project"
                  title="thumbnail of the project"
                />
              </ProjectImg>
            </ProjectsContainer>
          );
        })}
      </ProjectWraper>
      <h2>+12 projects. Preparing for deployment and preview.</h2>
    </ProjectsStyled>
  );
};

export default Projects;
