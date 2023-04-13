import React, { useEffect, useRef } from "react";
import {
  IconAtom,
  IconExpress,
  IconExternal,
  IconFigma,
  IconFigmaImg,
  IconGitHub,
  IconMongo,
  IconNextjs,
  IconRedux,
  IconSC,
  IconSass,
  IconVS,
  IconVim,
  ReactIcon,
} from "@components";
import styled from "styled-components";
import Image from "next/image";
import { animate, motion, useAnimation, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAppContext } from "src/context/app.context";
import { projectsData } from "@data";

const ProjectsStyled = styled(motion.section)`
  width: 80%;
  margin: auto;
  display: grid;
  place-content: center;
  overflow: hidden;
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
  .footerTitle {
    font-family: "DM Sans";
    font-weight: 400;
    margin: 3rem auto 0;
    font-size: clamp(10px, 2vw, 18px);
  }

  .project__container {
    min-height: 900px;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    /* grid-template-rows: repeat(10, 1fr); */
    gap: 2rem;

    &-picture {
      grid-column: 1/7;
      width: 100%;
      /* background-color: rgba(0, 0, 0, 0.5); */
      display: flex;

      img {
        width: 100%;
        height: auto;
      }
    }

    &-main {
      grid-column: 7/-1;

      .main__body {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        &-desc {
          padding: 1.5rem;
          background: rgba(255, 255, 255, 0.1);
        }
        &-features {
          display: flex;
          flex-wrap: wrap;
          white-space: nowrap;
          gap: 1rem;
          .feature {
            flex: 1 0 100px;
            padding: 0.5rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            background: rgba(255, 255, 255, 0.1);
            max-width: 250px;
            img,
            svg {
              height: 50px;
              width: auto;
            }
            span {
              margin-right: 1rem;
            }
          }
        }
        &-links {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;

          a {
            background: rgba(255, 255, 255, 0);
            padding: 0.3rem 0;
            svg {
              width: 24px;
              height: 24px;
              &:hover {
                filter: drop-shadow(0 0 3px rgba(255 255 255 / 0.8));
              }
            }
          }
        }
      }
    }
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
  &:nth-child(1) {
    p {
      background-color: #233d4d;
    }
  }
  &:nth-child(2) {
    p {
      background-color: #27a69c;
    }
  }
  &:nth-child(3) {
    p {
      background-color: #e24e50;
    }
  }
  &:nth-child(4) {
    p {
      background-color: #072f3a;
    }
  }
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
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(100px);
    border-radius: 4px;
    margin-bottom: 1rem;
    z-index: 999;

    &:hover {
      background-color: rgba(141, 153, 174, 0.6);
    }
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: start;
    flex-wrap: wrap;
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
    background-color: rgba(8, 40, 53, 0.8);

    backdrop-filter: blur(2px);
    height: 100%;
    overflow: hidden;
    border-radius: 4px;

    p {
      box-shadow: initial;
      backdrop-filter: initial;
      background: initial;
      padding: initial;
      padding: 0.6rem;
      &:hover {
        background: none;
      }
    }
  }
`;

const ProjectImg = styled.div`
  display: flex;
  grid-column: 6 / -1;
  grid-row: 1 / -1;
  z-index: 0;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
  img {
    width: 100%;
    vertical-align: middle;
    border-radius: 4px;
    height: auto;
    object-fit: cover;
    &:hover {
      transform: scale(1.03);
    }
  }

  @media screen and (max-width: 768px) {
    grid-column: 1/-1;
  }
`;

const ProjectWraper = styled(motion.div)`
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

const animateElement = {
  hidden: { x: 1000, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.1, duration: 2 },
  },
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
      <div className="project__container">
        {currentLanguage.lenguage.items.map((project) => {
          const { id, label, title, desc, features, links, img } = project;
          return (
            <>
              <div className="project__container-picture">
                <Image src={img} alt="img from portfolio" />
              </div>
              <div className="project__container-main">
                <header>
                  <span>{label}</span>
                  <h1>{title}</h1>
                </header>
                <div className="main__body">
                  <div className="main__body-desc">
                    <p>{desc}</p>
                  </div>
                  <div className="main__body-features">
                    {features.map((feature, i) => {
                      const { name } = feature;
                      return (
                        <div key={i} className="feature">
                          {feature.name === "React" && <ReactIcon />}
                          {feature.name === "VS Code" && <IconVS />}
                          {feature.name === "Sublime Text" && <IconVim />}
                          {feature.name === "Atom" && <IconAtom />}
                          {feature.name === "NextJS" && <IconNextjs />}
                          {feature.name === "Styled Components" && <IconSC />}
                          {feature.name === "Figma+" && <IconFigmaImg />}
                          {feature.name === "Sass" && <IconSass />}
                          {feature.name === "Redux" && <IconRedux />}
                          {feature.name === "Express" && <IconExpress />}
                          {feature.name === "MongoDB" && <IconMongo />}
                          <span>{name}</span>
                        </div>
                      );
                    })}
                  </div>
                  <div className="main__body-links">
                    {links.map((linkname, i) => {
                      return (
                        <span key={i}>
                          <a
                            href={linkname.path}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {linkname.svg === 1 && <IconExternal />}
                            {linkname.svg === 2 && <IconGitHub />}
                            {linkname.svg === 3 && <IconFigma />}
                          </a>
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <ProjectWraper
        initial={"hidden"}
        animate={controls}
        transition={{ staggerChildren: 0.8 }}
      >
        {currentLanguage.lenguage.items.map((project) => {
          const { id, label, title, desc, features, links, img } = project;
          return (
            <ProjectsContainer key={id} variants={animateElement}>
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
      <p className="footerTitle">{currentLanguage.lenguage.desc}</p>
    </ProjectsStyled>
  );
};

export default Projects;
