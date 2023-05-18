import { Layout } from "@components";
import { useRouter } from "next/router";
import React from "react";

const languages = {
  es: projectsData.es,
  en: projectsData.en,
};

const Project = () => {
  const router = useRouter();

  const currentLanguage = {
    lenguage: languages[state.currentLanguage],
  };
  console.log(router.query);
  return <Layout>Project</Layout>;
};

export default Project;
