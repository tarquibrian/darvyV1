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

  .projects {
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: 3fr minmax(350px, 1fr);
    gap: 6vw;
    padding: 0 2rem;

    .projects__list {
      .projects__list-card {
        display: flex;
        gap: 2rem;
        margin-bottom: 1rem;
        width: 100%;
        height: 290px;
        border-bottom: 2px solid #eae2b7;
        padding: 2rem 0;
        .card__image {
          aspect-ratio: 1 / 1;
          height: 100%;
          overflow: hidden;
          border-radius: 6px;
        }
        .card__content {
          height: 100%;
          h2 {
            font-size: var(--fz-lg);
            color: #eae2b7;
            margin-bottom: 0.3rem;
          }
          p {
            max-width: 600px;
            font-size: var(--fz-smm);
          }
          display: flex;
          flex-direction: column;
          justify-content: space-between;

          &-footer {
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
  return (
    <Section>
      <div className="projects">
        <div className="projects__list">
          {projects.map((project, i) => {
            return (
              <div className="projects__list-card" key={i}>
                <div className="card__image">
                  <Image
                    className="images"
                    src={project.thumbnails.square}
                    alt="picture img"
                    height={300}
                    width={300}
                  />
                </div>
                <div className="card__content">
                  <div className="card__content-info">
                    <a
                      href={project.links[0].path}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <h2>{project.title}</h2>
                    </a>
                    <p>{project.desc}</p>
                  </div>
                  <div className="card__content-footer">
                    <ul>
                      <li>text</li>
                      <li>text</li>
                      <li>text</li>
                      <li>text</li>
                    </ul>
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
