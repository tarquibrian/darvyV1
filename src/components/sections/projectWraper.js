import React from "react";
import { useAppContext } from "src/context/app.context";
import styled from "styled-components";

const ProjectWrapperStyled = styled.section`
  min-height: 500px;
  width: 80%;
  margin: auto;
  max-height: 100vh;
  overflow: hidden;
  /* background-color: lightblue; */
  .dark {
    .text {
      color: rgba(230, 230, 230, 1);
    }
  }

  .light {
    .text {
      color: rgba(60, 60, 60, 1);
    }
  }

  .projectWrapper {
    display: grid;
    grid-template-columns: auto 1fr;
  }

  .carouselColumn {
    transform: rotate(180deg) translateY(115%);
    animation: textCarousel 28s linear infinite;
    .text {
      display: flex;
      font-family: var(--ff-rubik);
      font-weight: 900;
      font-size: 10rem;
      writing-mode: vertical-rl;
      text-transform: uppercase;
      white-space: nowrap;
      line-height: 1;
      margin-bottom: 2rem;
    }
  }

  @keyframes textCarousel {
    0% {
      transform: rotate(180deg) translateY(115%);
    }
    100% {
      transform: rotate(180deg) translateY(-20%);
    }
  }
`;

const ProjectWrapper = (props) => {
  const { state } = useAppContext();
  console.log(state);
  return (
    <ProjectWrapperStyled>
      <div
        className={`projectWrapper ${
          state.currentTheme === "dark" ? "dark" : "light"
        }`}
      >
        <div className="carouselTitle">
          <div className="carouselColumn">
            <span className="text">{props.title}</span>
            <span className="text">-</span>
            <span className="text">{props.label}</span>
            <span className="text">-</span>
            <span className="text">{props.title}</span>
            <span className="text">-</span>
            <span className="text">{props.label}</span>
          </div>
        </div>
        <div className="container">
          <div className="content">HOLA</div>
        </div>
      </div>
    </ProjectWrapperStyled>
  );
};

export default ProjectWrapper;
