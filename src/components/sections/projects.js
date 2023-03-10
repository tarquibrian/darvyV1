import React from "react";
import { Main__Section } from "@styles";
import {
  IconInstagram,
  IconExternal,
  IconFigma,
  IconGitHub,
} from "@components";
import imgProject from "../../images/project-img1.png";
import imgProject2 from "../../images/project-img2.png";
import styled from "styled-components";
import Image from "next/image";
import { m } from "framer-motion";

const projectsData = [
  {
    id: "1",
    label: "Extensions Project",
    title: "Darvy Theme",
    desc: "Darvy Theme es un tema de color para Visual Estudio Code y muy pronto para otros editores como Atom o Sublime Text. La paleta de colores esta inspirado en temas populares como One Dark Pro y Tokyo Night, por lo que puede que éste tema vaya a encantarte.",
    features: [{ name: "VS Code" }, { name: "Sublime Text" }, { name: "Atom" }],
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
      { name: " NextJS" },
      { name: "React" },
      { name: "Styled Components" },
      { name: "Figma+" },
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
];

const ProjectsStyled = styled.section`
  min-height: 500px;
  display: grid;
  place-content: center;
  /* background: rgba(0 0 0 /0.2); */
  .headerTitle {
    /* font-family: "Oswald", sans-serif; */
    font-size: 5rem;
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
`;

const ProjectsContainer = styled.div`
  min-width: 500px;
  max-width: 1100px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(6, 1fr);
  align-items: center;
  gap: 1rem;
  font-family: "DM Sans", sans-serif;
  line-height: 1.5;
  /* margin-bottom: 10rem; */
`;

const ProjectContent = styled.div`
  position: relative;
  grid-column: 1 / 7;
  grid-row: 1 / -1;

  .label {
    margin-bottom: 0.5rem;
  }

  h2 {
    margin-bottom: 1rem;
  }

  p {
    padding: 1.5rem;
    /* text-align: justify; */
    /* background: #da2c38; */
    background: rgba(234, 226, 176, 0.1);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
    backdrop-filter: blur(100px);
    -webkit-backdrop-filter: blur(100px);
    border-radius: 4px;
    /* -webkit-backdrop-filter: blur(10px); */
    margin-bottom: 1rem;
    /* backdrop-filter: blur(10px); */
    &:hover {
      background: rgba(255, 255, 255, 0.05)
        linear-gradient(
          to top right,
          rgba(255, 255, 255, 0),
          rgba(255, 235, 0, 0.15)
        );
    }
  }
  ul {
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 1rem;
    margin-bottom: 0.5rem;

    li {
      a {
        text-align: center;
        width: 100%;
        padding: 6px 0;
        &:hover {
          /* color: rgb(30, 30, 30); */
        }
        svg {
          height: 24px;
          width: 24px;
        }
        .feather-external-link {
          height: 25px;
          width: 25px;
        }
      }
    }
  }
`;

const ProjectImg = styled.div`
  position: relative;
  grid-column: 6 / -1;
  grid-row: 1 / -1;
  z-index: -1;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  img {
    width: 100%;
    max-width: 100%;
    vertical-align: middle;
    border-radius: 4px;
    position: relative;
    height: auto;
    /* mix-blend-mode: multiply; */
    /* filter: grayscale(100%) contrast(1); */
    object-fit: cover;
  }
`;

const ProjectWraper = styled.div`
  display: grid;
  gap: 5rem;
`;

const title = <h1 className="headerTitle">.Projects</h1>;

const Projects = () => {
  return (
    <ProjectsStyled id="projects">
      {title}
      <ProjectWraper>
        {projectsData.map((project, i) => {
          const { id, label, title, desc, features, links, img } = project;
          return (
            <ProjectsContainer key={id}>
              <ProjectContent>
                <div className="label">{label}</div>
                <h2>{title}</h2>
                <p>{desc}</p>
                <ul>
                  {features.map((feature, i) => {
                    const { name } = feature;
                    return <li key={i}>{name}</li>;
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
        {/* <ProjectsContainer>
          <ProjectContent>
            <div className="label">Extensions Project</div>
            <h2>Darvy Theme</h2>
            <p>
              Darvy Theme es un tema de color para Visual Estudio Code y muy
              pronto para otros editores como Atom o Sublime Text. La paleta de
              colores esta inspirado en temas populares como One Dark Pro y
              Tokyo Night, por lo que puede que éste tema vaya a encantarte.
            </p>
            <ul>
              <li>VS Code</li>
              <li>Sublime Text</li>
              <li>Atom</li>
            </ul>
            <ul>
              <li>
                <a
                  href="https://marketplace.visualstudio.com/items?itemName=darvy.darvypro"
                  target="_blank"
                  rel="noreferrer"
                >
                  <IconExternal />
                </a>
              </li>
              <li>
                <a
                  href="https://marketplace.visualstudio.com/items?itemName=darvy.darvypro"
                  target="_blank"
                  rel="noreferrer"
                >
                  <IconExternal />
                </a>
              </li>
              <li>
                <a href="/" target="_blank" rel="noreferrer">
                  <IconInstagram />
                </a>
              </li>
            </ul>
          </ProjectContent>
          <ProjectImg>
            <Image
              src={imgProject}
              alt="thumbnail of the project"
              title="thumbnail of the project"
            />
          </ProjectImg>
        </ProjectsContainer> */}
      </ProjectWraper>
    </ProjectsStyled>
  );
};

export default Projects;
