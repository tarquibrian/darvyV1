import React, { useEffect } from "react";
import { useAppContext } from "src/context/app.context";
import styled from "styled-components";

const ProjectWrapperStyled = styled.section`
  padding: 0;
  min-height: 500px;
  width: 80%;
  margin: auto;
  height: 100vh;
  overflow: hidden;
  .dark {
    .text {
      color: rgba(230, 230, 230, 1);
    }
    .content {
      border: 2px solid rgba(0, 0, 0, 0.5);
    }
  }

  .light {
    .text {
      color: rgba(60, 60, 60, 1);
    }
    .content {
      border: 2px solid rgba(0, 0, 0, 0.5);
    }
  }

  .projectWrapper {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 1rem;
    /* overflow: auto; */

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

    .container {
      /* background-color: rgba(1, 1, 1, 0.2); */
      overflow: auto;
      width: 100%;
      height: 100vh;
      padding: 5rem 0 10rem;

      .content {
        min-height: 500px;
        /* background-color: rgba(1, 1, 1, 0.2); */
        margin-bottom: 1rem;
        border-radius: var(--border-radius);
        padding: 40px;
        background: rgba(0, 0, 0, 0.1);
      }

      &::-webkit-scrollbar {
        display: none;
      }
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
  const { state, updateColor, changeTheme } = useAppContext();
  useEffect(() => {
    updateColor(props.threeColors);
    changeTheme(props.themeMode);
  }, []);
  console.log(props);
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
          <div className="content">{props.desc}</div>
          <div className="content">HOLA</div>
          <div className="content">HOLA</div>
        </div>
      </div>
    </ProjectWrapperStyled>
  );
};

export default ProjectWrapper;
