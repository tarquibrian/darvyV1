import React, { useState } from "react";
import { Main__Section } from "@styles";
import styled from "styled-components";

const ExperienceStyled = styled.section`
  display: grid;
  place-content: center;
  color: #e5e5e5;
  /* line-height: 1.5; */
`;

const ExperienceCard = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 600px;
  max-width: 850px;
  border-radius: 4px;
  font-family: "DM Sans", sans-serif;
  font-weight: normal;
  padding: 40px;
  background: rgba(255, 255, 255, 0.1);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  z-index: 9;

  .headerTitle {
    font-family: "Oswald", sans-serif;
    font-size: 5rem;
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
    font-size: 20px;
    font-weight: 400;
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

const CardContent = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 2rem;
  margin-top: 1rem;
  line-height: 1.5;
`;

const ContentList = styled.div`
  display: flex;
  flex-direction: column;
`;

const TabList = styled.div`
  min-width: 200px;
  height: 45px;
  display: grid;
  grid-template-columns: 50px 150px;
  align-items: center;
  gap: 2rem;
  border-radius: 2px;
  position: relative;
  background: ${({ isActive }) =>
    isActive ? "rgba(234,226,176,.3)" : "transparent"};
  /* background-color: rgba(0 0 0 / 0.3); */
  /* transition: cubic-bezier(0.445, 0.05, 0.55, 0.95) */
  transition: 0.3s ease;

  h2,
  h3 {
    font-size: 1rem;
    font-weight: normal;
    /* margin-top: 7px; */
    color: ${({ isActive }) => (isActive ? "white" : "#e5e5e5")};
  }
  h2 {
    /* background-color: red; */
    justify-self: end;
  }
  h3 {
    /* background-color: yellow; */
    justify-self: start;
  }

  &:first-of-type {
    &::after {
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
    }
  }
  &:last-of-type {
    &::after {
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
    }
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 33%;
    width: 5px;
    height: 100%;
    border-radius: ${({ isActive }) => (isActive ? "10px" : "0px")};
    background-color: ${({ isActive }) =>
      isActive ? "rgba(234,226,176,1)" : "rgba(234,226,176,.3)"};
  }

  &:hover {
    cursor: pointer;
    background-color: ${({ isActive }) =>
      isActive ? "rgba(234,226,176,.3)" : "rgba(234,226,176,.1)"};
  }
`;

const ContentBody = styled.div`
  /* background: rgba(0 0 0 / 0.2); */
  border-radius: 4px;
  .type {
    font-size: 18px;
    color: #cbc0d3;
    text-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    /* justify-content: center; */
    .entity {
      font-weight: bold;
      transition: 0.1s ease;
      display: flex;
      align-items: center;
      svg {
        margin-left: -2px;
      }

      &:hover {
        color: white;
        text-shadow: 0 0 5px rgba(255 255 255 / 0.5);
      }
    }
  }
  h1 {
    font-size: var(--fz-xxl);
    color: white;
    margin-top: 2px;
    margin-bottom: 5px;
    &:hover {
      text-shadow: 0 0 5px rgba(255 255 255 / 0.5);
    }
  }
  p {
    font-size: var(--fz-lg);
    color: #e5e5e5;
    margin-bottom: 10px;
  }
  ul {
    li {
      position: relative;
      padding-left: 30px;
      margin-bottom: 10px;
      margin-bottom: 5px;
      &::before {
        content: "???";
        position: absolute;
        left: 0;
        color: rgba(234, 226, 176, 1);
      }
    }
  }
`;

const data = [
  {
    id: 0,
    title: {
      name: "Villa Rivero",
      year: "2022",
    },
    body: {
      header: "Desarrollo de una Aplicaci??n Web de Turismo",
      type: "FullStack Proyect",
      path: "https://www.municipio.com.bo/municipio-villa-rivero.html",
      description:
        "Desarrollo de una aplicaci??n web enfocada hacia la gesti??n del turismo regional, describiendo detalles como:",
      features: [
        "Analisis de la situacion problematica",
        "Desarrollo y despliegue del fron y back",
        "Uso de geolocalizacion para el posicionamiento, geocodificaion y geoetiquetado",
        "Integracion de funcionalidades progresivas",
      ],
    },
  },
  {
    id: 1,
    title: {
      name: "Coming soon..",
      year: "2023",
    },
    body: {
      header: "header",
      description: "description2",
      features: [
        "Analisis de la situacion problematica",
        "Desarrollo y despliegue del fron y back",
        "Uso de geolocalizacion para el posicionamiento, geocodificaion y geoetiquetado",
        "Integracion de funcionalidades progresivas",
      ],
    },
  },
  {
    id: 2,
    title: {
      name: "Coming soon..",
      year: "2024",
    },
    body: {
      header: "header",
      description: "description3",
      features: [
        "Analisis de la situacion problematica",
        "Desarrollo y despliegue del fron y back",
        "Uso de geolocalizacion para el posicionamiento, geocodificaion y geoetiquetado",
        "Integracion de funcionalidades progresivas",
      ],
    },
  },
];

const title = <h1 className="headerTitle">.Experience</h1>;

const Experience = () => {
  const [activeId, setActiveId] = useState(0);
  return (
    <ExperienceStyled id="experience">
      <ExperienceCard>
        {title}
        <CardContent>
          <ContentList>
            {data.map((item, i) => {
              const { id, title } = item;
              const { name, year } = title;
              return (
                <TabList
                  onClick={() => setActiveId(id)}
                  isActive={activeId === i}
                  key={id}
                >
                  <h2>{year}</h2>
                  <h3>{name}</h3>
                </TabList>
              );
            })}
          </ContentList>
          <ContentBody>
            {data.map(({ id, body, title }, i) => {
              const { header, description, features, path, type } = body;
              const { name } = title;
              if (id === activeId) {
                return (
                  <div key={id}>
                    <span className="type">
                      {/* {type} */}
                      {/* <span className="vertical-line">&#124;</span> */}
                      <span className="entity">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          // class="icon icon-tabler icon-tabler-at"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"
                          ></path>
                          <circle cx="12" cy="12" r="4"></circle>
                          <path d="M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28"></path>
                        </svg>
                        <a href={path} target="_blank" rel="noreferrer">
                          {name}
                        </a>
                      </span>
                    </span>
                    <h1>{header}</h1>

                    <p>{description}</p>

                    <ul>
                      {features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                );
              }
            })}
          </ContentBody>
        </CardContent>
      </ExperienceCard>
    </ExperienceStyled>
  );
};

export default Experience;
