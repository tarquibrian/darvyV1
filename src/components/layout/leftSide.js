import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  IconCodepen,
  IconDribbble,
  IconGitHub,
  IconInstagram,
  IconLinkedIn,
  IconMedium,
} from "@components";
import { motion, useAnimation } from "framer-motion";
import { useAppContext } from "src/context/app.context";

const SideStyle = styled(motion.div)`
  min-width: 100px;
  position: fixed;
  bottom: 0;
  left: 0;
  min-height: 100vh;
  display: grid;
  place-content: center;
  z-index: 999;
  .left {
    display: grid;
    grid-template-rows: auto max-content auto;
    gap: 1rem;
    height: 100vh;
    a {
      font-size: 1.2rem;
      writing-mode: vertical-lr;
      color: white;
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
    }
    &::after {
      content: "";
      display: block;
      width: 1px;
      height: 100%;
      margin: 0 auto;
    }
  }

  .dark {
    a,
    svg {
      color: white;
    }
    &::before {
      background-color: rgba(255, 255, 255, 0);
    }
    &::after {
      background-color: rgba(255, 255, 255, 0);
    }
  }
  .light {
    a {
      color: black;
    }
    &::before {
      background-color: rgba(0, 0, 0, 0);
    }
    &::after {
      background-color: rgba(0, 0, 0, 0);
    }
  }

  ul {
    z-index: 999;
    /* width: 100%; */
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    border: 2px solid rgba(255, 255, 255, 0.4);
    padding: .8rem;
    border-radius: 8px;

    li {
      a {
        text-align: center;
        width: 100%;
        padding: 6px 0;
        transition: 0.2s ease;
        display: flex;
        svg {
          height: 24px;
          width: 24px;
        }
        &:hover {
          text-shadow: 0 0 5px rgba(255 255 255 / 0.5);
          transform: scale(1.15);
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
  const { state } = useAppContext();
  const social = (
    <div className={`left ${state.currentTheme === "dark" ? "dark" : "light"}`}>
      <ul>
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
        {/* <li>
          <a
            href="https://medium.com/@tarquibrian"
            target="_blank"
            rel="noreferrer"
          >
            <IconMedium />
          </a>
        </li>
        <li>
          <a
            href="https://dribbble.com/tarquibrian"
            target="_blank"
            rel="noreferrer"
          >
            <IconDribbble />
          </a>
        </li> */}
      </ul>
    </div>
  );
  return (
    <SideStyle
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.6, delay: 0.7 }}
    >
      {social}
    </SideStyle>
  );
};

export default LeftSide;
