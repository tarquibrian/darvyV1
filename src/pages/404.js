import { Layout } from "@components";
import Link from "next/link";
import { useEffect, useRef } from "react";
import styled from "styled-components";

const FourOhFourStyled = styled.section`
  width: 80%;
  margin: auto;
  display: grid;
  place-content: center;
  height: 100vh;
  .container {
    border-radius: 4px;
    font-family: "DM Sans", sans-serif;
    font-weight: normal;
    padding: 40px;
    background: rgba(255, 255, 255, 0.1);
    /* background: rgba(255, 255, 255, 0.05)
    linear-gradient(to top right, rgba(255, 235, 0, 0.15)); */
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    z-index: 9;
    transition: 0.8s ease;
    h1 {
      color: #eae2b7;
      font-size: clamp(40px, 8vw, 80px);
    }

    h2 {
      font-family: "Oswald", sans-serif;
      font-size: clamp(40px, 8vw, 80px);
      font-weight: 200;
      margin-bottom: 20px;
      margin-left: -4px;
      color: transparent;
      text-shadow: 0 0 5px rgba(255 255 255 / 1);
      -webkit-text-stroke: 1px white;
    }

    .links {
      .container__arrow-left {
        font-size: 1.4rem;
        margin-right: 0.5rem;
      }
      &:hover {
        color: rgba(255, 255, 255, 0.6);
        .container__arrow-left {
          margin-right: 0.35rem;
        }
      }
    }

    &:hover::before {
      opacity: 1;
    }

    &::before {
      background: radial-gradient(
        800px circle at var(--mouse1-x) var(--mouse1-y),
        rgba(255, 255, 255, 0.15),
        transparent 40%
      );
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
    &:hover {
      /* background: rgba(255, 255, 255, 0.05)
        linear-gradient(
          to top right,
          rgba(255, 255, 255, 0),
          rgba(255, 235, 0, 0.15)
        ); */

      background: rgba(255, 225, 142, 0.1);
    }
  }
`;

export default function FourOhFour() {
  const ref = useRef(null);

  const handleOnMouseMove = (e) => {
    let rect = ref?.current?.getBoundingClientRect(),
      x = e?.clientX - rect?.left,
      y = e?.clientY - rect?.top;

    ref?.current?.style?.setProperty("--mouse1-x", `${x}px`);
    ref?.current?.style?.setProperty("--mouse1-y", `${y}px`);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleOnMouseMove);
  }, []);

  return (
    <Layout>
      <FourOhFourStyled>
        <div className="container" ref={ref}>
          <h1>404!</h1>
          <h2>Oh dude. Are you lost?</h2>
          <Link href="/" className="links">
            <span className="container__arrow-left">←</span> Go back home
          </Link>
        </div>
      </FourOhFourStyled>
    </Layout>
  );
}
