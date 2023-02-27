import React from "react";
import { Main__Section } from "@styles";

import { IconInstagram, IconExternal } from "@components";

import imgProject from "../../images/project-img1.png";
import styled from "styled-components";
import Image from "next/image";

const title = <h1 className="headerTitle">.Projects</h1>;

const ProjectsStyled = styled.section`
  min-height: 500px;
  display: grid;
  place-content: center;
  /* background: rgba(0 0 0 /0.2); */
  .headerTitle {
    font-family: "Oswald", sans-serif;
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

const Projects = () => {
  return (
    <ProjectsStyled>
      {title}
      <ProjectsContainer>
        <ProjectContent>
          <div className="label">Extensions Project</div>
          <h2>Darvy Theme</h2>
          <p>
            Darvy Theme es un tema de color para Visual Estudio Code y muy
            pronto para otros editores como Atom o Sublime Text. La paleta de
            colores esta inspirado en temas populares como One Dark Pro y Tokyo
            Night, por lo que puede que éste tema vaya a encantarte.
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
            {/* <li>
          <a href="/" target="_blank" rel="noreferrer">
            <IconInstagram />
          </a>
        </li> */}
          </ul>
        </ProjectContent>
        <ProjectImg>
          <Image src={imgProject} alt="thumbnail of the project" />
        </ProjectImg>
      </ProjectsContainer>
    </ProjectsStyled>
  );
};

export default Projects;
