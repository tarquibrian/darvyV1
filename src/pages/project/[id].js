import { Layout } from "@components";
import { useRouter } from "next/router";
import React from "react";

const Project = ({ children }) => {
  const router = useRouter();
  console.log(router.query);
  return <Layout>Project</Layout>;
};

export default Project;
