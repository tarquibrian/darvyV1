import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const CardEffectContainer = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  background: var(--bg-color);

  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  border-radius: 4px;
  position: relative;

  &:hover::before {
    opacity: 1;
  }

  &::before {
    background: radial-gradient(
      800px circle at var(--mouse-x) var(--mouse-y),
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
    z-index: 10;
  }
  &:hover {
    background: var(--bg-color-hover);
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
