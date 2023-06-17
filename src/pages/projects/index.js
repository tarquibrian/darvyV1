import { Layout } from "@components";
import React, { useEffect } from "react";
import ProjectsWrapper from "src/components/sections/projectsWrapper";
import { useAppContext } from "src/context/app.context";
import { projectsData } from "src/data/projectsData";

const languages = {
  es: projectsData.es,
  en: projectsData.en,
};

const Projects = () => {
  const { state, updateColor, changeTheme } = useAppContext();

  const currentLanguage = {
    lenguage: languages[state.currentLanguage],
  };

  useEffect(() => {
    updateColor({
      color: [0.8, 0.7, 0.94],
      colorBase: [0.38, 0.09, 0.57],
      colorDeep: [0.0, 0.1, 0.1],
    });
    // updateColor({
    //   color: [0.8, 0.5, 0.94],
    //   colorBase: [0.9, 0.09, 0.57],
    //   colorDeep: [0, 0, 0],
    // });
    changeTheme("dark");
  }, []);

  return (
    <Layout>
      <ProjectsWrapper {...currentLanguage.lenguage} />
    </Layout>
  );
};

export default Projects;
