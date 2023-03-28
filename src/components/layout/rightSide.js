import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const EmailStyle = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 100px;
  height: 100vh;
  display: grid;
  place-content: center;
  div {
    /* margin: auto; */
    display: grid;
    grid-template-rows: auto max-content auto;
    gap: 1rem;
    height: 100vh;

    a {
      font-family: "DMSans", sans-serif;
      font-size: 1.2rem;
      writing-mode: vertical-lr;
      color: white;
      transition: 0.2s ease;
      &:hover {
        text-shadow: 0 0 3px rgba(255 255 255 / 0.8);
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
  @media screen and (max-width: 1080px) {
    width: 80px;
  }

  @media screen and (max-width: 1000px) {
    /* display: none; */
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const RightSide = () => {
  const emailName = (
    <div>
      <a href="mailto:tarquibrian@gmail.com">tarquibrian@gmail.com</a>
    </div>
  );
  return (
    <EmailStyle
      initial={{ x: 100 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.6 }}
    >
      {emailName}
    </EmailStyle>
  );
};

export default RightSide;
