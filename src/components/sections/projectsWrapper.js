import Image from "next/image";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { CloudinaryContext, Video } from "cloudinary-react";
import { IconArrow, IconCaution, IconExternal } from "../icons";
import Link from "next/link";

const Section = styled.section`
  /* min-height: 500px; */
  /* border: 1px solid white; */
  color: white;
  width: 90%;
  max-width: 1500px;
  margin-inline: auto;
  /* padding-right: 2rem; */
  /* padding-left: 2rem; */

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
        h3 {
          color: #eae2b7;
          font-size: var(--fz-lg);
          margin-bottom: 0.5rem;
        }

        .card {
          display: flex;
          flex-direction: column;
          gap: 2rem;

          .card-video {
            border-radius: var(--border-radius);
            border: 2px solid var(--border-light);
            display: flex;
            overflow: hidden;
            margin-bottom: 2rem;
          }
          a {
            span {
              svg {
                width: 20px;
                height: 20px;
                margin-right: 0.4rem;
              }
            }
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

    @media screen and (max-width: 1000px) {
      grid-template-columns: 1fr;

      .projects__single {
        order: 1;
        &-sticky {
          .card {
            display: grid;
            grid-template-columns: minmax(200px, 1fr) 2fr;
            a {
              .card-video {
                background-color: red;
                display: flex;
              }
              span {
                /* display: none; */
              }
            }
            .card-content {
              /* height: fit-content; */
              background-color: red;
            }
          }
        }
      }

      .projects__list {
        order: 2;
      }
    }

    @media screen and (max-width: 600px) {
      .projects__single {
        &-sticky {
          .card {
            display: grid;
            grid-template-columns: minmax(100px, 1fr) 2fr;
          }
        }
      }
    }
  }
`;

const ProjectCard = styled.div`
  width: 100%;
  min-height: 200px;
  border-bottom: 2px solid #eae2b7;
  .projects__list-card {
    display: grid;
    grid-template-columns: minmax(160px, 220px) 1fr;
    gap: 2rem;
    padding: 2rem 0;
    transition: 600ms ease;
    .card__image {
      width: 100%;
      height: 100%;
      aspect-ratio: 1 / 1;
      img {
        border-radius: 6px;
        vertical-align: middle;
      }
    }
    .card__content {
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 2rem;

      &-info {
        a {
          width: 100%;
          display: flex;
          justify-content: space-between;
          gap: 2rem;

          svg {
            width: 30px;
            height: 30px;
            fill: var(--c-light);
          }
        }
      }
      h2 {
        font-size: var(--fz-lg);
        color: #eae2b7;
        margin-bottom: 0.3rem;
        span {
          margin-right: 0.7rem;
        }
      }
      p {
        max-width: 600px;
        font-size: var(--fz-smm);
        white-space: normal;
      }

      &-footer {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        flex-wrap: wrap;
        gap: 0.2rem;
        .footer-features {
          .footer-feature {
            display: flex;
            gap: 0.4rem;
            font-size: var(--fz-sm);

            .label {
              font-weight: bold;
              white-space: nowrap;
            }

            .features {
              display: flex;
              flex-wrap: wrap;
              gap: 10px;
              span {
                font-weight: 200;
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
        }

        .footer-links {
          display: flex;
          gap: 0.5rem;
          svg {
            width: 24px;
            height: 24px;
            color: var(--c-light);
            vertical-align: middle;

            &:hover {
              filter: drop-shadow(0 0 3px rgba(255, 255, 255, 0.4));
              transform: scale(1.1);
            }
          }
        }

        ul {
          display: flex;
          gap: 1rem;
        }
      }
    }

    &:hover {
      transform: translateX(1rem);
      .info-link {
        svg {
          transform: rotate(45deg);
        }
      }
    }
  }

  &:hover {
    .projects__list-card {
      -webkit-backdrop-filter: blur(10px);
      backdrop-filter: blur(10px);
    }
  }

  @media screen and (max-width: 600px) {
    .projects__list-card {
      grid-template-columns: 1fr;
      .card__image {
        height: fit-content;
        width: fit-content;
        width: 50vw;
      }

      &:hover {
        transform: initial;
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
              <ProjectCard key={i}>
                <div className="projects__list-card">
                  <div className="card__image">
                    <Link href={`/projects/${project.id}`} scroll={false}>
                      <Image
                        className="images"
                        src={project.thumbnails.square}
                        alt="picture img"
                        height={300}
                        width={300}
                      />
                    </Link>
                  </div>
                  <div className="card__content">
                    <div className="card__content-info">
                      <Link href={`/projects/${project.id}`} scroll={false}>
                        <div className="info-content">
                          <h2>
                            <span>✦</span>
                            {project.title}
                          </h2>
                          <p>{project.desc}</p>
                        </div>
                        <div className="info-link">
                          <IconArrow />
                        </div>
                      </Link>
                    </div>
                    <div className="card__content-footer">
                      <div className="footer-features">
                        <div className="footer-feature">
                          <span className="label">Made At:</span>
                          <div className="features">
                            <span>Darvy Agency</span>
                          </div>
                        </div>
                        <div className="footer-feature">
                          <span className="label">Build With:</span>
                          <div className="features">
                            {project.features.techStack.values.map((tech) => {
                              return <span key={tech.id}>{tech.label}</span>;
                            })}
                          </div>
                        </div>
                      </div>

                      <div className="footer-links">
                        {project.links.map((link) => {
                          const Icon = link.svg;
                          return (
                            <span key={link.id}>
                              <a
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Icon />
                              </a>
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </ProjectCard>
            );
          })}
        </div>
        <div className="projects__single">
          <div className="projects__single-sticky">
            <h3>{recents[0].title}</h3>
            <div className="card">
              <a
                href="http://tarquibrian.github.io/noisethreejs/"
                target="_blank"
                rel="noopener noreferrer"
              >
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
                <span>
                  <IconCaution /> threejs output preview
                </span>
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
