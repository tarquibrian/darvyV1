import React, { useEffect, useRef } from "react";
import {
  CardEffect,
  IconAI,
  IconAP,
  IconArrow,
  IconAtom,
  IconExpress,
  IconExternal,
  IconFigma,
  IconFigmaImg,
  IconGitHub,
  IconMaps,
  IconMongo,
  IconNextjs,
  IconPushNotification,
  IconRedux,
  IconSC,
  IconST,
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
import IconPWA from "../icons/pwa";
import Link from "next/link";
import { projectsData } from "src/data/projectsData";

const ProjectsStyled = styled(motion.section)`
  width: 80%;
  max-width: 1280px;
  margin-inline: auto;

  .title-content {
    margin-bottom: 3rem;
  }

  .projects__container {
    display: grid;
    gap: 10rem;

    .projects__wrapper {
      font-family: var(--ff-sofia);
      /* padding: 4rem 0; */
      display: grid;
      grid-template-columns: 3fr minmax(280px, 1.3fr);
      gap: 2rem;

      &-picture {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        transition: 1s ease;

        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;

          .content-title {
            max-width: 650px;
            h2 {
              display: flex;
              gap: 0.5rem;
              margin-bottom: 1rem;
              font-size: var(--fz-subtitle);
              color: #eae2b7;
            }
            p {
              font-size: var(--fz-smm);
            }
          }

          .content-link {
            svg {
              transition: 1s cubic-bezier(0.215, 0.61, 0.355, 1);
              fill: var(--c-light);
            }
          }
        }

        .picture-content {
          overflow: hidden;
          border-radius: var(--border-radius);
          border: 2px solid rgba(255, 255, 255, 0.4);
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          &:hover {
            border-color: rgba(255, 255, 255, 0.2);
            /* filter: drop-shadow(0 0 3px rgba(255 255 255 / 0.8)); */
            /* text-shadow: 0 0 5px rgba(255 255 255 / 0.5); */
          }
        }

        &:hover {
          transform: translate3d(1rem, 1rem, 1rem);
          svg {
            transform: rotate(45deg);
          }

          .header-content {
            .content-title {
              .symbol {
                transform: scale(1.3);
              }
            }
          }
        }
      }
      .wrapper-effect {
        transition: 1s ease;
        &:hover {
          transform: translateX(1rem);
        }
      }

      &-details {
        /* overflow: hidden; */
        display: flex;
        align-items: flex-end;

        .card-details {
          color: var(--c-dark);
          width: 100%;
          padding: 2rem;
          border-radius: var(--border-radius);
          border: 2px solid rgba(255, 255, 255, 0.4);
          background-image: radial-gradient(
            circle farthest-corner at 10% 20%,
            rgba(255, 229, 168, 1) 0%,
            rgba(251, 174, 222, 1) 100.7%
          );
          display: flex;
          flex-direction: column;
          gap: 2rem;

          .details-wrapper {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            .title {
              display: flex;
              align-items: center;
              gap: 0.4rem;
              color: var(--c-dark);
              font-size: var(--fz-md);
              font-weight: bold;
            }
            .desc {
              font-size: var(--fz-smm);
            }
            .features {
              display: flex;
              flex-wrap: wrap;
              column-gap: 1.5rem;
              row-gap: 1rem;
            }
            .feature-item {
              white-space: nowrap;
              /* padding: 1rem; */
              /* flex: 1 0 content; */
              display: flex;
              align-items: center;
              gap: 0.4rem;
              font-size: var(--fz-smm);
              /* background-color: red; */
              height: 30px;
              img,
              svg {
                width: auto;
                height: 100%;
                /* background-color: red; */
              }
            }
            .links {
              margin-top: 1rem;
              ul {
                display: flex;
                gap: 0.8rem;
                svg {
                  width: 24px;
                  height: 24px;
                  color: var(--c-dark);
                  vertical-align: middle;

                  &:hover {
                    filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.4));
                    transform: scale(1.1);
                  }
                }
              }
            }
          }

          &:hover {
            filter: drop-shadow(0 0 3px rgba(255 255 255 / 0.8));
            text-shadow: 0 0 5px rgba(255 255 255 / 0.5);
            border: 2px solid rgba(255, 255, 255, 0.7);

            .symbol {
              transform: scale(1.3);
            }
          }
        }
      }

      @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
      }
    }
  }

  .footerTitle {
    font-family: var(--ff-sofia);
    margin-top: 4rem;
    text-align: center;
    font-size: var(--fz-md);
    display: grid;
    place-content: center;
    /* border-bottom: 2px solid rgba(255, 255, 255, 0.4); */
    a {
      color: #000;
      background-image: radial-gradient(
        circle farthest-corner at 10% 20%,
        rgba(255, 229, 168, 1) 0%,
        rgba(251, 174, 222, 1) 100.7%
      );
      padding: 12px 18px;
      border-radius: var(--br-buttns);
      border-radius: 5rem;
      border: 2px solid var(--border-light);
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.3rem;
      width: fit-content;
      &:hover {
        border: 2px solid var(--border-light);
        /* color: rgba(255, 255, 255, 1); */
        filter: drop-shadow(0 0 3px rgba(255 255 255 / 0.6));
        .symbol {
          transform: scale(1.3);
        }
      }
      /* &:hover {
        text-shadow: 0 0 5px rgba(0 0 0 / 0.5);
        transform: scale(1.04);
      } */
    }
  }

  @media screen and (max-width: 768px) {
    width: 90%;
  }
  @media screen and (max-width: 400px) {
    width: 90%;
  }
`;

const WrapperLeft = styled(Link)``;

const variants = {
  visible: { y: 0, opacity: 1, transition: { duration: 1, delay: 0.3 } },
  hidden: { y: 200, opacity: 0 },
};

const languages = {
  es: projectsData.es,
  en: projectsData.en,
};

const Projects = () => {
  const { state } = useAppContext();
  const controls = useAnimation();
  const [refView, inView] = useInView();

  const currentLanguage = {
    lenguage: languages[state.currentLanguage],
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <ProjectsStyled
      key={"projects-section"}
      id="projects"
      ref={refView}
      animate={controls}
      initial="hidden"
      variants={variants}
    >
      <h1 className="title-content">{currentLanguage.lenguage.title}</h1>
      <div className="projects__container">
        <WrapperContent {...currentLanguage.lenguage.projects[4]} />
        <WrapperContent {...currentLanguage.lenguage.projects[2]} />
        <WrapperContent {...currentLanguage.lenguage.projects[0]} />
      </div>
      <p className="footerTitle">
        <Link href={"/projects"} scroll={false}>
          <span>+⏤⏤ {currentLanguage.lenguage.desc} ⏤⏤+</span>
        </Link>
      </p>
    </ProjectsStyled>
  );
};

export default Projects;

const WrapperContent = ({ id, title, desc, features, thumbnails, links }) => {
  const controls = useAnimation();
  const [refView, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.article className={`projects__wrapper`} id={id} ref={refView}>
      <div className="wrapper-effect">
        <Link href={`/projects/${id}`} scroll={false}>
          <motion.div
            className="projects__wrapper-picture"
            initial="hidden"
            animate={controls}
            variants={{
              visible: {
                x: 0,
                opacity: 1,
                scale: 1,
                transition: { duration: 0.6, ease: "backInOut" },
              },
              hidden: { x: -100, opacity: 0, scale: 1 },
            }}
          >
            <header className="header-content">
              <div className="content-title">
                <h2>
                  <span className="symbol">✦</span> {title}
                </h2>
                <p>{desc}</p>
              </div>
              <div className="content-link">
                <IconArrow />
              </div>
            </header>

            <div className="picture-content">
              <CardEffect>
                <Image
                  src={thumbnails.home}
                  width={900}
                  height={700}
                  alt="me"
                />
              </CardEffect>
            </div>
          </motion.div>
        </Link>
      </div>

      <motion.div
        className="projects__wrapper-details"
        initial="hidden"
        animate={controls}
        variants={{
          visible: {
            x: 0,
            opacity: 1,
            scale: 1,
            transition: { duration: 1.3, ease: "backInOut" },
          },
          hidden: { x: 100, opacity: 0, scale: 1 },
        }}
      >
        <div className="card-details">
          <div className="details-wrapper">
            <div className="title">
              <span className="symbol">✧</span> {features.typeProject.label}
            </div>
            <span className="desc">{features.typeProject.value}</span>
          </div>
          <div className="details-wrapper">
            <div className="title">
              <span className="symbol">✦</span> {features.client.label}
            </div>
            <span className="desc">{features.client.value}</span>
          </div>
          <div className="details-wrapper">
            <div className="title">
              <span className="symbol">✴︎</span> {features.techStack.label}
            </div>
            <div className="features">
              {features.techStack.values.map((feature, i) => {
                console.log(feature);
                const Icon = feature.icon;
                return (
                  <div key={feature.id} className="feature-item">
                    <Icon />
                    <span>{feature.label}</span>
                  </div>
                );
              })}
            </div>
            <div className="links">
              <ul>
                {links.map((item) => {
                  const Icon = item.svg;
                  return (
                    <li key={item.id}>
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Icon />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.article>
  );
};
