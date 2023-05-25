import React from "react";
import styled from "styled-components";

const ProjectWrapperStyled = styled.section`
  min-height: 500px;
  width: 80%;
  margin: auto;
  max-height: 100vh;
  overflow: hidden;
  /* background-color: lightblue; */

  .projectWrapper {
    display: grid;
    grid-template-columns: auto 1fr;
  }

  .carouselColumn {
    /* display: flex; */
    /* flex-direction: column; */
    /* align-items: flex-start; */
    transform: rotate(180deg) translateY(115%);
    animation: textCarousel 28s linear infinite;
    /* transform: rotate(180deg); */
  }

  .text {
    display: flex;
    color: rgba(60, 60, 60, 1);
    font-family: var(--ff-rubik);
    font-weight: 900;
    font-size: 10rem;
    writing-mode: vertical-rl;
    text-transform: uppercase;
    white-space: nowrap;
    line-height: 1;
    margin-bottom: 2rem;
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
  console.log(props);
  return (
    <ProjectWrapperStyled>
      <div className="projectWrapper">
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
        <div className="container">hola</div>
      </div>
    </ProjectWrapperStyled>
  );
};

export default ProjectWrapper;
