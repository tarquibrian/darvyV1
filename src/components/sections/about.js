import React from "react";
import { Main__Section } from "@styles";
import styled from "styled-components";
import img from "../../images/profile.jpg";
import Image from "next/image";

const AboutStyled = styled.section`
  /* background: rgba(0 0 0 / 0.2); */
  color: #e5e5e5;
  padding: initial;
  padding-bottom: 100px;
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 2rem;
  justify-content: center;
  /* align-items: center; */
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
    font-size: 5rem;
    font-weight: 400;
    color: #eae2b7;
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
    font-size: 18px;
    font-weight: 400;
    line-height: 1.5;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.05)
      linear-gradient(
        to top right,
        rgba(255, 255, 255, 0),
        rgba(255, 235, 0, 0.15)
      );
  }
`;

const ImgProfile = styled.div`
  width: 300px;
  height: 300px;
  background: #eae2b7;
  border-radius: 4px;
  /* overflow: hidden; */
  position: relative;
  z-index: 9;
  /* background: rgba(100, 0, 255, 0.6); */
  /* filter: brightness(50%); */
  /* mix-blend-mode: multiply; */
  img {
    display: block;
    width: 300px;
    height: auto;
    object-fit: cover;
    /* background: rgba(0 0 0 / 0.5); */
    /* opacity: 0.5; */
    /* filter: drop-shadow(10 0 0 blue);op */

    z-index: 99;
  }
  &:hover {
    img {
      opacity: 1;
    }
    &::after {
      background-color: #eae2b7;
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
      una persona que tiene mucha pasi??n por el mundo de la tecnolog??a y
      recientemente obtuve mi t??tulo en Ingenier??a de Sistemas.
    </p>
    <p>
      Durante los ??ltimos a??os de mi carrera estuve form??ndome con m??s
      profundidad de forma autodidacta en el desarrollo web y ahora busco mi
      primera oportunidad laboral. Soy responsable, curioso y detallista, adem??s
      de ser capaz de desenvolverme trabajando en equipo, bajo presi??n y por
      objetivos.
    </p>
    <p>
      En un futuro sue??o con ser un gran desarrollador Senior cap??z de resolver
      grandes problem??ticas y estar altamente cualificado para brindar
      soluciones de nivel.
    </p>
  </>
);

const About = () => {
  return (
    // <Main__Section>
    <AboutStyled id="about">
      <AboutCard>
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
