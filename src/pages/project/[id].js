import { Layout } from "@components";
import { useRouter } from "next/router";
import React from "react";
import { useAppContext } from "src/context/app.context";
import { projectsData } from "src/data/projectsData";

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
    <Layout>
      <section>
        {currentLanguage.lenguage.items
          .filter((item) => item.id === id)
          .map((project, i) => (
            <div key={i}>
              title
              <h1>{project.title}</h1>
              <p>{project.desc}</p>
            </div>
          ))}
      </section>
    </Layout>
  );
};

export default Project;
