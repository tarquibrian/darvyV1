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
import imgProject from "../../images/project-img1.png";
import imgProject2 from "../../images/project-img2.png";
import imgProject3 from "../../images/project-img3.png";
import imgProject4 from "../../images/project-img4.png";
import imgProject5 from "../../images/project-img5.png";
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
            // bgColor: `linear-gradient(
            //   93.3deg,
            //   rgba(236, 80, 80, 1) 21.5%,
            //   rgba(255, 97, 29, 1) 93.9%
            // )`,
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
        typeProject: ["Tipo de Proyecto", "Extensión para Marketplace"],
        techStack: "Tecnologías",
        client: ["Cliente", "Personal"],
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
        typeProject: ["Tipo de Proyecto", "Aplicacion Web"],
        techStack: "Tecnologías",
        client: ["Cliente", "SonusTech"],
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
        typeProject: ["Tipo de Proyecto", "Aplicacion Web"],
        techStack: "Tecnologías",
        client: ["Cliente", "ModernFashion"],
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
        typeProject: ["Tipo de Proyecto", "Aplicacion Web"],
        techStack: "Tecnologías",
        client: ["Cliente", "Villa Rivero"],
      },
      {
        id: "5",
        label: "Web Project",
        title: "Carls Burger Restaurant",
        desc: "Aplicación web sobre un restaurante de hamburguesas que proporciona una experiencia de usuario satisfactoria, fácil y atractiva, y es una excelente herramienta de marketing para atraer nuevos clientes y mantener a los ya existentes.",

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
            name: "Figma+",
            icon: <IconFigmaImg />,
            bgColor: "rgba(255,0,0,.2)",
          },
        ],
        links: [
          {
            path: "https://carls-burger.vercel.app/",
            svg: 1,
          },
        ],
        img: imgProject5,
        typeProject: ["Tipo de Proyecto", "Aplicacion Web"],
        techStack: "Tecnologías",
        client: ["Cliente", "Villa Rivero"],
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
        typeProject: ["Type Project", "Marketplace Extensions"],
        techStack: "Tech Stack",
        client: ["Client", "Personal"],
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
        typeProject: ["Type Project", "Web App"],
        techStack: "Tech Stack",
        client: ["Client", "SonusTech"],
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
        typeProject: ["Type Project", "Web App"],
        techStack: "Tech Stack",
        client: ["Client", "ModernFashion"],
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
        typeProject: ["Type Project", "Web App"],
        techStack: "Tech Stack",
        client: ["Client", "Villa Rivero"],
      },
      {
        id: "5",
        label: "Web Project",
        title: "Carls Burger Restaurant",
        desc: "Web application about a hamburger restaurant that provides a satisfying, easy and attractive user experience, and is an excellent marketing tool to attract new customers and keep existing ones.",

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
            name: "Figma+",
            icon: <IconFigmaImg />,
            bgColor: "rgba(255,0,0,.2)",
          },
        ],
        links: [
          {
            path: "https://carls-burger.vercel.app/",
            svg: 1,
          },
        ],
        img: imgProject5,
        typeProject: ["Type Project", "Web App"],
        techStack: "Tech Stack",
        client: ["Client", "Cars Burger"],
      },
    ],
  },
};

const ProjectsStyled = styled(motion.section)`
  width: 80%;
  max-width: 1300px;
  margin: auto;

  .headerTitle {
    font-size: var(--fz-header);
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
      background: #eae2b7;
      align-self: end;
      margin-bottom: 12px;
      width: auto;
      height: 3px;
    }
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
              height: 35px;
              img,
              svg {
                width: auto;
                height: 100%;
                /* background-color: red; */
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
    margin-top: 2rem;
    text-align: center;
    font-size: var(--fz-sm);
  }

  @media screen and (max-width: 768px) {
    width: 90%;
  }
  @media screen and (max-width: 400px) {
    width: 90%;
  }
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
      id="projects"
      ref={refView}
      animate={controls}
      initial="hidden"
      variants={variants}
    >
      <h1 className="headerTitle">{currentLanguage.lenguage.title}</h1>
      <div className="projects__container">
        {currentLanguage.lenguage.items.map((project) => {
          const {
            id,
            label,
            title,
            desc,
            features,
            links,
            img,
            typeProject,
            techStack,
            client,
          } = project;
          return (
            <WrapperContent
              id={id}
              label={label}
              desc={desc}
              features={features}
              title={title}
              key={id}
              links={links}
              img={img}
              typeProject={typeProject}
              techStack={techStack}
              client={client}
            />
          );
        })}
      </div>
      <p className="footerTitle">{currentLanguage.lenguage.desc}</p>
    </ProjectsStyled>
  );
};

export default Projects;

const WrapperContent = ({
  id,
  label,
  title,
  desc,
  features,
  links,
  img,
  typeProject,
  techStack,
  client,
}) => {
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
        <motion.a
          className="projects__wrapper-picture"
          href={links[0].path}
          target="_blank"
          rel="noopener noreferrer"
          initial="hidden"
          animate={controls}
          variants={{
            visible: {
              x: 0,
              opacity: 1,
              scale: 1,
              transition: { duration: 0.6, ease: "backInOut" },
            },
            hidden: { x: -200, opacity: 0, scale: 1 },
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
              <Image src={img} alt="img picture" />
            </CardEffect>
          </div>
        </motion.a>
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
          hidden: { x: 200, opacity: 0, scale: 1 },
        }}
      >
        <div className="card-details">
          <div className="details-wrapper">
            <div className="title">
              <span className="symbol">✷</span> {typeProject[0]}
            </div>
            <span className="desc">{typeProject[1]}</span>
          </div>
          <div className="details-wrapper">
            <div className="title">
              <span className="symbol">✷</span> {client[0]}
            </div>
            <span className="desc">{client[1]}</span>
          </div>
          <div className="details-wrapper">
            <div className="title">
              <span className="symbol">✷</span> {techStack}
            </div>
            <div className="features">
              {features.map((feature, i) => {
                const { name, bgColor } = feature;
                return (
                  <div key={i} className="feature-item" bgColor={bgColor}>
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
                    {name === "Push Notifications" && <IconPushNotification />}
                    {name === "PWA" && <IconPWA />}
                    <span>{name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.article>
  );
};
