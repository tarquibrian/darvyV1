import { About, Layout } from "@components";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import ProjectWrapper from "src/components/sections/projectWraper";
import { useAppContext } from "src/context/app.context";
import { projectsData } from "src/data/projectsData";
import styled from "styled-components";

const ProjectStyled = styled.section`
  width: 80%;
  /* overflow-y: scroll; */
  h1 {
    background-color: red;
  }
  .container {
    height: 500px;
  }
`;

const languages = {
  es: projectsData.es,
  en: projectsData.en,
};

const Project = () => {
  const [project, setProject] = useState();
  const { state, updateColor, changeTheme } = useAppContext();
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const currentLanguage = {
      lenguage: languages[state.currentLanguage],
    };
    const filterProject = currentLanguage.lenguage.items[id - 1];
    setProject(filterProject);
    project && updateColor(currentLanguage.lenguage.items[id - 1].threeColors);
    project && changeTheme(project.themeMode);
  }, [state.currentLanguage, project]);

  return (
    <Layout>
      <About />
      <About />
      <About />
      <About />
      <About />
    </Layout>
  );
};

export default Project;
