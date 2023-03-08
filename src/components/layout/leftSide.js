import React from "react";
import styled from "styled-components";
import { IconGitHub, IconInstagram, IconLinkedIn } from "@components";

const SideStyle = styled.div`
  min-width: 100px;
  /* width: 3%; */
  position: fixed;
  bottom: 0;
  left: 0;
  min-height: 100vh;
  display: grid;
  place-content: center;
  /* overflow: hidden; */
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
          transform: scale(1.2);
        }
        svg {
          height: 24px;
          width: 24px;
        }
      }
    }
    /* &::before {
      content: "";
      display: block;
      width: 1px;
      height: 159px;
      margin: 0 auto;
      background-color: #2b2c28;
      background-color: white;
    } */
    /* &::after {
      content: "";
      display: block;
      width: 1px;
      height: 40vh;
      margin: 0 auto;
      background-color: rgba(255, 255, 255, 0.5);
    } */
  }

  @media screen and (max-width: 1080px) {
    min-width: 80px;
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
          <a href="/" target="_blank" rel="noreferrer">
            <IconInstagram />
          </a>
        </li>
        <li>
          <a href="/" target="_blank" rel="noreferrer">
            <IconLinkedIn />
          </a>
        </li>
        <li>
          <a href="/" target="_blank" rel="noreferrer">
            <IconGitHub />
          </a>
        </li>
      </ol>
    </div>
  );
  return <SideStyle>{social}</SideStyle>;
};

export default LeftSide;
