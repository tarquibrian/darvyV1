import React, { useEffect, useState } from "react";
import styled from "styled-components";
import anime from "animejs";
import { easeIn, motion } from "framer-motion";
import { Chivo_Mono } from "@next/font/google";
import Image from "next/image";
import imgDarvy from "../../images/darvy-icon.png";

const chivo = Chivo_Mono({
  subsets: ["latin"],
});

const LoaderSection = styled(motion.div)`
  font-family: var(--chivo-mono);
  font-weight: 900;
  position: fixed;
  inset: 0 0 0 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(217, 4, 41, 1);
  display: grid;
  background-image: linear-gradient(
    112.4deg,
    rgba(170, 0, 0, 1) -5.8%,
    rgba(128, 0, 0, 1) 100.2%
  );
  background-image: radial-gradient(
    circle 863px at 49.1% 0%,
    rgba(170, 0, 0, 1) -5.8%,
    rgba(128, 0, 0, 1) 100.2%
  );
  background-image: radial-gradient(
    circle farthest-corner at 1.3% 2.8%,
    rgba(239, 249, 249, 1) 0%,
    rgba(182, 199, 226, 1) 100.2%
  );
  background-image: radial-gradient(
    circle farthest-corner at 50% 50%,
    rgba(222, 226, 230, 1) 0%,
    rgba(152, 193, 217, 1) 100.2%
  );

  place-content: center;
  z-index: 999999;
  .dinone {
    display: none;
  }
`;

const LogoContainer = styled.div`
  width: 100px;
  height: 100px;
  position: relative;
  display: grid;
  place-content: center;
  color: #fa4238;
  font-weight: bolder;
  /* font-family: "Raleway", sans-serif; */
  white-space: nowrap;
  header {
    display: flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    font-size: 1.5rem;
    gap: 1rem;
    img {
      width: 50px;
      height: auto;
    }
    .first {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
    .figure {
      position: relative;
      margin-top: -6px;
      font-size: 51px;
    }
  }

  .title {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: grid;
    place-content: center;
  }
`;

const SpinerLoader = styled.div`
  width: 100px;
  height: 100px;
  border: 4px solid #fff;
  border-radius: 50%;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 88px;
    height: 88px;
    border-radius: 50%;
    border: 6px solid;
    border-color: #ee2e31 transparent;
    animation: rotation 1s linear infinite;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0);
    }
    25% {
      transform: rotate(60deg);
    }
    50% {
      transform: rotate(130deg);
    }
    75% {
      transform: rotate(200deg);
    }
    90% {
      transform: rotate(290deg);
    }
    100% {
      transform: rotate(365deg);
    }
  }
`;

const HeaderLoader = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  opacity: 1;
  pointer-events: none;
  -webkit-transition: opacity cubic-bezier(0.4, 0, 0.2, 1) 436ms;
  -moz-transition: opacity cubic-bezier(0.4, 0, 0.2, 1) 436ms;
  transition: opacity cubic-bezier(0.4, 0, 0.2, 1) 436ms;
  z-index: 9999;

  .ipl-progress-indicator-head {
    background-color: #fff;
    height: 0.4vh;
    overflow: hidden;
    position: relative;

    .first-indicator,
    .second-indicator {
      background-color: #ee2e31;
      bottom: 0;
      left: 0;
      right: 0;
      top: 0;
      position: absolute;
      -webkit-transform-origin: left center;
      -moz-transform-origin: left center;
      transform-origin: left center;
      -webkit-transform: scaleX(0);
      -moz-transform: scaleX(0);
      transform: scaleX(0);
    }
    .first-indicator {
      -webkit-animation: first-indicator 2s linear infinite;
      -moz-animation: first-indicator 2s linear infinite;
      animation: first-indicator 2s linear infinite;
    }
    .second-indicator {
      -webkit-animation: second-indicator 2s linear infinite;
      -moz-animation: second-indicator 2s linear infinite;
      animation: second-indicator 2s linear infinite;
    }

    @-webkit-keyframes fadein {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    @-moz-keyframes fadein {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    @keyframes fadein {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    @keyframes first-indicator {
      0% {
        transform: translate(0) scaleX(0);
      }
      25% {
        transform: translate(0) scaleX(0.5);
      }
      50% {
        transform: translate(25%) scaleX(0.75);
      }
      75% {
        transform: translate(100%) scaleX(0);
      }
      100% {
        transform: translate(100%) scaleX(0);
      }
    }
    @keyframes second-indicator {
      0% {
        transform: translate(0) scaleX(0);
      }
      60% {
        transform: translate(0) scaleX(0);
      }
      80% {
        transform: translate(0) scaleX(0.6);
      }
      100% {
        transform: translate(100%) scaleX(0.1);
      }
    }
  }
`;

const Loader = ({ finishLoading }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <LoaderSection
      className={chivo.variable}
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1 }}
      // transition={{ duration: 1 }}
    >
      {/* <HeaderLoader>
        <div className="ipl-progress-indicator-head">
          <div className="first-indicator"></div>
          <div className="second-indicator"></div>
        </div>
      </HeaderLoader> */}
      <LogoContainer>
        {/* <div className="title">
          <h1 className="name">T</h1>
        </div>
        <SpinerLoader /> */}
        <motion.header className={chivo.className}>
          <motion.div
            className="first"
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.3, ease: "easeOut" }}
          >
            <Image
              src={imgDarvy}
              width={50}
              height={50}
              alt="loader darvy icon"
            />
          </motion.div>
          <motion.div
            className="figure"
            initial={{ opacity: 0, x: -240 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.3, ease: "easeOut" }}
          >
            |
          </motion.div>
          <motion.div
            className="second"
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.3, ease: "easeOut" }}
          >
            Darvy Web Developer
          </motion.div>
        </motion.header>
      </LogoContainer>
    </LoaderSection>
  );
};

export default Loader;
