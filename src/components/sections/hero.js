import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Main__Section } from "@styles";

const HeroStyled = styled.section`
  height: 100vh;
  width: 80%;
  margin: auto;
  svg {
    overflow: hidden;
    fill: #ff101f;
    width: 1200px;
    height: 600px;
    /* width: 100%; */
    /* height: 100%; */
    position: absolute;
    bottom: 0;
    /* left: 0; */
    right: 0;
    /* top: 0; */
    /* margin: 0 auto 0 0; */
    transform: translate(50%, 0%);
  }

  .hero__container {
    /* margin: 0 auto; */
    /* background: blue; */
    /* width: 95%; */
    /* min-height: 100vh; */
    height: 85%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .hero__container-card {
    display: flex;
    flex-direction: column;
    max-width: 920px;
    border-radius: 4px;
    font-family: "DM Sans", sans-serif;
    font-weight: normal;
    padding: 40px;
    background: rgba(255, 255, 255, 0.1);
    /* background: rgba(255, 255, 255, 0.05)
    linear-gradient(to top right, rgba(255, 235, 0, 0.15)); */
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    z-index: 9;

    h1 {
      font-size: 20px;
      font-size: clamp(var(--fz-md), 2vw, var(--fz-lg));
      font-weight: 400;
    }

    h2 {
      font-family: "Oswald", sans-serif;
      /* font-size: 5rem; */
      font-size: clamp(30px, 8vw, 80px);
      font-weight: 400;
      color: #eae2b7;
      text-shadow: 0 0 6px rgba(0, 0, 0, 0.5);
      margin-left: -4px;
    }

    h3 {
      font-family: "Oswald", sans-serif;
      /* font-size: 5rem; */
      font-size: clamp(30px, 8vw, 80px);
      font-weight: 200;
      margin-bottom: 20px;
      /* color: #dfdfdf; */
      margin-left: -4px;
      color: transparent;
      text-shadow: 0 0 5px rgba(255 255 255 / 1);
      -webkit-text-stroke: 1px white;
    }

    p {
      font-size: clamp(14px, 2vw, 18px);
      font-weight: normal;
      line-height: 1.5;
      margin-bottom: 1rem;
    }

    .hero__container-buttons {
      display: flex;
      gap: 1rem;

      .button__resume,
      .button__contact {
        padding: 12px 18px;
        display: grid;
        place-content: center;
        border: 1px solid rgba(255, 255, 255, 0.4);
        border-radius: 4px;

        &:hover {
          border: 1px solid rgba(255, 255, 255, 0.4);
          cursor: pointer;
          filter: drop-shadow(0 0 3px rgba(255 255 255 / 0.8));
        }
      }

      .button__resume {
        border: 1px solid transparent;
        background-image: linear-gradient(
          93.3deg,
          rgba(236, 80, 80, 1) 21.5%,
          rgba(255, 97, 29, 1) 93.9%
        );
        &:hover {
          text-shadow: 0 0 5px rgba(255 255 255 / 0.5);
        }
      }
      .button__contact {
        border: 1px solid transparent;
        background-color: rgba(255, 255, 255, 0.2);
      }
    }

    &:hover::before {
      opacity: 1;
    }

    &::before {
      background: radial-gradient(
        800px circle at var(--mouse1-x) var(--mouse1-y),
        rgba(255, 255, 255, 0.15),
        transparent 40%
      );
      border-radius: inherit;
      content: "";
      position: absolute;
      height: 100%;
      width: 100%;
      top: 0%;
      left: 0%;
      opacity: 0;
      transition: opacity 500ms;
      z-index: 0;
    }
    &:hover {
      /* background: rgba(255, 255, 255, 0.05)
        linear-gradient(
          to top right,
          rgba(255, 255, 255, 0),
          rgba(255, 235, 0, 0.15)
        ); */

      background: rgba(255, 225, 142, 0.1);
    }
  }

  @media screen and (max-width: 400px) {
    width: 90%;
  }
`;
const afterTitle = <h1>Me presento, mi nombre es</h1>;

const Title = <h2>Brian Tarqui Rojas.</h2>;

const SubTitle = <h3>Construyo cosas para la web.</h3>;

const Description = (
  <p>
    Ingeniero de sistemas especializado en el desarrollo web FullStack, enfocado
    en crear y diseñar aplicaciones web modernas, priorizando siempre en
    entregar experiencias digitales excepcionales.
    {/* <br /> En la actulidad
      me encuentro en la ruta de
      aprendizaje para ser desarrollador Senior FullStack cualificado, capaz de
      resolver grandes problemáticas y brindar soluciones de nivel (el camino es
      largo, pero con esfuerzo y disciplina se que me divertire durante el
      proceso). */}
  </p>
);
const Hero = () => {
  const heroref = useRef(null);

  const handleOnMouseMove = (e) => {
    const { currentTarget: target } = e;

    // const rect = target.getBoundingClientRect(),
    const rect = heroref.current.getBoundingClientRect(),
      x = e.clientX - rect.left,
      y = e.clientY - rect.top;

    e.target.style.setProperty("--mouse1-x", `${x}px`);
    e.target.style.setProperty("--mouse1-y", `${y}px`);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleOnMouseMove);
  }, []);

  return (
    // <Main__Section>
    <HeroStyled id="hero">
      <div className="hero__container">
        <div className="hero__container-card" id="hero-card" ref={heroref}>
          {afterTitle}
          {Title}
          {SubTitle}
          {Description}
          <div className="hero__container-buttons">
            <a
              className="button__resume"
              href="./resumeV1.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Descargar CV
            </a>

            <a href="mailto:tarquibrian@gmail.com" className="button__contact">
              Contact
            </a>
          </div>
        </div>
      </div>
    </HeroStyled>
    // </Main__Section>
  );
};

export default Hero;
