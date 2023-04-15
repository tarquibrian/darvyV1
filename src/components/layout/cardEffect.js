import React, { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";

const CardEffectContainer = styled.div`
  width: 100%;
  margin: auto;
  /* min-height: 300px; */
  display: flex;
  /* max-width: 920px; */
  /* background: rgba(255, 255, 255, 0.8); */
  /* background: rgba(255, 255, 255, 0.05)
    linear-gradient(to top right, rgba(255, 235, 0, 0.15)); */
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  /* z-index: 999; */
  position: relative;

  &:hover::before {
    opacity: 1;
  }

  &::before {
    background: radial-gradient(
      400px circle at var(--mouse-x) var(--mouse-y),
      rgba(255, 255, 255, 0.15),
      transparent 60%
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
    z-index: 100;
  }
  &:hover {
    /* background: rgba(255, 255, 255, 0.05)
        linear-gradient(
          to top right,
          rgba(255, 255, 255, 0),
          rgba(255, 235, 0, 0.15)
        ); */

    /* background: rgba(0, 0, 0, 0.1); */
    background-color: rgba(234, 226, 183, 0.15);
    /* z-index: 999; */
  }
`;

const CardEffect = ({ children }) => {
  const cardRef = useRef(null);
  const [ref, inView] = useInView();

  const handleOnMouseMove = (e) => {
    let rect = cardRef?.current?.getBoundingClientRect(),
      x = e?.clientX - rect?.left,
      y = e?.clientY - rect?.top;

    cardRef.current?.style?.setProperty("--mouse-x", `${x}px`);
    cardRef.current?.style?.setProperty("--mouse-y", `${y}px`);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleOnMouseMove);
  }, []);

  return (
    <CardEffectContainer ref={cardRef} className="content">
      {children}
    </CardEffectContainer>
  );
};

export default CardEffect;
