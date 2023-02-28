import React from "react";
import styled from "styled-components";

const EmailStyle = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100px;
  height: 100vh;
  /* display: grid; */
  /* place-content: center; */
  /* transform: translateY(-50%); */
  /* height: 100vh; */
  /* display: flex; */
  display: grid;
  place-content: center;
  div {
    /* margin: auto; */
    display: grid;
    grid-template-rows: auto max-content auto;
    gap: 1rem;
    height: 100vh;

    a {
      font-size: 1.2rem;
      /* margin: auto; */
      writing-mode: vertical-lr;
      color: white;
      /* display: grid; */
      /* place-content: center; */
      transition: 0.2s ease;
      &:hover {
        text-shadow: 0 0 5px rgba(255 255 255 / 0.5);
        transform: scale(1.1);
      }
    }

    &::before {
      content: "";
      display: block;
      width: 1px;
      height: 100%;
      margin: 0 auto;
      background-color: rgba(255, 255, 255, 0.5);
    }
    &::after {
      content: "";
      display: block;
      width: 1px;
      height: 100%;
      margin: 0 auto;
      background-color: rgba(255, 255, 255, 0.5);
    }
  }
`;

const RightSide = () => {
  const emailName = (
    <div>
      <a href="mailto:tarquibrian@gmail.com">tarquibrian@gmail.com</a>
    </div>
  );
  return <EmailStyle>{emailName}</EmailStyle>;
};

export default RightSide;
