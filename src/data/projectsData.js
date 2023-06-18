import {
  IconAI,
  IconAP,
  IconExpress,
  IconExternal,
  IconFigma,
  IconFigmaImg,
  IconGitHub,
  IconMaps,
  IconNextjs,
  IconPushNotification,
  IconRedux,
  IconSC,
  IconST,
  IconSass,
  IconVS,
  IconVim,
  ReactIcon,
} from "@components";
import IconPWA from "src/components/icons/pwa";

export const projectsData = {
  es: {
    title: ".Proyectos",
    desc: "Ver más proyectos",
    items: [
      {
        id: "1",
        label: "Extensions Project",
        title: "Darvy Theme",
        desc: "Darvy Theme is a color theme for Visual Studio Code and very soon for other editors like Atom or Sublime Text. The color palette is inspired by popular themes like One Dark Pro and Tokyo Night, so you might love this theme.",
        features: [
          { name: "VS Code", bgColor: "rgba(31,192,241,.5)" },
          {
            name: "Sublime Text",
            bgColor: "rgba(255,165,0,.3)",
          },
          { name: "Vim", bgColor: "rgba(76,244,252,.4)" },
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
        img: "project-img1",
        imgs: ["p3-min.png", "p3-1-min.png", "p3-2-min.png", "p3-3-min.png"],
        typeProject: ["Type Project", "Marketplace Extensions"],
        techStack: "Tech Stack",
        client: ["Client", "Personal"],
        threeColors: {
          color: [0.48, 0.53, 1],
          colorBase: [1, 1, 1],
          colorDeep: [0, 0, 0],
        },
        themeMode: "dark",
        thumbnails: {
          square: "/images/square1.png",
          horizontal: "three-min.png",
          vertical: "three-min.png",
        },
      },
      {
        id: "2",
        label: "Web Project",
        title: "Business Website",
        desc: "Web application on Landing Page of a company that offers its technological services, related to computing, programming and solutions in the systems area.",
        features: [
          {
            name: "NextJS",
            bgColor: "rgba(25,25,25,.3)",
          },
          {
            name: "React",
            bgColor: "rgba(31,192,241,.5)",
          },
          {
            name: "Styled Components",
            bgColor: "rgba(231,62,250,.4)",
          },
          {
            name: "Adobe Illustrator",
            bgColor: "rgba(234,226,183,.6)",
          },
          {
            name: "Figma+",
            bgColor: "rgba(255,0,0,.2)",
          },
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
        thumbnails: {
          square: "/images/squaresonus.png",
          horizontal: "three-min.png",
          vertical: "three-min.png",
        },
        img: "project-img2",
        imgs: ["p3-min.png", "p3-1-min.png", "p3-2-min.png", "p3-3-min.png"],
        typeProject: ["Type Project", "Web App"],
        techStack: "Tech Stack",
        client: ["Client", "SonusTech"],
        threeColors: {
          color: [0, 0, 0],
          colorBase: [0, 0, 0],
          colorDeep: [0.07, 0.75, 0.67],
        },
        themeMode: "dark",
      },
      {
        id: "3",
        label: "Web Project",
        title: "Ecommerce Website",
        desc: `Modern clothing ecommerce web application that offers a wide selection of clothing and fashion accessories for demanding customers, with options to easily filter and find what they are looking for and is updated with the latest trends.`,
        blog: {
          title: "Ecommerce Websitee",
          body: `

          <p>Modern clothing ecommerce web application that offers a wide selection of clothing and fashion accessories for demanding customers, with options to easily filter and find what they are looking for and is updated with the latest trends.</p>

          <p>Modern clothing ecommerce web application that offers a wide selection of clothing and fashion accessories for demanding customers, with options to easily filter and find what they are looking for and is updated with the latest trends.</p>
          
          <div className="content-picture">
          <img src="/images/project-img3.png" alt="ecommerce website" />  
          <span className="content-picture-desc">Modern clothing ecommerce web application that offers a wide selection of clothing</span>            
          </div>
          
          <p>Modern clothing ecommerce web application that offers a wide selection of clothing and fashion accessories for demanding customers, with options to easily filter and find what they are looking for and is updated with the latest trends.</p>
          
          <p>Modern clothing ecommerce web application that offers a wide selection of clothing and fashion accessories for demanding customers, with options to easily filter and find what they are looking for and is updated with the latest trends.</p>
          
          <div className="content-picture">
          <img src="/images/project-img3.png" alt="ecommerce website" />  
          <span className="content-picture-desc">Modern clothing ecommerce web application that offers a wide selection of clothing</span>            
          </div>
          
          <p>Modern clothing ecommerce web application that offers a wide selection of clothing and fashion accessories for demanding customers, with options to easily filter and find what they are looking for and is updated with the latest trends.</p>
          
          <p>Modern clothing ecommerce web application that offers a wide selection of clothing and fashion accessories for demanding customers, with options to easily filter and find what they are looking for and is updated with the latest trends.</p>
          `,
          wrapper: [
            [
              [
                "Modern <strong>clothing</strong> ecommerce web application that offers a wide selection of clothing and fashion accessories for demanding customers, with options to easily filter and find what they are looking for and is updated with the latest trends.",
                "Modern clothing ecommerce web application that offers a wide selection of clothing and fashion accessories for demanding customers, with options to easily filter and find what they are looking for and is updated with the latest trends.",
                "Modern clothing ecommerce web application that offers a wide selection of clothing and fashion accessories for demanding customers, with options to easily filter and find what they are looking for and is updated with the latest trends.",
                "Modern clothing ecommerce web application that offers a wide selection of clothing and fashion accessories for demanding customers, with options to easily filter and find what they are looking for and is updated with the latest trends.",
              ],
              [
                "/images/project-img3.png",
                "Modern clothing ecommerce web application that offers a wide selection",
              ],
            ],
            [
              [
                "Modern clothing ecommerce web application that offers a wide selection of clothing and fashion accessories for demanding customers, with options to easily filter and find what they are looking for and is updated with the latest trends.",
                "Modern clothing ecommerce web application that offers a wide selection of clothing and fashion accessories for demanding customers, with options to easily filter and find what they are looking for and is updated with the latest trends.",
              ],
              [
                "/images/project-img3.png",
                "Modern clothing ecommerce web application that offers a wide selection",
              ],
            ],
          ],

          conclusion: [
            ``,
            "Modern clothing ecommerce web application that offers a wide selection of clothing and fashion accessories for demanding customers, with options to easily filter and find what they are looking for and is updated with the latest trends.",
          ],
        },
        features: [
          {
            name: "NextJS",
            bgColor: "rgba(25,25,25,.3)",
          },
          {
            name: "React",
            bgColor: "rgba(31,192,241,.5)",
          },
          { name: "Sass", bgColor: "rgba(231,62,250,.4)" },
          {
            name: "Adobe Photoshop",
            bgColor: "rgba(21,71,100,.6)",
          },
          {
            name: "Figma+",
            bgColor: "rgba(255,0,0,.2)",
          },
        ],
        links: [
          {
            path: "https://ecommerce-website-zeta-one.vercel.app/",
            svg: 1,
          },
          {
            path: "https://github.com/tarquibrian/ecommerce-website",
            svg: 2,
          },
          {
            path: "https://www.figma.com/community/file/1226407145403745837/Ecommerce",
            svg: 3,
          },
        ],
        img: "project-img3",
        imgs: ["p3-min.png", "p3-1-min.png", "p3-2-min.png", "p3-3-min.png"],
        typeProject: ["Type Project", "Web App"],
        techStack: "Tech Stack",
        client: ["Client", "ModernFashion"],
        threeColors: {
          color: [0.94, 0.14, 0.24],
          colorBase: [0.38, 0.09, 0.57],
          colorDeep: [0.86, 0.93, 0.96],
        },
        themeMode: "light",
        thumbnails: {
          square: "/images/squaremodern.png",
          horizontal: "three-min.png",
          vertical: "three-min.png",
        },
      },
      {
        id: "4",
        label: "Web Project",
        title: "Tourism Website",
        desc: "Web application for tourist information management, using modules of Biographical Articles, Management and notification of cultural events, Visualization and addressing of tourist sites through Google Maps based on specific coordinates.",

        features: [
          {
            name: "React",
            bgColor: "rgba(31,192,241,.5)",
          },
          {
            name: "Redux",
            bgColor: "rgba(231,62,250,.3)",
          },
          {
            name: "Express",
            bgColor: "rgba(222,222,222,.5)",
          },
          {
            name: "MongoDB",
            bgColor: "rgba(56,176,68,.5)",
          },
          {
            name: "Google Maps Platform",
            bgColor: "rgba(56,176,68,.5)",
          },
          { name: "PWA", bgColor: "rgba(231,62,250,.3)" },
          {
            name: "Push Notifications",
            bgColor: "rgba(31,192,241,.5)",
          },
        ],
        links: [
          {
            path: "https://villa-turismo.herokuapp.com/",
            svg: 1,
          },
          {
            path: "https://github.com/tarquibrian/VT-backend",
            svg: 2,
          },
          {
            path: "https://github.com/tarquibrian/proyecto-villa-frontend",
            svg: 2,
          },
        ],
        img: "project-img4",
        imgs: ["p3-min.png", "p3-1-min.png", "p3-2-min.png", "p3-3-min.png"],
        typeProject: ["Type Project", "Web App"],
        techStack: "Tech Stack",
        client: ["Client", "Villa Rivero"],
        threeColors: {
          color: [0.8, 0.95, 0.94],
          colorBase: [0.38, 0.09, 0.57],
          colorDeep: [0, 0, 0],
        },
        themeMode: "dark",
        thumbnails: {
          square: "/images/squarevilla.png",
          horizontal: "three-min.png",
          vertical: "three-min.png",
        },
      },
      {
        id: "5",
        label: "Web Project",
        title: "Carls Burger Restaurant",
        desc: "Web application about a hamburger restaurant that provides a satisfying, easy and attractive user experience, and is an excellent marketing tool to attract new customers and keep existing ones.",

        features: [
          {
            name: "NextJS",
            bgColor: "rgba(25,25,25,.3)",
          },
          {
            name: "React",
            bgColor: "rgba(31,192,241,.5)",
          },
          { name: "Sass", bgColor: "rgba(231,62,250,.4)" },
          {
            name: "Figma+",
            bgColor: "rgba(255,0,0,.2)",
          },
        ],
        links: [
          {
            path: "https://carls-burger.vercel.app/",
            svg: 1,
          },
        ],
        img: "project-img5",
        imgs: ["p3-min.png", "p3-1-min.png", "p3-2-min.png", "p3-3-min.png"],
        typeProject: ["Type Project", "Web App"],
        techStack: "Tech Stack",
        client: ["Client", "Cars Burger"],
        threeColors: {
          color: [0.4, 0.4, 0.4],
          colorBase: [0.4, 0.4, 0.4],
          colorDeep: [0.9, 0.9, 0.9],
        },
        themeMode: "light",
        thumbnails: {
          square: "/images/squarecarls.png",
          horizontal: "three-min.png",
          vertical: "three-min.png",
        },
      },
    ],
    // items: [
    //   {
    //     id: "1",
    //     label: "Extensions Project",
    //     title: "Darvy Theme",
    //     desc: "Darvy Theme es un tema de color para Visual Estudio Code y muy pronto para otros editores como Atom o Sublime Text. La paleta de colores esta inspirado en temas populares como One Dark Pro y Tokyo Night, por lo que puede que éste tema vaya a encantarte.",
    //     features: [
    //       { name: "VS Code", bgColor: "rgba(31,192,241,.5)" },
    //       {
    //         name: "Sublime Text",
    //         bgColor: "rgba(255,165,0,.3)",
    //         // bgColor: `linear-gradient(
    //         //   93.3deg,
    //         //   rgba(236, 80, 80, 1) 21.5%,
    //         //   rgba(255, 97, 29, 1) 93.9%
    //         // )`,
    //       },
    //       { name: "Vim", bgColor: "rgba(76,244,252,.4)" },
    //     ],
    //     links: [
    //       {
    //         path: "https://marketplace.visualstudio.com/items?itemName=darvy.darvypro",
    //         svg: 1,
    //       },
    //       {
    //         path: "https://github.com/tarquibrian/darvypro-theme",
    //         svg: 2,
    //       },
    //     ],
    //     img: "project-img1",
    //     typeProject: ["Tipo de Proyecto", "Extensión para Marketplace"],
    //     techStack: "Tecnologías",
    //     client: ["Cliente", "Personal"],
    //     threeColors: {
    //       color: [0.48, 0.53, 1],
    //       colorBase: [1, 1, 1],
    //       colorDeep: [0, 0, 0],
    //     },
    //   },
    //   {
    //     id: "2",
    //     label: "Web Project",
    //     title: "Business Website",
    //     desc: "Aplicación web sobre Landing Page de una empresa que ofrece sus servicios tecnológicos, relacionados con la informática, programación y soluciones en el área de sistemas.",
    //     features: [
    //       {
    //         name: "NextJS",
    //         bgColor: "rgba(25,25,25,.3)",
    //       },
    //       {
    //         name: "React",
    //         bgColor: "rgba(31,192,241,.5)",
    //       },
    //       {
    //         name: "Styled Components",
    //         bgColor: "rgba(231,62,250,.4)",
    //       },
    //       {
    //         name: "Adobe Illustrator",
    //         bgColor: "rgba(234,226,183,.6)",
    //       },
    //       {
    //         name: "Figma+",
    //         bgColor: "rgba(255,0,0,.2)",
    //       },
    //     ],
    //     links: [
    //       {
    //         path: "https://sonustech-business-website.vercel.app/",
    //         svg: 1,
    //       },
    //       {
    //         path: "https://github.com/tarquibrian/sonustech-business-website",
    //         svg: 2,
    //       },
    //       {
    //         path: "https://www.figma.com/community/file/1215090916589711588",
    //         svg: 3,
    //       },
    //     ],
    //     img: "project-img2",
    //     typeProject: ["Tipo de Proyecto", "Aplicacion Web"],
    //     techStack: "Tecnologías",
    //     client: ["Cliente", "SonusTech"],
    //     threeColors: {
    //       color: [0.8, 0.95, 0.94],
    //       colorBase: [0.38, 0.09, 0.57],
    //       colorDeep: [0, 0, 0],
    //     },
    //   },
    //   {
    //     id: "3",
    //     label: "Web Project",
    //     title: "Ecommerce Website",
    //     desc: "Aplicación web de ecommerce de ropa moderna que ofrece una amplia selección de ropa y accesorios de moda para clientes exigentes, con opciones para filtrar y encontrar fácilmente lo que están buscando y se actualiza con las últimas tendencias.",
    //     features: [
    //       {
    //         name: "NextJS",
    //         bgColor: "rgba(25,25,25,.3)",
    //       },
    //       {
    //         name: "React",
    //         bgColor: "rgba(31,192,241,.5)",
    //       },
    //       { name: "Sass", bgColor: "rgba(231,62,250,.4)" },
    //       {
    //         name: "Adobe Photoshop",
    //         bgColor: "rgba(21,71,100,.6)",
    //       },
    //       {
    //         name: "Figma+",
    //         bgColor: "rgba(255,0,0,.2)",
    //       },
    //     ],
    //     links: [
    //       {
    //         path: "https://ecommerce-website-zeta-one.vercel.app/",
    //         svg: 1,
    //       },
    //       {
    //         path: "https://github.com/tarquibrian/ecommerce-website",
    //         svg: 2,
    //       },
    //       {
    //         path: "https://www.figma.com/community/file/1226407145403745837/Ecommerce",
    //         svg: 3,
    //       },
    //     ],
    //     img: "project-img3",
    //     imgs: ["p3-min.png", "p3-1-min.png", "p3-2-min.png", "p3-3-min.png"],
    //     typeProject: ["Tipo de Proyecto", "Aplicacion Web"],
    //     techStack: "Tecnologías",
    //     client: ["Cliente", "ModernFashion"],
    //     threeColors: {
    //       color: [0.93, 0.25, 0.25],
    //       colorBase: [0.38, 0.09, 0.57],
    //       colorDeep: [0, 0, 0],
    //     },
    //   },
    //   {
    //     id: "4",
    //     label: "Web Project",
    //     title: "Tourism Website",
    //     desc: "Aplicacion web de gestión de información turistica, empleando modulos de Artículos Biográficos, Gestión y notificación de eventos culturales, Visualizacion y direccionamiento de sitios turísticos mediante Google Maps en base a coordenadas específicas.",
    //     features: [
    //       {
    //         name: "React",
    //         bgColor: "rgba(31,192,241,.5)",
    //       },
    //       {
    //         name: "Redux",
    //         bgColor: "rgba(231,62,250,.3)",
    //       },
    //       {
    //         name: "Express",
    //         bgColor: "rgba(222,222,222,.5)",
    //       },
    //       {
    //         name: "MongoDB",
    //         bgColor: "rgba(56,176,68,.5)",
    //       },
    //       {
    //         name: "Google Maps Platform",
    //         bgColor: "rgba(56,176,68,.5)",
    //       },
    //       { name: "PWA", bgColor: "rgba(231,62,250,.3)" },
    //       {
    //         name: "Push Notifications",
    //         bgColor: "rgba(31,192,241,.5)",
    //       },
    //     ],
    //     links: [
    //       {
    //         path: "https://villa-turismo.herokuapp.com/",
    //         svg: 1,
    //       },
    //       {
    //         path: "https://github.com/tarquibrian/VT-backend",
    //         svg: 2,
    //       },
    //       {
    //         path: "https://github.com/tarquibrian/proyecto-villa-frontend",
    //         svg: 2,
    //       },
    //     ],
    //     img: "project-img4",
    //     imgs: ["p3-min.png", "p3-1-min.png", "p3-2-min.png", "p3-3-min.png"],
    //     typeProject: ["Tipo de Proyecto", "Aplicacion Web"],
    //     techStack: "Tecnologías",
    //     client: ["Cliente", "Villa Rivero"],
    //     threeColors: {
    //       color: [0.8, 0.95, 0.94],
    //       colorBase: [0.38, 0.09, 0.57],
    //       colorDeep: [0, 0, 0],
    //     },
    //   },
    //   {
    //     id: "5",
    //     label: "Web Project",
    //     title: "Carls Burger Restaurant",
    //     desc: "Aplicación web sobre un restaurante de hamburguesas que proporciona una experiencia de usuario satisfactoria, fácil y atractiva, y es una excelente herramienta de marketing para atraer nuevos clientes y mantener a los ya existentes.",

    //     features: [
    //       {
    //         name: "NextJS",
    //         bgColor: "rgba(25,25,25,.3)",
    //       },
    //       {
    //         name: "React",
    //         bgColor: "rgba(31,192,241,.5)",
    //       },
    //       { name: "Sass", bgColor: "rgba(231,62,250,.4)" },
    //       {
    //         name: "Figma+",
    //         bgColor: "rgba(255,0,0,.2)",
    //       },
    //     ],
    //     links: [
    //       {
    //         path: "https://carls-burger.vercel.app/",
    //         svg: 1,
    //       },
    //     ],
    //     img: "project-img5",
    //     imgs: ["p3-min.png", "p3-1-min.png", "p3-2-min.png", "p3-3-min.png"],
    //     typeProject: ["Tipo de Proyecto", "Aplicacion Web"],
    //     techStack: "Tecnologías",
    //     client: ["Cliente", "Villa Rivero"],
    //     threeColors: {
    //       color: [0.8, 0.95, 0.94],
    //       colorBase: [0.38, 0.09, 0.57],
    //       colorDeep: [0, 0, 0],
    //     },
    //   },
    // ],
    projects: [
      {
        id: 1,
        label: "darvytheme",
        title: "Darvy Theme",
        desc: "Darvy Theme is a color theme for Visual Studio Code and very soon for other editors like Atom or Sublime Text. The color palette is inspired by popular themes like One Dark Pro and Tokyo Night, so you might love this theme.",
        features: {
          typeProject: {
            label: "Type Project",
            value: "Web App",
          },
          client: {
            label: "Client",
            value: "SonusTech",
          },
          techStack: {
            label: "Tech Stack",
            values: [
              {
                id: "vscode",
                label: "VS Code",
                icon: () => <IconVS />,
              },
              {
                id: "sublime",
                label: "Sublime",
                icon: () => <IconST />,
              },
              {
                id: "vim",
                label: "Vim",
                icon: () => <IconVim />,
              },
            ],
          },
        },
        thumbnails: {
          home: "/images/project-img1.png",
          square: "/images/square1.png",
        },
        links: [
          {
            id: "external-link",
            href: "https://marketplace.visualstudio.com/items?itemName=darvy.darvypro",
            svg: () => <IconExternal />,
          },
          {
            id: "github",
            href: "https://github.com/tarquibrian/darvypro-theme",
            svg: () => <IconGitHub />,
          },
        ],
      },
      {
        id: 2,
        label: "bussineswebsite",
        title: "Sonustech Bussines Website",
        desc: "Web application on Landing Page of a company that offers its technological services, related to computing, programming and solutions in the systems area.",
        features: {
          typeProject: {
            label: "Type Project",
            value: "Marketplace Extensions",
          },
          client: {
            label: "Client",
            value: "Personal",
          },
          techStack: {
            label: "Tech Stack",
            values: [
              {
                id: "nextjs",
                label: "NextJS",
                icon: () => <IconNextjs />,
              },
              {
                id: "react",
                label: "React",
                icon: () => <ReactIcon />,
              },
              {
                id: "styled-components",
                label: "Styled Components",
                icon: () => <IconSC />,
              },
              {
                id: "adobe-illustrator",
                label: "Adobe Illustrator",
                icon: () => <IconAI />,
              },
              {
                id: "figma",
                label: "Figma",
                icon: () => <IconFigmaImg />,
              },
            ],
          },
        },
        thumbnails: {
          home: "/images/project-img2.png",
          square: "/images/squaresonus.png",
        },
        links: [
          {
            id: "external-link",
            href: "https://sonustech-business-website.vercel.app/",
            svg: () => <IconExternal />,
          },
          {
            id: "github",
            href: "https://github.com/tarquibrian/sonustech-business-website",
            svg: () => <IconGitHub />,
          },
          {
            id: "github",
            href: "https://github.com/tarquibrian/sonustech-business-website",
            svg: () => <IconFigma />,
          },
        ],
      },
      {
        id: 3,
        label: "modernfashion",
        title: "Ecommerce Website",
        desc: `Modern clothing ecommerce web application that offers a wide selection of clothing and fashion accessories for demanding customers, with options to easily filter and find what they are looking for and is updated with the latest trends.`,
        features: {
          typeProject: {
            label: "Type Project",
            value: "Web App",
          },
          client: {
            label: "Client",
            value: "ModernFasion",
          },
          techStack: {
            label: "Tech Stack",
            values: [
              {
                id: "nextjs",
                label: "NextJS",
                icon: () => <IconNextjs />,
              },
              {
                id: "react",
                label: "React",
                icon: () => <ReactIcon />,
              },
              {
                id: "sass",
                label: "Sass",
                icon: () => <IconSass />,
              },
              {
                id: "adobe-photoshop",
                label: "Adobe Photoshop",
                icon: () => <IconAP />,
              },
              {
                id: "figma",
                label: "Figma",
                icon: () => <IconFigmaImg />,
              },
            ],
          },
        },
        thumbnails: {
          home: "/images/project-img3.png",
          square: "/images/squaremodern.png",
        },
        links: [
          {
            id: "external-link",
            href: "https://ecommerce-website-zeta-one.vercel.app/",
            svg: () => <IconExternal />,
          },
          {
            id: "github",
            href: "https://github.com/tarquibrian/ecommerce-website",
            svg: () => <IconGitHub />,
          },
          {
            id: "github",
            href: "https://www.figma.com/community/file/1226407145403745837/Ecommerce",
            svg: () => <IconFigma />,
          },
        ],
      },
      {
        id: 4,
        label: "modernfashion",
        title: "Tourism Website",
        desc: "Web application for tourist information management, using modules of Biographical Articles, Management and notification of cultural events, Visualization and addressing of tourist sites through Google Maps based on specific coordinates.",
        features: {
          typeProject: {
            label: "Type Project",
            value: "Web App",
          },
          client: {
            label: "Client",
            value: "Villa Rivero",
          },
          techStack: {
            label: "Tech Stack",
            values: [
              {
                id: "react",
                label: "React",
                icon: () => <ReactIcon />,
              },
              {
                id: "redux",
                label: "Redux",
                icon: () => <IconRedux />,
              },
              {
                id: "express",
                label: "Express",
                icon: () => <IconExpress />,
              },
              {
                id: "googlemaps",
                label: "Google Maps Platform",
                icon: () => <IconMaps />,
              },
              {
                id: "pwa",
                label: "PWA",
                icon: () => <IconPWA />,
              },
              {
                id: "pushnotification",
                label: "Push Notification",
                icon: () => <IconPushNotification />,
              },
            ],
          },
        },
        thumbnails: {
          home: "/images/project-img4.png",
          square: "/images/squarevilla.png",
        },
        links: [
          {
            id: "external-link",
            href: "https://villa-turismo.herokuapp.com/",
            svg: () => <IconExternal />,
          },
          {
            id: "github",
            href: "https://github.com/tarquibrian/VT-backend",
            svg: () => <IconGitHub />,
          },
          {
            id: "github",
            href: "https://github.com/tarquibrian/proyecto-villa-frontend",
            svg: () => <IconGitHub />,
          },
        ],
      },
      {
        id: 5,
        label: "carlsburger",
        title: "Carls Burger Restaurant",
        desc: "Web application about a hamburger restaurant that provides a satisfying, easy and attractive user experience, and is an excellent marketing tool to attract new customers and keep existing ones.",
        features: {
          typeProject: {
            label: "Type Project",
            value: "Web App",
          },
          client: {
            label: "Client",
            value: "Carls Burger",
          },
          techStack: {
            label: "Tech Stack",
            values: [
              {
                id: "NextJS",
                label: "NextJS",
                icon: () => <IconNextjs />,
              },
              {
                id: "React",
                label: "React",
                icon: () => <ReactIcon />,
              },
              {
                id: "Sass",
                label: "Sass",
                icon: () => <IconSass />,
              },
              {
                id: "Figma+",
                label: "Figma+",
                icon: () => <IconFigmaImg />,
              },
            ],
          },
        },
        thumbnails: {
          home: "/images/project-img5.png",
          square: "/images/squarecarls.png",
        },
        links: [
          {
            id: "external-link",
            href: "https://carls-burger.vercel.app/",
            svg: () => <IconExternal />,
          },
        ],
      },
    ],
    recents: [
      {
        id: "1",
        label: "3D Web Project",
        title: "ThreeJS filter effect for images",
        desc: "This filter effect provides an EffectPass/threejs which automatically organizes and merges any given combination of effects. This minimizes the amount of render operations and makes it possible to combine many effects without the performance penalties of traditional pass chaining. Additionally, every effect can choose its own blend function.",
        features: [
          {
            name: "ThreeJS",
          },
          {
            name: "React-three/fiber",
          },
          { name: "React-three/postprocessing" },
        ],
        links: [
          {
            path: "https://tarquibrian.github.io/noisethreejs/",
            svg: 1,
          },
        ],
        thumbnails: [
          {
            square: "portfolio/20230605_222407_dmgtok",
            horizontal: "three-min.png",
            vertical: "three-min.png",
          },
        ],
        typeProject: ["Tipo de Proyecto", "3D"],
        techStack: "Tech Stack",
        client: ["Client", "Personal"],
        threeColors: {
          color: [0.8, 0.95, 0.94],
          colorBase: [0.38, 0.09, 0.57],
          colorDeep: [0, 0, 0],
        },
      },
    ],
  },
  en: {
    title: ".Projects",
    desc: "View More Projects",
    items: [
      {
        id: "1",
        label: "Extensions Project",
        title: "Darvy Theme",
        desc: "Darvy Theme is a color theme for Visual Studio Code and very soon for other editors like Atom or Sublime Text. The color palette is inspired by popular themes like One Dark Pro and Tokyo Night, so you might love this theme.",
        features: [
          { name: "VS Code", bgColor: "rgba(31,192,241,.5)" },
          {
            name: "Sublime Text",
            bgColor: "rgba(255,165,0,.3)",
          },
          { name: "Vim", bgColor: "rgba(76,244,252,.4)" },
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
        img: "project-img1",
        imgs: ["p3-min.png", "p3-1-min.png", "p3-2-min.png", "p3-3-min.png"],
        typeProject: ["Type Project", "Marketplace Extensions"],
        techStack: "Tech Stack",
        client: ["Client", "Personal"],
        threeColors: {
          color: [0.48, 0.53, 1],
          colorBase: [1, 1, 1],
          colorDeep: [0, 0, 0],
        },
        themeMode: "dark",
        thumbnails: {
          square: "/images/square1.png",
          horizontal: "three-min.png",
          vertical: "three-min.png",
        },
      },
      {
        id: "2",
        label: "Web Project",
        title: "Business Website",
        desc: "Web application on Landing Page of a company that offers its technological services, related to computing, programming and solutions in the systems area.",
        features: [
          {
            name: "NextJS",
            bgColor: "rgba(25,25,25,.3)",
          },
          {
            name: "React",
            bgColor: "rgba(31,192,241,.5)",
          },
          {
            name: "Styled Components",
            bgColor: "rgba(231,62,250,.4)",
          },
          {
            name: "Adobe Illustrator",
            bgColor: "rgba(234,226,183,.6)",
          },
          {
            name: "Figma+",
            bgColor: "rgba(255,0,0,.2)",
          },
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
        thumbnails: {
          square: "/images/squaresonus.png",
          horizontal: "three-min.png",
          vertical: "three-min.png",
        },
        img: "project-img2",
        imgs: ["p3-min.png", "p3-1-min.png", "p3-2-min.png", "p3-3-min.png"],
        typeProject: ["Type Project", "Web App"],
        techStack: "Tech Stack",
        client: ["Client", "SonusTech"],
        threeColors: {
          color: [0, 0, 0],
          colorBase: [0, 0, 0],
          colorDeep: [0.07, 0.75, 0.67],
        },
        themeMode: "dark",
      },
      {
        id: "3",
        label: "Web Project",
        title: "Ecommerce Website",
        desc: `Modern clothing ecommerce web application that offers a wide selection of clothing and fashion accessories for demanding customers, with options to easily filter and find what they are looking for and is updated with the latest trends.`,
        blog: {
          title: "Ecommerce Websitee",
          body: `

          <p>Modern clothing ecommerce web application that offers a wide selection of clothing and fashion accessories for demanding customers, with options to easily filter and find what they are looking for and is updated with the latest trends.</p>

          <p>Modern clothing ecommerce web application that offers a wide selection of clothing and fashion accessories for demanding customers, with options to easily filter and find what they are looking for and is updated with the latest trends.</p>
          
          <div className="content-picture">
          <img src="/images/project-img3.png" alt="ecommerce website" />  
          <span className="content-picture-desc">Modern clothing ecommerce web application that offers a wide selection of clothing</span>            
          </div>
          
          <p>Modern clothing ecommerce web application that offers a wide selection of clothing and fashion accessories for demanding customers, with options to easily filter and find what they are looking for and is updated with the latest trends.</p>
          
          <p>Modern clothing ecommerce web application that offers a wide selection of clothing and fashion accessories for demanding customers, with options to easily filter and find what they are looking for and is updated with the latest trends.</p>
          
          <div className="content-picture">
          <img src="/images/project-img3.png" alt="ecommerce website" />  
          <span className="content-picture-desc">Modern clothing ecommerce web application that offers a wide selection of clothing</span>            
          </div>
          
          <p>Modern clothing ecommerce web application that offers a wide selection of clothing and fashion accessories for demanding customers, with options to easily filter and find what they are looking for and is updated with the latest trends.</p>
          
          <p>Modern clothing ecommerce web application that offers a wide selection of clothing and fashion accessories for demanding customers, with options to easily filter and find what they are looking for and is updated with the latest trends.</p>
          `,
          wrapper: [
            [
              [
                "Modern <strong>clothing</strong> ecommerce web application that offers a wide selection of clothing and fashion accessories for demanding customers, with options to easily filter and find what they are looking for and is updated with the latest trends.",
                "Modern clothing ecommerce web application that offers a wide selection of clothing and fashion accessories for demanding customers, with options to easily filter and find what they are looking for and is updated with the latest trends.",
                "Modern clothing ecommerce web application that offers a wide selection of clothing and fashion accessories for demanding customers, with options to easily filter and find what they are looking for and is updated with the latest trends.",
                "Modern clothing ecommerce web application that offers a wide selection of clothing and fashion accessories for demanding customers, with options to easily filter and find what they are looking for and is updated with the latest trends.",
              ],
              [
                "/images/project-img3.png",
                "Modern clothing ecommerce web application that offers a wide selection",
              ],
            ],
            [
              [
                "Modern clothing ecommerce web application that offers a wide selection of clothing and fashion accessories for demanding customers, with options to easily filter and find what they are looking for and is updated with the latest trends.",
                "Modern clothing ecommerce web application that offers a wide selection of clothing and fashion accessories for demanding customers, with options to easily filter and find what they are looking for and is updated with the latest trends.",
              ],
              [
                "/images/project-img3.png",
                "Modern clothing ecommerce web application that offers a wide selection",
              ],
            ],
          ],

          conclusion: [
            ``,
            "Modern clothing ecommerce web application that offers a wide selection of clothing and fashion accessories for demanding customers, with options to easily filter and find what they are looking for and is updated with the latest trends.",
          ],
        },
        features: [
          {
            name: "NextJS",
            bgColor: "rgba(25,25,25,.3)",
          },
          {
            name: "React",
            bgColor: "rgba(31,192,241,.5)",
          },
          { name: "Sass", bgColor: "rgba(231,62,250,.4)" },
          {
            name: "Adobe Photoshop",
            bgColor: "rgba(21,71,100,.6)",
          },
          {
            name: "Figma+",
            bgColor: "rgba(255,0,0,.2)",
          },
        ],
        links: [
          {
            path: "https://ecommerce-website-zeta-one.vercel.app/",
            svg: 1,
          },
          {
            path: "https://github.com/tarquibrian/ecommerce-website",
            svg: 2,
          },
          {
            path: "https://www.figma.com/community/file/1226407145403745837/Ecommerce",
            svg: 3,
          },
        ],
        img: "project-img3",
        imgs: ["p3-min.png", "p3-1-min.png", "p3-2-min.png", "p3-3-min.png"],
        typeProject: ["Type Project", "Web App"],
        techStack: "Tech Stack",
        client: ["Client", "ModernFashion"],
        threeColors: {
          color: [0.94, 0.14, 0.24],
          colorBase: [0.38, 0.09, 0.57],
          colorDeep: [0.86, 0.93, 0.96],
        },
        themeMode: "light",
        thumbnails: {
          square: "/images/squaremodern.png",
          horizontal: "three-min.png",
          vertical: "three-min.png",
        },
      },
      {
        id: "4",
        label: "Web Project",
        title: "Tourism Website",
        desc: "Web application for tourist information management, using modules of Biographical Articles, Management and notification of cultural events, Visualization and addressing of tourist sites through Google Maps based on specific coordinates.",
        features: [
          {
            name: "React",
            bgColor: "rgba(31,192,241,.5)",
          },
          {
            name: "Redux",
            bgColor: "rgba(231,62,250,.3)",
          },
          {
            name: "Express",
            bgColor: "rgba(222,222,222,.5)",
          },
          {
            name: "MongoDB",
            bgColor: "rgba(56,176,68,.5)",
          },
          {
            name: "Google Maps Platform",
            bgColor: "rgba(56,176,68,.5)",
          },
          { name: "PWA", bgColor: "rgba(231,62,250,.3)" },
          {
            name: "Push Notifications",
            bgColor: "rgba(31,192,241,.5)",
          },
        ],
        links: [
          {
            path: "https://villa-turismo.herokuapp.com/",
            svg: 1,
          },
          {
            path: "https://github.com/tarquibrian/VT-backend",
            svg: 2,
          },
          {
            path: "https://github.com/tarquibrian/proyecto-villa-frontend",
            svg: 2,
          },
        ],
        img: "project-img4",
        imgs: ["p3-min.png", "p3-1-min.png", "p3-2-min.png", "p3-3-min.png"],
        typeProject: ["Type Project", "Web App"],
        techStack: "Tech Stack",
        client: ["Client", "Villa Rivero"],
        threeColors: {
          color: [0.8, 0.95, 0.94],
          colorBase: [0.38, 0.09, 0.57],
          colorDeep: [0, 0, 0],
        },
        themeMode: "dark",
        thumbnails: {
          square: "/images/squarevilla.png",
          horizontal: "three-min.png",
          vertical: "three-min.png",
        },
      },
      {
        id: "5",
        label: "Web Project",
        title: "Carls Burger Restaurant",
        desc: "Web application about a hamburger restaurant that provides a satisfying, easy and attractive user experience, and is an excellent marketing tool to attract new customers and keep existing ones.",

        features: [
          {
            name: "NextJS",
            bgColor: "rgba(25,25,25,.3)",
          },
          {
            name: "React",
            bgColor: "rgba(31,192,241,.5)",
          },
          { name: "Sass", bgColor: "rgba(231,62,250,.4)" },
          {
            name: "Figma+",
            bgColor: "rgba(255,0,0,.2)",
          },
        ],
        links: [
          {
            path: "https://carls-burger.vercel.app/",
            svg: 1,
          },
        ],
        img: "project-img5",
        imgs: ["p3-min.png", "p3-1-min.png", "p3-2-min.png", "p3-3-min.png"],
        typeProject: ["Type Project", "Web App"],
        techStack: "Tech Stack",
        client: ["Client", "Cars Burger"],
        threeColors: {
          color: [0.4, 0.4, 0.4],
          colorBase: [0.4, 0.4, 0.4],
          colorDeep: [0.9, 0.9, 0.9],
        },
        themeMode: "light",
        thumbnails: {
          square: "/images/squarecarls.png",
          horizontal: "three-min.png",
          vertical: "three-min.png",
        },
      },
    ],
    projects: [
      {
        id: 1,
        label: "darvytheme",
        title: "Darvy Theme",
        desc: "Darvy Theme is a color theme for Visual Studio Code and very soon for other editors like Atom or Sublime Text. The color palette is inspired by popular themes like One Dark Pro and Tokyo Night, so you might love this theme.",
        features: {
          typeProject: {
            label: "Type Project",
            value: "Web App",
          },
          client: {
            label: "Client",
            value: "SonusTech",
          },
          techStack: {
            label: "Tech Stack",
            values: [
              {
                id: "vscode",
                label: "VS Code",
                icon: () => <IconVS />,
              },
              {
                id: "sublime",
                label: "Sublime",
                icon: () => <IconST />,
              },
              {
                id: "vim",
                label: "Vim",
                icon: () => <IconVim />,
              },
            ],
          },
        },
        thumbnails: {
          home: "/images/project-img1.png",
          square: "/images/square1.png",
        },
        links: [
          {
            id: "external-link",
            href: "https://marketplace.visualstudio.com/items?itemName=darvy.darvypro",
            svg: () => <IconExternal />,
          },
          {
            id: "github",
            href: "https://github.com/tarquibrian/darvypro-theme",
            svg: () => <IconGitHub />,
          },
        ],
      },
      {
        id: 2,
        label: "bussineswebsite",
        title: "Sonustech Bussines Website",
        desc: "Web application on Landing Page of a company that offers its technological services, related to computing, programming and solutions in the systems area.",
        features: {
          typeProject: {
            label: "Type Project",
            value: "Marketplace Extensions",
          },
          client: {
            label: "Client",
            value: "Personal",
          },
          techStack: {
            label: "Tech Stack",
            values: [
              {
                id: "nextjs",
                label: "NextJS",
                icon: () => <IconNextjs />,
              },
              {
                id: "react",
                label: "React",
                icon: () => <ReactIcon />,
              },
              {
                id: "styled-components",
                label: "Styled Components",
                icon: () => <IconSC />,
              },
              {
                id: "adobe-illustrator",
                label: "Adobe Illustrator",
                icon: () => <IconAI />,
              },
              {
                id: "figma",
                label: "Figma",
                icon: () => <IconFigmaImg />,
              },
            ],
          },
        },
        thumbnails: {
          home: "/images/project-img2.png",
          square: "/images/squaresonus.png",
        },
        links: [
          {
            id: "external-link",
            href: "https://sonustech-business-website.vercel.app/",
            svg: () => <IconExternal />,
          },
          {
            id: "github",
            href: "https://github.com/tarquibrian/sonustech-business-website",
            svg: () => <IconGitHub />,
          },
          {
            id: "github",
            href: "https://github.com/tarquibrian/sonustech-business-website",
            svg: () => <IconFigma />,
          },
        ],
      },
      {
        id: 3,
        label: "modernfashion",
        title: "Ecommerce Website",
        desc: `Modern clothing ecommerce web application that offers a wide selection of clothing and fashion accessories for demanding customers, with options to easily filter and find what they are looking for and is updated with the latest trends.`,
        features: {
          typeProject: {
            label: "Type Project",
            value: "Web App",
          },
          client: {
            label: "Client",
            value: "ModernFasion",
          },
          techStack: {
            label: "Tech Stack",
            values: [
              {
                id: "nextjs",
                label: "NextJS",
                icon: () => <IconNextjs />,
              },
              {
                id: "react",
                label: "React",
                icon: () => <ReactIcon />,
              },
              {
                id: "sass",
                label: "Sass",
                icon: () => <IconSass />,
              },
              {
                id: "adobe-photoshop",
                label: "Adobe Photoshop",
                icon: () => <IconAP />,
              },
              {
                id: "figma",
                label: "Figma",
                icon: () => <IconFigmaImg />,
              },
            ],
          },
        },
        thumbnails: {
          home: "/images/project-img3.png",
          square: "/images/squaremodern.png",
        },
        links: [
          {
            id: "external-link",
            href: "https://ecommerce-website-zeta-one.vercel.app/",
            svg: () => <IconExternal />,
          },
          {
            id: "github",
            href: "https://github.com/tarquibrian/ecommerce-website",
            svg: () => <IconGitHub />,
          },
          {
            id: "github",
            href: "https://www.figma.com/community/file/1226407145403745837/Ecommerce",
            svg: () => <IconFigma />,
          },
        ],
      },
      {
        id: 4,
        label: "modernfashion",
        title: "Tourism Website",
        desc: "Web application for tourist information management, using modules of Biographical Articles, Management and notification of cultural events, Visualization and addressing of tourist sites through Google Maps based on specific coordinates.",
        features: {
          typeProject: {
            label: "Type Project",
            value: "Web App",
          },
          client: {
            label: "Client",
            value: "Villa Rivero",
          },
          techStack: {
            label: "Tech Stack",
            values: [
              {
                id: "react",
                label: "React",
                icon: () => <ReactIcon />,
              },
              {
                id: "redux",
                label: "Redux",
                icon: () => <IconRedux />,
              },
              {
                id: "express",
                label: "Express",
                icon: () => <IconExpress />,
              },
              {
                id: "googlemaps",
                label: "Google Maps Platform",
                icon: () => <IconMaps />,
              },
              {
                id: "pwa",
                label: "PWA",
                icon: () => <IconPWA />,
              },
              {
                id: "pushnotification",
                label: "Push Notification",
                icon: () => <IconPushNotification />,
              },
            ],
          },
        },
        thumbnails: {
          home: "/images/project-img4.png",
          square: "/images/squarevilla.png",
        },
        links: [
          {
            id: "external-link",
            href: "https://villa-turismo.herokuapp.com/",
            svg: () => <IconExternal />,
          },
          {
            id: "github",
            href: "https://github.com/tarquibrian/VT-backend",
            svg: () => <IconGitHub />,
          },
          {
            id: "github",
            href: "https://github.com/tarquibrian/proyecto-villa-frontend",
            svg: () => <IconGitHub />,
          },
        ],
      },
      {
        id: 5,
        label: "carlsburger",
        title: "Carls Burger Restaurant",
        desc: "Web application about a hamburger restaurant that provides a satisfying, easy and attractive user experience, and is an excellent marketing tool to attract new customers and keep existing ones.",
        features: {
          typeProject: {
            label: "Type Project",
            value: "Web App",
          },
          client: {
            label: "Client",
            value: "Carls Burger",
          },
          techStack: {
            label: "Tech Stack",
            values: [
              {
                id: "NextJS",
                label: "NextJS",
                icon: () => <IconNextjs />,
              },
              {
                id: "React",
                label: "React",
                icon: () => <ReactIcon />,
              },
              {
                id: "Sass",
                label: "Sass",
                icon: () => <IconSass />,
              },
              {
                id: "Figma+",
                label: "Figma+",
                icon: () => <IconFigmaImg />,
              },
            ],
          },
        },
        thumbnails: {
          home: "/images/project-img5.png",
          square: "/images/squarecarls.png",
        },
        links: [
          {
            id: "external-link",
            href: "https://carls-burger.vercel.app/",
            svg: () => <IconExternal />,
          },
        ],
      },
    ],
    recents: [
      {
        id: "1",
        label: "3D Web Project",
        title: "ThreeJS filter effect for images",
        desc: "This filter effect provides an EffectPass/threejs which automatically organizes and merges any given combination of effects. This minimizes the amount of render operations and makes it possible to combine many effects without the performance penalties of traditional pass chaining. Additionally, every effect can choose its own blend function.",
        features: [
          {
            name: "ThreeJS",
          },
          {
            name: "React-three/fiber",
          },
          { name: "React-three/postprocessing" },
        ],
        links: [
          {
            path: "https://tarquibrian.github.io/noisethreejs/",
            svg: 1,
          },
        ],
        thumbnails: [
          {
            square: "portfolio/20230605_222407_dmgtok",
            horizontal: "three-min.png",
            vertical: "three-min.png",
          },
        ],
        typeProject: ["Tipo de Proyecto", "3D"],
        techStack: "Tech Stack",
        client: ["Client", "Personal"],
        threeColors: {
          color: [0.8, 0.95, 0.94],
          colorBase: [0.38, 0.09, 0.57],
          colorDeep: [0, 0, 0],
        },
      },
    ],
  },
};
