import React, { useEffect, useRef } from "react";
import { Main__Section } from "@styles";
import styled from "styled-components";
import img from "../../images/profile.jpg";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutStyled = styled(motion.section)`
  /* background: rgba(0 0 0 / 0.2); */
  /* color: #e5e5e5; */
  width: 80%;
  margin: auto;
  padding: initial;
  padding-bottom: 100px;
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 2rem;
  justify-content: center;
  /* align-items: center; */
  @media screen and (max-width: 750px) {
    grid-template-columns: repeat(1, auto);
  }
  @media screen and (max-width: 400px) {
    width: 90%;
  }
`;

const AboutCard = styled.div`
  background: rgba(0 0 0 / 0.2);
  display: flex;
  flex-direction: column;
  max-width: 700px;
  border-radius: 4px;
  font-family: "DM Sans", sans-serif;
  font-weight: normal;
  padding: 40px;
  background: rgba(255, 255, 255, 0.1);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  z-index: 9;

  h1 {
    font-family: "Oswald", sans-serif;
    font-size: clamp(40px, 8vw, 80px);
    font-weight: 400;
    color: #eae2b7;
    text-shadow: 0 0 6px rgba(0, 0, 0, 0.5);
    margin: 0 0 15px -4px;
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

  p {
    font-size: clamp(14px, 2vw, 18px);
    font-weight: 400;
    line-height: 1.5;
  }

  &:hover::before {
    opacity: 1;
  }

  &::before {
    background: radial-gradient(
      800px circle at var(--mouse2-x) var(--mouse2-y),
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
`;

const ImgProfile = styled.div`
  min-width: 200px;
  min-height: 200px;
  width: 300px;
  height: 300px;
  /* background: #eae2b7; */
  position: relative;
  z-index: 9;
  img {
    display: block;
    border-radius: 4px;
    min-width: 200px;
    width: 300px;
    height: auto;
    object-fit: cover;
    z-index: 99;
  }
  &:hover {
    img {
      opacity: 1;
    }
    &::after {
      background-color: rgba(234, 226, 183, 0.3);
    }
  }
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    width: 300px;
    height: 300px;
    border: 1px solid white;
    border-radius: 4px;
    transform: translate(15px, 15px);
    z-index: -9;
  }
`;

const title = <h1>.About-Me</h1>;

const description = (
  <>
    <p>
      Mi nombre es Brian pero usualmente me llaman por mi apellido (Tarqui), soy
      una persona que tiene mucha pasión por el mundo de la tecnología y
      recientemente obtuve mi título en Ingeniería de Sistemas.
    </p>
    <p>
      Durante los últimos años de mi carrera estuve formándome con más
      profundidad de forma autodidacta en el desarrollo web y ahora busco mi
      primera oportunidad laboral. Soy responsable, curioso y detallista, además
      de ser capaz de desenvolverme trabajando en equipo, bajo presión y por
      objetivos.
    </p>
    <p>
      En un futuro sueño con ser un gran desarrollador Senior capáz de resolver
      grandes problemáticas y estar altamente cualificado para brindar
      soluciones de nivel.
    </p>
  </>
);

const variants = {
  visible: { y: 0, opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { y: 200, opacity: 0, scale: 1 },
};

const About = () => {
  const controls = useAnimation();
  const [refView, inView] = useInView();
  const heroref = useRef(null);

  const ref = useRef(null);

  const handleOnMouseMove = (e) => {
    const { currentTarget: target } = e;

    // const rect = target.getBoundingClientRect(),
    const rect = ref.current.getBoundingClientRect(),
      x = e.clientX - rect.left,
      y = e.clientY - rect.top;

    e.target.style.setProperty("--mouse2-x", `${x}px`);
    e.target.style.setProperty("--mouse2-y", `${y}px`);
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    window.addEventListener("mousemove", handleOnMouseMove);
  }, [controls, inView]);

  return (
    // <Main__Section>
    <AboutStyled
      id="about"
      ref={refView}
      animate={controls}
      initial="hidden"
      variants={variants}
    >
      <AboutCard ref={ref} id="about-card">
        {title}
        {description}
      </AboutCard>
      <ImgProfile>
        <div>
          <Image
            src={img}
            alt={`profile picture`}
            width={200}
            height={`auto`}
          />
        </div>
      </ImgProfile>
    </AboutStyled>
    // </Main__Section>
  );
};

export default About;
