import imgProject from "../images/project-img1.png";
import imgProject2 from "../images/project-img2.png";
export const projectsData = {
  es: {
    title: ".Proyectos",
    items: [
      {
        id: "1",
        label: "Extensions Project",
        title: "Darvy Theme",
        desc: "Darvy Theme es un tema de color para Visual Estudio Code y muy pronto para otros editores como Atom o Sublime Text. La paleta de colores esta inspirado en temas populares como One Dark Pro y Tokyo Night, por lo que puede que éste tema vaya a encantarte.",
        features: [
          { name: "VS Code" },
          { name: "Sublime Text" },
          { name: "Atom" },
        ],
        links: [
          {
            path: "https://marketplace.visualstudio.com/items?itemName=darvy.darvypro",
            svg: 1,
          },
          {
            path: "https://github.com/tarquibrian/darvypro-theme",
            svg: 2,
          },
        ],
        img: imgProject,
      },
      {
        id: "2",
        label: "Web Project",
        title: "Business Website",
        desc: "Aplicación web sobre Landing Page de una empresa que ofrece sus servicios tecnológicos, relacionados con la informática, programación y soluciones en el área de sistemas.",
        features: [
          { name: " NextJS" },
          { name: "React" },
          { name: "Styled Components" },
          { name: "Figma+" },
        ],
        links: [
          {
            path: "https://sonustech-business-website.vercel.app/",
            svg: 1,
          },
          {
            path: "https://github.com/tarquibrian/sonustech-business-website",
            svg: 2,
          },
          {
            path: "https://www.figma.com/community/file/1215090916589711588",
            svg: 3,
          },
        ],
        img: imgProject2,
      },
    ],
  },
  en: {
    title: ".Projects",
    items: [
      {
        id: "1",
        label: "Extensions Project",
        title: "Darvy Theme",
        desc: "Darvy Theme is a color theme for Visual Studio Code and very soon for other editors like Atom or Sublime Text. The color palette is inspired by popular themes like One Dark Pro and Tokyo Night, so you might love this theme.",
        features: [
          { name: "VS Code" },
          { name: "Sublime Text" },
          { name: "Atom" },
        ],
        links: [
          {
            path: "https://marketplace.visualstudio.com/items?itemName=darvy.darvypro",
            svg: 1,
          },
          {
            path: "https://github.com/tarquibrian/darvypro-theme",
            svg: 2,
          },
        ],
        img: imgProject,
      },
      {
        id: "2",
        label: "Web Project",
        title: "Business Website",
        desc: "Web application on Landing Page of a company that offers its technological services, related to computing, programming and solutions in the systems area.",
        features: [
          { name: " NextJS" },
          { name: "React" },
          { name: "Styled Components" },
          { name: "Figma+" },
        ],
        links: [
          {
            path: "https://sonustech-business-website.vercel.app/",
            svg: 1,
          },
          {
            path: "https://github.com/tarquibrian/sonustech-business-website",
            svg: 2,
          },
          {
            path: "https://www.figma.com/community/file/1215090916589711588",
            svg: 3,
          },
        ],
        img: imgProject2,
      },
    ],
  },
};
