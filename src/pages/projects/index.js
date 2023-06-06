import { Layout } from "@components";
import React from "react";
import ProjectsWrapper from "src/components/sections/projectsWrapper";
import { useAppContext } from "src/context/app.context";
import { projectsData } from "src/data/projectsData";

const languages = {
  es: projectsData.es,
  en: projectsData.en,
};

const Projects = () => {
  const { state } = useAppContext();

  const currentLanguage = {
    lenguage: languages[state.currentLanguage],
  };

  return (
    <Layout>
      <ProjectsWrapper {...currentLanguage.lenguage} />
    </Layout>
  );
};

export default Projects;
