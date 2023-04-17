import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const CardEffectContainer = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  background-color: rgba(255, 255, 255, 0.1);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
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
    background-color: rgba(255, 225, 142, 0.1);
  }
`;

const CardEffect = ({ children }) => {
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
    <CardEffectContainer ref={cardRef} className="content">
      {children}
    </CardEffectContainer>
  );
};

export default CardEffect;
