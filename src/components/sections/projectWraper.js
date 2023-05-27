import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { useAppContext } from "src/context/app.context";
import styled from "styled-components";
import { Cloudinary } from "cloudinary-core";
import { Video, CloudinaryContext } from "cloudinary-react";

const ProjectWrapperStyled = styled.section`
  padding: 0;
  min-height: 500px;
  width: 86%;
  /* max-width: calc(100% - 100px); */
  max-width: 1640px;
  margin: auto;
  height: 100vh;
  overflow: hidden;
  /* background-color: rgba(1, 1, 1, 0.1); */
  .dark {
    .text {
      color: rgba(230, 230, 230, 1);
    }
    .content {
      border: 2px solid rgba(255, 255, 255, 0.4);
      background: rgba(255, 255, 255, 0.1);
      &::before {
        background: radial-gradient(
          1000px circle at var(--mouse1-x) var(--mouse1-y),
          rgba(255, 255, 255, 0.2),
          transparent 40%
        );
      }
      &:hover {
        border-color: rgba(255, 255, 255, 0.2);
        background: var(--bg-color-hover);
      }
    }
    p,
    h1,
    h2,
    h3,
    header {
      color: white;
    }
  }

  .light {
    .text {
      color: rgba(60, 60, 60, 1);
    }
    .content {
      border: 2px solid rgba(0, 0, 0, 0.5);
      background: rgba(0, 0, 0, 0.1);
      &::before {
        background: radial-gradient(
          1400px circle at var(--mouse1-x) var(--mouse1-y),
          rgba(255, 255, 255, 0.6),
          transparent 40%
        );
      }
      &:hover {
        border-color: rgba(0, 0, 0, 0.2);
        background: rgba(0, 0, 0, 0.15);
      }
    }
    p,
    p,
    h1,
    h2,
    h3,
    header {
      color: black;
    }
  }

  .projectWrapper {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 2rem;

    .carouselTitle {
      /* background-color: rgba(111, 1, 111, 0.5); */
      width: calc(180px - 2rem);
    }
    .carouselColumn {
      transform: rotate(180deg) translateY(115%);
      animation: textCarousel 28s linear infinite;
      .text {
        display: flex;
        font-family: var(--ff-rubik);
        font-weight: 900;
        font-size: 10rem;
        writing-mode: vertical-rl;
        text-transform: uppercase;
        white-space: nowrap;
        line-height: 1;
        margin-bottom: 2rem;
      }
    }

    .container {
      /* background-color: rgba(1, 1, 1, 0.2); */
      position: relative;
      overflow: hidden;
      width: 100%;
      height: 100vh;
      /* padding: 5rem 0 10rem; */
      /* top: 5rem; */
      /* padding-top: 8rem; */
      display: grid;
      grid-template-columns: 3fr 1fr;
      gap: 2rem;

      img {
        display: block;
        width: 100%;
        /* max-width: 400px; */
      }

      .content {
        height: 500px;
        width: 100%;
        margin-bottom: 1rem;
        border-radius: var(--border-radius);
        padding: 40px;

        position: relative;
        /* overflow: hidden; */

        &:hover::before {
          opacity: 1;
        }

        &::before {
          border-radius: inherit;
          content: "";
          position: absolute;
          height: 100%;
          width: 100%;
          top: 0%;
          left: 0%;
          opacity: 0;
          transition: opacity 500ms;
          z-index: -1;
        }
      }

      .left {
        padding-top: 18rem;
        padding-bottom: 12rem;
        overflow-x: hidden;
        width: 100%;
        /* max-width: 80%; */
        /* &::-webkit-scrollbar {
          display: none;
        } */
        article {
          max-width: 80%;
          /* -webkit-backdrop-filter: blur(10px); */
          /* backdrop-filter: blur(10px); */

          .header__article-title {
            font-size: var(--fz-subtitle);
            font-weight: 800;
          }
        }
        &::-webkit-scrollbar {
          display: none;
        }
      }

      .right {
        position: relative;

        padding-top: 8rem;
        /* margin-bottom: 10rem; */
        padding-bottom: 12rem;
        overflow-x: hidden;
        .gallery {
          display: flex;
          gap: 1rem;
          width: 100%;
        }
        .column {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        &::-webkit-scrollbar {
          display: none;
        }
      }

      &::-webkit-scrollbar {
        display: none;
      }
    }
  }

  @keyframes textCarousel {
    0% {
      transform: rotate(180deg) translateY(115%);
    }
    100% {
      transform: rotate(180deg) translateY(-20%);
    }
  }
`;

const ProjectWrapper = (props) => {
  const { state, updateColor, changeTheme } = useAppContext();
  const ref = useRef(null);
  const videoRef = useRef();
  const cloudinaryRef = useRef();
  const playerRef = useRef();
  const cld = new Cloudinary({ cloud_name: "dskypy0xt" });
  console.log(cld);

  const handleOnMouseMove = (e) => {
    const rect = ref?.current?.getBoundingClientRect(),
      x = e?.clientX - rect?.left,
      y = e?.clientY - rect?.top;

    ref?.current?.style?.setProperty("--mouse1-x", `${x}px`);
    ref?.current?.style?.setProperty("--mouse1-y", `${y}px`);
  };

  useEffect(() => {
    updateColor(props.threeColors);
    changeTheme(props.themeMode);
    window.addEventListener("mousemove", handleOnMouseMove);
    // const videoPlayer = cld.videoPlayer("video-player", {
    //   muted: true,
    //   controls: true,
    // });
    // videoPlayer.source("video-blog/cat");
  }, []);

  console.log(props);
  return (
    <ProjectWrapperStyled>
      <CloudinaryContext cloud_name="dskypy0xt">
        <div>
          <Video
            publicId="samples/elephants"
            width="100%"
            // controls
            innerRef={videoRef}
            autoPlay
            
          />
        </div>
      </CloudinaryContext>
      <div
        className={`projectWrapper ${
          state.currentTheme === "dark" ? "dark" : "light"
        }`}
      >
        <div className="carouselTitle">
          <div className="carouselColumn">
            <span className="text">{props.title}</span>
            <span className="text">-</span>
            <span className="text">{props.label}</span>
            <span className="text">-</span>
            <span className="text">{props.title}</span>
            <span className="text">-</span>
            <span className="text">{props.label}</span>
          </div>
        </div>
        <div className="container text">
          <div className="left text">
            <article className="">
              <header className="header__article">
                <h1 className="header__article-title">{props.blog.title}</h1>
              </header>
              <div dangerouslySetInnerHTML={{ __html: props.blog.body }}></div>
            </article>
          </div>
          <div className="right">
            <div className="gallery">
              <div className="column">
                <Image
                  src={`/images/p3-1-min.png`}
                  alt={props.title}
                  className="images"
                  width={500}
                  height={800}
                  // loading="lazy"
                  // placeholder="blur"
                />
                <Image
                  src={`/images/p3-2-min.png`}
                  alt={props.title}
                  className="images"
                  width={500}
                  height={800}
                  // loading="lazy"
                  // placeholder="blur"
                />
                <Image
                  src={`/images/p3-3-min.png`}
                  alt={props.title}
                  className="images"
                  width={500}
                  height={800}
                  // loading="lazy"
                  // placeholder="blur"
                />
              </div>
              <div className="column">
                <Image
                  src={`/images/${props.imgs[0]}`}
                  alt={props.title}
                  className="images"
                  width={500}
                  height={800}
                  // loading="lazy"
                  // placeholder="blur"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProjectWrapperStyled>
  );
};

export default ProjectWrapper;
