import Image from "next/image";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { CloudinaryContext, Video } from "cloudinary-react";
import { IconExternal } from "../icons";

const Section = styled.section`
  /* min-height: 500px; */
  /* border: 1px solid white; */
  color: white;
  width: 100%;
  max-width: 1500px;
  margin-inline: auto;

  header {
    h1 {
      font-size: var(--fz-title);
      &::after {
        height: 0px;
      }
    }
  }

  .projects {
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: 3fr minmax(350px, 1fr);
    gap: 6vw;

    .projects__list {
      .projects__list-card {
        width: 100%;
        min-height: 200px;
        border-bottom: 2px solid #eae2b7;
        display: grid;
        grid-template-columns: minmax(160px, 220px) 1fr;
        gap: 2rem;
        padding: 2rem 0;
        .card__image {
          width: 100%;
          height: 100%;
          aspect-ratio: 1 / 1;
          /* display: flex; */
          img {
            border-radius: 6px;
            vertical-align: middle;
          }
        }
        .card__content {
          overflow: hidden;
          height: 100%;
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          h2 {
            font-size: var(--fz-lg);
            color: #eae2b7;
            margin-bottom: 0.3rem;
          }
          p {
            max-width: 600px;
            font-size: var(--fz-smm);
            white-space: normal;
          }

          &-footer {
            background-color: red;
            .footer-feature {
              display: flex;
              gap: 0.4rem;

              .label {
                font-weight: bold;
              }

              .features {
                display: flex;
                gap: 10px;
                span {
                  &:last-of-type {
                    &::after {
                      content: "";
                    }
                  }
                  &::after {
                    content: "·";
                    position: relative;
                    left: 5px;
                  }
                }
              }
            }

            ul {
              display: flex;
              gap: 1rem;
            }
          }
        }
      }
    }

    .projects__single {
      align-items: center;
      width: 100%;
      height: 100%;
      position: relative;
      padding-top: 2rem;
      &-sticky {
        position: sticky;
        top: 2rem;
        display: grid;
        gap: 1rem;
        z-index: 9;

        .card {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          h3 {
            color: #eae2b7;
            font-size: var(--fz-lg);
            margin-bottom: 0.5rem;
          }
          .card-video {
            border-radius: var(--border-radius);
            border: 2px solid var(--border-light);
            display: flex;
            overflow: hidden;
            margin-bottom: 0.5rem;
          }
          .card-content {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            color: #000;
            border-radius: var(--border-radius);
            border: 2px solid var(--border-light);
            padding: 1.5rem;
            background-image: radial-gradient(
              circle farthest-corner at 10% 20%,
              rgba(255, 229, 168, 1) 0%,
              rgba(251, 174, 222, 1) 100.7%
            );
            .card-content-row {
              display: flex;
              flex-direction: column;
              .title {
                font-size: var(--fz-md);
                font-weight: bold;
              }
              .desc {
                font-size: var(--fz-smm);
              }
            }
          }
        }
      }
    }
  }
`;

const ProjectsWrapper = ({ projects, recents }) => {
  const videoRef = useRef();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  console.log(projects);
  return (
    <Section>
      <header>
        <h1 className="title-content">Projects I have worked on</h1>
      </header>
      <div className="projects">
        <div className="projects__list">
          {projects.map((project, i) => {
            console.log(project);
            return (
              <div className="projects__list-card" key={i}>
                <div className="card__image">
                  <a
                    href={project.links[0].href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                  <Image
                    className="images"
                    src={project.thumbnails.square}
                    alt="picture img"
                    height={300}
                    width={300}
                  />
                  </a>
                </div>
                <div className="card__content">
                  <div className="card__content-info">
                    <a
                      href={project.links[0].href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <h2>{project.title}</h2>
                      <p>{project.desc}</p>
                    </a>
                  </div>
                  <div className="card__content-footer">
                    <div className="footer-feature">
                      <span className="label">Build With:</span>
                      <div className="features">
                        {project.features.techStack.values.map((tech) => {
                          return <span key={tech.id}>{tech.label}</span>;
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="projects__single">
          <div className="projects__single-sticky">
            <div className="card">
              <a
                href="http://tarquibrian.github.io/noisethreejs/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>{recents[0].title}</h3>

                <CloudinaryContext cloud_name="dskypy0xt">
                  <div className="card-video">
                    <Video
                      publicId="portfolio/20230605_222407_dmgtok"
                      width="100%"
                      innerRef={videoRef}
                      autoPlay
                      loop
                    />
                  </div>
                </CloudinaryContext>
                <span>! threejs output preview</span>
              </a>
              <div className="card-content">
                <div className="card-content-row">
                  <span className="title">{recents[0].typeProject[0]}</span>
                  <span className="desc">{recents[0].typeProject[1]}</span>
                </div>
                <div className="card-content-row">
                  <span className="title">{recents[0].techStack}</span>
                  <ul className="desc">
                    {recents[0].features.map((feature, i) => {
                      return <li key={i}>{feature.name}</li>;
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ProjectsWrapper;
