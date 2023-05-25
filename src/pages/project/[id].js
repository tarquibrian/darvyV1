import { Layout } from "@components";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useAppContext } from "src/context/app.context";
import { projectsData } from "src/data/projectsData";
import styled from "styled-components";

const ProjectStyled = styled.section`
  width: 80%;
  /* overflow-y: scroll; */
  h1 {
    background-color: red;
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

  // const updated = () => {
  //   setProject(currentLanguage.lenguage.items[id - 1]);
  //   // updateColor(currentLanguage.lenguage.items[id - 1].bgColor);
  // };

  useEffect(() => {
    const currentLanguage = {
      lenguage: languages[state.currentLanguage],
    };
    // const [currentProject] = currentLanguage.lenguage.items.filter(
    //   (item) => item.id === id
    // );
    const filterProject = currentLanguage.lenguage.items[id - 1];
    setProject(filterProject);
    project && updateColor(currentLanguage.lenguage.items[id - 1].threeColors);
    project && changeTheme(project.themeMode);
  }, [state.currentLanguage, project]);

  return (
    <Layout key={"projects-single-page"}>
      <Link href="/">BACK</Link>
      <ProjectStyled key={"projects-single"}>
        <div>
          <h1>{project && project.title}</h1>
          {/* <h1>k</h1> */}
          {/* <p>{project?.desc}</p> */}
          {project && (
            <Image
              src={`/images/${project.img}.png`}
              width={800}
              height={500}
              alt={project.title}
            />
          )}
        </div>
      </ProjectStyled>
    </Layout>
  );
};

export default Project;
