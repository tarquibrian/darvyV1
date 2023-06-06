import Image from "next/image";
import React from "react";
import styled from "styled-components";
import img from "../../images/mf11.png";

const Section = styled.section`
  /* min-height: 500px; */
  /* border: 1px solid white; */
  color: white;
  width: 80%;
  margin-inline: auto;

  .projects {
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: 3fr minmax(300px, 1fr);
    gap: 1rem;

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
        border: 1px solid white;
        position: sticky;
        /* top: 0; */
        top: 2rem;
        display: grid;
        gap: 1rem;
        z-index: 9;
        /* padding: 2rem 5% 3rem; */
      }
    }
  }
`;

const ProjectsWrapper = (props) => {
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
            <div className="card">{props.items[0].desc}</div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ProjectsWrapper;
