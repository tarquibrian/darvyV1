import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { useAppContext } from "src/context/app.context";
import styled from "styled-components";

const ProjectWrapperStyled = styled.section`
  padding: 0;
  min-height: 500px;
  width: 80%;
  margin: auto;
  height: 100vh;
  overflow: hidden;
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
    p {
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
    p {
      color: black;
    }
  }

  .projectWrapper {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 1rem;
    /* overflow: auto; */

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
      overflow: auto;
      width: 100%;
      height: 100vh;
      padding: 5rem 0 10rem;
      display: grid;
      grid-template-columns: 1fr 250px;
      gap: 2rem;
      strong {
        background-color: rgba(1, 1, 1, 0.4);
      }

      .content {
        height: 500px;
        width: 100%;
        margin-bottom: 1rem;
        border-radius: var(--border-radius);
        padding: 40px;

        position: relative;

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
  }, []);

  console.log(props);
  return (
    <ProjectWrapperStyled>
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
            <header>{props.blog.title}</header>

            {props.blog.wrapper.map((item, i) => {
              console.log("items" + i, item);
              return (
                <div key={i}>
                  {item[0].map((item2, i) => (
                    <p key={i} dangerouslySetInnerHTML={{ __html: item2 }} />
                  ))}
                  <Image
                    src={item[1][0]}
                    alt={item[1][1]}
                    width={800}
                    height={700}
                  />
                  <span dangerouslySetInnerHTML={{ __html: item[1][1] }}></span>
                </div>
              );
            })}

            {/* {props.blog.descOne.map((item, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: item }} />
            ))}

            <Image
              src={props.blog.imgOne[0]}
              alt={props.blog.imgOne[1]}
              width={800}
              height={700}
            />
            <span
              dangerouslySetInnerHTML={{ __html: props.blog.imgOne[1] }}
            ></span>
            {props.blog.descTwo.map((item, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: item }} />
            ))}
            <Image
              src={props.blog.imgTwo[0]}
              alt={props.blog.imgTwo[1]}
              width={800}
              height={700}
            />
            <span
              dangerouslySetInnerHTML={{ __html: props.blog.imgOne[1] }}
            ></span>

            <p dangerouslySetInnerHTML={{ __html: props.blog.conclusion }}></p> */}
            {/* <div
              className="text"
              ref={ref}
              aria-readonly
              dangerouslySetInnerHTML={{ __html: props.desc }}
            /> */}
            <div />
          </div>
          <div className="right">
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
    </ProjectWrapperStyled>
  );
};

export default ProjectWrapper;
