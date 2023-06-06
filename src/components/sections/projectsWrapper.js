import Image from "next/image";
import React, { useRef } from "react";
import styled from "styled-components";
import img from "../../images/mf11.png";
import { CloudinaryContext, Video } from "cloudinary-react";

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
        border-bottom: 1px solid white;
        padding: 2rem 0;
        .card__image {
          aspect-ratio: 1 / 1;
          height: 100%;
          overflow: hidden;
          border-radius: 6px;
        }
        .card__content {
          height: 100%;
          p {
            max-width: 400px;
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
      }
    }
  }
`;

const ProjectsWrapper = (props) => {
  const videoRef = useRef();
  console.log(props.items);
  return (
    <Section>
      <div className="projects">
        <div className="projects__list">
          {props.items.map((project, i) => {
            return (
              <div className="projects__list-card" key={i}>
                <div className="card__image">
                  <Image
                    className="images"
                    src={img}
                    alt="picture img"
                    height={300}
                    width={300}
                  />
                </div>
                <div className="card__content">
                  <div className="card__content-info">
                    <h2>{project.title}</h2>
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
                <h3>{props.recents[0].title}</h3>

                <div className="card-video">
                  <CloudinaryContext cloud_name="dskypy0xt">
                    <div className="video-content">
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
                </div>
              </a>
              <div className="card-content">
                <div className="card-content-row">
                  <span>Used:</span>
                  <ul>
                    {props.recents[0].features.map((feature, i) => {
                      return <li key={i}>{feature.name}</li>;
                    })}
                  </ul>
                </div>
                <div className="card-content-row">
                  <span>{props.recents[0].typeProject[0]}</span>
                  <span>{props.recents[0].typeProject[1]}</span>
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
