import React, { useEffect, useState } from "react";
import styled from "styled-components";
import anime from "animejs";
// import anime from "animejs"
// import "./loader.css"

const LoaderSection = styled.div`
  /* position: fixed; */
  /* inset: 0 0 0 0; */
  width: 100vw;
  height: 100vh;
  /* background-color: #e1e5ef; */
  /* display: grid; */
  /* place-content: center; */

  position: absolute;
  inset: 0;
  z-index: 5;
  background-color: #252525;
  transform: translatex(0%);
  transition: transform 0.9s cubic-bezier(0.76, 0, 0.24, 1) 0.5s;
  will-change: transform;
`;

const LogoContainer = styled.div`
  /* margin: auto; */
  width: 100px;
  height: 100px;
  /* width: 100%; */
  /* height: 100%; */
  position: relative;
  /* display: grid; */
  /* place-content: center; */

  .title {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: grid;
    place-content: center;

    h1 {
      color: #ee2e31;
      /* background: yellow; */
      font-size: 3rem;
      font-weight: bolder;
    }
  }
`;

const SpinerLoader = styled.span`
  width: 100%;
  height: 100%;
  border: 4px solid #fff;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  box-sizing: border-box;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 5px solid;
    border-color: #ee2e31 transparent;
    animation: rotation 1s linear infinite;
  }

  @keyframes rotation {
    /* 0% {
      transform: translateX(0%)
    }
    100% {
      transform: translateX(100%)
    } */
    /* 0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    } */

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
  /* background-color: #f5f5f5; */
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
    /* height: 4px; */
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
  let myTimeline = anime.timeline({
    duration: 500,
  });

  myTimeline
    .add({
      targets: "#box1",
      translateY: 50,
    })
    .add({
      targets: "#box2",
      translateY: 100,
    })
    .add({
      targets: "#box3",
      translateY: 150,
    })
    .add({
      targets: "#box4",
      translateY: 200,
    })
    .add({
      targets: "#box5",
      translateY: 250,
    })
    .add({
      targets: "#box6",
      translateY: 300,
      duration: 6000,
    });

  // anime({
  //   targets: ".name",
  //   duration: 700,
  //   easing: "easeInOutQuart",
  //   // easing: 'ease',
  //   opacity: 1,
  // })

  return (
    <LoaderSection>
      {/* <HeaderLoader>
        <div className="ipl-progress-indicator-head">
          <div className="first-indicator"></div>
          <div className="second-indicator"></div>
        </div>
      </HeaderLoader>
asdfg
      <LogoContainer>
        <div className="title">
          <h1 className="name">T</h1>
        </div>
        <SpinerLoader />
      </LogoContainer> */}
      <div class="container">
        <div class="box" id="box1">
          1
        </div>
        <div class="box" id="box2">
          2
        </div>
        <div class="box" id="box3">
          3
        </div>
        <div class="box" id="box4">
          4
        </div>
        <div class="box" id="box5">
          5
        </div>
        <div class="box" id="box6">
          6
        </div>
      </div>
    </LoaderSection>
  );
};

export default Loader;
