import { Layout } from "@components";
import { useRouter } from "next/router";
import React from "react";
import { useAppContext } from "src/context/app.context";
import { projectsData } from "src/data/projectsData";
import styled from "styled-components";

const ProjectStyled = styled.section`
  width: 80%;
  /* overflow-y: scroll; */
`;

const languages = {
  es: projectsData.es,
  en: projectsData.en,
};

const Project = () => {
  const { state } = useAppContext();
  const router = useRouter();
  const id = router.query.id;

  const currentLanguage = {
    lenguage: languages[state.currentLanguage],
  };

  return (
    <Layout key={"projects-single-page"}>
      <ProjectStyled key={"projects-single"}>
        {currentLanguage.lenguage.items
          .filter((item) => item.id === id)
          .map((project, i) => (
            <div key={i}>
              <h1>{project.title}</h1>
              <p>{project.desc}</p>
            </div>
          ))}
      </ProjectStyled>
    </Layout>
  );
};

export default Project;
