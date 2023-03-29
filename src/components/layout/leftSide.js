import React from "react";
import styled from "styled-components";
import {
  IconCodepen,
  IconGitHub,
  IconInstagram,
  IconLinkedIn,
} from "@components";
import { motion } from "framer-motion";

const SideStyle = styled(motion.div)`
  min-width: 100px;
  /* width: 3%; */
  position: fixed;
  bottom: 0;
  left: 0;
  min-height: 100vh;
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
      writing-mode: vertical-lr;
      color: white;
      transition: 0.2s ease;
      &:hover {
        filter: drop-shadow(0 0 3px rgba(255 255 255 / 0.8));
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

  ol {
    z-index: 999;
    /* width: 100%; */
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    li {
      width: 100%;
      a {
        text-align: center;
        width: 100%;
        color: rgba(255, 255, 255, 1);
        padding: 6px 0;
        transition: 0.2s ease;
        &:hover {
          /* color: rgba(255, 255, 255, 0.7); */
          /* transform: scale(1.2); */
          text-shadow: 0 0 5px rgba(255 255 255 / 0.5);
        }
        svg {
          height: 24px;
          width: 24px;
        }
      }
    }
  }

  @media screen and (max-width: 1080px) {
    min-width: 80px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const LeftSide = () => {
  const social = (
    <div>
      <ol>
        <li>
          <a
            href="https://github.com/tarquibrian"
            target="_blank"
            rel="noreferrer"
          >
            <IconGitHub />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/tarquibrian"
            target="_blank"
            rel="noreferrer"
          >
            <IconLinkedIn />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/tarqui_brian"
            target="_blank"
            rel="noreferrer"
          >
            <IconInstagram />
          </a>
        </li>
        <li>
          <a
            href="https://codepen.io/tarquibrian"
            target="_blank"
            rel="noreferrer"
          >
            <IconCodepen />
          </a>
        </li>
      </ol>
    </div>
  );
  return (
    <SideStyle
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.6 }}
    >
      {social}
    </SideStyle>
  );
};

export default LeftSide;
