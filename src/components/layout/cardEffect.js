import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const CardEffectContainer = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  background: ${({ bgColor }) =>
    bgColor === "dark" ? "rgba(0,0,0,.05)" : "rgba(255,255,255,.1)"};
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  border-radius: 4px;
  position: relative;

  &:hover::before {
    opacity: 1;
  }

  &::before {
    background: radial-gradient(
      ${({ lightLevel }) => (lightLevel === "low" ? "400px" : "600px")} circle
        at var(--mouse-x) var(--mouse-y),
      ${({ lightLevel }) =>
        lightLevel === "low"
          ? "rgba(255, 255, 255, 0.10)"
          : "rgba(255, 255, 255, 0.15)"},
      ${({ lightLevel }) =>
        lightLevel === "low" ? "transparent 50%" : "transparent 60%"}
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
    background: ${(props) =>
      props.bgColor === "dark"
        ? "rgba(0,0,0,.03)"
        : "rgba(255, 225, 142, 0.1)"};
  }
`;

const CardEffect = (props) => {
  const cardRef = useRef(null);

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
    <CardEffectContainer ref={cardRef} className="content" {...props}>
      {props.children}
    </CardEffectContainer>
  );
};

export default CardEffect;
