import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useAppContext } from "src/context/app.context";
import { useRouter } from "next/router";

const EmailStyle = styled(motion.div)`
  min-width: 100px;
  position: fixed;
  bottom: 0;
  right: 0;
  min-height: 100vh;
  display: grid;
  place-content: center;
  z-index: 999;
  right: ${({ isHome }) => (isHome ? "0px" : "-100px")};
  .right {
    display: grid;
    grid-template-rows: auto max-content auto;
    gap: 1rem;
    height: 100vh;

    span {
      display: flex;
      justify-content: center;
      align-items: center;

      a {
        border: 2px solid rgba(255, 255, 255, 0.4);
        border-radius: 8px;
        padding: 1rem 0.8rem;
        font-family: "DMSans", sans-serif;
        font-size: 1.2rem;
        writing-mode: vertical-lr;
        transition: 0.2s ease;
        &:hover {
          text-shadow: 0 0 8px rgba(255 255 255 / 0.8);
        }
      }
    }

    &::before {
      content: "";
      display: block;
      width: 0px;
      height: 100%;
      margin: 0 auto;
      background-color: ${({ theme }) =>
        theme === "dark" ? "rgba(255, 255, 255, 0.5)" : "rgba(0,0,0, 0.5)"};
    }
    &::after {
      content: "";
      display: block;
      width: 0px;
      height: 100%;
      margin: 0 auto;
      background-color: ${({ theme }) =>
        theme === "dark" ? "rgba(255, 255, 255, 0.5)" : "rgba(0,0,0, 0.5)"};
    }
  }

  .dark {
    a {
      color: white;
    }
    &::before {
      background-color: rgba(255, 255, 255, 0.5);
    }
    &::after {
      background-color: rgba(255, 255, 255, 0.5);
    }
  }
  .light {
    a {
      color: black;
    }
    &::before {
      background-color: rgba(0, 0, 0, 0.5);
    }
    &::after {
      background-color: rgba(0, 0, 0, 0.5);
    }
  }
  @media screen and (max-width: 1080px) {
    width: 80px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const RightSide = () => {
  const router = useRouter();
  const { state } = useAppContext();
  const emailName = (
    <div
      className={`right ${state.currentTheme === "dark" ? "dark" : "light"}`}
    >
      <span>
        <a href="mailto:tarquibrian@gmail.com">tarquibrian@gmail.com</a>
      </span>
    </div>
  );
  return (
    <EmailStyle
      initial={{ x: 100 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.6, delay: 0.7 }}
      // theme={state.currentTheme}
      isHome={router.asPath === "/" ? true : false}
    >
      {emailName}
    </EmailStyle>
  );
};

export default RightSide;
