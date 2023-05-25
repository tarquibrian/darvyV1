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
  // const [project, setProject] = useState();
  // const { state, updateColor, changeTheme } = useAppContext();
  // const router = useRouter();
  // const { id } = router.query;

  // // const updated = () => {
  // //   setProject(currentLanguage.lenguage.items[id - 1]);
  // //   // updateColor(currentLanguage.lenguage.items[id - 1].bgColor);
  // // };

  // useEffect(() => {
  //   const currentLanguage = {
  //     lenguage: languages[state.currentLanguage],
  //   };
  //   // const [currentProject] = currentLanguage.lenguage.items.filter(
  //   //   (item) => item.id === id
  //   // );
  //   const filterProject = currentLanguage.lenguage.items[id - 1];
  //   setProject(filterProject);
  //   project && updateColor(currentLanguage.lenguage.items[id - 1].threeColors);
  //   project && changeTheme(project.themeMode);
  // }, [state.currentLanguage, project]);
  useEffect(() => {
    if ("scrollRestoration" in history) {
      // Back off, browser, I got this...
      history.scrollRestoration = "manual";
    }
  }, []);

  return (
    <Layout>
      {/* <Link href="/" scroll={false}>BACK</Link> */}
      {/* <ProjectStyled key={"projects-single"}></ProjectStyled> */}
      <About />
      <About />
      <About />
      <About />
      <About />
    </Layout>
  );
};

export default Project;
