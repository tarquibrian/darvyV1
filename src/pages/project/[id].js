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

  const currentLanguage = {
    lenguage: languages[state.currentLanguage],
  };

  return (
    <Layout>
      <section>
        {currentLanguage.lenguage.items
          .filter((item) => item.id === router.query.id)
          .map((item2, i) => (
            <div key={i}>
              title
              <h1>{item2.title}</h1>
            </div>
          ))}
      </section>
    </Layout>
  );
};

export default Project;
