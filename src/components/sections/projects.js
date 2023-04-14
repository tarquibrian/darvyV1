import React, { useEffect, useRef } from "react";
import {
  IconAI,
  IconAP,
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
import imgProject from "../../images/project-img1.png";
import imgProject2 from "../../images/project-img2.png";
import imgProject3 from "../../images/project-img3.png";
import imgProject4 from "../../images/project-img4.png";
import styled from "styled-components";
import Image from "next/image";
import { animate, motion, useAnimation, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAppContext } from "src/context/app.context";
import IconPWA from "../icons/pwa";

export const projectsData = {
  es: {
    title: ".Proyectos",
    desc: "+12 Proyectos. Preparando el despliegue y previsualización.",
    items: [
      {
        id: "1",
        label: "Extensions Project",
        title: "Darvy Theme",
        desc: "Darvy Theme es un tema de color para Visual Estudio Code y muy pronto para otros editores como Atom o Sublime Text. La paleta de colores esta inspirado en temas populares como One Dark Pro y Tokyo Night, por lo que puede que éste tema vaya a encantarte.",
        features: [
          { name: "VS Code", icon: <IconVS />, bgColor: "rgba(31,192,241,.5)" },
          {
            name: "Sublime Text",
            icon: <IconST />,
            bgColor: "rgba(255,165,0,.3)",
          },
          { name: "Atom", icon: <IconAtom />, bgColor: "rgba(76,244,252,.4)" },
        ],
        links: [
          {
            path: "https://marketplace.visualstudio.com/items?itemName=darvy.darvypro",
            svg: 1,
          },
          {
            path: "https://github.com/tarquibrian/darvypro-theme",
            svg: 2,
          },
        ],
        img: imgProject,
      },
      {
        id: "2",
        label: "Web Project",
        title: "Business Website",
        desc: "Aplicación web sobre Landing Page de una empresa que ofrece sus servicios tecnológicos, relacionados con la informática, programación y soluciones en el área de sistemas.",
        features: [
          {
            name: "NextJS",
            icon: <IconNextjs />,
            bgColor: "rgba(25,25,25,.3)",
          },
          {
            name: "React",
            icon: <ReactIcon />,
            bgColor: "rgba(31,192,241,.5)",
          },
          {
            name: "Styled Components",
            icon: <IconSC />,
            bgColor: "rgba(231,62,250,.4)",
          },
          {
            name: "Adobe Illustrator",
            icon: <IconAI />,
            bgColor: "rgba(234,226,183,.6)",
          },
          {
            name: "Figma+",
            icon: <IconFigmaImg />,
            bgColor: "rgba(255,0,0,.2)",
          },
        ],
        links: [
          {
            path: "https://sonustech-business-website.vercel.app/",
            svg: 1,
          },
          {
            path: "https://github.com/tarquibrian/sonustech-business-website",
            svg: 2,
          },
          {
            path: "https://www.figma.com/community/file/1215090916589711588",
            svg: 3,
          },
        ],
        img: imgProject2,
      },
      {
        id: "3",
        label: "Web Project",
        title: "Ecommerce Website",
        desc: "Aplicación web de ecommerce de ropa moderna que ofrece una amplia selección de ropa y accesorios de moda para clientes exigentes, con opciones para filtrar y encontrar fácilmente lo que están buscando y se actualiza con las últimas tendencias.",
        features: [
          {
            name: "NextJS",
            icon: <IconNextjs />,
            bgColor: "rgba(25,25,25,.3)",
          },
          {
            name: "React",
            icon: <ReactIcon />,
            bgColor: "rgba(31,192,241,.5)",
          },
          { name: "Sass", icon: <IconSass />, bgColor: "rgba(231,62,250,.4)" },
          {
            name: "Adobe Photoshop",
            icon: <IconAP />,
            bgColor: "rgba(21,71,100,.6)",
          },
          {
            name: "Figma+",
            icon: <IconFigmaImg />,
            bgColor: "rgba(255,0,0,.2)",
          },
        ],
        links: [
          {
            path: "https://ecommerce-website-zeta-one.vercel.app/",
            svg: 1,
          },
          {
            path: "https://github.com/tarquibrian/ecommerce-website",
            svg: 2,
          },
          {
            path: "https://www.figma.com/community/file/1226407145403745837/Ecommerce",
            svg: 3,
          },
        ],
        img: imgProject3,
      },
      {
        id: "4",
        label: "Web Project",
        title: "Tourism Website",
        desc: "Aplicacion web de gestión de información turistica, empleando modulos de Artículos Biográficos, Gestión y notificación de eventos culturales, Visualizacion y direccionamiento de sitios turísticos mediante Google Maps en base a coordenadas específicas.",
        features: [
          {
            name: "React",
            icon: <ReactIcon />,
            bgColor: "rgba(31,192,241,.5)",
          },
          {
            name: "Redux",
            icon: <IconRedux />,
            bgColor: "rgba(231,62,250,.3)",
          },
          {
            name: "Express",
            icon: <IconExpress />,
            bgColor: "rgba(222,222,222,.5)",
          },
          {
            name: "MongoDB",
            icon: <IconMongo />,
            bgColor: "rgba(56,176,68,.5)",
          },
          {
            name: "Google Maps Platform",
            icon: <IconMaps />,
            bgColor: "rgba(56,176,68,.5)",
          },
          { name: "PWA", icon: <IconPWA />, bgColor: "rgba(231,62,250,.3)" },
          {
            name: "Push Notifications",
            icon: <IconPushNotification />,
            bgColor: "rgba(31,192,241,.5)",
          },
        ],
        links: [
          {
            path: "https://villa-turismo.herokuapp.com/",
            svg: 1,
          },
          {
            path: "https://github.com/tarquibrian/VT-backend",
            svg: 2,
          },
          {
            path: "https://github.com/tarquibrian/proyecto-villa-frontend",
            svg: 2,
          },
        ],
        img: imgProject4,
      },
    ],
  },
  en: {
    title: ".Projects",
    desc: "+12 Projects. Preparing for deployment and preview.",
    items: [
      {
        id: "1",
        label: "Extensions Project",
        title: "Darvy Theme",
        desc: "Darvy Theme is a color theme for Visual Studio Code and very soon for other editors like Atom or Sublime Text. The color palette is inspired by popular themes like One Dark Pro and Tokyo Night, so you might love this theme.",
        features: [
          { name: "VS Code", icon: <IconVS />, bgColor: "rgba(31,192,241,.5)" },
          {
            name: "Sublime Text",
            icon: <IconST />,
            bgColor: "rgba(255,165,0,.3)",
          },
          { name: "Atom", icon: <IconAtom />, bgColor: "rgba(76,244,252,.4)" },
        ],
        links: [
          {
            path: "https://marketplace.visualstudio.com/items?itemName=darvy.darvypro",
            svg: 1,
          },
          {
            path: "https://github.com/tarquibrian/darvypro-theme",
            svg: 2,
          },
        ],
        img: imgProject,
      },
      {
        id: "2",
        label: "Web Project",
        title: "Business Website",
        desc: "Web application on Landing Page of a company that offers its technological services, related to computing, programming and solutions in the systems area.",
        features: [
          {
            name: "NextJS",
            icon: <IconNextjs />,
            bgColor: "rgba(25,25,25,.3)",
          },
          {
            name: "React",
            icon: <ReactIcon />,
            bgColor: "rgba(31,192,241,.5)",
          },
          {
            name: "Styled Components",
            icon: <IconSC />,
            bgColor: "rgba(231,62,250,.4)",
          },
          {
            name: "Adobe Illustrator",
            icon: <IconAI />,
            bgColor: "rgba(234,226,183,.6)",
          },
          {
            name: "Figma+",
            icon: <IconFigmaImg />,
            bgColor: "rgba(255,0,0,.2)",
          },
        ],
        links: [
          {
            path: "https://sonustech-business-website.vercel.app/",
            svg: 1,
          },
          {
            path: "https://github.com/tarquibrian/sonustech-business-website",
            svg: 2,
          },
          {
            path: "https://www.figma.com/community/file/1215090916589711588",
            svg: 3,
          },
        ],
        img: imgProject2,
      },
      {
        id: "3",
        label: "Web Project",
        title: "Ecommerce Website",
        desc: "Modern clothing ecommerce web application that offers a wide selection of clothing and fashion accessories for demanding customers, with options to easily filter and find what they are looking for and is updated with the latest trends.",
        features: [
          {
            name: "NextJS",
            icon: <IconNextjs />,
            bgColor: "rgba(25,25,25,.3)",
          },
          {
            name: "React",
            icon: <ReactIcon />,
            bgColor: "rgba(31,192,241,.5)",
          },
          { name: "Sass", icon: <IconSass />, bgColor: "rgba(231,62,250,.4)" },
          {
            name: "Adobe Photoshop",
            icon: <IconAP />,
            bgColor: "rgba(21,71,100,.6)",
          },
          {
            name: "Figma+",
            icon: <IconFigmaImg />,
            bgColor: "rgba(255,0,0,.2)",
          },
        ],
        links: [
          {
            path: "https://ecommerce-website-zeta-one.vercel.app/",
            svg: 1,
          },
          {
            path: "https://github.com/tarquibrian/ecommerce-website",
            svg: 2,
          },
          {
            path: "https://www.figma.com/community/file/1226407145403745837/Ecommerce",
            svg: 3,
          },
        ],
        img: imgProject3,
      },
      {
        id: "4",
        label: "Web Project",
        title: "Tourism Website",
        desc: "Web application for tourist information management, using modules of Biographical Articles, Management and notification of cultural events, Visualization and addressing of tourist sites through Google Maps based on specific coordinates.",

        features: [
          {
            name: "React",
            icon: <ReactIcon />,
            bgColor: "rgba(31,192,241,.5)",
          },
          {
            name: "Redux",
            icon: <IconRedux />,
            bgColor: "rgba(231,62,250,.3)",
          },
          {
            name: "Express",
            icon: <IconExpress />,
            bgColor: "rgba(222,222,222,.5)",
          },
          {
            name: "MongoDB",
            icon: <IconMongo />,
            bgColor: "rgba(56,176,68,.5)",
          },
          {
            name: "Google Maps Platform",
            icon: <IconMaps />,
            bgColor: "rgba(56,176,68,.5)",
          },
          { name: "PWA", icon: <IconPWA />, bgColor: "rgba(231,62,250,.3)" },
          {
            name: "Push Notifications",
            icon: <IconPushNotification />,
            bgColor: "rgba(31,192,241,.5)",
          },
        ],
        links: [
          {
            path: "https://villa-turismo.herokuapp.com/",
            svg: 1,
          },
          {
            path: "https://github.com/tarquibrian/VT-backend",
            svg: 2,
          },
          {
            path: "https://github.com/tarquibrian/proyecto-villa-frontend",
            svg: 2,
          },
        ],
        img: imgProject4,
      },
    ],
  },
};

const ProjectsStyled = styled(motion.section)`
  width: 80%;
  max-width: 1080px;
  margin: auto;
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
    margin-top: 2rem;
    text-align: center;
    font-size: clamp(10px, 2vw, 18px);
  }

  .project {
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;

    .project__container {
      display: grid;
      grid-template-columns: 4fr 3fr;
      gap: 1rem;

      &-picture {
        width: 100%;
        img {
          width: 100%;
          height: auto;
          border-radius: 4px;
        }
      }

      &-main {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 1rem;

        header {
          span {
            color: #eae2b7;
            font-size: clamp(14px, 2vw, 16px);
          }
          h1 {
            margin-top: 0.4rem;
            font-size: clamp(20px, 3vw, 24px);
          }
        }

        .main__body {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          &-desc {
            padding: 1rem;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 4px;
            border: 1px solid rgba(255, 255, 255, 0.5);
            font-size: clamp(14px, 2vw, 16px);
            &:hover {
              background: rgba(200, 200, 200, 0.2);
              border: 1px solid rgba(255, 255, 255, 0.2);
            }
          }
          &-features {
            display: flex;
            flex-wrap: wrap;
            white-space: nowrap;
            gap: 1rem;
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
    .horizontal {
      grid-column: span 2;
      grid-template-columns: repeat(2, minmax(200px, auto));
      /* display: flex; */
      .project__container-main {
        display: flex;
        gap: 2rem;
        flex-direction: column;
        justify-content: center;
      }
    }
    @media screen and (max-width: 1280px) {
    }
    @media screen and (max-width: 1024px) {
      grid-template-columns: repeat(2, minmax(200px, auto));
      .project__container {
        grid-template-columns: 1fr;
      }
    }
    @media screen and (max-width: 640px) {
      grid-template-columns: 1fr;
      .project__container {
        &-picture {
          grid-column: 1/-1;
          grid-row: 1/-1;
          z-index: 0;
          img {
            height: 100%;
            width: 100%;
            object-fit: cover;
          }
        }
        &-main {
          grid-column: 1/-1;
          grid-row: 1/-1;
          background-color: rgba(8, 40, 53, 0.8);
          padding: 1rem;
          border-radius: 4px;
          overflow: hidden;
          -webkit-backdrop-filter: blur(5px);
          backdrop-filter: blur(5px);
          z-index: 1;
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    width: 90%;
  }
  @media screen and (max-width: 400px) {
    width: 90%;
  }
`;

const Feature = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 4px;
  background-color: ${({ bgColor }) =>
    bgColor ? bgColor : "rgba(255, 255, 255, 0.1)"};
  flex: 1 0 content;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
  font-size: 12px;
  font-size: clamp(12px, 2vw, 16px);

  img,
  svg {
    height: 30px;
    width: auto;
  }
  span {
    margin-right: 1rem;
  }

  &:hover {
    background: rgba(200, 200, 200, 0.2);
    filter: drop-shadow(0 0 3px rgba(255, 255, 255, 0.6));
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
    transition: { type: "spring", bounce: 0.3, duration: 2 },
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
      <div className="project">
        {currentLanguage.lenguage?.items?.map((project) => {
          const { id, label, title, desc, features, links, img } = project;
          return (
            <div className={`project__container`} key={id + 2}>
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
                      const { name, bgColor } = feature;
                      return (
                        <Feature key={i} className="feature" bgColor={bgColor}>
                          {name === "VS Code" && <IconVS />}
                          {name === "Sublime Text" && <IconST />}
                          {name === "Atom" && <IconAtom />}
                          {name === "NextJS" && <IconNextjs />}
                          {name === "React" && <ReactIcon />}
                          {name === "Styled Components" && <IconSC />}
                          {name === "Adobe Illustrator" && <IconAI />}
                          {name === "Figma+" && <IconFigmaImg />}
                          {name === "Sass" && <IconSass />}
                          {name === "Adobe Photoshop" && <IconAP />}
                          {name === "Redux" && <IconRedux />}
                          {name === "Express" && <IconExpress />}
                          {name === "MongoDB" && <IconMongo />}
                          {name === "Google Maps Platform" && <IconMaps />}
                          {name === "Push Notifications" && (
                            <IconPushNotification />
                          )}
                          {name === "PWA" && <IconPWA />}
                          <span>{name}</span>
                        </Feature>
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
            </div>
          );
        })}
      </div>
      {/* <ProjectWraper
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
      </ProjectWraper> */}
      <p className="footerTitle">{currentLanguage.lenguage.desc}</p>
    </ProjectsStyled>
  );
};

export default Projects;
